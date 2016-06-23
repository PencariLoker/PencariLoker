var Utils = function(){
  this.version = "1.0";
  this.deleteServicesURL = window.location.origin + '/admin/company/delete';
  this.getCompanyURL = window.location.origin + '/admin/company/edit/';
  this.updateCompanyURL = window.location.origin + '/admin/company/edit/';
  this.csrf = $('meta[name=csrf]').attr('content');
}


Utils.prototype.deleteServices = function(data, callback) {
  data['_csrf'] = this.csrf;
  $.ajax({
    async: true,
    data: data,
    url : this.deleteServicesURL,
    method: 'DELETE',
    success: function(e){
      callback(e)
    }
  })
};


Utils.prototype.getCompany = function(data, callback) {
  $.ajax({
    async: true,
    data: data,
    url : this.getCompanyURL + data.id,
    method: 'GET',
    success: function(e){
      callback(e)
    }
  })
};


Utils.prototype.updateCompany = function(data, callback) {
  data['_csrf'] = this.csrf;
  $.ajax({
    async: true,
    data: data,
    url : this.updateCompanyURL,
    method: 'PUT',
    error: function(e){
      callback({status: 'error'});
    },
    success: function(e){
      callback(e)
    }
  })
};


exports.Utils = Utils;
