/** @jsx h */

import { h } from 'slate-test-helpers'

export default function (change) {
  change.delete()
}

export const input = (
  <state>
    <document>
      <image>
        <anchor />{' '}<focus />
      </image>
    </document>
  </state>
)

export const output = (
  <state>
    <document />
  </state>
)
