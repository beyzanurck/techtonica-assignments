const olOfInstructions = document.querySelector("ol")
olOfInstructions.id = "instructions"

const itemOfInstructions  = olOfInstructions.getElementsByTagName("li")
for(let i = 0; i <  itemOfInstructions.length; i++){
    const item = itemOfInstructions[i]

    const checkbox = document.createElement("input")
    checkbox.type ="checkbox"

    item.prepend(checkbox)
}

