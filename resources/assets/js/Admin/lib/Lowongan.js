$(function () {
  $.ajaxSetup({
    headers: {
            'X-XSRF-TOKEN': $('meta[name=csrf]').attr('content')
    }
  });
});
var Lowongan = function(){
  this.version = "0.2";
  this.getUrl = window.location.origin;
  this.base = window.location.origin + '/admin/lowongan';
  this.addLowonganURL = window.location.origin + '/admin/lowongan/add';
  this.deleteLownganURL = window.location.origin + '/admin/lowongan';
  this.csrf = $('meta[name=csrf]').attr('content');
}

Lowongan.prototype.getLowongan = function(callback) {
  $.ajax({
    method: 'GET',
    async : false,
    cache : false,
    url : this.base,
    success: function(res){
      callback(res);
    }
  })
};

Lowongan.prototype.deleteLowongan = function(data, callback) {
  data['_csrf'] = this.csrf;
  $.ajax({
    async: true,
    data: data,
    method: 'DELETE',
    url : this.deleteLownganURL,
    success: function(e){
      callback(e);
    }
  })
};

Lowongan.prototype.updateLowongan = function(data, callback) {
  data['_csrf'] = this.csrf;
  $.ajax({
    async: true,
    data: data,
    url : this.base,
    method : 'PUT',
    error: function(res){
      callback({'status' : 'errror'});
    },
    success: function(res){
      callback(res)
    }
  });
};

Lowongan.prototype.getById = function(id, callback) {
  $.ajax({
    async  : true,
    method : 'GET',
    url    : this.base + '/edit/' + id,
    success: function(result){
      callback(result)
    }
  });
};

Lowongan.prototype.uploadBanner = function(formData, callback) {
  formData.append('_csrf', this.csrf);
  $.ajax({
    data : formData,
    url : window.location.origin + '/api/image',
    cache: false,
    async: true,
    method :'POST',
    processData: false,
    success: function(e){
      callback(e);
    }
  });
};

module.exports = Lowongan;
