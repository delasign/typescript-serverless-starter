"use strict";
// MARK: Types
// MARK: Modules
import sample from "modules/sample";
// MARK: Functionality
import { FailedResponse, SuccesfullResponse } from "utils/response/index";
// MARK: Handler
// MARK: Errors
// Identifier
const identifier: string = "Hello World";
// Function
const handler = (event: any, context: any, callback: any) => {
  sample("HELLO WORLD");
  // MARK: Variables
  // MARK: Algorithm

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
module.exports.hello = handler;
