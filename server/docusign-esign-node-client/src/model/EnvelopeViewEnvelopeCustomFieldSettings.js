/**
 * Docusign eSignature REST API
 * The Docusign eSignature REST API provides you with a powerful, convenient, and simple Web services API for interacting with Docusign.
 *
 * OpenAPI spec version: v2.1
 * Contact: devcenter@docusign.com
 *
 * NOTE: This class is auto generated. Do not edit the class manually and submit a new issue instead.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.EnvelopeViewEnvelopeCustomFieldSettings = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The EnvelopeViewEnvelopeCustomFieldSettings model module.
   * @module model/EnvelopeViewEnvelopeCustomFieldSettings
   */

  /**
   * Constructs a new <code>EnvelopeViewEnvelopeCustomFieldSettings</code>.
   * @alias module:model/EnvelopeViewEnvelopeCustomFieldSettings
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>EnvelopeViewEnvelopeCustomFieldSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EnvelopeViewEnvelopeCustomFieldSettings} obj Optional instance to populate.
   * @return {module:model/EnvelopeViewEnvelopeCustomFieldSettings} The populated <code>EnvelopeViewEnvelopeCustomFieldSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('showEnvelopeCustomFields')) {
        obj['showEnvelopeCustomFields'] = ApiClient.convertToType(data['showEnvelopeCustomFields'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} showEnvelopeCustomFields
   */
  exports.prototype['showEnvelopeCustomFields'] = undefined;



  return exports;
}));

