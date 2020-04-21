import { APIGatewayEvent, Context } from 'aws-lambda';
import awsLambdaMockContext from 'aws-lambda-mock-context';
import ping from './ping';

describe('/ping', () => {
  describe('success', () => {
    const mockEvent = {} as APIGatewayEvent;
    const mockContext: Context = awsLambdaMockContext();
    let response;

    beforeAll(async () => {
      response = await ping(mockEvent, mockContext);
    });

    it(`should always respond with a 200 status`, () => {
      expect(response.statusCode).toBe(200);
    });

    it(`should always respond with a 'Pong!'`, () => {
      const { message } = JSON.parse(response.body);
      expect(message).toEqual('Pong!');
    });
  });
});
