const tagsEl = document.getElementById("tags");
const textArea = document.getElementById("textarea");

textArea.addEventListener("keyup", (e)=>{
    createTags(e.target.value);

    if (e.key === "Enter") {
        setTimeout(()=>{
            e.target.value = "";
        }, 10)
        
        randomSelect();
    }
})

function createTags(input) {
    const tags = input.split(",").filter(tag => tag.trim() !== "").map(tag => tag.trim());
    //filtering empty strings and white spaces in a string.
    tagsEl.innerHTML= "";
    
    tags.forEach(tag => {
        const tagEl = document.createElement("span");
        tagEl.classList.add("tag");
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);
    });   

}


function randomSelect(){
    const times = 30;
    const interval = setInterval(()=>{
        const randomTag = pickRandomTag ();
        highlightTags(randomTag);
        setTimeout(()=>{
            unHighlightTags(randomTag);
        },100)

    }, 100)

    setTimeout(()=>{
        clearInterval(interval);
        setTimeout(()=>{
        const randomTag = pickRandomTag ();
        highlightTags(randomTag);
        }, 100)
    }, times * 100)
}


function pickRandomTag (){
    const tags = document.querySelectorAll(".tag")
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTags(tag){
    tag.classList.add("highlight");
}

function unHighlightTags(tag){
    tag.classList.remove("highlight");
}

