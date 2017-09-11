/** @jsx h */

import { h } from 'slate-test-helpers'

export default function (change) {
  change.delete()
}

export const input = (
  <state>
    <document>
      <image>
        <focus />
      </image>
      <paragraph>
        one
      </paragraph>
      <paragraph>
        two<anchor />
      </paragraph>
    </document>
  </state>
)

export const output = (
  <state>
    <document>
      <paragraph>
        <cursor />
      </paragraph>
    </document>
  </state>
)
