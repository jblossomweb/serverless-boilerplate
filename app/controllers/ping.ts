import { APIGatewayEvent, Context } from 'aws-lambda';

export default async (event: APIGatewayEvent, context: Context) => ({
  statusCode: 200,
  body: JSON.stringify({
    message: 'Pong!',
  }),
});
