'use strict'

require('dotenv').config()
const fs = require('fs');

const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-2'});

const ACCESS_KEY_ID = process.env.aws_access_key_id;
const SECRET_ACCESS_KEY = process.env.aws_secret_access_key;
const BUCKET_NAME = process.env.aws_bucket_name;
const REGION = process.env.aws_bucket_region;

const s3 = new AWS.S3({
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY,
    Bucket: BUCKET_NAME
});
 

async function uploadFile(file) {
    const fileStream = fs.createReadStream(file.path);
 
    const params = {
        Bucket: BUCKET_NAME,
        Body: fileStream,
        Key: `Upper_data_base/${file.originalname}`,
        ACL: 'public-read'
    };
 
    return s3.upload(params).promise();
}

exports.uploadFile = uploadFile;
 
