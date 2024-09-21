function GID(id) {
    let element = document.getElementById(id)

    return element
}
function specialEncounter(id) {
    let encSpec = specialText[id]
    let encImg = specialImg[encSpec[1]]
    eText.innerText = encSpec[0]
    eImg.src = `./img/${encImg[0]}`
    eImg.alt = encImg[1]
}
function normalEncounter(id) {
    eText.innerText = text[id]
}

const eImg = GID('exploreImg') // control with eImg.src and eImg.alt
const eText = GID('exploreText') // control with eText.innerText
const eBtn = GID('exploreBtn') // control with eBtn.innerText
const distance = GID('stepCount') // control with distance.innerText
let steps = 0
distance.innerText = steps

let img = [
    ['spooky-forest.jpg', 'dark forest landscape'],
    ['spooky-path.jpg', 'wood path in the forest']
]
let specialImg = [
    ['foggy-cabin.jpg', 'cabin in the foggy woods'],
    ['spooky-path.jpg', 'wood path in the forest'],
    ['wreckage.jpg', 'the remains of a wrecked vehicle in the forest now covered in foliage and faded grafitti']
]
let text = [
    ['It\'s too late to turn back.'],
    ['The wind kicks up strongly for a moment and nearly knocks you over. Weird.'],
    ['Were those footsteps in the distance? No, better to pretend you didn\'t hear that.'],
    ['Leaves crunch softly beneath your tread. For a moment, you think you hear a voice, but it must have just been the wind.'],
    ['The trail that had been behind you is gone when you try to look back. There\'s just a wall of trees.'],
    ['There\'s a chill in the air like you\'ve never felt before.'],
    ['You hum a soft tune to try and keep your mind off of the dread crawling under your skin, but you\'re not really sure if it\'s working or not.'],
    ['A twig snaps nearby and you freeze in your tracks. Whatever it was skittered away with a sound you\'ve never heard before.'],
    ['You miss home. It was always so much warmer there, safe.'],
    ['On nights so dark and so cold, you surely shouldn\'t be in a place like this. It was unwise from the start.'],
    ['There are forces here outside of your control']
]
let specialText = [
    ['You spot a small cabin almost entirely obscured in the fog. The wind has gone silent, and the air weighs heavily on you as you step closer. The windows are heavily boarded up and scratches can be heard within. It would be best to forget what you saw through the tiny gap in the door.', 0],
    ['You encounter a wooden path. It gives you an odd sense of peace when you look at it, as though a soft voice is lulling you. You decide to keep following it.', 1],
    ['You emerge into an area with a large wrecked structure. It looks like it used to be some kind of vehicle. The forest has overtaken it now.', 2]
]
let encounterNum = text.length

function explore() {
    steps += 1
    distance.innerText = steps

    if (steps < 40) {
        eImg.src = './img/spooky-forest.jpg'
        if (steps == 5) {
            normalEncounter(1)
        } else if (steps == 10) {
            normalEncounter(2)
        } else if (steps == 15) {
            normalEncounter(3)
        } else if (steps == 20) {
            specialEncounter(0)
        } else if (steps == 25) {
            normalEncounter(4)
        } else if (steps == 30) {
            normalEncounter(5)
        } else if (steps == 35) {
            normalEncounter(6)
        } else {
            eText.innerText = 'You venture further into the dark.'
        }
    } else if (steps < 80) {
        eImg.src = './img/spooky-path.jpg'
        if (steps == 40) {
            specialEncounter(1)
        } else if (steps == 45) {
            normalEncounter(7)
        } else if (steps == 50) {
            normalEncounter(0)
        } else if (steps == 55) {
            normalEncounter(8)
        } else if (steps == 60) {
            specialEncounter(2)
        } else if (steps == 65) {
            normalEncounter(9)
        } else if (steps == 70) {
            normalEncounter(10)
        } else if (steps == 75) {
            normalEncounter(0)
        } else {
            eText.innerText = 'Your feet carry you forward, despite how heavy each step feels.'
        }
    } else {
        eText.innerText = 'Just when you felt your legs would give out, an opening appears in the treeline. An exit. It would be best to take it. More will await you in The Void soon.'
        eImg.src = `./img/exit.jpg`
        eImg.alt = 'a forest clearing with an opening in the treeline letting in light'
        eBtn.className += ' d-none'
    }
}
