angular.module('test', [])
.directive('scoreDirective', function(apiService) {
  return {
    restrict: 'E',
    template: `<div class="" ng-class="{good: score >= 7, warning: score < 7 && score > 4, bad: score < 4}">
                {{score}}/10
              </div>`,
    controller: function($scope) {
      apiService.getScore()
      .then(function(data) {
        console.log(data)
        $scope.score = data.score
        $scope.$apply()
      })
    }
  }
})

.service('apiService', function() {
  this.getScore = function() {
    return new Promise(function(resolve, reject) {
      resolve({score: 3})
    })
  }
})