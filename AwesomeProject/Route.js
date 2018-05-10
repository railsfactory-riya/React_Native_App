import React, {Component} from 'react';
import {Actions, Scene} from 'react-native-router-flux';

import Home from './components/home';
import Trending from './components/trending';
import Subscriptions from './components/subscriptions';
import Library from './components/library';
import SignIn from './components/account/signIn';
import SignUp from './components/account/signUp';


const scenes = Actions.create(
  <Scene key="root" hideNavBar={true}>
    <Scene key="home" component={Home} initial={true}/>
    <Scene key="trending" component={Trending} title="Trending"/>
    <Scene key="subscriptions" component={Subscriptions} title="Subscriptions"/>
    <Scene key="library" component={Library} title="Library"/>
    <Scene key="signIn" component={SignIn} title="SignIn"/>
    <Scene key="signUp" component={SignUp} title="SignUp"/>
  </Scene>
);


export default scenes;
