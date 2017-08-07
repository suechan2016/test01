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


describe("GET /user", function () {
  it("should work", function () {
    return request(app).get("/users").expect(200);
  })

  it("should return correct keys in user list", function (done) {
    request(app).get("/users?page=2")
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .expect(function (res) {
        expect(res.body.page).eq("2");
        expect(res.body.per_page).eq(3);
        res.body.data.forEach(function (element) {
          expect(element).to.have.property('id');
          expect(element).to.have.property('first_name');
          expect(element).to.have.property('last_name');
          expect(element).to.have.property('avatar');

        });

      }).expect(200, done);
  })

  it("should get correct data from a specific user ", function (done) {

    request(app).get("/users/2").expect(function (res) {
      expect(res.body.data.id).eq(2);
      expect(res.body.data.first_name).eq("lucille");
      expect(res.body.data.last_name).eq("bluth");
      expect(res.body.data.avatar).eq("https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg");

    })
      .expect(200, done);

  })



});



