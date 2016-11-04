// Code goes here

var App = angular.module('App', []);

App.filter('myFormat', function() {
  return function(time, type) {

    var hr, min;

    time = parseInt(time);

    hr = time / 60; //hr       
    min = time % 60; //mins
    if (min < 10) {
      min = '0' + min;
    }

    if (hr > 12) {
      hr = hr - 12;
      min = min + 'pm';
    } else if (hr < 12) {
      min = min + 'am';
    } else if (hr = 12) {
      min = min + 'pm';

    }

    if (type == 'min') {
      return min;
    } else {
      return Math.floor(hr);
    }

    return min, hr;
  };
});

App.controller('mainController', function($scope) {

  $scope.minute = [];
  $scope.Minutes = function() {
    var count;

    for (count = 0; count <= 1425; count = count + 15) {

      $scope.minute.push(count);
    }
  }
  $scope.Minutes();

  $scope.clinicWorkingSchedules = [{
    workingDay: 'MONDAY',
    workingHours: []
  }, {
    workingDay: 'TUESDAY',
    workingHours: []
  }, {
    workingDay: 'WEDNESDAY',
    workingHours: []
  }, {
    workingDay: 'THURSDAY',
    workingHours: []
  }, {
    workingDay: 'FRIDAY',
    workingHours: []
  }, {
    workingDay: 'SATURDAY',
    workingHours: []
  }, {
    workingDay: 'SUNDAY',
    workingHours: []
  }];


  $scope.addRow = function(working_day_index) {


    $scope.clinicWorkingSchedules[working_day_index].workingHours.push({

      'fromTime': '',
      'toTime': ''

    });
  };


  $scope.removeRow = function(working_day_index, working_hours_index) {

    $scope.clinicWorkingSchedules[working_day_index].workingHours.splice(working_hours_index, 1);
  };

});