'use strict';

const express = require('express');
const eventControll = require('../controllers/eventController');
const shortUrl = require('../controllers/shortUrlController');
const router = express.Router();

router.get('/events', eventControll.getAllEvents);
router.get('/event/:id', eventControll.getEvent);
router.post('/event', eventControll.addEvent);
router.put('/event/:id', eventControll.updatEvent);
router.delete('/event/:id', eventControll.deleteEvent);

router.post('/shorturl', shortUrl.shortUrlController);
router.get('/shorturl/:id', shortUrl.getLink);

module.exports = {
  routes: router,
};
