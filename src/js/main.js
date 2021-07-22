



let showcaseImg = document.querySelector('.showcaseImg')

let img1 = "dist/img/plumb1.jpg"
let img2 = "dist/img/plumb2.jpg"
let img3 = "dist/img/plumb3.jpg"


// var waypoint = new Waypoint({
//     element: document.getElementsByClassName('plumbus_hero-cta1'),
//     handler: function(direction) {
//         console.log('Scrolled to waypoint!')
//     }
// })


let galleryShow = () => {
    console.log("Gallery Starting")
    setInterval(() => {
        console.log("Gallery Started")
        setTimeout(() => {
            showcaseImg.src = img2
            console.log("img2")
        }, 1500);
        setTimeout(() => {
            showcaseImg.src = img3
            console.log("img3")
        }, 1500);
        setTimeout(() => {
            showcaseImg.src = img1
            console.log("img1")
        }, 1500);
        
    }, 45000);
}

galleryShow()