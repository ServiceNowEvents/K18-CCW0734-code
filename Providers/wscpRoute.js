/**
 * Custom route service provider for ServicePortal.
 * Simply include in a controller for it to work.
 *
 */
function wscpRoute($rootScope, $location) {

  var service = {

    current: {},
    defaultRoute: null,
    routeConfig: [],
    routeParams: {},

    getParams: function getParams() {
      return service.routeParams;
    },

    otherwise: function (route) {
      service.defaultRoute = route;
    },

    update: function update(path) {
      function match(config, path) {
        var m = config.matcher.exec(path);
        if (!m) return false;
        for (var i = 0; i < config.groups.length; i++) {
          service.routeParams[config.groups[i]] = m[i + 1];
        }
        return true;
      }

      service.current = null;

      path = path || $location.hash();

      for (var p in service.routeParams) {
        delete service.routeParams[p];
      }

      var c;
      for (var i = 0; i < service.routeConfig.length; i++) {
        c = service.routeConfig[i];
        if (match(c, path)) {
          service.current = c.route;
      service.current.params = service.routeParams;
          break;
        }
      }

      if (!service.current) {
        service.current = service.defaultRoute;
      }

      if (service.current.redirectTo) {
        $location.hash(service.current.redirectTo);
      }

    $rootScope.$broadcast('ws-route-update', path, service.current);
    },

    when: function when(path, route) {
      var parts = path.split('/'),
          matcher = '^',
          groups = [],
          str,
          i;

      for (i = 0; i < parts.length; i++) {
        if (i === 0 && parts[i] === '') continue;
        matcher += '/';
        if (parts[i][0] == ':') {
          matcher += '([^/]+)';
          groups.push(parts[i].substr(1));
        } else {
          matcher += parts[i];
        }
      }
      matcher += '/?$';

      service.routeConfig.push({
        matcher: new RegExp(matcher, 'i'),
        groups: groups,
        route: route || {}
      });

      return service;
    }
  };

  $rootScope.$on('$locationChangeSuccess', function (e) {
    service.update();
  });

  return service;
}