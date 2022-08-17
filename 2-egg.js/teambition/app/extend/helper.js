module.exports = {
  vertificationCode() {
    return this.randomNumberString(6);
  },
  randomNumberString(len) {
    const res = [];
    for (let i = 0; i < len; i++) {
      const num = Math.floor(Math.random() * 10); // 0~9
      res.push(num);
    }
    return res.join('');
  },
};
