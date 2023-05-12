import { analyze, createAgent, createActionScript } from '../src'

describe('analyze', () => {
  it('should analyze a basic DOM string', () => {
    const input = '<html><body><p>Test</p></body></html>'
    const result = null

    expect(analyze(input)).toEqual(result)
  })
})

describe('createAgent', () => {
  it('should create actions for a basic prompt', () => {
    // TODO
  })
})

describe('createActionScript', () => {
  it('should generate a script to execute an action', () => {
    // TODO
  })
})
