Package.describe({
    name: 'risul:chance',
    summary: 'AWS SDK for NodeJS - packaged for Meteor',
    version: '1.0.0',
    git: 'https://github.com/risul/meteor-aws-sdk'
});

Npm.depends({
    "aws-sdk": '2.1.4'
});

Package.on_use(function (api) {
    api.versionsFrom('METEOR@0.9.2.2');
    api.export('AWS');
    api.add_files('lib/aws-sdk.js', 'server');
});