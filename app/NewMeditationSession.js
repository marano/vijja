'use strict';

var React = require('react-native');
var MeditationTimerSetup = require('./MeditationTimerSetup');

var NewMeditationSession = React.createClass({
  render: function () {
    return (
      <MeditationTimerSetup />
    );
  },
});

module.exports = NewMeditationSession;
