import React from 'react';
import { NavLink } from 'react-router-dom';
import './AuthNav.scss';

export default function AuthNav() {
  return (
    <div className="AuthNav">
      <NavLink to="/register" className="AuthNav__link">
        Sign up
      </NavLink>
      <NavLink to="/login" className="AuthNav__link">
        Log in
      </NavLink>
    </div>
  );
}
