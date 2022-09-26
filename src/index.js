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
    })
    .catch(err => console.error(err));
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

//API WEATHER
const weatherUrl = 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=40.4195&lon=-3.7034';
const options2 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6c21a4a72dmshfad1c7af2660b8dp13f930jsn0f1ab4693026',
		'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
	}
};

let weatherStatus;

fetch(weatherUrl, options2)
	.then(response => response.json())
	.then(response =>{
        weatherStatus = response.data[0].weather.description;
        // console.log(response);
        console.log(weatherStatus);
        document.querySelector("#weather").innerHTML = weatherStatus;
    })
	.catch(err => console.error(err));