
/**
 * Prevent circular dependencies.
 */

import './block'
import './inline'

/**
 * Dependencies.
 */

import Data from './data'
import Node from './node'
import MODEL_TYPES from '../constants/model-types'
import generateKey from '../utils/generate-key'
import { List, Map, Record } from 'immutable'

/**
 * Default properties.
 *
 * @type {Object}
 */

const DEFAULTS = {
  data: new Map(),
  key: null,
  nodes: new List(),
}

/**
 * Document.
 *
 * @type {Document}
 */

class Document extends new Record(DEFAULTS) {

  /**
   * Create a new `Document` with `attrs`.
   *
   * @param {Object|Document} attrs
   * @return {Document}
   */

  static create(attrs = {}) {
    if (Document.isDocument(attrs)) return attrs

    const document = new Document({
      key: attrs.key || generateKey(),
      data: Data.create(attrs.data),
      nodes: Node.createList(attrs.nodes),
    })

    return document
  }

  /**
   * Determines if the passed in paramter is a Slate Document or not
   *
   * @param {*} maybeDocument
   * @return {Boolean}
   */

  static isDocument(maybeDocument) {
    return !!(maybeDocument && maybeDocument[MODEL_TYPES.DOCUMENT])
  }

  /**
   * Get the node's kind.
   *
   * @return {String}
   */

  get kind() {
    return 'document'
  }

  /**
   * Is the document empty?
   *
   * @return {Boolean}
   */

  get isEmpty() {
    return this.text == ''
  }

  /**
   * Get the concatenated text `string` of all child nodes.
   *
   * @return {String}
   */

  get text() {
    return this.getText()
  }

}

/**
 * Pseduo-symbol that shows this is a Slate Document
 */

Document.prototype[MODEL_TYPES.DOCUMENT] = true

/**
 * Mix in `Node` methods.
 */

Object.getOwnPropertyNames(Node.prototype).forEach((method) => {
  if (method == 'constructor') return
  Document.prototype[method] = Node.prototype[method]
})

/**
 * Export.
 *
 * @type {Document}
 */

export default Document
