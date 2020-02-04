const express = require('express');
const app = express();

app.get('/', () =>{
    res.send('index page');
});

app.get('/random/:numeroInicial/:numeroFinal', (req , res) =>{
    const min = parseInt(req.params.numeroInicial);
    const max = parseInt(req.params.numeroFinal);

    if(isNaN(min) || isNaN(max)){
        res.status(404);
        res.json({"error": 'peticioni ncorrecta'});
        return;

    }



    const result = Math.floor(Math.random() * (max - min) + min);

    res.json({"Numero aleatorio": result});


})

app.listen(3000, () =>{
    console.log('server on port 3000');
})