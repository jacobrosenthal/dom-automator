import { analyze, createActions, createActionScript } from '../src'

describe('analyze', () => {
  it('should analyze a basic DOM string', () => {
    const input = '<html><body><p>Test</p></body></html>'
    const result = null

    expect(analyze(input)).toMatch(result)
  })
})

describe('createActions', () => {
  it('should analyze a basic DOM string', () => {
    // TODO
  })
})

describe('createActionScript', () => {
  it('should generate a script to execute an action', () => {
    // TODO
  })
})
