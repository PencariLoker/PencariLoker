var Company = function(){
  this.version = "1.0";
  this.getAllCompanyURL = window.location.origin + '/admin/company/list';
  this.deleteServicesURL = window.location.origin + '/admin/company/delete';
  this.getCompanyURL = window.location.origin + '/admin/company/edit/';
  this.updateCompanyURL = window.location.origin + '/admin/company/edit/';
  this.csrf = $('meta[name=csrf]').attr('content');
}
Company.prototype.getAllCompany = function(callback) {
  $.ajax({
    async: true,
    url : this.getAllCompanyURL,
    method: 'GET',
    success: function(e){
      callback(e)
    }
  })
};
Company.prototype.deleteServices = function(data, callback) {
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


Company.prototype.getCompany = function(data, callback) {
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


Company.prototype.updateCompany = function(data, callback) {
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

Company.prototype.postCompany = function(data, callback) {
  $.ajax({
    async: true,
    data: data,
    url : window.location.origin + '/admin/company/add',
    method: 'POST',
    success: function(e){
      callback(e)
    }
  })
};

exports.Utils = Company;
