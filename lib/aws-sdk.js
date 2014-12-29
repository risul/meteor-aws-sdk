AWS = Npm.require('aws-sdk');

if (Meteor.settings.AWS) {
    AWS.config.update({
        accessKeyId: Meteor.settings.AWS.accessKeyId,
        secretAccessKey: Meteor.settings.AWS.secretAccessKey
    });
} else throw new Meteor.Error(404, 'AWS accessKeyId & secretAccessKey is required in settings');