function $(selector){
    return document.querySelector(selector)
}
function $$(selector){
    return document.querySelectorAll(selector)
}


const createElament = (tagName,className , content) =>{
    const newElament = document.createElement(tagName)
          newElament.setAttribute("class" , className)
          newElament.innerHTML= `${content}`
          return newElament
}
