//COUNTS TIME
const timer = document.getElementById("timer");
let seconds = 0;
let score = 0;
function updateCounter() {
    seconds++;
    timer.textContent = `${seconds} second${seconds !== 1 ? 's' : ''}`;
}

//GETS IMAGE PATH
//browser does not allow to access file system.
const path = []
for (let index = 0; index < 8; index++) {
    path.push(`/pics/${index+1}.jpg`)
}
const picsPath = path.concat(path)

//ADDS IMAGES INTO IMG TAGS
const imgTags = document.getElementsByClassName("image")
console.log(imgTags)

for (let i = 0; i < imgTags.length; i++) {
    imgTags[i].src = picsPath[i]
}

//TURNS ALL PICTURES TO THE WHITE
for (let i = 0; i < imgTags.length; i++) {
    imgTags[i].src = `/pics/0.0.PNG`
}


//CREATES THE PATHS OF ARRAY THAT INCLUDES RANDOMLY SORTED ELEMENTS
function randomPaths(arr){

    let randomPicsPath = [];
    let randomArr = []
    console.log(randomPicsPath[15])
    while(randomPicsPath.length < 16){
        let random_num = Math.floor(Math.random() * (16 - 0) + 0);
    
        if(!randomArr.includes(random_num)){
            randomArr.push(random_num) //adds the index into the array
            randomPicsPath.push(arr[random_num])
        }
    }

    return randomPicsPath
}

let sources = randomPaths(picsPath)

// for (let i = 0; i < imgTags.length; i++) {
//     imgTags[i].src = sources[i]
// }

//MAKES KEY-VALUE PAIRS CREATING IMAGES OBJ
const images = {}
sources.forEach((element, index) => {
    images[index] = [element]
});


//CLICKS UNTILL FINDING PAIRS
 const imgArray = [...imgTags];

let flippedCards = [];
let flippedIndexes = [];
let matchedIndexes = [];

imgArray.forEach((img, i) => {
    img.addEventListener("click", () => {

        if (!flippedIndexes.includes(i) && !matchedIndexes.includes(i)) {
            img.src = images[i][0];
            flippedCards.push(images[i][0]);
            flippedIndexes.push(i);
            
            if (flippedCards.length === 2) {
                if (flippedCards[0] === flippedCards[1]) {
                    console.log("Matched!");
                    matchedIndexes.push(flippedIndexes[0], flippedIndexes[1]);
                    flippedCards = [];
                    flippedIndexes = [];
                } else {
                    console.log("Not matched!");
                    setTimeout(() => {
                        flippedIndexes.forEach(index => {
                            imgArray[index].src = "/pics/0.0.PNG";
                        });
                        flippedCards = [];
                        flippedIndexes = [];
                    }, 500);
                }
            }
        }

        if(matchedIndexes.length === 16){
            score = seconds;
            clearInterval(timer2)
        }

        console.log(score)
    });
});

//RESET THE GAME
function resetGame(){
    matchedIndexes = [];
    flippedCards = [];
    flippedIndexes = [];
    imgArray.forEach((img, i) => {
        img.src = "/pics/0.0.PNG";
    });

    seconds = 0;
    clearInterval(timer2)
}

let timer2;
const button =  document.getElementById("reset")
button.addEventListener("click", ()=>{
    resetGame()
    resultDiv.style.visibility = "hidden"
    timer2 = setInterval(updateCounter, 100);
})


//CREATES A FORM
const form = document.createElement("form")
const resultDiv = document.getElementById("result")
resultDiv.appendChild(form)
resultDiv.style.visibility = "hidden"

//RESULT BUTTON
const orderButton =  document.getElementById("order")
orderButton.addEventListener("click", ()=>{
    resultDiv.style.visibility = "visible"
})

//CREATES THINGS FOR FORM
const labelOfName = document.createElement("label")
form.appendChild(labelOfName)
labelOfName.setAttribute("for", "full-name")
labelOfName.textContent = "Full Name: "

const input = document.createElement("input")
form.appendChild(input)
input.setAttribute("type", "text")
input.setAttribute("id", "full-name")
input.setAttribute("name", "full-name")

const buttonSubmit = document.createElement("button");
buttonSubmit.setAttribute("type", "submit");
buttonSubmit.id = "submit_button"
buttonSubmit.textContent = "Submit";
form.appendChild(buttonSubmit);

const listOfPeople = document.createElement("p")
form.appendChild(listOfPeople)

form.addEventListener("submit", (event) => {
    event.preventDefault();
    listOfPeople.textContent = `${input.value}: ${score}`;
});



