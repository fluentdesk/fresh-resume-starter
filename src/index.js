/**
Module definition for fresh-resume-starter.
@module fresh-resume-starter
*/
(function() {

  // Support client-side usage of:
  //
  //   require('fresh-resume-starter').fresh
  //   require('fresh-resume-starter').jrs
  //
  module.exports = {
    fresh: require('./starter-resume.fresh.json'),
    jrs: require('./starter-resume.jrs.json')
  };

}());
