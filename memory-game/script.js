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
    imgTags[i].src = `/pics/0.PNG`
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
    images[index] = element
});

console.log(images)
const imgArray = [...imgTags];

imgArray.forEach((img,i) => {
    img.addEventListener("click", () => {
        img.src = images[i];
    });
});