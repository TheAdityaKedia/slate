/** @jsx h */

import { h } from 'slate-test-helpers'

export const input = (
  <state>
    <document>
      <paragraph>
        one
      </paragraph>
      <paragraph>
        two
      </paragraph>
      <paragraph>
        three
      </paragraph>
    </document>
  </state>
)

export const output = `
one
two
three
`.trim()
