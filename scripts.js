// EXTRA 1 Crea con JavaScript la funzionalità per rimuovere il link "twitter" 
// sotto alla sezione "Altro" nell'elemento 
// "aside". Deve avvenire al caricamento della pagina, automticamente.

// function to remote the link
function removeTwitterLink(){
    elem = document.querySelector("aside div:last-of-type li:nth-child(2) a")
    elem.remove()
}

// calling the function
removeTwitterLink()


// EXTRA2 Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento 
// padre dal DOM cliccando sul link "Continua a leggere".

// function to remove the parent of an element, given an element
function removeParentElement(ele){
    let parent = ele.parentElement
    parent.remove()
}   

// elements that will be given the event to call the removeParenteElement function
const jumboLink = document.querySelector(".jumbotron a")
const otherLinks = document.querySelectorAll("a.stretched-link")

// adding the event to the jumboLink
jumboLink.addEventListener("click", () => {
    removeParentElement(jumboLink)
})

// adding the event to the other links
for (let l of otherLinks){
    console.log(l)
    l.addEventListener("click", () => {
        removeParentElement(l)
    })
}

// EXTRA3 Crea con JavaScript la funzionalità per creare un alert col 
// nome dell'autore ogni volta che il cursore passa sopra l'autore del post.

// function to create the alert, given a specific element
function authorHover(ele){
    const it = ele.innerText
    alert(`L'autore di questo post è ${it}`)
}

// retrieving every author link
const authorsLinks = document.querySelectorAll(".blog-post .blog-post-meta a")

// adding the eventListener on mouseover
for (let l of authorsLinks){
    l.addEventListener("mouseover", () =>{
        authorHover(l)
    })
}
