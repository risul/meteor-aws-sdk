AWS SDK for Meteor
===============

Get started quickly using AWS with the AWS SDK for JavaScript in Node.js. The SDK helps take the complexity out of coding by providing JavaScript objects for AWS services including Amazon S3, Amazon EC2, DynamoDB, and Amazon SWF. The single, downloadable package includes the AWS JavaScript Library and documentation.

Adding this package to your [Meteor](http://www.meteor.com/) application adds `AWS` object into the global scope on server, which you can then use [according to the documentation](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/frames.html).

##Install
```bach
meteor add risul:aws-sdk
```

## Usage
Add AWS accessKeyId & secretAccessKey to your settings.json or METEOR_SETTINGS env variable containing all settings as JSON

```json
{
    "AWS": {
        "accessKeyId": "*********",
        "secretAccessKey": "*********"
    }
}
```

Here is how you can list all objects in a S3 bucket

````javascript
s3 = new AWS.S3();

files = s3.listObjectsSync({
  Bucket: 'bucketname',
  Prefix: 'subdirectory/'
});

_.each(files.Contents, function (file) {
        console.log(file);
    });
````