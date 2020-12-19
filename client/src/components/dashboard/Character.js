import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteCharacter } from '../../actions/profile';

const Character = ({ character, deleteCharacter }) => {
  const characters = character.map((char) => (
    <div key={char._id} className='char-card bg-dark'>
      <h4 className='text-primary'>
        Name: <span className='text-white'>{char.Name}</span>
      </h4>
      <h4 className='text-primary'>
        Race: <span className='text-white'>{char.Race}</span>
      </h4>
      <h4 className='text-primary'>
        Class: <span className='text-white'>{char.Class}</span>
      </h4>
      <h4 className='text-primary'>
        Level: <span className='text-white'>{char.Level}</span>
      </h4>
      <h4 className='text-primary'>
        Realm: <span className='text-white'>{char.Realm}</span>
      </h4>
      <h4 className='text-primary'>
        MainSpec: <span className='text-white'>{char.MainSpec}</span>
      </h4>
      <h4 className='text-primary'>
        OffSpec: <span className='text-white'>{char.OffSpec}</span>
      </h4>
      <br />
      <button
        className='btn btn-danger'
        onClick={() => deleteCharacter(char._id)}
      >
        Delete
      </button>
    </div>
  ));

  return (
    <Fragment>
      <h2 className='my-2'>Characters</h2>
      <div>{characters}</div>
    </Fragment>
  );
};

Character.propTypes = {
  character: PropTypes.array.isRequired,
  deleteCharacter: PropTypes.func.isRequired,
};

export default connect(null, { deleteCharacter })(Character);
