require('dotenv').config()
const express = require('express')
const app = express()
// const port = 3000

const github = {
  "login": "Prateek7071",
  "id": 106758759,
  "node_id": "U_kgDOBl0CZw",
  "avatar_url": "https://avatars.githubusercontent.com/u/106758759?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Prateek7071",
  "html_url": "https://github.com/Prateek7071",
  "followers_url": "https://api.github.com/users/Prateek7071/followers",
  "following_url": "https://api.github.com/users/Prateek7071/following{/other_user}",
  "gists_url": "https://api.github.com/users/Prateek7071/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Prateek7071/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Prateek7071/subscriptions",
  "organizations_url": "https://api.github.com/users/Prateek7071/orgs",
  "repos_url": "https://api.github.com/users/Prateek7071/repos",
  "events_url": "https://api.github.com/users/Prateek7071/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Prateek7071/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Prateek",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 28,
  "public_gists": 0,
  "followers": 1,
  "following": 0,
  "created_at": "2022-06-02T14:52:32Z",
  "updated_at": "2026-05-04T13:04:12Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/work', (req, res) => {
  res.send("This is work page!")
})

app.get('/login', (req, res) => {
  res.send('<h1>Please login at chai or code</h1>')
})

app.get('/github', (req, res) => {
  res.json(github)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
