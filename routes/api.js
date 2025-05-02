const express = require('express');
const router = express.Router();
const Video = require('../models/Video');

router.get('/videos', async (req, res) => {
  const videos = await Video.find();
  res.json(videos);
});

router.post('/videos', async (req, res) => {
  const { title, url, thumb } = req.body;
  const video = new Video({ title, url, thumb });
  await video.save();
  res.json(video);
});

module.exports = router;
