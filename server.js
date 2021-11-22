const express = require('express')
const path = require('path')
const api = require('./server/routes/api')
const app = express()

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use('/',api)
const port = 3001
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})





  /* 
const teamToIDs = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756"
}
var urllib = require('urllib');
app.get('/home', function (request, response) {
urllib.request('http://data.nba.net/10s/prod/v1/2018/players.json', function (err, data, res) {
  if (err) {
    throw err; // you need to handle error
  }
 // console.log(res.statusCode);
 // console.log(res.headers);
  // data is Buffer instance
 // console.log(data.toString());
let  arr=JSON.parse( data.toString()).league.standard
let arr2=[]
arr.forEach(player => {

   if(player.teamId==="1610612747"){
    arr2.push(player)
   }
});
 response.send(arr2) 
});
})


app.get('/home/:teamName', function (request, response) {
let teamId=request.params.teamName
teamId=teamToIDs[teamId]
urllib.request('http://data.nba.net/10s/prod/v1/2018/players.json', function (err, data, res) {
  if (err) {
    throw err;
  }
let  arr=JSON.parse( data.toString()).league.standard
let arr2=[]
arr.forEach(player => {

   if(player.teamId===teamId){
    arr2.push(player)
   }
});
 response.send(arr2) 
});
})
*/