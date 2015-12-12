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
          <Text style={{fontSize: 40, paddingTop: 5}}>
            Alarm
          </Text>
          <Text
            style={{
              marginLeft: 10,
              fontSize: 40,
              borderWidth: 2,
              borderRadius: 30,
              textAlign: 'center',
              paddingTop: 5,
              paddingLeft: 2,
              paddingRight: 2,
              width: 60,
              height: 60
            }}
            onPress={Actions.MeditationTimerLengthChooser}>
            { config.timerLength || 'No' }
          </Text>
        </View>

        <Text style={{fontSize: 40, marginTop: 20}} onPress={this._start}>
          Start
        </Text>
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
