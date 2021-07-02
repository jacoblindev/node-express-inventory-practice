var express = require('express');
var router = express.Router();

// TODO:Require controller modules


// CHANNELS ROUTES
router.get('/all', (req, res, next) => {
    res.render('index', { title: 'Channels'});
});

router.get('/create', (req, res, next) => {
    // Get the create channel form
});

router.post('/create', (req, res, next) => {
    // Creating channel
});

router.get('/:id/update', (req,res, next) => {
    // Get update channel form
});

router.post('/:id/update', (req, res, next) => {
    // Updating channel
});

router.get('/:id/delete', (req, res, next) => {
    // Get delete channel form
});

router.post('/:id/delete', (req, res, next) => {
    // Deleting channel
})

module.exports = router;