var express = require('express');
var router = express.Router();


router.get('/',function(req,res,next){
    
     res.json({
            "result": {"message" : "회원가입이 정상적으로 처리되었습니다...",
                        "post" : {"post_name": "안녕하세요", "post": "dddd" }
                        
                      }
                
        });
    
    
});

router.get('/showpostAll', function(req, res, next){
    
    res.json({
               "result" : {
               "message" : "포스트를 가져왔습니다",
               "post" : [
                   {"post_content": "나의 10년 단위의 일생 계획이다. 20대는 내가 뛰어든 분야에서 이름을 떨치고 회사를 세운다. 30대는 1000억, 2000억의 운영자금을 축적하겠다",
                   "user_name" : "김세종", "post_like_count":22, "reply_content":"댓글달았당",  "post_heart" :true},
                   {"post_content": "나의 준태 계획이다",
                   "user_name" : "423",
                    "post_like_count" : 1,
                    "reply_content": "준태 댓글",
                    "post_heart" : true }
                             
                         ]
                }
        
    });
    
});
// . 20대는 내가 뛰어든 분야에서 이름을 떨치고 회사를 세운다. 30대는 1000억, 2000억의 운영자금을 축적하겠다.", “user_name":"김세종”, “post_like_count”:”423”, “reply_content” : "댓글달았당","post_heart":"true"
// ”              },{"post_content": "나는 gng 개발자다. 아아아아아아 하기 싫어 ", “user_name”:”준태”, “post_like_count”:”200”, “reply_content” : “쉬어랑“,”post_heart”:”false”
//                }]


module.exports = router;