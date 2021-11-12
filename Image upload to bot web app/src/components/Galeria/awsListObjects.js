/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
/* eslint-disable consistent-return */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
import { config, S3 } from 'aws-sdk';

require('dotenv').config();

config.update({ region: 'us-east-2' });

const ACCESS_KEY_ID = 'AKIAX23VRQJU6G5HKBHL';
const SECRET_ACCESS_KEY = '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';
const BUCKET_NAME = 'upperphotos';
const REGION = 'us-east-2';

const s3 = new S3({
  accessKeyId: ACCESS_KEY_ID,
  secretAccessKey: SECRET_ACCESS_KEY,
  Bucket: BUCKET_NAME,
});

const params = {
  Bucket: 'upperphotos',
  Prefix: 'Upper_data_base/',
};

export async function readFiles() {
  try {
    const s3Data = await s3Files();
    return s3Data;
  } catch (e) {
    console.log(`Faiou: ${e}`);
  }
}

const arrayFilesS3 = [];
const s3Files = () => {
  return new Promise(function (resolve, reject) {
    s3.listObjectsV2(params, function (err, data) {
      if (err) reject(err);

      data.Contents.forEach(function (obj) {
        arrayFilesS3.push(obj.Key);

        resolve(arrayFilesS3);
      });
    });
  });
};
