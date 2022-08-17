const path = require('path');
const dayjs = require('dayjs');

class AppBootHook {
  constructor(app) {
    this.app = app;
  }

  // 配置文件已读取合并但还未生效，修改配置的最后时机，仅支持同步操作。
  configWillLoad() {}

  // 所有配置已经加载完毕，用于自定义 Loader 挂载。
  configDidLoad() {
    // (1)加载app/validator下的所有文件
    const validateDir = path.join(__dirname, 'app/validate');
    this.app.loader.loadToApp(validateDir, 'validate');
  }

  // 插件的初始化
  async didLoad() {}

  // 所有插件启动完毕，用于做应用启动成功前的一些必须的前置操作。
  async willReady() {
    this.app.dayjs = dayjs;
  }

  // 应用已经启动完毕，可以用于做一些初始化工作。
  async didReady() {}

  // Server 已经启动成功，可以开始导入流量，处理外部请求。
  async serverDidReady() {}

  // 应用即将关闭前
  async beforeClose() {}
}

module.exports = AppBootHook;
