import { SNSClient, PublishCommand } from '@aws-sdk/client-sns';

export const showError = async () => {

  const client = new SNSClient( { region: 'us-west-1' } );

  const params = {
    Message: 'some text',
    TopicArn: 'arn:aws:sns:us-east-1:111111111111:someOtherTopic'
  };

  try {

    await client.send( new PublishCommand( params )); // v3

  } catch ( error ) {

  }
};
