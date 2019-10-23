import React from 'react';
import { Link } from 'react-router-dom';

import BackIcon from '../arrow-left.svg';

// TODO Add click listeners to all the buttons
export function InvalidateButton() {
  return (
    <button className="invalidate-btn">
      Invalidate
    </button>
  );
}

export function GenerateButton() {
  return (
    <button className="invalidate-btn">
      Generate
    </button>
  );
}

export function BackButton(props) {
  return (
    <Link className="back-btn" to="/" {...props}>
      <img src={BackIcon} alt="Go back" />
    </Link>
  );
}
