const express = require('express');
const path = require('path');
const app = express();

// 指定 React 應用程式的靜態文件目錄
app.use(express.static(path.join(__dirname, 'build')));

// 定義一個路由，在根目錄下渲染 React 應用程式
app.get('/', function (req, res) {
  res.send('fuck')
});

// 啟動伺服器監聽指定的端口
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});