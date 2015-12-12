'use strict';

var moment = require('moment');
var React = require('react-native');
var { Actions } = require('react-native-router-flux');
var TimerMixin = require('react-timer-mixin');


var {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} = React;

var NavigationTimerSetup = React.createClass({
  _start: function () {
    Actions.CountdownMeditationTimer();
  },
  render: function () {
    return (
      <View style={styles.container}>
        <Text>
          How long?
        </Text>
        <Text>
          30m
        </Text>
        <TouchableHighlight onPress={this._start}>
          <Text>Start</Text>
        </TouchableHighlight>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

module.exports = NavigationTimerSetup;
