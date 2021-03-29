const express = require('express');
const router = express.Router();

const { createProxyMiddleware} = require('http-proxy-middleware');

router.use('/api', createProxyMiddleware({

    target: 'http://localhost:5000',
    headers: {
        accept: 'application/json, application/x-www-form-urlencoded'
    },
    changeOrigin: true
}))

router.get("/", (req, res)=> {
    res.render('index', {message: "This is the index page"})
    
})

router.get("/kids", (req, res)=> {
    res.render('kids', {message: "This is the index page"})
    
})

router.get("/settings", (req, res)=> {
    res.render('settings', {message: "This is the index page"})
    
})

router.get("/login", (req, res)=> {
    res.render('login', {message: "This is the index page"})
    
})

//other routes you might use

router.use((req, res) =>{
    res.status(404);
    res.render("error", {layout: "errorLayout.hbs", errormessage: `You lost your way fool "${req.url}" does not exsist`});  
})

module.exports = router;