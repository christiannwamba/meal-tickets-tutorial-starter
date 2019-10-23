/*
TODO - 1 Define all imports
TODO - 2 Define query to fetch all attendees
TODO - 3 Call the useQuery hook by passing the query string as an argument
TODO - 4 Setup search functionality using useState
TODO - 5 Display logout button when user is authorized
TODO - 6 Define subscription query for meal tickets
TODO - 7 Define state variable to store list of attendees returned
TODO - 8 Define function to update the list when data is returned from the subscription
*/

import React, { useState, useContext, useEffect } from 'react';

// TODO - 1 declare imports
import { Route } from 'react-router-dom';
import { AuthContext } from '@8base/react-sdk';
import { withApollo } from 'react-apollo';

import { useQuery, useSubscription } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Index from './pages/Index';
import Generate from './pages/Generate';
import Tickets from './pages/Tickets';

import Auth from './pages/Auth';
import './App.css';

const GET_ATTENDEES = ``;

const ATTENDEES_SUB = ``;

function App() {
  const RouterApp = withApollo(AppRouter);
  return (
    <section className="wrapper">
      <RouterApp></RouterApp>
    </section>
  );
}

function AppRouter({ client }) {
  return (
    <div>
      <>
        <Route path="/" exact component={Index} />
        <Route path="/auth/callback" component={Auth} />
        <Route path="/generate/" component={() => <Generate />} />
        <Route path="/tickets/" component={() => <Tickets />} />
      </>
    </div>
  );
}

const updateAttendeeRecord = () => {};

export default App;
