/** @jsx h */

import { h } from 'slate-test-helpers'

export default function (state) {
  return state
    .change()
    .setNodeByKey('a', {
      data: { thing: 'value' }
    })
    .state
    .change()
    .undo()
    .state
}

export const input = (
  <state>
    <document>
      <paragraph key="a">
        one
      </paragraph>
    </document>
  </state>
)

export const output = input
