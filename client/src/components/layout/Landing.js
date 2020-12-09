import React from 'react';
import { Link } from 'react-router-dom';

export const Landing = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>Purple Pixies</h1>
          <p className='lead'>
            Welcome to Purple Pixies, home to the World of Warcraft guild Purple
            Pixie Slayers on Kilrogg-EU
          </p>
          <div className='button'>
            <Link to='/register' className='btn btn-primary'>
              Sign Up
            </Link>
            <Link to='/login' className='btn btn-light'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
