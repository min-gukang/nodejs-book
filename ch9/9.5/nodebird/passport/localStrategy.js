const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const User = require('../models/user');

module.exports = () => {
  passport.use(new LocalStrategy({
    usernameField: 'email', //req.body.email //이름은 아무거나 해줘도 된다. 
    passwordField: 'password', //req.body.password
  }, async (email, password, done) => { //여기서 email과 password 파라미터는 위에 usernameField passwordField를 의미. 
    try {                               //done(serverError, 로그인성공, 로그인이 실패했을때 메시지); 
      const exUser = await User.findOne({ where: { email } });
      if (exUser) {
        const result = await bcrypt.compare(password, exUser.password);
        if (result) {
          done(null, exUser); //done함수 호출되면 auth.js의 나머지 부분 실행
        } else {
          done(null, false, { message: '비밀번호가 일치하지 않습니다.' });
        }
      } else {
        done(null, false, { message: '가입되지 않은 회원입니다.' });
      }
    } catch (error) {
      console.error(error);
      done(error);
    }
  }));
};
