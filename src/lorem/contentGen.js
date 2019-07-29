// es6

import {
  getP,
  getHeadline,
  getPre,
  getList,
  getBlockquote
} from './lorem'

function fillContent (parsed) {
  let keys = Object.keys(parsed)

  keys.forEach(key => {
    let item = parsed[key]
    let count = item.count

    switch (key) {
      case 'p':
        item.values = getP(count)
        break
      case 'pre':
        item.values = getPre(count)
        break
      case 'h1':
        item.values = getHeadline(key, count, 3, 6)
        break
      case 'h2':
        item.values = getHeadline(key, count, 4, 8)
        break
      case 'h3':
        item.values = getHeadline(key, count, 5, 10)
        break
      case 'ol':
        item.values = getList(key, count, 5, 10)
        break
      case 'ul':
        item.values = getList(key, count, 5, 10)
        break
      case 'blockquote':
        item.values = getBlockquote(count)
        break
      default:
        console.error('Aucune balise correspondante')
        break
    }

    parsed[key] = item
  })

  return toHTML(parsed)
}

function toHTML (parsed) {
  let keys = Object.keys(parsed)
  let compArray = []

  keys.forEach(key => {
    let item = parsed[key]
    compArray = compArray.concat(item.values)
  })

  return shuffle(compArray)
}

function shuffle (array) {
  return array.sort(() => Math.random() - 0.5)
}

export {
  fillContent
}
