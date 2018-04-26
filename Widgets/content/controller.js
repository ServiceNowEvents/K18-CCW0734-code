function($rootScope, $location, $timeout) {
    var c = this;
    c.loaded = false;
    c.no_header = false;

    function update() {
        var s = $location.search(),
            load = true;

        c.loaded = true;

        // if only the view changes then ignore
        if (c.page == s.xpage && c.id == s.xid && c.view != s.xview) {
            load = false;
        }

        c.page = s.xpage;
        c.id   = s.xid;
        c.view = s.xview;

        if (load) {
            // reset the widget
            c.data.childWidget = null;
            c.server.get(s).then(function (response) {
                c.data = response.data;
            });
        }
    }

    $rootScope.$on('$locationChangeSuccess', update);

    $rootScope.$on('ws.header.display', function ($event, show) {
        c.no_header = !show;
    });

    $timeout(function () {
        if (!c.loaded) update();
    }, 1);
}