const express = require('express')
const router = express.Router()
const { spawn } = require('child_process')

// Get webpage
router.get('/', function(req, res) {
        res.sendFile('index.html' , { root : __dirname})

})

// Put computer to sleep
router.post('/sleep', function(req, res) {
    const sleep = spawn('psshutdown.exe', ['-d', '-t', '0', '-accepteula'])
})

module.exports = router