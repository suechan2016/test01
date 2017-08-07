'use strict';

// library requires

var request = require('supertest')
var protractorMatchers = require('jasmine-protractor-matchers');
var chai = require("chai");
var expect = chai.expect;


var app = "https://reqres.in/api";

describe("POST /login", function () {
    it("should login successfully with valid email and password", function () {
        request(app).post("/login").send({ email: "peter@klaven", password: "cityslicka" })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(function (res) {
                expect(res.body.token).eq("QpwL5tke4Pnpja7X");

            })
            .expect(200);
    });

    it("should fail without password", function (done) {
        request(app).post("/login").send({ email: "peter@klaven" })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(function (res) {
                expect(res.body.error).eq("Missing password");
            })
            .expect(400,done);

    });
});

