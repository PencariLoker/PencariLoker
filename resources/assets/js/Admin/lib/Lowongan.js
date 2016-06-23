var Lowongan = function(){
  this.version = "0.2";
  this.getUrl = window.location.origin;
  this.addLowonganURL = window.location.origin + '/admin/lowongan/add';
  this.deleteLownganURL = window.location.origin + '/admin/lowongan';
  this.csrf = $('meta[name=csrf]').attr('content');
}


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

module.exports = Lowongan;
