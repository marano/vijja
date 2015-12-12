'use strict';

var moment = require('moment');
var React = require('react-native');
var { Actions } = require('react-native-router-flux');
var TimerMixin = require('react-timer-mixin');
var config = require('./config')

var {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} = React;

module.exports = React.createClass({
  _start: function () {
    Actions.MeditationTimer();
  },
  render: function () {
    return (
      <View style={styles.container}>
        <View style={styles.alarmChooser}>
          <Text style={{fontSize: 30}}>
            Alarm
          </Text>
          <Text style={{fontSize: 30}} onPress={Actions.MeditationTimerLengthChooser}>
            { config.timerLength || 'No' }
          </Text>
        </View>

        <TouchableHighlight onPress={this._start}>
          <Text>
            Start
          </Text>
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
    backgroundColor: '#F5FCFF'
  },
  alarmChooser: {
    flexDirection: 'row'
  }
});
