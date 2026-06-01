

// window.addEventListener('load', function () {
//     console.log('the page is fully loaded, including all resources!');
// })

// document.body.setAttribute('style', "font-family:sans-serif; margin:0 ; background-color:beige; padding:20px;")

// const mainHeading = document.querySelector('#main-heading');
// const otherHeading = document.querySelector('#other-heading');
// const excitedText = document.createElement('span');

// mainHeading.textContent = "write your word"
// let change = 0
// let word = []

// document.addEventListener("keydown", ()=>{
//     if(event.key === "Backspace"){
//         // const newWord = word.slice( 0,-1)
//         // word = newWord

//         word.pop()
//     }else{
//         word.push(event.key) 
//     }

//     if(word.length === 0){
//         mainHeading.textContent = "write your word"
//     }
//     mainHeading.textContent = word.join('')
// })


// otherHeading.textContent = Math.floor(Math.random() * 10000)



// function initials(firstName, lastName) {
//     return firstName[0].toUpperCase() + lastName[0].toUpperCase();
// }

// function reverseString(str) {
//     return str.split('').reverse().join('');
// }






const btn = document.querySelector('.btn')

btn.addEventListener('click',(e)=>{
    btn.classList.add('btn-animate')
})

btn.addEventListener('animationend',(e)=>{
    if(e.animationName === 'animateBtn'){
        btn.classList.remove('btn-animate')
    }
})