const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, '..', 'build')));
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
})
app.listen(PORT, () => { 
    console.log('Server is running on port : ' + PORT); 
});

module.exports = app;