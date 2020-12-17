import React from 'react';
import PropTypes from 'prop-types';
import avatar from '../../img/avatar.jpg';

const ProfileTop = ({
  profile: {
    bio,
    skills,
    user: { username },
  },
}) => {
  return (
    <div className='profile-top p-2'>
      <img className='round-img my-1' src={avatar} alt='' />
      <h1 className='large'>{username}</h1>
      <p className='lead'>{bio && bio}</p>
      <ul className='profile-skills'>
        {skills.map((skill, index) => (
          <li key={index} className='text-primary'>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
