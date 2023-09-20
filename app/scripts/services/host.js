'use strict';

angular.module('learnCodeApp')
  .service('Host', function (fbutil, Problems) {
    var self = this, _so;

    self.init = function(PIN) {
    	self.syncObject = fbutil.syncObject('sessions/' + PIN);
    	_so = self.syncObject;
    	return self.syncObject.$loaded();
    };

    self.setupSession = function() {
    	if(! _so.data.hasOwnProperty('problems')) {
    		_so.data.questions = Problems.getProblems();
    		_so.data.currentProblem = 0;
    	}
    	return _so.$save();
    };

    self.getCurrentProblem = function() {
        return _so.data.problems[_so.data.currentProblem];
    };

    self.setSessionState = function(state) {
        _so.data.state = state;
        return _so.$save();
    };

    self.nextProblem = function() {
        _so.data.state = 'preProblem';
        _so.data.currentProblem++;
        return _so.$save();
    }

  });