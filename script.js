var box1 = document.querySelectorAll(".my-service-row_left");
var box2 = document.querySelectorAll(".my-service-row_right");

gsap.registerPlugin(ScrollTrigger);

box1.forEach(function(element) {
    gsap.to(element, {
        x: -300,
        //duration: 8,
        scrollTrigger: {
            trigger: element,
            start: "top 103%",
             end: "top 10%",
            scrub: true,
            stagger: 3.5,
             toggleActions: "play none none none"
        }
    })

})



box2.forEach(function(element) {

    gsap.to(element, {
            x: 300,
           // duration: 8,
            scrollTrigger: {
                trigger: element,
                start: "top 103%",
                 end: "top 10%",
                scrub: true,
                stagger: 3.5,
                 toggleActions: "play none none none"
            }
        })
})  
// gsap.to(".my-service-row_right", {
//     x: 300,
//     duration: 8,
//     scrollTrigger: {
//         trigger: ".my-service-row_right",
//         start: "top 100%",
//         // end: "top 30%",
//         scrub: 1,
//         stagger: 3.5,
//          toggleActions: "play none none none",
//         markers: true
//     }
// })




var ham_icon = document.getElementById('check');
var nav = document.querySelector('.navbar');
let intro = document.querySelector('.intro');
let navitems = document.querySelector('.navitems');
ham_icon.addEventListener('click', function() {
    navitems.classList.toggle('active');
    navitems.classList.toggle('view');
   // navitems.style.width="30px";
})
   

