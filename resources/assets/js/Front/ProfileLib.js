var Profile = function(){

}

Profile.prototype.save = function(data, callback) {
  $.ajax({
    async: true,
    cache: false,
    url : window.location.origin + '/profile/data',
    data: data,
    method : 'POST',
    error: function(){
      callback({status: 'error'});
    },
    success: function(e){
      callback(e);
    }
  })
};

Profile.prototype.uploadCV = function(formData, callback) {
  $.ajax({
    async: true,
    url : window.location.origin + '/profile/uploadCV',
    method : 'POST',
    data: formData,
    processData: false,  // tell jQuery not to process the data
    contentType: false,   // tell jQuery not to set contentType
    success: function(e){
      callback(e);
    }
  })
};

module.exports = Profile;
