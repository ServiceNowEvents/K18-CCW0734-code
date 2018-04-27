(function() {
    data.dash_ci_count = (function () {
      var ga = new GlideAggregate('cmdb_ci');
      ga.addAggregate('COUNT');
      ga.query();
      return ga.next() ? ga.getAggregate('COUNT') : 0;
    })();

    data.dash_app_count = (function () {
      var ga = new GlideAggregate('cmdb_ci_appl');
      ga.addAggregate('COUNT');
      ga.query();
      return ga.next() ? ga.getAggregate('COUNT') : 0;
    })();

    data.dash_service_count = (function () {
      var ga = new GlideAggregate('cmdb_ci_service');
      ga.addAggregate('COUNT');
      ga.query();
      return ga.next() ? ga.getAggregate('COUNT') : 0;
    })();

    data.dash_hardware_count = (function () {
      var ga = new GlideAggregate('cmdb_ci_hardware');
      ga.addAggregate('COUNT');
      ga.query();
      return ga.next() ? ga.getAggregate('COUNT') : 0;
    })();
})();