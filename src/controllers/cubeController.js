const { request } = require('express');

const router = require('express').Router();

router.get('/create', (req,res) =>{
    res.render('create')
});

module.exports = router;