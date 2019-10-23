import React from 'react';

// TODO - 1 define imports

import Ticket from '../components/Ticket';
import { InvalidateButton, BackButton } from '../components/Buttons';

// TODO - 2 define mutation query for invalidating tickets
const INVALIDATE_TICKET = ``;

const getValidTicket = (tickets) => {
  return tickets.find((ticket) => ticket.valid);
};

// TODO define onclick event handler for invalidating tickets
const onInvalidateClick = () => {};

export default function Tickets({ attendees }) {
  // TODO - 3 call the useMutation hook with mutation string as an argument

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
          {/* Loop through attendees with valid tickets */}
          <Ticket attendee={{}} key={''}>
            <InvalidateButton
            // TODO - 4 Add click listener to the button and define and event handler
            ></InvalidateButton>
          </Ticket>
        </ul>
      </div>
    </>
  );
}
