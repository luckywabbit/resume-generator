
let anthropic = "./data/anthropic.json"
let cvs = "./data/cvs.json"
let fidelityB = "./data/Fidelity-BOS.json"
let fidelityP = "./data/Fidelity-Prov.json"
let hubspot = "./data/hubspot.json"
let serviceNow = "./data/ServiceNow.json"
let upwork = "./data/upwork.json"

let allBuzzwords = "./data/allBuzzwords.json"

let buzzwords = []
let arrayLength = 0
let randInt = 0


let items = document.querySelectorAll("li");



function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}


let buzzWordUpdate = (e) => {
    let randInt = randomIntFromInterval(0, buzzwords[0].length)
    e.srcElement.innerHTML = Object.values(buzzwords[0][randInt]);
    console.log(randInt)
}



document.querySelector('section').addEventListener('click', function (e) {
    buzzWordUpdate(e);
});




let fetchJSON = (source) => {
    fetch(source)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            buzzwords.push(json)

            arrayLength = buzzwords[0].length
            items.forEach(item => {
                let randInt = randomIntFromInterval(0, buzzwords[0].length)
                item.innerHTML = Object.values(buzzwords[0][randInt]);
            })

            //document.querySelector('#main').innerHTML = Object.values(buzzwords[0][randInt]);

            console.log(buzzwords[0].length)
            console.log(Object.values(buzzwords[0][randInt]))
            console.log(randInt)

        })

}








// fetchJSON(anthropic)
// fetchJSON(cvs)
// fetchJSON(fidelityB)
// fetchJSON(fidelityP)
// fetchJSON(hubspot)
// fetchJSON(serviceNow)
// fetchJSON(upwork)

fetchJSON(allBuzzwords)






// const rndInt = randomIntFromInterval(1, buzzwords.length)
// console.log(buzzwords[5])