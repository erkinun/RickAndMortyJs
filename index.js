import fetch from 'node-fetch'

const response = await fetch('https://rickandmortyapi.com/api/character/2')
const rick = await response.json()

console.log(rick)
