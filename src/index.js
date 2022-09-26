const ApiUrl = "https://icanhazdadjoke.com/";

const myHeader = new Headers({
        'Accept': 'application/json'
    });

const options = { 
    method: 'GET',
    headers: myHeader,
    mode: 'cors',     
    cache: 'default'  
};

let answerOK;

function request(){
    fetch(ApiUrl, options)
    .then(result => result.json())
    .then(answer => {
        answerOK = answer.joke;
        console.log(answerOK);
        document.querySelector("#textJoke").innerHTML = answerOK;
    });
    document.getElementById("score").style.visibility = "visible";
}

const reportJokes=[];

function reportJoke(value){
    let report = {
        scoreJoke: value,
        stringJoke: answerOK,
        dateJoke: new Date().toISOString()
    }
    reportJokes.push(report);
    console.log(reportJokes);
    document.getElementById("score").style.visibility = "hidden";
}
