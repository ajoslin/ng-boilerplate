angular.module( 'ngBoilerplate', [
  'app-templates',
  'component-templates',
  'ngBoilerplate.home',
  'ngBoilerplate.about',
  'activeIfCurrent'
])

.config( function myAppConfig ( $routeProvider ) {
  $routeProvider.otherwise({ redirectTo: '/home' });
})

.run([ 'titleService', function run ( titleService ) {
  titleService.setSuffix( ' | ngBoilerplate' );
}])

.controller( 'AppCtrl', [ '$scope', '$location', function AppCtrl ( $scope, $location ) {
}])

;

