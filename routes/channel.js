const express = require('express');
const router = express.Router();

// TODO:Require controller modules


// CHANNELS ROUTES
router.get('/all', (req, res, next) => {
    var channel_list = [
        {
            title: 'Uber Eats',
            status: 'Open',
            percentage: 16,
            url: '/channel/001'
        },
        {
            title: 'Food Panda',
            status: 'Open',
            percentage: 15,
            url: '/channel/002'
        },
        {
            title: 'Express',
            status: 'Maintenance',
            percentage: 10,
            url: '/channel/003'
        },
        {
            title: 'Shopee',
            status: 'Closed',
            percentage: 12,
            url: '/channel/004'
        }
    ];
    res.render('index', { title: 'Channels', channel_list: channel_list});
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