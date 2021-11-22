/*$('#load').on('click', function () {
   let teamName= $('#teamName').val()
   console.log(teamName);
  $.post('/home/lakers')
})

// function search(){
//     let teamName=document.getElementById('teamName')
//     $.post('/home') 
// }
*/
const source=$('#roster-template').html()
const template=Handlebars.compile(source)
const render = function(team){
    $('#roster').empty()
    let newHTML=template({players:team})
    $('#roster').append(newHTML)
}
const fetch = function(){
   let input=$('#input').val()
   console.log('/teams/'+input);
   $.get('/teams/'+input,function(players){
       render(players)
   })

}