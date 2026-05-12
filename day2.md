learnt node init : creates a package.json file
added scrpit : 
```
"start" : "node index.js"
```
this can be run by using 
```
npm run start
```

### added expressjs
```
npm install express --save
```

from express:
```
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

```
for env var
```
npm i dotenv
```