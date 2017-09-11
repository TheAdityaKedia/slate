/** @jsx h */

import { h } from 'slate-test-helpers'

export default function (change) {
  change.deleteForward()
}

export const input = (
  <state>
    <document>
      <paragraph>
        word<cursor />
      </paragraph>
      <paragraph>
        another
      </paragraph>
    </document>
  </state>
)

export const output = (
  <state>
    <document>
      <paragraph>
        word<cursor />another
      </paragraph>
    </document>
  </state>
)
