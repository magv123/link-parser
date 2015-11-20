var input = document.getElementById("link");
var ParseButton = document.getElementById("ParseButton");
var mediaContainer=document.getElementById("mediaContainer")

https://vine.co/v/iuwx7Mi9Emi

ParseButton.onclick = function(){
var link=input.value;
var parsed="";
if(isVine(link)){
  parsed=parseVine(link);

}
if(parsed){
  mediaContainer.innerHTML=parsed;
}


};
function isVine(link){
  return link.substr(18,7)==='vine';

}
function parseVine(link){
  var id=link.substr(32);
  return '<iframe width="560" height="315" src="https://vine.co/v/iudPhBgeVMt/embed/simple" width="600" height="600" frameborder="0""'
  id+
  '"frameborder=0" allowfullscreen></iframe>';
}
