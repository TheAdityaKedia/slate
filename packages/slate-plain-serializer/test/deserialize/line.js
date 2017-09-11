/** @jsx h */

import { h } from 'slate-test-helpers'

export const input = `
one
`.trim()

export const output = (
  <state>
    <document>
      <line>
        one
      </line>
    </document>
  </state>
)
