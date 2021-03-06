const path = require('path');

module.exports = {
  /**
   * 模块化加载框架 [requirejs|modjs|seajs]
   * 为null时，每个js文件用script标签引入
   *   e.g.
   *   <script src="/widget/a/a.js"></script>
   *   <script src="/widget/b/b.js"></script>
   * 为requirejs|modjs|seajs时
   *   e.g.
   *   require(["/widget/a/a.js", "/widget/b/b.js"]);
   *   或者
   *   seajs.use(["/widget/a/a.js", "/widget/b/b.js"]);
   */
  loader: null,
  /**
   * 是否进行同步加载，默认为false，loader设置不为null时生效
   * 因为allInOne打包时会被忽略异步依赖，所以使用allInOne时需要开启同步依赖
   */
  loadSync: false,
  // 是否编译内容，默认为true，为false时不编译ejs语法，只引用资源依赖
  parse: true,
  // 全局的mock文件，相对于root，默认为null
  commonMock: '/page/commonMock.mock',
  // ejs的root配置，默认为项目根目录
  root: path.resolve('.'),
  // @spring.message 语言内容
  springMessages: {}
};
