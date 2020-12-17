import React from 'react';
import PropTypes from 'prop-types';

const ProfileCharacter = ({
  character: { Name, Race, Class, Level, Realm, MainSpec, OffSpec },
}) => {
  return (
    <div className='bg-dark char-card'>
      <h3 className='text-primary'>
        Name: <span className='text-white'>{Name}</span>
      </h3>
      <h3 className='text-primary'>
        Race: <span className='text-white'>{Race}</span>
      </h3>
      <h3 className='text-primary'>
        Class: <span className='text-white'>{Class}</span>
      </h3>
      <h3 className='text-primary'>
        Level: <span className='text-white'>{Level}</span>
      </h3>
      <h3 className='text-primary'>
        Realm: <span className='text-white'>{Realm}</span>
      </h3>
      <h3 className='text-primary'>
        MainSpec: <span className='text-white'>{MainSpec}</span>
      </h3>
      <h3 className='text-primary'>
        OffSpec: <span className='text-white'>{OffSpec}</span>
      </h3>
    </div>
  );
};

ProfileCharacter.propTypes = {
  character: PropTypes.array.isRequired,
};

export default ProfileCharacter;
