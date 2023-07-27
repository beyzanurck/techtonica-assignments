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







 