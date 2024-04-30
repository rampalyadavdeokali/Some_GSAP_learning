var main = document.querySelector('#main');
var cursor = document.querySelector('#cursor');
var i = document.querySelector("#image");

 main.addEventListener('mousemove',function(dets){
    

    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:1,
        ease:'back.out'

    }) 
})


i.addEventListener('mouseenter',function(){
    cursor.innerHTML = 'View More'
    gsap.to(cursor,{
        scale:2

})

})



i.addEventListener('mouseout',function(){
    gsap.to(cursor,{
        scale:0.5

})

})