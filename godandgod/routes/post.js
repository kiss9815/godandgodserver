var express = require('express');
var router = express.Router();


router.get('/',function(req,res,next){
    
     res.json({
            "result": {"message" : "회원가입이 정상적으로 처리되었습니다...",
                        "post" : {"post_name": "안녕하세요" }
                        
                      }
                
        });
    
    
});

module.exports = router;