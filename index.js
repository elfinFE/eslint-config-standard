module.exports = {
    extends: [
        // https://github.com/standard/eslint-config-standard/blob/v12.0.0/eslintrc.json
        require.resolve('eslint-config-standard'),
    ],
    rules: {
        // 4个空格缩进
        'indent': ['error', 4, {SwitchCase: 1}],
        // 声明function时函数名后不加空格
        'space-before-function-paren': ['error', {named: 'never'}],
        // 数组最后一个元素末尾加逗号
        'comma-dangle': ['error', 'always-multiline'],
        // 对象花括号前后不加空格
        'object-curly-spacing': ['error', 'never'],
        // 最多连续空两行，文件开头没有空行
        'no-multiple-empty-lines': ['error', {max: 2, maxBOF: 0}],
        // 允许行尾加分号
        'semi': ['off'],
        // 尽量驼峰命名
        'camelcase': ['warn', {allow: ['^.*_id'], ignoreDestructuring: true}],
        // 文末不加空行
        'eol-last': ['error', 'never'],
        // 一行最大字符数。用正则忽略html中的path标签
        'max-len': ['error', 150, 4, {ignoreStrings: true, ignoreTemplateLiterals: true, ignorePattern: 'd=".+"'}],
        // 在一个表达式中连用逻辑运算符需要加括号
        'no-mixed-operators': ['error'],
        // 尽量消灭未使用的变量
        'no-unused-vars': ['warn'],
        // 使用箭头函数
        'prefer-arrow-callback': ['error'],
    },
}
