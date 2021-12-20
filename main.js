var SpeechRecognition= window.webkitSpeechRecognition;
var r = new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    r.start();
}
r.onresult= function run(event){
    console.log (event);
    var Content= event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML=Content;

}