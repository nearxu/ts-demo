###  some envorment

all from : https://zhuanlan.zhihu.com/p/62401626

yarn create react-app my-app --template typescript

yarn add typescript @types/node @types/react @types/react-dom @types/jest

eslint：javascript代码检测工具，使用espree解析器
@typescript-eslint/parser：将 TypeScript 转换为 ESTree，使 eslint 可以识别
@typescript-eslint/eslint-plugin：只是一个可以打开或关闭的规则列表

yarn add eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin -D

yarn eslint --init

yarn add prettier eslint-config-prettier eslint-plugin-prettier -D

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'react-app',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'react'],
  rules: {},
};

// user setting

"eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "typescript",
      "autoFix": true
    },
    {
      "language": "typescriptreact",
      "autoFix": true
    }
]