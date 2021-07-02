'use strict'

require('dotenv').config()

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
 

const params = {
    Bucket: BUCKET_NAME,
    Prefix: 'Upper_data_base/'
}; 

module.exports.readFiles = async function(){
    
    try{
        const s3Data = await s3Files();
        return s3Data;
    }catch(e){
        console.log(`Faiou: ${e}`);
    }

}
    

const arrayFilesS3 = [];
const s3Files = () =>{

    return new Promise(function (resolve, reject){

        s3.listObjectsV2(params, function (err, data) {
            if (err)
                reject(err);

            data.Contents.forEach(function (obj) {
                arrayFilesS3.push(obj.Key);

                resolve(arrayFilesS3);

            });

        });  

    });
}
  











/* async function readFile() {
    try {
        const s3Data = await readTxtFile();
        console.log(s3Data);
    } catch (err) {
        console.log('Error:', err);
    }
}

const readTxtFile = () => {
    return new Promise(function (resolve, reject) {
        
        s3.getObject(params, function (err, data) {
            if (err) reject(err.message);

            //var data = Buffer.from(data.Body).toString('utf8');
            resolve(data);
        });

    });
}

readFile(); */

/* s3.getObject(params, function(err, data) {
    if (err) {
        throw err
    }
   console.log(data);
}) */