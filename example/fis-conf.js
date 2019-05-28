'use strict'

const path = require('path');
const util = fis.util;
let packed = false;
let ftlConf = {
  loader: 'requirejs',
  root: path.resolve('./root'),
  springMessages: {
    'common.ok': '确认哟哟哟',
    'message.test': '测试语言',
    'message.from.config': 'fis-conf message'
  }
};

// 模块化勾子
if (ftlConf.loader) {
  if (ftlConf.loader !== 'seajs') {
    fis.hook('amd');
  } else {
    fis.hook('cmd');
  }
}

// 打包配置
fis.match('::package', {
  postpackager: fis.plugin('loader', {
    //resourceType: 'amd',
    useInlineMap: true,
    //allInOne: true
  })
});

fis.match('*', {
  domain: '/0.0.1'
});

// 使用fis-parser-freemarker直接编译html文件
fis
  .match('/root/(**.*)', {
    release: '$1'
  })
  .match('*.ftl', {
    parser: (content, file) => {
      return require('../')(content, file, ftlConf);
    },
    rExt: '.html',
    loaderLang: 'html',
    isHtmlLike: true
  })
  .match('/root/widget/**.{ftl,mock}', {
    release: false
  })
  .match('/root/page/**.mock', {
    release: false
  })
  .match('/root/paging.ftl', {
    release: false
  })
  // 加添scss编译
  .match('*.scss', {
    rExt: '.css',
    parser: fis.plugin('node-sass')
  })

// 合并配置
if (packed) {
  fis
    .match('/root/widget/**.{scss,css}', {
      packTo: '/root/widget/widget_pkg.css'
    })
    .match('/root/widget/**.js', {
      // 只有选择了模块化框架后才执行模块化
      isMod: ftlConf.loader ? true : false,
      packTo: '/root/widget/widget_pkg.js'
    })
    .match('/root/widget/config.js', {
      isMod: false
    })
}

// 只发布模板文件
let tmpConf = util.merge({
  parse: false
}, ftlConf);
fis
  .media('prod')
  .match('*', {
    deploy: fis.plugin('local-deliver', {
      to: './output/static'
    })
  })
  .match('*.ftl', {
    parser: (content, file) => {
      return require('../')(content, file, tmpConf);
    },
    rExt: '.ftl',
    deploy: fis.plugin('local-deliver', {
      to: './output/template'
    })
  })
  .match('/root/page(/**.ftl)', {
    release: '$1'
  })
  .match('/root(/widget/**.ftl)', {
    release: '$1'
  })
