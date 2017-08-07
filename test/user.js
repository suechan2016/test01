'use strict';

// library requires

var request = require('supertest')
var protractorMatchers = require('jasmine-protractor-matchers');
var chai = require("chai");
var expect = chai.expect;


var app = "https://reqres.in/api";
var LoginToken = null;


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

  it("should return correct keys", function () {
    request(app).get("users").expect(function (res) {
      expect(res.body).all.keys('id', 'first_name', 'last_name', 'avatar');
    })

  });


  it("should get correct keys from user list", function () {

    request(app).get("users?page=2").expect(function (res) {
      //TODO

    })
      .expect(200);

  })



});



