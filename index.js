const express = require('express');

const app = express();

app.use (( )=> {
    console.log('hello server...');
    console.log('hello dua...');
    console.log('hello satu...');
}

)

app.listen(4000);