const { add2 } = require('./index')
const { logger } = require('@GeoPlatform/gp-lib')

describe('add2', () => {
  it('handles positive numbers', () => {
    const result = add2(2)

    expect(result).toEqual(4)
  })

  it('handles negative numbers', () => {
    const result = add2(-3)

    expect(result).toEqual(-1)
  })

  it('handles strings', () => {
    const result = add2('the number is ')

    expect(result).toEqual('the number is 2')
  })

  it('handles four', () => {
    const result = add2(4)

    expect(result).toEqual('no more!')
  })

  it('should have gp-lib', () => {
    expect(logger.log).toBeDefined()
  })
})
