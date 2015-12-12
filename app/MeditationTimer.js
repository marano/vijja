'use strict';

var moment = require('moment');
var React = require('react-native');
var TimerMixin = require('react-timer-mixin');

var {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} = React;

var timer = React.createClass({
  mixins: [TimerMixin],
  getInitialState: function () {
    return {
      timerStartedAt: new Date(),
      timeCounter: '00:00'
    };
  },
  componentDidMount: function () {
    var lastFormattedRunningFor;
    this.setInterval(
      () => {
        var runningFor = moment(moment().diff(this.state.timerStartedAt)).format('mm:ss');
        if (runningFor != lastFormattedRunningFor) {
          this.setState({ timeCounter: runningFor });
          lastFormattedRunningFor = runningFor;
        }
      }, 500
    );
  },
  _startTimer: function () {
    this.setState({ timerStartedAt: moment() });
  },
  render: function () {
    return (
      <View style={styles.container}>
        <Text>{this.state.timeCounter}</Text>
        <TouchableHighlight>
          <Text>Pause</Text>
        </TouchableHighlight>
      </View>
    )
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

module.exports = timer;
