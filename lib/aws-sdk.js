AWS = Npm.require('aws-sdk');

var conf = {
    accessKeyId: process.env.AWS_ACCESS_KEY || Meteor.settings.AWS.accessKeyId,
    secretAccessKey: process.env.AWS_SECRET_KEY || Meteor.settings.AWS.accessKeyId
};

if (conf.accessKeyId && conf.secretAccessKey) {
    AWS.config.update({
        accessKeyId: conf.accessKeyId,
        secretAccessKey: conf.secretAccessKe
    });
} 

else {
    throw new Meteor.Error(404, 'Please add your AWS access key & secret access key!');
}