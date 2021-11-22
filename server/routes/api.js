const express=require('express')
const router=express.Router()
//const request= require('request')
const teamToIDs = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756"
}
var urllib = require('urllib');
let players=[]
urllib.request('http://data.nba.net/10s/prod/v1/2018/players.json',  (err,data, res) => {
    players=JSON.parse(data.toString()).league.standard
})
router.get('/teams/:teamName',(req,res)=>{
let teamID=teamToIDs[req.params.teamName]
let team=players
.filter(d=>d.teamId===teamID &&d.isActive)
.map(d=>{return{firstName: d.firstName,lastName:d.lastName,jersey:d.jersey,pos:d.pos}})
res.send(team)
})

module.exports=router