import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/edit-profile' className='btn btn-light'>
        <i className='fas fa-user-circle text-primary'></i> Edit Profile
      </Link>
      <Link to='/add-character' className='btn btn-light'>
        <i className='fas fa-hat-wizard text-primary'></i> Add Character
      </Link>
    </div>
  );
};

export default DashboardActions;
