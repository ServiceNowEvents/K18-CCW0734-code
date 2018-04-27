function($scope) {
    /* widget controller */
    var c = this;

    $scope.$emit('ws.header.display', false);

    var items = [];
    items.push({
      url: '#',
      title: 'Dashboard option 1'
    });
    items.push({
      url: '#',
      title: 'Dashboard option 2'
    });

    $scope.$emit('ws.navigation.update', items);
}