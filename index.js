require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const massive = require('massive');
const masterRoutes = require('./server/masterRoutes.js');
const session = require('express-session');
const passport = require('passport');
const  LocalStrategy = require('passport-local').Strategy;
// const config = require('./server/config.js');
const aws = require('aws-sdk');

aws.config.update({
   accessKeyId: process.env.ACCESS_KEY_ID,
   secretAccessKey: process.env.SECRET_ACCESS_KEY,
   region: process.env.REGION,
   signatureVersion: process.env.SIGNATURE_VERSION
})


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
// app.use(session(config.session));
// app.use(passport.initialize());
// app.use(passport.session());
app.use('/', express.static(__dirname + '/public'));
massive(process.env.DATABASE_URL).then(dbInstance=>{
  app.set('db', dbInstance)
});
masterRoutes(app);


app.get('/api/s3', function(req, res, next) {
   const s3 = new aws.S3()
   const s3Config = {
      Bucket: process.env.BUCKET_NAME,
      Key: req.query.file_name,
      Expires: 60,
      ContentType: req.query.file_type,
      ACL: 'public-read'
   }
   s3.getSignedUrl('putObject', s3Config, function(err, response) {
      if (err) {
         return next(err)
      }
      const data = {
         signed_request: response,
         url: `https://${process.env.BUCKET_NAME}.s3.amazonaws.com/${req.query.file_name}`
      }
      return res.status(200).json(data)
   })

})



app.listen(process.env.PORT, function(){
  console.log('Ground control to Major Tom');
});
