/** @jsx h */

import { h } from 'slate-test-helpers'

export default function (change) {
  change.delete()
}

export const input = (
  <state>
    <document>
      <image>
        {' '}<anchor />
      </image>
      <paragraph>
        tw<focus />o
      </paragraph>
      <paragraph>
        three
      </paragraph>
    </document>
  </state>
)

export const output = (
  <state>
    <document>
      <paragraph>
        o
      </paragraph>
      <paragraph>
        three
      </paragraph>
    </document>
  </state>
)
