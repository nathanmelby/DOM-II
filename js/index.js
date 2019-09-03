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


const darkMode = document.querySelector('body');
darkMode.addEventListener("keydown", e => {
    darkMode.style.backgroundColor = "#696969";
    darkMode.style.color = "white";
});

// const lightMode = document.querySelector('body');
// lightMode.addEventListener("keydown", e => {
//     lightMode.style.backgroundColor = "white";
//     lightMode.style.color = "black";
// })


    

const headerClick = document.querySelector('.intro');
headerClick.addEventListener('click', e => {
    headerClick.innerHTML = `Click count: ${event.detail}`;
});
