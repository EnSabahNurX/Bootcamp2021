// const body = document.querySelector('body')
// const jump = () => {
//     console.log('Hi!')
// }
// body.addEventListener('click', jump)

// const word = 'banana'
// console.log(word.length)

// const fruit = ['banana', 'apple', 'pear']
// console.log(fruit.length)

// const balls = document.querySelectorAll('.ball')
// console.log(balls)

// Strings
// const string1 = 'Say Cheese,'
// const string2 = ' Ricardo'
// console.log(string1.concat(string2))

// // Arrays
// const array1 = [1, 2, 3]
// const array2 = [4, 5, 6]
// const newArray = array1.concat(array2)
// console.log(newArray)

// Join
// const textDisplay = document.querySelector('.text')
// const emotions = ['Happy', 'Sad', 'Confident']
// const newWord = emotions.join(' . ')


// textDisplay.innerHTML = newWord

// const textDisplay = document.querySelector('.text')

// Pop
// const movies = ['Argo', 'Aliens', 'Fear']
// console.log(movies)
// movies.pop()
// console.log(movies)
// textDisplay.innerHTML = movies

// Shift
// const movies = ['Clue', 'Wolf', 'Jumanji']
// console.log(movies)
// movies.shift()
// console.log(movies)
// textDisplay.innerHTML = movies

// Unshift
// const plays = ['Hamilton']
// console.log(plays)
// plays.unshift('Wicked', 'Cats')
// console.log(plays)
// textDisplay.innerHTML = plays

// Push
// const actors = ['Scarlet']
// console.log(actors)
// actors.push('Rhianna', 'Sia')
// console.log(actors)
// textDisplay.innerHTML = actors

// Slice (do not change the original array)
// const artists = ['Shakira', 'Snoop', 'Sia', 'Beyonce', 'Swift']
// console.log(artists.slice(1, 2))
// console.log(artists.slice(3))
// const show = artists.slice(0, 3)
// textDisplay.innerHTML = show

// Splice (change the original array)
// const movies = ['Elf', 'Annie', 'Hero 6', 'Jumanji', 'Argo']
// console.log(movies)
// // movies.splice(1, 1)
// console.log(movies)
// // movies.splice(2, 1, 'Hook')
// movies.splice(2, 0, 'Hook')
// console.log(movies)
// textDisplay.innerHTML = movies

// forEach()
// const names = ['Ania', 'Bobby', 'Melanie']
// names.forEach(name => console.log(name))

// some()
// const hearts = Array.from(document.querySelector('.heart'))
// console.log(hearts)
// const isHeartBroken = hearts.some(heart => heart.hasChildNodes())
// console.log(isHeartBroken)


// map() (create a new array)
// const ages2018 = [21, 45, 56, 32, 45, 2]
// const ages2021 = ages2018.map(age => age + 3)
// console.log(ages2021)

// const housemates2018 = [
//     {
//         name: 'Ahmed',
//         age: 24
//     },
//     {
//         name: 'Ellen',
//         age: 35
//     },
//     {
//         name: 'Woody',
//         age: 30
//     }
// ]

// const housemates2021 = housemates2018.map(housemate => housemate.age + 3)
// console.log(housemates2021)


// filter() (create a new array)
// const shows = ['Lupin', 'Cobra Kai', '24', 'Mr. Robot']
// const displayShows = shows.filter(word => word.length <= 5)

// const shows = [
//     {
//         name: 'Lupin',
//         series: 1,
//         episodes: 5
//     },
//     {
//         name: 'Cobra Kai',
//         series: 3,
//         episodes: 30
//     },
//     {
//         name: '24',
//         series: 5,
//         episodes: 50
//     },
//     {
//         name: 'Mr. Robot',
//         series: 3,
//         episodes: 24
//     }
// ]
// const displayShows = shows.filter(show => show.series > 2)
// console.log(displayShows)

// reduce()
// const scores = [3, 5, 6, 7]
// const total = scores.reduce((accumulator, currentValue) => accumulator + currentValue)
// console.log(total)

// const scores = [34, 56, 24, 31]
// const total = scores.reduce((i, j) => i + j)
// console.log(total)

// every()
// const testResults = [45, 34, 76, 89, 45, 65, 67]
// const hasClassPassed = testResults.every(result => result < 30)
// console.log(hasClassPassed)

// const animals = ['cat', 'rat', 'dob', 'mouse']
// const length3 = animals.every(result => result.length == 3)
// console.log(length3)

// split()
// const sentence = 'I will have what she is having'

// console.log(sentence.split(' ')[5])

// const sentence = 'Come on baby light my fire'
// const thirdWord = sentence.split(' ')[3]
// console.log(thirdWord)


// Array work

// function getCelsius(f) {
//     return f.map(far => (far - 32) * (5 / 9))
// }
// console.log(getCelsius([23, 140, 212, 41]))


// function checkForFalsey(array) {
//     return array.some(test => !test)
// }

// console.log(checkForFalsey([11, NaN, [], 'Angels']))
// console.log(checkForFalsey([11, 32, 654]))


// function getTotal(array) {
//     return array.reduce((acu, cur) => acu + cur.length, 0)
// }
// console.log(getTotal(['Rabbit', 'Football', 'Cracking']))

// const length3 = animals.every(result => result.length == 3)
// function checkSquares(array) {
//     return array.every(value => Math.sqrt(value) % 1 === 0)
// }
// console.log(checkSquares([9, 16, 81, 83]))


// function getWords(array, size) {
//     return array.filter(result => result.length >= size)
// }
// console.log(getWords(['Florida', 'dog', 'phone'], 5))


// function getValues(array) {
//     return array.map(value => parseFloat(value))
// }
// console.log(getValues(['23cm', '5.6cm', '1000cm']))


// Using 'split' and 'filter' to count the number of bowels in a sentence.
// function getVowelCount(array) {
//     return array.toLowerCase().split('').filter(letter => ['a', 'e', 'i', 'o', 'u'].includes(letter)).length
// }
// console.log(getVowelCount('in West Philadelphia, born and raised'))


// function capitalise(sentence) {
//     return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.substr(1)).join(' ')
// }
// console.log(capitalise('the queens gambit'))