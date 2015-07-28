AWS = Npm.require('aws-sdk');

//checks for AWS keys are in env variables
var accessKey = process.env.AWS_ACCESS_KEY_ID;
var secretKey = process.env.AWS_SECRET_ACCESS_KEY;

// if not found, check settings
if (!accessKey || !secretKey) {
    var accessKeyConf = Meteor.settings.AWS.accessKeyId;
    var secretKeyConf = Meteor.settings.AWS.secretAccessKey;
    
    // found in settings.. creating env variables
    if (accessKeyConf && secretKeyConf) {
        if (accessKeyConf) process.env.AWS_ACCESS_KEY_ID = accessKeyConf;
        if (accessKeyConf) process.env.AWS_SECRET_ACCESS_KEY = accessKeyConf;
    }
    
    else {
        // either access key or secret key not found
        throw new Meteor.Error(404, 'Please add your AWS access key & secret access key!');
    }
}