// image src in array
const images = [
    'images/photo1.jpg',
    'images/photo2.jpg',
    'images/photo3.jpg',
    'images/photo4.jpg',
    'images/photo5.jpg'
]

// set time interval for accessing array elemetns
let imgIndex = 0;
const imgElement = document.getElementById('slider-img');
setInterval( () =>{
    if(imgIndex >= images.length){
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    imgElement.setAttribute('src', imgUrl);
    console.log(imgUrl);
    imgIndex++;
}, 1000)