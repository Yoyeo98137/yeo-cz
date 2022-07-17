'use strict';

module.exports = {

  types: [
    { value: 'feat', name: 'feat:           一个新的特性' },
    { value: 'fix', name: 'fix:            修复一个Bug' },
    { value: 'docs', name: 'docs:           变更的只有文档' },
    { value: 'style', name: 'style:          空格, 分号等格式修复' },
    { value: 'refactor', name: 'refactor:       代码重构，注意和特性、修复区分开' },
    { value: 'perf', name: 'perf:           提升性能' },
    { value: 'test', name: 'test:           添加一个测试' },
    { value: 'chore', name: 'chore:          开发工具变动(构建、脚手架工具等)' },
    { value: 'revert', name: 'revert:         代码回退' }
  ],

  // @see: https://juejin.cn/post/7039256801899970568
  scopes: [
    ['components', '组件相关'],
    ['hooks', 'hook 相关'],
    ['utils', 'utils 相关'],
    ['element-ui', '对 element-ui 的调整'],
    ['styles', '样式相关'],
    ['deps', '项目依赖'],
    ['other', '其他修改'],

    // `allowCustomScopes: true,`
    // empty
    // custom
  ].map(([value, description]) => {
    return {
      value,
      name: `${value.padEnd(30)} (${description})`
    }
  }),


  // it needs to match the value for field type. Eg.: 'fix'
  /*
  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  // override the messages, defaults are as follows
  messages: {
    type: '选择一种你的提交类型:',

    scope: '选择一个scope (可选):',
    // used if allowCustomScopes is true
    // 如果allowcustomscopes为true，则使用
    // customScope: 'Denote the SCOPE of this change:',
    customScope: '自定义你的 SCOPE 在这个提交中 (建议英文):',

    subject: '短说明:\n',
    body: '长说明，使用"|"换行(可选)：\n',
    breaking: '非兼容性说明 (可选):\n',
    footer: '关联关闭的issue，例如：#31, #34(可选):\n',
    confirmCommit: '确定提交说明?'
  },

  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix"],

  // limit subject length
  subjectLimit: 100

};
