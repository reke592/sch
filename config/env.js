/*
* This file contains all the environment variable declaraions.
*/
var env = require("../lib/env");

const server = env.create("server");
server.add("db", "smpcs");
server.add("mode", "debug");
server.add("port", 8000);
server.lock();												// lock() to avoid future alteration