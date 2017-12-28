/**
 * Generated by Apache Flex Cross-Compiler from Namespace.as
 * Namespace
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('Namespace');
goog.require('XML');
goog.require('org.apache.flex.utils.Language');



/**
 * @constructor
 * @param {Object=} prefixOrUri
 * @param {Object=} uriValue
 */
Namespace = function(prefixOrUri, uriValue) {
  prefixOrUri = typeof prefixOrUri !== 'undefined' ? prefixOrUri : null;
  uriValue = typeof uriValue !== 'undefined' ? uriValue : null;
  if (!uriValue && prefixOrUri) {
    var /** @type {Object} */ uriVal = uriValue ? uriValue : prefixOrUri;
    if (org.apache.flex.utils.Language.is(uriVal, Namespace)) {
      this._prefix = org.apache.flex.utils.Language.as(uriVal, Namespace).prefix;
      this._uri = org.apache.flex.utils.Language.as(uriVal, Namespace).uri;
    } else if (this.isQName(uriVal)) {
      this._uri = org.apache.flex.utils.Language.string(uriVal.uri ? uriVal.uri : this._uri);
    } else {
      this._uri = uriVal.toString();
      if (this._uri == "")
        this._prefix = "";
    }
  } else if (uriValue) {
    if (this.isQName(uriValue)) {
      if (uriValue.uri)
        this._uri = org.apache.flex.utils.Language.string(uriValue.uri);
    } else {
      this._uri = uriValue.toString();
    }
    if (!this._uri) {
      if (!prefixOrUri)
        this._prefix = "";
      else
        throw new TypeError("invalid prefix");
    }
    else
      this._prefix = prefixOrUri.toString();
  }
};


/**
 * @private
 * @param {Object} val
 * @return {boolean}
 */
Namespace.prototype.isQName = function(val) {
  if (val == null)
    return false;
  if (val.hasOwnProperty("uri") && val.hasOwnProperty("localName") && val.hasOwnProperty("prefix"))
    return true;
  return false;
};


/**
 * @private
 * @type {string}
 */
Namespace.prototype._uri = "";


/**
 * @private
 * @type {string}
 */
Namespace.prototype._prefix = null;


/**
 * @export
 * @return {string}
 */
Namespace.prototype.toString = function() {
  return this.uri;
};


/**
 * @export
 * @override
 */
Namespace.prototype.valueOf = function() {
  return this;
};


Namespace.prototype.get__uri = function() {
  return this._uri;
};


Namespace.prototype.set__uri = function(value) {
  this._uri = value;
};


Namespace.prototype.get__prefix = function() {
  return this._prefix;
};


Namespace.prototype.set__prefix = function(value) {
  this._prefix = value;
};


Object.defineProperties(Namespace.prototype, /** @lends {Namespace.prototype} */ {
/** @export */
uri: {
get: Namespace.prototype.get__uri,
set: Namespace.prototype.set__uri},
/** @export */
prefix: {
get: Namespace.prototype.get__prefix,
set: Namespace.prototype.set__prefix}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
Namespace.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'Namespace', qName: 'Namespace', kind: 'class' }] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('Namespace', Namespace);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
Namespace.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'uri': { type: 'String', access: 'readwrite', declaredBy: 'Namespace'},
        'prefix': { type: 'String', access: 'readwrite', declaredBy: 'Namespace'}
      };
    },
    methods: function () {
      return {
        'Namespace': { type: '', declaredBy: 'Namespace', parameters: function () { return [  { index: 1, type: 'Object', optional: true },{ index: 2, type: 'Object', optional: true } ]; }},
        'toString': { type: 'String', declaredBy: 'Namespace'},
        'valueOf': { type: '*', declaredBy: 'Namespace'}
      };
    }
  };
};

//# sourceMappingURL=./Namespace.js.map