const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  data = `
        <body>
            <h1>정적 파일</h1>
            <ul>
                <li> static 1 </li>
                <li> static 2 </li>
                <li> static 3 </li>
                <li> static 4 </li>
                <li> static 5 </li>
            </ul>
        </body>
    `;
  res.send(data);
});

app.listen(port, function () {
  console.log(`Example app listening at http://localhost:${port}`);
});
