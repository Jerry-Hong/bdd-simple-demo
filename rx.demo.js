const GET_ENDPOINT = 'GET_ENDPOINT';
const GET_ENDPOINT_COMPLETE = 'GET_ENDPOINT_COMPLETE';
const getEndpoint = () => ({
  type: GET_ENDPOINT,
});
const getEndpointComplete = payload => ({
  type: GET_ENDPOINT_COMPLETE,
  payload,
});
const getEndpointEpic = (action$, store) => action$.ofType(GET_ENDPOINT)
  .mergeMap(action => Observable
    .fromPromise(new Promise(resolve => new Fingerprint2().get(resolve)))
    .map(endpointId => getEndpointComplete(endpointId)));

const GET_TOKEN = 'GET_TOKEN';
const GET_TOKEN_COMPLETE = 'GET_TOKEN_COMPLETE';
const getToken = () => ({
  type: GET_TOKEN,
});
const getTokenComplete = payload => ({
  type: GET_TOKEN_COMPLETE,
  payload,
});
const getTokenEpic = (action$, store) => action$.ofType(GET_TOKEN)
  .mergeMap(action => Observable.ajax({
    crossDomain: true,
    url: 'https://some.domain.com/token',
    method: 'post',
    body: {
      identity: store.getState().user.model.pid,
      endpointId: store.getState().notification.endpointId,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .map(response => response.response)
    .map(response => getTokenComplete(response)));

const CONNECT_SERVER = 'CONNECT_SERVER';
const CONNECT_SERVER_COMPLETE = 'CONNECT_SERVER_COMPLETE';
const connectServer = () => ({
  type: CONNECT_TWILIO,
});
const connectServerEpic = (action$, store) => action$.ofType(CONNECT_SERVER)
  .map(() => getEndpoint())
  .do(store.dispatch)
  .mergeMap(() => action$.ofType(GET_ENDPOINT_COMPLETE))
  .map(() => getToken());
