var express   = require('express');
var router    = express.Router();
var UserModel = require('../model/userModel');

router.get('/test', function (req, res) {
    res.json({
        message:"This is user api"
    });
});

router.post('/',function(req,res){

    // 新しいユーザのモデルを作成する．
    var User = new UserModel();

    // ユーザの各カラムの情報を取得する．
    User.name = req.body.name;
    User.screen_name = req.body.screen_name;
    User.bio =  req.body.bio;

       // ユーザ情報をセーブする．
    User.save(function(err) {
        if (err)
            res.send(err);
        res.json({ message: 'Success!' });
    });
});

router.get('/', function (req, res) {

    UserModel
        .find()
        .then(function (users) {
            res.json(users);
        });
});

router.get('/:id', function (req, res) {

    var Userid = req.params.id;
    UserModel
        .findById(Userid,function (err,user) {
            res.json(user);
        });
});

router.put('/:id',function (req, res) {

    var Userid = req.params.id;

    UserModel
        .findById(Userid, function(err, user) {
            if (err) {
                res.send(err);
            } else {

                user.name = req.body.name;
                user.screen_name = req.body.screen_name;
                user.bio = req.body.bio;

                user.save(function(err) {
                    if (err){
                        res.send(err);
                    } else {
                        res.json({ message: 'Success!' });
                    }
                });
            }
        });

});

//routerをモジュールとして扱う準備
module.exports = router;
