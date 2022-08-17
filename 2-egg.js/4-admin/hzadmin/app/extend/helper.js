exports.validateUserName = function (userName) {
  if (typeof userName === 'string' && userName.length > 0) {
    return true;
  } else {
    return false;
  }
};

exports.validatePassword = function (password) {
  if (typeof password === 'string' && password.length > 0) {
    return true;
  } else {
    return false;
  }
};
