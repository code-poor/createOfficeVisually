module.exports = {
   // 继承自 ynf-dx-scripts
   "extends": "./node_modules/ynf-dx-scripts/.prettierrc",
   // 一行最多 120 字符
   "printWidth": 150,
   // 使用 2 个空格缩进
   "tabWidth": 2,
   // 行尾需要有分号
   "semi": true,
   // 使用单引号代替双引号
   "singleQuote": true,
   // 对象的 key 仅在必要时用引号
   "quoteProps": "as-needed",
   // jsx 不使用单引号，而使用双引号
   "trailingComma": "none",
   // jsx 标签的反尖括号需要换行
   "arrowParens": "always",
   "useTabs": false,
   // jsx 标签的反尖括号需要换行
   jsxBracketSameLine: false,
   // jsx 单引号
   jsxSingleQuote: true,
   // tsx 文件使用单引号
   tsxSingleQuote: true,
   // 解构赋值前后空格
   bracketSpacing: true
}
