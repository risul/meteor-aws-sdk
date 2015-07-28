AWS SDK for Meteor
===============

Get started quickly using AWS with the AWS SDK for JavaScript in Node.js. The SDK helps take the complexity out of coding by providing JavaScript objects for AWS services including Amazon S3, Amazon EC2, DynamoDB, and Amazon SWF. The single, downloadable package includes the AWS JavaScript Library and documentation.

Adding this package to your [Meteor](http://www.meteor.com/) application adds `AWS` object into the global scope on server, which you can then use [according to the documentation](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/frames.html).

##Install
```bach
meteor add risul:aws-sdk
```

## Usage
Add AWS accessKeyId & secretAccessKey to your settings.json or `METEOR_SETTINGS` env variable containing all settings as JSON

```json
{
    "AWS": {
        "accessKeyId": "YOUR_AWS_ACCESS_KEY",
        "secretAccessKey": "YOUR_AWS_SECRET_ACCESS_KEY"
    }
}
```

You can also use environment varialbes: `AWS_ACCESS_KEY` & `AWS_SECRET_KEY` instead of `METEOR_SETTINGS`.

Here is how you can list all objects in a S3 bucket (on server)

````javascript
s3 = new AWS.S3();

var params = {
    Bucket: 'myBucket'
};

s3.listObjects(params, function(err, data){
    var bucketContents = data.Contents;
    for (var i = 0; i < bucketContents.length; i++){
        var urlParams = {Bucket: params.Bucket, Key: bucketContents[i].Key};
        s3.getSignedUrl('getObject',urlParams, function(err, url){
            console.log(url);
        });
    }
});
````