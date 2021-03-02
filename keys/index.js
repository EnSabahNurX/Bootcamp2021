const circle = document.querySelector('.circle')
const ballPosition = document.querySelector('.text')
const mouth = document.querySelector('#mouth')
let xAxis = 50
let yAxis = 80
// Keys
// function control(event) {
//     if (event.key === 'ArrowLeft') {
//         console.log('Pressed left')
//     } else if (event.key === 'ArrowRight') {
//         console.log('Pressed right')
//     } else if (event.key === 'ArrowUp') {
//         console.log('Pressed up')
//     } else if (event.key === 'ArrowDown') {
//         console.log('Pressed down')
//     }
// }
// document.addEventListener('keydown', control)


// Switch
function control1(event) {
    switch (event.key) {
        case 'ArrowLeft':
            // console.log('Pressed left')
            xAxis -= 25
            circle.style.left = xAxis + 'px'
            break;
        case 'ArrowRight':
            // console.log('Pressed right')
            xAxis += 25
            circle.style.left = xAxis + 'px'
            break;
        case 'ArrowUp':
            // console.log('Pressed up')
            yAxis -= 25
            circle.style.top = yAxis + 'px'
            break;
        case 'ArrowDown':
            // console.log('Pressed down')
            yAxis += 25
            circle.style.top = yAxis + 'px'
            break;

        default:
            // console.log('Key not recognised')
            break;
    }
    // console.log(xAxis, yAxis)
    ballPosition.innerHTML = `Ball position: x: ${xAxis} | y: ${yAxis} `
}
document.addEventListener('keydown', control1)
ballPosition.innerHTML = `Ball position: x: ${xAxis} | y: ${yAxis} `


function control2(event) {
    switch (event.key) {
        case 'ArrowUp':
            // console.log('pressed up')
            mouth.classList.add('happy-mouth')
            mouth.classList.remove('sad-mouth')
            break;
        case 'ArrowDown':
            // console.log('pressed down')
            mouth.classList.add('sad-mouth')
            mouth.classList.remove('happy-mouth')
            break

        default:
            // console.log('Key not recognised')
            break;
    }
}
document.addEventListener('keydown', control2)


// .sort()

// const planets = ['Mars', 'Jupiter', 'Uranus', 'Earth']
// console.log(planets.sort())

// const ages = [32, 45, 21, 13, 78, 99]
// console.log(ages.sort())


// .include()
// const books = ['Alf', 'Life od Pi', 'Power of Now']
//  console.log(books.includes('Alf'))


// .contains()
// const body = document.querySelector('body')
// // const circle = document.querySelector('.circle')

// console.log(body.contains(circle))

