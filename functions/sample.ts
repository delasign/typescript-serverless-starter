"use strict";
// MARK: Types
// MARK: Modules
import { GraphQLClient, gql } from "graphql-request";
// MARK: Functionality
import { FailedResponse, SuccessfulResponse } from "utils/response/index";
import { LogInProgress, LogSuccess } from "utils/logs";
// MARK: Errors
// MARK: Handler
// Identifier
const identifier: string = "GraphQL Query Sample";
// Function
const handler = async (event: any, context: any, callback: any) => {
  // MARK: Variables
  // Setup your GraphQL Client to work with an endpoint and token.
  const endpoint: string = "YOUR_GRAPHQL_API";
  const token: string = "Bearer YOUR_GRAPHQL_TOKEN";

  const graphQLClient: GraphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: token,
    },
  });
  // Create your query
  const query: string = gql`
    query GetAllSubscribersQuery {
      entries {
        ... on subscribers_default_Entry {
          email
          subscriberName
          subscribed
        }
      }
    }
  `;
  // Make the request
  await graphQLClient
    .request(query)
    // Handle the response
    .then((data) => {
      const json = JSON.stringify(data.entries, undefined, 2);

      // MARK: Algorithm
      LogInProgress(identifier, json);
      // i.e. Check that the required parameters are in place.
      // For a succesful response
      return SuccessfulResponse(callback, identifier, json);
    })
    // Handle the error
    .catch((error) => {
      return FailedResponse(callback, identifier, error);
    });
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
