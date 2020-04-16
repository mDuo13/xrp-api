import RippleApiService from './api-v3/services/ripple-api';
import { Server } from './server';
import { getConfig } from './config';

const config = getConfig();
const rippleApiService = new RippleApiService({server: config.server});
console.log('Connecting to:', config.server);

const server = new Server({rippleApiService});
server.listen().then((port) => {
  console.log('Listening on port:', port);
});
