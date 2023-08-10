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


