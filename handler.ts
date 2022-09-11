"use strict";
const sample = require('modules/sample');


module.exports.hello = async (event) => {
  sample.test()
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v3.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};
