/** @jsx h */

import { h } from 'slate-test-helpers'

export const schema = {}

export const input = (
  <state>
    <document>
      <paragraph />
    </document>
  </state>
)

export const output = {
  kind: 'state',
  document: {
    kind: 'document',
    data: {},
    nodes: [
      {
        kind: 'block',
        type: 'paragraph',
        isVoid: false,
        data: {},
        nodes: [
          {
            kind: 'text',
            ranges: [
              {
                kind: 'range',
                text: '',
                marks: [],
              }
            ]
          }
        ]
      }
    ]
  }
}
