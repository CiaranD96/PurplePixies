import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteCharacter } from '../../actions/profile';

const Character = ({ character, deleteCharacter }) => {
  const characters = character.map((char) => (
    <tr key={char._id}>
      <td>{char.Name}</td>
      <td className='hide-sm'>{char.Class}</td>
      <td className='hide-sm'>{char.Level}</td>
      <td>
        <button
          className='btn btn-danger'
          onClick={() => deleteCharacter(char._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className='my-2'>My Characters</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th className='hide-sm'>Class</th>
            <th className='hide-sm'>Level</th>
            <th />
          </tr>
        </thead>
        <tbody>{characters}</tbody>
      </table>
    </Fragment>
  );
};

Character.propTypes = {
  character: PropTypes.array.isRequired,
  deleteCharacter: PropTypes.func.isRequired,
};

export default connect(null, { deleteCharacter })(Character);
