// Your code goes here

/*
* [ ] `mouseover` --> make links grow larger
* [ ] `keydown`
* [ ] `wheel` --> Images
* [ ] `drag / drop` --> headers??
* [ ] `load`
* [ ] `focus`
* [ ] `resize`
* [ ] `scroll`
* [ ] `select`
* [ ] `dblclick`
'contextmenu'-right click brings up something

const imgScale = document.querySelector(".card-img-top");
imgScale.addEventListener("mouseover", (e) => {

  console.log(e);
  imgScale.style.transform = 'scale(1.1)';
  imgScale.style.transition = ' transform 0.5s';
});
*/


// const linkScale = document.querySelectorAll(".main-navigation .container .nav-container .nav .nav-link");
// linkScale.addEventListener('mouseover', (e) => {
//     linkScale.style.transform = 'scale(1.2)';
//     linkScale.style.transition = 'transform 0.3s';
//     linkScale.style.color = '@button-bg';
// });

//Nav links scale on hover
const linkScaleUp = document.querySelectorAll(".nav-link");
linkScaleUp.forEach(item => {
    item.addEventListener('mouseenter', event => {
        item.style.color = "#17A2B8";
        item.style.transform = 'scale(1.2)';
        item.style.transition = 'transform 0.3s';
    })

    item.addEventListener('mouseleave', event => {
        item.style.color = "#212529";
        item.style.transform = 'scale(1.0)';
        item.style.transition = 'transform 0.3s';
    })
});

//DARK MODE
const darkMode = document.querySelector('body');
darkMode.addEventListener("keydown", e => {
    darkMode.style.backgroundColor = "#121212";
    darkMode.style.color = "white";
});

// const lightMode = document.querySelector('body');
// lightMode.addEventListener("keydown", e => {
//     lightMode.style.backgroundColor = "white";
//     lightMode.style.color = "black";
// })


    
//Replaces header section with a click counter
const headerClick = document.querySelector('.intro');
headerClick.addEventListener('click', e => {
    headerClick.innerHTML = `Click count: ${event.detail}`;
});


//Prevents images from being saved by blocking the context menu from pulling up
const noImgSave = document.querySelectorAll('img');
noImgSave.forEach(item => {
    item.addEventListener('contextmenu', e => {
    e.preventDefault();
    })
});










//DoubleClick

const doubleClick = document.querySelector('.logo-heading');
doubleClick.addEventListener('dblclick', e => {
        doubleClick.style.fontSize = '6rem';
        doubleClick.style.color = 'dodgerblue';
});


//resize
window.addEventListener('resize', event => {
    const changeTitle = document.querySelector('h2');
    changeTitle.style.color = "tomato";
    });







//mouse over

const mouseFooter = document.querySelector('.footer p');
mouseFooter.addEventListener('mouseover', e => {
    mouseFooter.style.fontSize = '5rem';
    mouseFooter.style.color = 'darkolivegreen';
});


//zoom element on scroll
const busImg = document.querySelector('.bus'); 
busImg.addEventListener('wheel', e => {
    e.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    busImg.style.transform = `scale(${scale})`;
})
let scale = 1;
el.onwheel = e