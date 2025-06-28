const express = require("express");
const app =express();

app.use(express.json());

function sum(){
    const a =parseInt(req.body.a);
    const b =parseInt(req.body.b);

    res.json({
        sum : a+b
    })

}

app.post("/sum",sum);

app.listen(3500);
