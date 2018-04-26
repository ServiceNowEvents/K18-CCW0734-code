function($rootScope, $scope) {
    var c = this;
    c.breadcrumbs = [];
    c.display = false;

    $rootScope.$on('ws.header.display', updateDisplay);

    $rootScope.$on('ws.breadcrumbs.update', updateBreadcrumbs);

    function updateDisplay($event, show) {
        c.display = !!show;
    }

    function updateBreadcrumbs($event, breadcrumbs) {
        c.breadcrumbs = breadcrumbs;
        c.display = true;
    }
}