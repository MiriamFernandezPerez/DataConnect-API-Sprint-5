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

function request(){
    fetch(ApiUrl, options)
    .then(result => result.json())
    .then(answer => {
        const answerOK = answer.joke;
        console.log(answerOK);
        document.querySelector("#textJoke").innerHTML = answerOK;
    });
}


