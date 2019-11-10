const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const UserModel = require('./model/userModel');

app.use(express.urlencoded({ extend: true}));
app.use(express.json());

app.get('/api/', (req, res) => {
    UserModel.find()
    .then((users) => {
        res.json(users)
    })
});

app.post('/api/' , (req, res) => {
    const user  = new UserModel();

    user.name = req.body.name;
    user.twiiter_id = req.body.twiiter_id;
    user.board_width = req.body.board_width;
    user.item_color = req.body.item_color;

    user.save((err) => {
        if(err) {res.send(err);}
        else{ res.json({ message: "Success!"});}
    });
});


app.get(':id', (req, res) => {
    const Userid = req.params.id;
    UserModel.findById(Userid, (req, res) => {
        res.json(user);
    })
})

app.listen(port);
console.log('listen on port' + port);
