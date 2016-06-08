var express = require('express');
var router = express.Router();
var crypto = require('crypto');

/* GET auth page. */
router.get('/', function(req, res, next) {
   res.json({
            "result": {"message" : "로그인이 정상적으로 처리되었습니다..."}
        });
});

var hashedPW;
router.post('/signup', function(req, res, next){
        console.log('auth/signup : ' + req.method + " : " +  req.url );
        var user_email = req.body.user_email;
        var user_password = req.body.user_password;
        var user_name = req.body.user_name;
        
        var sha1 = crypto.createHash('sha1');
        sha1.update(user_password); //암호화
         var hashedPW = sha1.digest('hex');
       console.log(user_email + hashedPW);
       
       var user ={
               'user_name' : user_name,
               'user_email' : user_email,
               'user_password' : hashedPW
       }
       
       pool.getConnection(function(err, conn) {
             if(err){
                return next(err);
            }
            var sql = 'INSERT INTO user SET ? ' ;
            conn.query(sql, user, function(err, result){
                    if(err){
                        console.error('INSERT Error', err);    
                    }else {
                        console.log('results : ', result);
                      
                        res.json({
                                'result' : user
                                
                        });
                   }
            });  
            conn.release(); 
       });
       
        // res.json({
        //     "result": {"message" : "회원가입이 정상적으로 처리되었습니다...",
        //                 "user" : {"username": username, "password" : password}
        //         }
        // });
});

router.post('/login', function(req, res, next){
        var user_email = req.body.user_email 
        var user_password = req.body.user_password;
        pool.getConnection(function(err, conn){
            var sql = 'SELECT * FROM user where user_email = ? '
            conn.query(sql, user_email, function(req, results){
                    if(err){
                        return nexr(err);
                    }
                    if(results[0].user_email === user_email){
                        var sha1 = crypto.createHash('sha1');
                        sha1.update(user_password);
                        var digest = sha1.digest('hex');
                        // 암호 풀기
                        if(results[0].user_password === digest){
                           console.log('비밀번호 일치');
                        //    conn.release();
                        //    this.break;
                        //    return;     
                        }else{
                           console.log('비밀번호 오류');
                        //    conn.release();
                        //    this.break;
                        //    return;     
                        }
                   
                    }
                     res.json({"results": results[0]});
                    conn.release();
            });   
                
        });
        
});

router.get('/userAll', function(req, res, next){
        pool.getConnection(function(err, conn){
            if(err){
                return next(err);
            }
            var sql = 'SELECT * From user'; 
            var user = '';
           conn.query(sql, function(req, results){
                if(err){
                return next(err);
                }
                
                res.json({"results":results});
                conn.release();
           });
        });
        // connection 끝
})


module.exports = router;
