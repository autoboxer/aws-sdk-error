<!--
title: 'AWS NodeJS Example'
description: 'This template demonstrates how to deploy a NodeJS function running on AWS Lambda using the traditional Serverless Framework.'
layout: Doc
framework: v3
platform: AWS
language: nodeJS
priority: 1
authorLink: 'https://github.com/serverless'
authorName: 'Serverless, inc.'
authorAvatar: 'https://avatars1.githubusercontent.com/u/13742415?s=200&v=4'
-->


# Usage

`npm install`

`npm run offline`

# Sample Error

```bash
✖ in ./node_modules/@aws-sdk/client-sns/dist-es/index.js 1:0-22
    Module not found: Error: Can't resolve './SNS' in '/Users/userName/development/aws-sdk-error/node_modules/@aws-sdk/client-sns/dist-es'
    resolve './SNS' in '/Users/userName/development/aws-sdk-error/node_modules/@aws-sdk/client-sns/dist-es'
      using description file: /Users/userName/development/aws-sdk-error/node_modules/@aws-sdk/client-sns/package.json (relative path: ./dist-es)
        using description file: /Users/userName/development/aws-sdk-error/node_modules/@aws-sdk/client-sns/package.json (relative path: ./dist-es/SNS)
          no extension
            /Users/userName/development/aws-sdk-error/node_modules/@aws-sdk/client-sns/dist-es/SNS doesn't exist
          .ts
            /Users/userName/development/aws-sdk-error/node_modules/@aws-sdk/client-sns/dist-es/SNS.ts doesn't exist
          tsx
            /Users/userName/development/aws-sdk-error/node_modules/@aws-sdk/client-sns/dist-es/SNStsx doesn't exist
          as directory
            /Users/userName/development/aws-sdk-error/node_modules/@aws-sdk/client-sns/dist-es/SNS doesn't exist
```