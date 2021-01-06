/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Popover from '@material-ui/core/Popover';
import { Link } from 'react-router-dom';

export const Person = ({ person }) => {
  const [info] = useState(person);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    if (event.currentTarget === anchorEl) {
      handleClose();
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? info.name : undefined;

  return (
    <>
      <div
        className="person_info"
        onClick={handleClick}
        aria-describedby={id}
        role="button"
        tabIndex={0}
        onKeyPress={handleClose}
      >
        {info.name}
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <div className="info_popup">
            <span>{`Name: ${info.name}`}</span>
            <span>{`Gender: ${info.gender}`}</span>
            <span>{`Birth: ${info.birth_year}`}</span>
            <Link to={{
              pathname: '/details',
              query: `${info.url}`,
            }}
            >
              Details
            </Link>
          </div>
        </Popover>
      </div>

    </>
  );
};
