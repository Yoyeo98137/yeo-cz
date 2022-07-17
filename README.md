# yeo-cz

> git 提交规范（demo）
> see：https://juejin.cn/post/6844903831893966856

## Commitizen

提供选择的提交信息类别，快速生成提交说明。安装 cz 工具：

```
pnpm install -g commitizen
```

## Commitizen 适配器

### cz-conventional-changelog

如果需要在项目中使用 `commitizen` 生成符合 AngularJS 规范的提交说明，初始化 `cz-conventional-changelog` 适配器：

```
commitizen init cz-conventional-changelog --save --save-exact
```

### cz-customizable

如果想定制项目的提交说明，可以使用 `cz-customizable` 适配器：

安装适配器

```
pnpm install cz-customizable --save-dev
```

将之前符合 Angular 规范的 `cz-conventional-changelog` 适配器路径改成 cz-customizable 适配器路径：

```
"devDependencies": {
  "cz-customizable": "^5.3.0"
},
"config": {
  "commitizen": {
    "path": "node_modules/cz-customizable"
  }
}
```

## 提交

> 现在就可以通过 `git cz` 替代 `git commit` 来进行提交说明了  
> 要注意的是，`git cz` 只是 `cz(commitizen)` 做的一个别名命令 (`alias`)，不能替代 `git commit`；  
> `cz` 的出现解决的痛点在于需要一个命令行工具去辅助生成标准规范的 `git commit` message。

## Commitizen 校验

### commitlint

校验提交说明是否符合规范，安装校验工具 commitlint：

```
pnpm install --save-dev @commitlint/cli
```

### @commitlint/config-conventional

安装符合 Angular 风格的校验规则

```
pnpm install --save-dev @commitlint/config-conventional
```

在项目中新建 commitlint.config.js 文件并设置校验规则：

```
module.exports = {
  extends: ['@commitlint/config-conventional']
  ...
};
```

安装 huksy（git 钩子工具，通过这个来阻止错误的 commit）：

```
pnpm install husky --save-dev
```

在 package.json 中配置 git commit 提交时的校验钩子：

```
"husky": {
  "hooks": {
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }
}
```

## 基于我们的自定义规则来做限制

### commitlint-config-cz

如果是使用 `cz-customizable` 适配器做了破坏 Angular 风格的提交说明配置，那么不能使用 `@commitlint/config-conventional` 规则进行提交说明校验，  
可以使用 `commitlint-config-cz` 对定制化提交说明进行校验。

安装校验规则：

```
pnpm install commitlint-config-cz --save-dev
```

然后将 commitlint 校验规则配置替换成我们的 cz：

```
module.exports = {
  extends: [
    'cz'
  ]
  ...
};
```
