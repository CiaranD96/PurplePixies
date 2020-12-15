const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Profile = require('../../models/Profile');
const User = require('../../models/User');
const Post = require('../../models/Post');

/**
 * @name GET api/profile/me
 * @description get current users profile
 * @access private
 */
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate('user', ['username']);

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

/**
 * @name POST api/profile
 * @description create or update user profile
 * @access private
 */
router.post(
  '/',
  [auth, [check('skills', 'Skills is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { skills, bio } = req.body;

    // build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    if (bio) profileFields.bio = bio;
    if (skills) {
      profileFields.skills = skills.split(',').map((skill) => skill.trim());
    }

    try {
      let profile = await Profile.findOne({ user: req.user.id });

      if (profile) {
        // update profile
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );

        return res.json(profile);
      }
      // create profile
      profile = new Profile(profileFields);

      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

/**
 * @name GET api/profile
 * @description get all profiles
 * @access public
 */
router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find().populate('user', ['username']);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

/**
 * @name GET api/profile/user/:user_id
 * @description get profile by user id
 * @access public
 */
router.get('/user/:user_id', async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id,
    }).populate('user', ['username']);
    if (!profile) return res.status(400).json({ msg: 'Profile not found' });
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Profile not found' });
    }
    res.status(500).send('Server error');
  }
});

/**
 * @name DELETE api/profile
 * @description delete profile, user and posts
 * @access private
 */
router.delete('/', auth, async (req, res) => {
  try {
    // remove user posts
    await Post.deleteMany({ user: req.user.id });
    // remove profile
    await Profile.findOneAndRemove({ user: req.user.id });
    // remove user
    await User.findOneAndRemove({ _id: req.user.id });
    res.json({ msg: 'User deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

/**
 * @name PUT api/profile/character
 * @description add profile character
 * @access private
 */
router.put(
  '/character',
  [
    auth,
    [
      check('Name', 'Name is required').not().isEmpty(),
      check('Race', 'Race is required').not().isEmpty(),
      check('Class', 'Class is required').not().isEmpty(),
      check('Level', 'Level is required').not().isEmpty(),
      check('Realm', 'Realm is required').not().isEmpty(),
      check('MainSpec', 'Main spec is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      Name,
      Race,
      Class,
      Level,
      Realm,
      Region,
      MainSpec,
      OffSpec,
    } = req.body;

    const newChar = {
      Name,
      Race,
      Class,
      Level,
      Realm,
      Region,
      MainSpec,
      OffSpec,
    };

    try {
      const profile = await Profile.findOne({ user: req.user.id });

      profile.character.unshift(newChar);

      await profile.save();

      res.json(profile);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  }
);

/**
 * @name DELETE api/profile/character/:char_id
 * @description delete character from profile
 * @access private
 */
router.delete('/character/:char_id', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });

    // get remove index
    const removeIndex = profile.character
      .map((item) => item.id)
      .indexOf(req.params.char_id);

    profile.character.splice(removeIndex, 1);

    await profile.save();

    res.json(profile);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
