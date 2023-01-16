const express = require('express')
const Video = require('../schema/videonoteschema.js');
const router = express.Router()

// router.get('/', (req, res) => {
//   res.send('123')
// });


router.post('/', (req, res) => {
  const video = new Video({
    note: req.body.note,
    b: req.body.b
  });
  video.save()
    .then(() => {
      console.log(req.body.note);
      console.log(req.body.b);
      res.send('收到訊息');
    })
    .catch(err => {
      console.log(err);
    });
});

router.get('/', (req, res) => {
  Video.find({}, (err, videonote) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(videonote);
    }
  });
});


module.exports = router;