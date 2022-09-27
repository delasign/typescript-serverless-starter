"use strict";
import sample from 'modules/sample';

module.exports.hello = async (event: any) => {
  sample("HELLO WORLD")
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
