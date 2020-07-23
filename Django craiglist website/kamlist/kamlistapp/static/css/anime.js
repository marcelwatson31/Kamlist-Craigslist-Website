let tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 750
})


tl.add({
    targets: 'section div',
    width: '100%',
    backgroundColor: '#FFF68F',
    delay: anime.stagger(100)

})

tl.add({
    targets: 'section div',
    width: '90%',
    backgroundColor: '#A9A9A9'
    
})


tl.add({
    targets: 'h1',
    top: '20%',
    opacity: 1,
    width: '90%',
    duration: 1000,
    color: 'blue'
    
}, '-=1600')

let rotationEvent = anime({
    targets: 'section',
    scaleY: '2',
    scaleX: '2',
    translateX: '40%',
    
    rotate: '225',
    duration: 5000,
    autoplay: false
})

document.querySelector('button').addEventListener('click', () => {
    rotationEvent.play();
})
