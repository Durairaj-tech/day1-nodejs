const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');
const path = require('path')

app.get('/createFile', (req, res) => {
  let today = new Date();
  let date = today.getFullYear() + "-" + (today.getMonth()+1) + "-" + today.getDate();
  let time = today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds();
  let filename = `${date}-time(${time})`;
  fs.writeFile(`${filename}.txt`, `Created date - ${date} time - ${time}`, 'utf8', (err) => {
      if (err) throw err;
      res.send("File is created");
  })
});

app.get('/retrieveFile', (req, res) => {
  let files = [];
  fs.readdir('C:/Users/Durairaj prabhu/Desktop/temp', (err, data) => {
      if (err) throw err;
      data.forEach((item) => {
          if (String(path.extname(item)) == '.txt') {
              files.push(item);
          }
      })
      res.json(files);
  })
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

