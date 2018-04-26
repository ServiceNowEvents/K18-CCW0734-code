function wscpSessionData() {
  var service = {

    data: {},

    set: function (data) {
      for (var key in data) {
        service.data[key] = data[key];
      }
      $rootScope.$broadcast('ws-session-data-update', data);
    },

    get: function (key) {
      return service.data[key];
    }

  };

  return service;
}