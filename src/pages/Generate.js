import React from 'react';

// TODO - 1 Add imports
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

import { GenerateButton, BackButton } from '../components/Buttons';
import Ticket from '../components/Ticket';

// TODO - 2 Define generate tickets query
const GENERATE_TICKET = `
  
`;

// TODO - 5 Define click handler for generating tickets
const onGenerateClick = () => {};

export default function Generate({ attendees }) {
  //TODO - 3 Add useMutation hook

  return (
    <>
      <BackButton />
      <div className="search-wrapper-wp">
        <div className="search-wrapper">
          <a href="#search">
            <svg className="search">
              <use href="images/icons.svg#search"></use>
            </svg>
          </a>
          <input id="search" type="search" />
        </div>
      </div>
      <div className="main-wrapper">
        <h2 className="page-title">SEARCH RESULT</h2>
        <ul className="search-result">
          {/* Loop through filtered attendees list*/}
          <Ticket key={''} attendee={{}}>
            <GenerateButton
            // TODO 4 - Add onClick event handler for generating the ticket
            ></GenerateButton>
          </Ticket>
        </ul>
      </div>
    </>
  );
}
