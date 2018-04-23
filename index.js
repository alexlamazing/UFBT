// import { AppRegistry } from 'react-native';
// import App from './src/App';
//
// AppRegistry.registerComponent('UFBT', () => App);

import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './src/reducers';
import Router from './src/Router';
import rootSaga from './src/sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

const App = () => (
  <Provider store={store}>
    <View style={ styles.container }>
      <Router />
    </View>
  </Provider>
);

const styles = {
  container: {
    flex: 1,
  },
};

sagaMiddleware.run(rootSaga);
AppRegistry.registerComponent('UFBT', () => App);
