function($scope) {
    /* widget controller */
    var c = this;

    $scope.$emit('ws.header.display', false);

    var items = [];
    items.push({
      url: '/user-profile', // Out of box widget
      title: 'User profile'
    });
    items.push({
      url: '/widget-weather', // Out of box widget
      title: 'Weather'
    });

    $scope.$emit('ws.navigation.update', items);
}