module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi': [0, 'never'],
    // 允许使用==
    'eqeqeq': 0,
    // 允许使用tab
    'no-tabs': 0,
    // 函数圆括号之前没有空格
    'space-before-function-paren': [2, "never"],
    // 不限制变量一起声明
    'one-var': 0,
    // 开发模式允许使用console
    'no-console': 0,
    // 单行可忽略大括号，多行不可忽略
    'curly': [2, 'multi-line'],
    // 不允许使用var变量
    'no-var': 2,
    // 对象字面量的键值空格风格
    'key-spacing': 2,
    // 不允许圆括号中出现空格
    'space-in-parens': [2, 'never'],
    // 强制单行代码使用空格
    'block-spacing': [2, 'always'],
    // 允许箭头函数不使用圆括号
    'arrow-parens': 0,
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
