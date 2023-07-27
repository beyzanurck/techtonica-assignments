//CHECKBOX
const olOfInstructions = document.querySelector("ol")
olOfInstructions.id = "instructions"

const itemOfInstructions  = olOfInstructions.getElementsByTagName("li")
for(let i = 0; i <  itemOfInstructions.length; i++){
    const item = itemOfInstructions[i]

    const checkbox = document.createElement("input")
    checkbox.type ="checkbox"
    //item.classList.add("checked") you always have a line through the text
    
    checkbox.addEventListener("click", function () {
        item.classList.toggle("checked");
    });

    item.prepend(checkbox)
}

//NEW ITEM TO THE OTHER SPAGETTI RECIPE
const divOfOtherRecipe = document.getElementById("otherRecipe")

const webLink = {
    "Pasta and Noodle" : "https://www.foodandwine.com/pasta-noodles/pasta",
    "Chicken Pasta" : "https://www.budgetbytes.com/category/recipes/pasta/"
}

for (let x in webLink){
    const itemToATag = document.createElement("a")
    itemToATag.setAttribute("href", webLink[x])
    itemToATag.innerHTML = x
    itemToATag.style.display = "block"
    divOfOtherRecipe.appendChild(itemToATag)
}

//CREATE BUTTON TO SEE COMMENTS
const buttonComments = document.createElement("button")
buttonComments.setAttribute("type", "button")
buttonComments.textContent = "Click me to see what people said about the food"

const divComments = document.createElement("div")
divComments.style.marginTop = "20px"
divComments.style.marginBottom = "20px"

divOfOtherRecipe.appendChild(divComments)
divComments.appendChild(buttonComments)

buttonComments.addEventListener("click", () => {
    //CREATE P TAGS FOR COMMENTS
    let comments = ["My daughter wanna eat it everyday!!", "Should I cook the sauce first?", "I love that!"]

    for(let i = 0; i < comments.length; i++){
        const pTag = document.createElement("p")
        pTag.textContent = comments[i]
        divComments.appendChild(pTag)
    }
})








 