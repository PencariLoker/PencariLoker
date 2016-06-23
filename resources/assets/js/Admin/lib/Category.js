var Category = function(){
  this.getCategory = window.location.origin + "/admin/category/list";
}

Category.prototype.getCat = function(callback) {
  $.ajax({
    async: true,
    url : this.getCategory,
    method: 'GET',
    success: function(e){
      callback(e)
    }
  })
};

exports.Category = Category;
