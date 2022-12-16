"use strict";
// MARK: Types
// MARK: Modules
// MARK: Functionality
import { FailedResponse, SuccesfullResponse } from "utils/response/index";
import { LogInProgress, LogSuccess } from "utils/logs";
// MARK: Errors
// MARK: Handler
// Identifier
const identifier: string = "Hello World";
// Function
const handler = (event: any, context: any, callback: any) => {
  // MARK: Variables
  // MARK: Algorithm
  LogInProgress(identifier, process.env.SAMPLE_STRING);
  // i.e. Check that the required parameters are in place.
  // For a succesful response
  return SuccesfullResponse(callback, identifier);
  // For a failed response
  // return FailedResponse(callback, identifier, "Your Error Here");
};

// MARK: Support Functionality
/* 
  Use this area for functions that reduce 
  the cyclomatic complexity of the handler

  i.e. A send email function that takes in a contact form,
  it calls a module and based on the response completes the handler.
  const SendEmails = (contact: ContactForm, callback: any) => {
  SendContactEmails(contact, (error, response) => {
    if (error === null) {
      return SuccesfullResponse(callback, identifier);
    } else {
      return FailedResponse(callback, identifier, error);
    }
  });
};
*/
// MARK: Export Module
module.exports.handler = handler;
