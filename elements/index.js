// .createElement()
const square = document.createElement('div')
const body = document.querySelector('body')
const image = document.createElement('img')
// console.log(square)
body.appendChild(square)
// console.log(image)
body.appendChild(image)
// console.log(body)

// .setAttribute()
image.setAttribute('src', 'img/Face.png')
image.setAttribute('data-id', 4)
// console.log(body)

// .getAttribute()
const imagePath = image.getAttribute('src')
const imageId = image.getAttribute('data-id')

console.log(imagePath)
console.log(imageId)

