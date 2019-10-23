import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// TODO - 1 import the authContext from 8base's SDK

import LoginImage from '../login.svg';

export default function Index() {
  const date = new Date().toDateString();
  // TODO - 2 call the useContext hook by passing the authContext as an argument

  return (
    <>
      <div className="page-info">
        <img src="images/meal-ticket.svg" alt="" />
        <h1 className="img-title">meal ticket</h1>
        <p className="date">{date}</p>
      </div>
      {/*TODO - 3 Display a login alert when the user isn't authorized  */}
      <ul className="options">
        <li className="option-item">
          <Link to="/generate">
            <img src="images/generate-mt.svg" alt="generate meal ticket" />
            <h2>Generate Meal Ticket</h2>
          </Link>
        </li>
        <li className="option-item">
          <Link to="/tickets">
            <img src="images/find-mt.svg" alt="Find Meal Ticket" />
            <h2>Find Meal Ticket</h2>
          </Link>
        </li>
      </ul>
    </>
  );
}
