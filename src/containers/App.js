import React, { Component } from 'react';  
import { combineReducers } from 'redux';  
import { Provider } from 'react-redux';

import { createStore, renderDevTools } from '../utils/devTools';

import FriendListApp from './FriendListApp';  
import * as reducers from '../reducers';
import {addFriend, deleteFriend, starFriend} from '../actions/FriendsActions';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

store.dispatch(addFriend('Barack Obama'));

store.dispatch(deleteFriend(1));

store.dispatch(starFriend(4));

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          {() => <FriendListApp />}
        </Provider>
      </div>
    );
  }
}