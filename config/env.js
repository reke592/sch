/*
* This file contains all the environment variable declaraions.
*/
const env = require("../lib/env");

const server = env.create("server");
server.add("db", "smpcs");
server.add("mode", "debug");
server.add("port", 8000);
server.add("static_dir", "public");
server.lock();												// lock() to avoid future alteration