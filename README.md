# @elfin-fe/eslint-config-standard

> 校精灵团队使用的eslint规则，基于[standard/eslint-config-standard](https://github.com/standard/eslint-config-standard)扩展而来

### 使用方法
#### 安装
```bash 
# npm 6
npm install @elfin-fe/eslint-config-standard eslint-plugin-import eslint-plugin-promise eslint-plugin-node --save-dev

# npm 7
npm install @elfin-fe/eslint-config-standard --save-dev
```
#### 引用
在`.eslintrc.js`文件的`extends`数组中引用规则
```
extends: [
	'@elfin-fe/standard',
]
```