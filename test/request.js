'use strict';

// library requires

var request = require('supertest')
var protractorMatchers = require('jasmine-protractor-matchers');
var chai = require ("chai");
var expect = chai.expect;


var app = "https://reqres.in/api";


request(app)
  .get("api/users")
  .expect('Content-Type', /json/)
  .expect('Content-Length', '15')
  .expect(200, function (err, res) {
    if (err) return done(err);

  });

  describe("GET /user", function () {
  it("should work", function () {
     return request(app).get("/users").expect(200);
  });

  it("should get first name", function (done) {
  
      request(app).get("/users").expect(function (res){
      expect(res.body, 'data').all.keys('id', 'first_name', 'last_name', 'avatar');
       
      
      // res.body.id="1";
        // res.body.first_name="george", done;
        
    });
     
  });
});



