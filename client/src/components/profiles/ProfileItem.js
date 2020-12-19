import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import avatar from '../../img/avatar.jpg';

const ProfileItem = ({
  profile: {
    user: { _id, username },
    skills,
    bio,
  },
}) => {
  return (
    <div className='profile bg-dark'>
      <img src={avatar} alt='Avatar' className='round-img' />
      <div>
        <h2 className='text-primary'>{username}</h2>
        <p className='my-1'>{bio && bio}</p>
        <Link to={`/profile/${_id}`} className='btn btn-primary'>
          View Profile
        </Link>
      </div>
      <ul>
        {skills.slice(0, 3).map((skill, index) => (
          <li key={index} className='text-primary'>
            <i className='fas fa-check'></i> {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
