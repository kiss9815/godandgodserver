var express = require('express');
var router = express.Router();

/* GET auth page. */
router.get('/', function(req, res, next) {
   res.json({
            "result": {"message" : "로그인이 정상적으로 처리되었습니다..."}
        });
});


router.post('/signup', function(req, res, next){
        console.log('auth/signup : ' + req.method + " : " +  req.url );
       
       var username = req.body.user_name;
       var password = req.body.password;
       
        res.json({
            "result": {"message" : "회원가입이 정상적으로 처리되었습니다...",
                        "user" : {"username": username, "password" : password}
                }
        });
});

module.exports = router;
