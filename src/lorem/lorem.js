// es6

import { loremIpsum } from 'lorem-ipsum'

function getP (number) {
  let loremOptions = {
    count: 1,
    format: 'html',
    units: 'paragraph',
    sentenceLowerBound: 10, // Min. number of words per sentence.
    sentenceUpperBound: 20 // paragraph(s), 'sentence(s)', or 'word(s)'
  }

  let element = []

  for (var i = 0; i < number; i++) {
    element.push(loremIpsum(loremOptions))
  }

  return element
}

function getPre (number) {
  let loremOptions = {
    count: 1,
    format: 'plain',
    units: 'paragraph',
    sentenceLowerBound: 5, // Min. number of words per sentence.
    sentenceUpperBound: 10
  }

  let element = []

  for (var i = 0; i < number; i++) {
    element.push('<pre>' + loremIpsum(loremOptions) + '</pre>')
  }

  return element
}

function getHeadline (key, number, minWords, maxWords) {
  let loremOptions = {
    count: 1,
    format: 'plain',
    units: 'sentence',
    sentenceLowerBound: minWords, // Min. number of words per sentence.
    sentenceUpperBound: maxWords
  }

  let element = []

  for (var i = 0; i < number; i++) {
    element.push('<' + key + '>' + loremIpsum(loremOptions) + '</' + key + '>')
  }

  return element
}

function getList (key, number) {
  let loremOptions = {
    count: 1,
    format: 'plain',
    units: 'sentence',
    sentenceLowerBound: 2, // Min. number of words per sentence.
    sentenceUpperBound: 4
  }

  let element = []

  for (var i = 0; i < number; i++) {
    let listItems = ''
    for (var i2 = 0; i2 < 5; i2++) {
      listItems += '<li>' + loremIpsum(loremOptions) + '</li>'
    }

    element.push('<' + key + '>' + listItems + '</' + key + '>')
  }

  return element
}

function getBlockquote (number) {
  let loremOptions = {
    count: 1,
    format: 'plain',
    units: 'paragraph',
    sentenceLowerBound: 5,
    sentenceUpperBound: 10
  }

  let element = []

  for (var i = 0; i < number; i++) {
    element.push('<blockquote>' + loremIpsum(loremOptions) + '</blockquote>')
  }

  return element
}

function getTable (number) {
  let loremOptions = {
    count: 1,
    format: 'plain',
    units: 'sentence',
    sentenceLowerBound: 1,
    sentenceUpperBound: 4
  }

  let element = []

  for (var i = 0; i < number; i++) {
    let table = []
    table.push(
      '<table>',
      '<tr>',
      '<th>' + loremIpsum(loremOptions) + '</th>',
      '<th>' + loremIpsum(loremOptions) + '</th>',
      '<th>' + loremIpsum(loremOptions) + '</th>',
      '<th>' + loremIpsum(loremOptions) + '</th>',
      '</tr>',
      '<tr>',
      '<td>' + loremIpsum(loremOptions) + '</td>',
      '<td>' + loremIpsum(loremOptions) + '</td>',
      '<td>' + loremIpsum(loremOptions) + '</td>',
      '<td>' + loremIpsum(loremOptions) + '</td>',
      '</tr>',
      '<tr>',
      '<td>' + loremIpsum(loremOptions) + '</td>',
      '<td>' + loremIpsum(loremOptions) + '</td>',
      '<td>' + loremIpsum(loremOptions) + '</td>',
      '<td>' + loremIpsum(loremOptions) + '</td>',
      '</tr>',
      '</table>'
    )
    element.push(table.join(''))
  }

  return element
}

export {getP, getPre, getHeadline, getList, getBlockquote, getTable}
