/** @jsx h */

import { h } from 'slate-test-helpers'

export default function (change) {
  change.addMark('bold')
}

export const input = (
  <state>
    <document>
      <paragraph>
        <link>wo<anchor />rd</link>
      </paragraph>
      <paragraph>
        <link>an<focus />other</link>
      </paragraph>
    </document>
  </state>
)

export const output = (
  <state>
    <document>
      <paragraph>
        <link>
          wo<anchor /><b>rd</b>
        </link>
      </paragraph>
      <paragraph>
        <link>
          <b>an</b><focus />other
        </link>
      </paragraph>
    </document>
  </state>
)
