function($location) {
  var c = this;
  var s = $location.search();
  var redirect = false;

  if (!s.xpage) {
    s.xpage = 'ws-cp-dashboard'; // this is our default page
    s.spa = 1; // let Service Portal know we are in a SPA
    $location.search(s).replace();
  }
}