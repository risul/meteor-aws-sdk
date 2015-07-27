Package.describe({
    name: 'risul:aws-sdk',
    summary: 'AWS SDK for NodeJS - packaged for Meteor',
    version: '1.0.3',
    git: 'https://github.com/risul/meteor-aws-sdk'
});

Npm.depends({
    "aws-sdk": '2.1.40'
});

Package.on_use(function (api) {
    api.versionsFrom('METEOR@1.0');
    api.export('AWS');
    api.add_files('lib/aws-sdk.js', 'server');
});