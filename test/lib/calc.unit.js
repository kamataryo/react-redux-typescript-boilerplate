import * as calc from 'lib/calc'
import { expect } from 'chai'

describe('test of calc', () => {
  it('test of gravity center', () => {
    const p1 = { x: 0, y: 0, weight: 50 }
    const p2 = { x: 100, y: 100, weight: 150 }
    const gc = calc.gravityCenter(p1, p2)
    expect(gc.x).to.equal(75)
    expect(gc.y).to.equal(75)
  })
})
