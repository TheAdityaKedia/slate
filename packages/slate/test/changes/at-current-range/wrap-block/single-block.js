/** @jsx h */

import { h } from 'slate-test-helpers'

export default function (change) {
  change.wrapBlock('quote')
}

export const input = (
  <state>
    <document>
      <paragraph>
        <cursor />word
      </paragraph>
    </document>
  </state>
)

export const output = (
  <state>
    <document>
      <quote>
        <paragraph>
          <cursor />word
        </paragraph>
      </quote>
    </document>
  </state>
)
