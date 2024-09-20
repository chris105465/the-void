function GID(id) {
    let element = document.getElementById(id)

    return element
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const eImg = GID('exploreImg') // control with eImg.src and eImg.alt
const eText = GID('exploreText') // control with eText.innerText
const eBtn = GID('exploreBtn') // control with eBtn.innerText
const distance = GID('stepCount') // control with distance.innerText
let steps = 0
distance.innerText = steps

let img = [
    ['spooky-forest.jpg', 'dark forest by Rosie Sun on Unsplash'],
    ['foggy-cabin.jpg', 'cabin in the foggy woods by m wrona on Unsplash']
]
let text = [
    ['Leaves crunch softly beneath your tread. For a moment, you think you hear a voice, but it must have just been the wind'],
    ['There\'s a chill in the air like you\'ve never felt before.'],
    ['You miss home. It was always so much warmer there, safe.'],
    ['You hum a soft tune to try and keep your mind off of the dread crawling under your skin, but you\'re not really sure if it\'s working or not.'],
    ['A twig snaps nearby and you freeze in your tracks. Whatever it was skittered away with a sound you\'ve never heard before.']
]
let specialText = [
    ['You spot a small cabin almost entirely obscured in the fog. The wind has gone silent, and the air weighs heavily on you as you step closer. The windows are heavily boarded up and scratches can be heard within. It would be best to forget what you saw through the tiny gap in the door.', 1]
]
let encounterNum = text.length

function explore() {
    let encounter = getRandomInt(encounterNum)
    steps += 1
    distance.innerText = steps
    let encText = text[encounter]

    if (steps == 20) {
        eText.innerText = specialText[0][0]
        eImg.src = `./img/${img[specialText[0][1]][0]}`
        eImg.alt = img[specialText[0][1]][1]
    } else {
        eText.innerText = encText
        eImg.src = `./img/${img[0][0]}`
        eImg.alt = img[0][1]
    }
}