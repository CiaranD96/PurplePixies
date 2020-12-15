import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCharacter } from '../../actions/profile';

const AddCharacter = ({ addCharacter, history }) => {
  const [formData, setFormData] = useState({
    Name: '',
    Race: '',
    Class: '',
    Level: '',
    Realm: '',
    MainSpec: '',
    OffSpec: '',
  });

  const { Name, Race, Class, Level, Realm, MainSpec, OffSpec } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addCharacter(formData, history);
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Add a Character</h1>
      <p className='lead'>
        <i className='fas fa-hat-wizard'></i> Add any characters that you have
        in the guild
      </p>
      <small>* = required field</small>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Name'
            name='Name'
            value={Name}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <select name='Race' value={Race} onChange={(e) => onChange(e)}>
            <option value='0'>* Select a Race</option>
            <option value='Orc'>Orc</option>
            <option value='Undead'>Undead</option>
            <option value='Tauren'>Tauren</option>
            <option value='Troll'>Troll</option>
            <option value='Blood Elf'>Blood Elf</option>
            <option value='Goblin'>Goblin</option>
            <option value='Pandaren'>Pandaren</option>
            <option value='Nightborne'>Nightborne</option>
            <option value='Highmountain Tauren'>Highmountain Tauren</option>
            <option value='Mag Har Orc'>Mag Har Orc</option>
            <option value='Zandalari Troll'>Zandalari Troll</option>
            <option value='Vulpera'>Vulpera</option>
          </select>
        </div>
        <div className='form-group'>
          <select name='Class' value={Class} onChange={(e) => onChange(e)}>
            <option value='0'>* Select a Class</option>
            <option value='Death Knight'>Death Knight</option>
            <option value='Demon Hunter'>Demon Hunter</option>
            <option value='Druid'>Druid</option>
            <option value='Hunter'>Hunter</option>
            <option value='Mage'>Mage</option>
            <option value='Monk'>Monk</option>
            <option value='Paladin'>Paladin</option>
            <option value='Priest'>Priest</option>
            <option value='Rogue'>Rogue</option>
            <option value='Shaman'>Shaman</option>
            <option value='Warlock'>Warlock</option>
            <option value='Warrior'>Warrior</option>
          </select>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Level'
            name='Level'
            value={Level}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <select name='Realm' value={Realm} onChange={(e) => onChange(e)}>
            <option value='0'>* Select a realm</option>
            <option value='Kilrogg'>Kilrogg</option>
            <option value='Runetotem'>Runetotem</option>
            <option value='Nagrand'>Nagrand</option>
            <option value='Arathor'>Arathor</option>
            <option value='Hellfire'>Hellfire</option>
          </select>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Main Spec'
            name='MainSpec'
            value={MainSpec}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Off Spec'
            name='OffSpec'
            value={OffSpec}
            onChange={(e) => onChange(e)}
          />
        </div>
        <input type='submit' className='btn btn-primary my-1' value='Submit' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

AddCharacter.propTypes = {
  addCharacter: PropTypes.func.isRequired,
};

export default connect(null, { addCharacter })(AddCharacter);
