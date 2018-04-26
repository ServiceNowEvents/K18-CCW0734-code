function wscpHref() {
  return({
    link: link,
    restrict: "A"
  });

  function link( scope, element, attributes ) {
    attributes.$observe("wscpHref", configureHref);
    function configureHref() {
      var href = (attributes.wscpHref || "");
      if (href && href.indexOf('#') < 0) {
        var parts = href.split('/');
        var keys = ['xpage', 'xid', 'xview'];
        var search = [];
        if (parts[0] === '') parts.shift();
        for (var i = 0; i < parts.length; i++) {
          search.push(keys[i] + '=' + parts[i]);
        }
        search.push('spa=1');
        attributes.$set( "href", '?' + search.join('&') );
      }
    }
  }
}