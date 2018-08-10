'use strict';

var Document = function(params) {
  params = params || {};

  this.name = params.name || '';
  this.group = '/api/v1/group/' + (params.group || '') + '/';
  this.do_email = params.do_email || true;
  this.signers_in_order = params.signers_in_order || true;
  this.signature_type = params.signature_type || 1;
  this.signers = params.signers || [];
  this.text = params.text || '';
  this.templatepdf = '/api/v1/templatepdf/' + (params.templatepdf || '') + '/';
  this.pdftext = params.pdftext || {};
};

Document.prototype.setName = function(name) {
  this.name = name;
  return this;
};

Document.prototype.setGroup = function(group) {
  this.group = '/api/v1/group/' + group + '/';
  return this;
};

Document.prototype.setDoEmail = function(doEmail) {
  this.do_email = String(doEmail);
  return this;
};

Document.prototype.setSignatureType = function(signatureType) {
  this.signature_type = signatureType;
  return this;
};

Document.prototype.setSigners = function(signers) {
  this.signers = signers;
  return this;
};

Document.prototype.addSigner = function(signer) {
  this.signers.push(signer);
  return this;
};

Document.prototype.setText = function(text) {
  this.text = text;
  return this;
};

Document.prototype.addText = function(text) {
  this.text += text;
  return this;
};

Document.prototype.setTemplatePDF = function(templatepdf) {
  this.templatepdf = '/api/v1/templatepdf/' + templatepdf + '/';
  return this;
};

Document.prototype.setPDFText = function(pdftext) {
  this.pdftext = pdftext;
  return this;
};

Document.prototype.addPDFText = function(label, value) {
  this.pdftext[label] = value;
  return this;
};

module.exports = Document;
