document.getElementById("contact-form").addEventListener("submit", (event)=>{
    event.preventDefault();

    const email = document.getElementById("e-mail").value
    const fullName = document.getElementById("full-name").value
    const comment = document.getElementById("comment").value


    console.log(`YOU HAVE A MESSAGE FROM \n\n${fullName} - ${email}: \n\n${comment}\n`)
})