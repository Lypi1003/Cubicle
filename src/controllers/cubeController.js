const router = require('express').Router();
const cubeService = require('../services/cubeService');


router.get('/create', (req, res) => {
    res.render('create')
});

router.post('/create', (req, res) => {
    const cube = req.body;

    if (cube.name.length < 2) {
        return res.status(400).send('Invalid request');
    }

    cubeService.save()
        .then(() => {
            res.redirect('/');
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

module.exports = router;