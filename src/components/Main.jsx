import React from 'react';
import { Link } from 'react-router-dom';

export const Main = () => (
  <div className="main_wrapper">
    <Link
      size="large"
      variant="contained"
      color="default"
      className="start_btn"
      to="/data"
    >
      Старт
    </Link>
  </div>
);
