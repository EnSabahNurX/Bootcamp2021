const bob = document.querySelector('.face')

// let count = 0

// function moveBob() {
//     bob.style.left = count + 'px'
//     count += 50
//     // console.log('Hi!')
// }

// bob.addEventListener('click', moveBob)




// function alertMe() {
//     console.log('clicked')
// }
// bob.addEventListener('click', alertMe)



// let count = 0
// function toggleColor() {
//     bob.classList.toggle('red')
//     count++
//     console.log(count)
//     if (count >= 10) {
//         bob.removeEventListener('click', toggleColor)
//     }
// }
// bob.addEventListener('click', toggleColor)


// let height = 0
// function moveCircle() {
//     height += 50
//     bob.style.top = height + 'px'
//     if (height > 300) {
//         bob.removeEventListener('click', moveCircle)
//         console.log('Maximum height reached!')
//     }
// }

// bob.addEventListener('click', moveCircle)
// console.log(document.querySelector('div'))


// Math.random() Random number between 0 to < 1
// Math.floor() Round down to nearest integer
// Math.ceil() Round up to nearest integer
// Math.round() Round to nearest integer


// const Tetrominoes = ['LTetromino', 'ZTetromino', 'XTetromino']
// // console.log(Math.random() * Tetrominoes.length) // 0 to < 3

// console.log(Tetrominoes[Math.floor(Math.random() * Tetrominoes.length)])


// const drinksMenu = ['Vodka Tonic', 'White Wine', 'Beer', 'Mocktail', 'Red Wine', 'Whisky Bourbon']
// console.log(drinksMenu[Math.floor(Math.random() * drinksMenu.length)])


// Date
// const today = new Date()
// const date = today.getDate()
// const day = today.getDay()
// const fullYear = today.getFullYear()
// const hours = today.getHours()
// const isoString = today.toISOString()
// // console.log(isoString)
// const Christmas = new Date('2021-12-24T23:59:59.999Z')
// const miliseconds = Christmas - today
// console.log(miliseconds)
// const minutes = miliseconds / 60000
// console.log(minutes)


// setTimeout()
// const time = 3000
// function showText() {
//     bob.innerHTML = 'Hey dude!'
// }
// setInterval(showText, time);
// function deleteText() {
//     bob.innerHTML = ''
// }
// // setTimeout(deleteText, 10000)
// setTimeout(function () { bob.innerHTML = '' }, 10000)

// setTimeout(function(){bob.style.display = 'none'}, 5000)


// setInterval()
// const text = 'Alert 🚨'
// const time = 2000
// function showAlert() {
//     const textDisplay = document.createElement('div')
//     textDisplay.innerHTML = text
//     bob.appendChild(textDisplay)
// }
// setInterval(showAlert, time)


// function printName() {
//     console.log('Ricardo')
// }
// const timerId = setInterval(printName, 5000)
// console.log(timerId)
// clearInterval(timerId)

// let height = 0

// function moveBob() {
//     height += 2
//     bob.style.top = height + 'px'
//     console.log(height)
//     if (height === 250) {
//         clearInterval(timerID)
//     }
// }

// let timerID = setInterval(moveBob, 15)


// Classes
// class Rectangle {
//     constructor(height, width) {
//         this.height = height
//         this.width = width
//     }
// }
// const newRectangle = new Rectangle(300, 100)
// console.log(newRectangle)
// console.log(newRectangle.height)
// console.log(newRectangle.width)

// class Ghost {
//     constructor(name, speed, color, startingPoint) {
//         this.name = name
//         this.speed = speed
//         this.color = color
//         this.startingPoint = startingPoint
//     }
// }
// const blinky = new Ghost('blinky', 300, 'red', '4')
// const inky = new Ghost('inky', 250, 'blue', '10')
// const pinky = new Ghost('pinky', 350, 'pink', '20')
// const clyde = new Ghost('clyde', 450, 'orange', '15')

// console.log(blinky.speed)