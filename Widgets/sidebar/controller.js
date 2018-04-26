function($rootScope, $location) {
    var c = this;

    c.items = [];
    c.active = '';

    $rootScope.$on('ws.navigation.update', function ($event, items) {
        //console.log('ws.navigation.update', items);
        c.items = items;
    });

    $rootScope.$on('$locationChangeSuccess', locationChange);

  function locationChange($event) {
    var s = $location.search();
    // this should match the default page set in Main widget controller
        c.active = s.xpage || 'ws-wf-dashboard';
  }

  // check our location on load
  locationChange();
}