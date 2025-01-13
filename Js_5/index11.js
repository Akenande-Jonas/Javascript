const express = require('express')
const app = express();
const port = 5000;

app.listen(port, () => {
    console.log('demarrage du server au port n° '+ port);
});

app.get('/Route1', (req.res)=>{
    res.set('Content-Type','text/html')
    res.send('coucou')
})


