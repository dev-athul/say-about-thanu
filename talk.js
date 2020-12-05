var talkDiv = document.getElementsByClassName('text')[0];
var button=document.getElementsByClassName('speak')[0];

const speechRecognition = window.SpeechRecognition||window.webkitSpeechRecognition;
const recognition = new speechRecognition();
button.addEventListener('click', ()=>{
    recognition.start();
})

recognition.onstart=function(){
    console.log('speak now');
}

recognition.onresult=function(event){
    const transcript=event.results[event.resultIndex][0].transcript;
    talkDiv.textContent=transcript;
    readOutLoad(transcript);
}

function readOutLoad(message){
    const speech = new SpeechSynthesisUtterance();
    speech.volume=1;
    speech.rate=1;
    speech.text='I dont know, what you are speaking'
    if(message.includes('do you know me')){
        speech.text='Yeah, I do. You are Athulya from Mukkam, BA Economics student in GCK';
    }
    if(message.includes('boyfriend')){
        speech.text='Your boyfriend is Athul, a boy from thrissur. You started relation with him in february, this year. He loves you very much'
    }  
    window.speechSynthesis.speak(speech);
}