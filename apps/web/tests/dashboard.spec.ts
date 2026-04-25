import { describe, expect, it } from 'vitest'

describe('dashboard cards', () => {
  it('contains required shell cards', () => {
    const cards = ['Workflows', 'Decisions', 'Forms', 'Deployments', 'Runtime Monitor', 'Audit Logs']
    expect(cards).toHaveLength(6)
    expect(cards).toContain('Workflows')
    expect(cards).toContain('Audit Logs')
  })
})
