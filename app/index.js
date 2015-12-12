'use strict';

var React = require('react-native');
var { Router, Route } = require('react-native-router-flux');
var NewMeditationSession = require('./NewMeditationSession');
var MeditationTimer = require('./MeditationTimer');
var MeditationTimerLengthChooser = require('./MeditationTimerLengthChooser');

var vijja = React.createClass({
  render: function() {
    return (
      <Router hideNavBar={true}>
        <Route name="NewMeditationSession" component={NewMeditationSession} initial={true} />
        <Route name="MeditationTimer" component={MeditationTimer} />
        <Route name="MeditationTimerLengthChooser" component={MeditationTimerLengthChooser} />
      </Router>
    );
  }
});

module.exports = vijja;
