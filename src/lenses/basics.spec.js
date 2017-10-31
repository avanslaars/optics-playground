const expect = require('chai').expect
const L = require('partial.lenses')
// const R = require('ramda')

describe('Basic Lens Stuff', () => {
  const data = {
    titles: [
      {language: 'en', text: 'Title'},
      {language: 'sv', text: 'Rubrik'}
    ]
  }

  it('Gets the target property', () => {
    const result = L.get(L.prop('titles'), data)
    expect(result).to.eql(data.titles)
  })

  it('Composes to get the first item', () => {
    const lens = L.compose(L.prop('titles'), L.index(0))
    const result = L.get(lens, data)
    expect(result).to.eql(data.titles[0])
  })

  it('automatically composes from an array ', () => {
    const lens = [L.prop('titles'), L.index(1)]
    const result = L.get(lens, data)
    expect(result).to.eql(data.titles[1])
  })

  it('automatically handles prop and index values ', () => {
    const lens = ['titles', 0]
    const result = L.get(lens, data)
    expect(result).to.eql(data.titles[0])
  })
})
