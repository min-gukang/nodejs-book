const passport = require('passport');
const local = require('./localStrategy');
const kakao = require('./kakaoStrategy');
const User = require('../models/user');

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id); //session에 user ID 저장 , done하는 순간 req.login 콜백함수 실행!
  });

  passport.deserializeUser((id, done) => { //(로그인 이후 요청올때 실행됨),같이 요청온 session-cookie의 id와 sessionID로 user를 db에서 찾고 user를 복구한다. 
    User.findOne({
      where: { id },
      include: [{
        model: User,
        attributes: ['id', 'nick'],
        as: 'Followers',
      }, {
        model: User,
        attributes: ['id', 'nick'],
        as: 'Followings',
      }],
    })
    //req.user, req.isAuthenticated()가 들어있음. 로그인 되어 있으면 isAuthenticated는 true로 설정됨. 그 다음 router로 진행됨. 
    //이제 그 라우터에서는 req.user에 사용자 정보가 들어있음. 
      .then(user => done(null, user)) 
      .catch(err => done(err));
  });

  local();
  kakao();
};
