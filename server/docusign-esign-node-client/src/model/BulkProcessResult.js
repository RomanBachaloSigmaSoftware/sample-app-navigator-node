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
    define(['ApiClient', 'model/BulkSendBatchError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BulkSendBatchError'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.BulkProcessResult = factory(root.Docusign.ApiClient, root.Docusign.BulkSendBatchError);
  }
}(this, function(ApiClient, BulkSendBatchError) {
  'use strict';


  /**
   * The BulkProcessResult model module.
   * @module model/BulkProcessResult
   */

  /**
   * Constructs a new <code>BulkProcessResult</code>.
   * @alias module:model/BulkProcessResult
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BulkProcessResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BulkProcessResult} obj Optional instance to populate.
   * @return {module:model/BulkProcessResult} The populated <code>BulkProcessResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('errors')) {
        obj['errors'] = ApiClient.convertToType(data['errors'], [BulkSendBatchError]);
      }
      if (data.hasOwnProperty('listId')) {
        obj['listId'] = ApiClient.convertToType(data['listId'], 'String');
      }
      if (data.hasOwnProperty('success')) {
        obj['success'] = ApiClient.convertToType(data['success'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/BulkSendBatchError>} errors
   */
  exports.prototype['errors'] = undefined;
  /**
   * 
   * @member {String} listId
   */
  exports.prototype['listId'] = undefined;
  /**
   * 
   * @member {String} success
   */
  exports.prototype['success'] = undefined;



  return exports;
}));

