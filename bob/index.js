const bob = document.querySelector('.face')
let count = 0

function moveBob() {
    bob.style.left = count + 'px'
    count += 50
    // console.log('Hi!')
}

bob.addEventListener('click', moveBob)