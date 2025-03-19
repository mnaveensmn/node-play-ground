"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
// Define a namespace for generating UUID v5
var NAMESPACE = uuid_1.v5.URL;
// Generate UUID v5 based on a name
var name = "example.com";
var uuid = (0, uuid_1.v5)(name, NAMESPACE);
console.log("Generated UUID v5: ".concat(uuid));
