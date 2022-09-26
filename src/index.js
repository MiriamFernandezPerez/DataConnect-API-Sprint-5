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
    let random = Math.random();
    if (random<0.5){
        showJokes1();
        console.log('random1');
    }else{
        showJokes2();
        console.log('random Chuck');
    }
    changeBackground();
}

function showJokes1(){
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
        weatherIcon = response.data[0].weather.icon;
        weatherTemp = response.data[0].app_temp;
        console.log(weatherStatus);
        console.log(weatherIcon);
        console.log(weatherTemp);
        document.querySelector(".weatherIcon").src = `https://www.weatherbit.io/static/img/icons/${weatherIcon}.png`;
        document.querySelector("#weather").innerHTML = `| ${weatherTemp} º`
    })
	.catch(err => console.error(err));

//API CHISTES

function showJokes2(){
    const ApiUrl2 = 'https://api.chucknorris.io/jokes/random';
    const options3 = {
        method: 'GET'
    };

    fetch(ApiUrl2, options3)
        .then(response => response.json())
        .then(response => {
            answerOK = response.value;
            console.log(answerOK);
            document.querySelector("#textJoke").innerHTML = answerOK;
        })
        .catch(err => console.error(err));
        document.getElementById("score").style.visibility = "visible";
}

//BACKGROUND DINAMICO

function changeBackground(){
    // He guardado 3 svg de cada coloresSvg, hago elegir aleatoriamente conjuntos de 3
    // creando un array con el número del primer svg y luego le sumo 1 y 2 a los siguientes
    const coloresSvg = [1, 4, 7, 10, 13, 16];
    const random = coloresSvg[Math.floor(Math.random() * coloresSvg.length)];
    const random2 = random +1;
    const random3 = random +2;
    console.log(random, random2, random3);
    document.querySelector('.svgLeft').style.backgroundImage = `url('/img/icon${random}.svg')`;
    document.querySelector('.svgCenter').style.backgroundImage = `url('/img/icon${random2}.svg')`;
    document.querySelector('.svgRight').style.backgroundImage = `url('/img/icon${random3}.svg')`;
}