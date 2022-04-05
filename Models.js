// const mysql = require("mysql");
// const express = require("express");
// const app = express();
//
// const con = require("./databaseConnection.js");
//
// module.exports = class Models {
//
//     constructor() {}
//
//     static insert(tableName, jsonObject_) {
//         return new Promise(function(resolve, reject) {
//             con.query("INSERT INTO " + tableName + " SET ?", jsonObject_, function(
//                 err,
//                 result
//             ) {
//                 if (err) {
//                     reject(err);
//                 } else {
//                     var returned_value_ = {
//                         success: true,
//                         message: "Record inserted successfully.",
//                         recordId: result.insertId
//                     };
//                     resolve(returned_value_);
//                 }
//             });
//         });
//     }
//
//     static selectAll(tableName) {
//         return new Promise(function(resolve, reject) {
//             con.query("SELECT * FROM " + tableName + ";", function(
//                 err,
//                 result,
//                 fields
//             ) {
//                 if (err) {
//                     reject(err);
//                 } else {
//                     var returned_value_ = result;
//                     resolve(returned_value_);
//                 }
//             });
//         });
//     }
//
// }