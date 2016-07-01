<style>
  .flatpickr-wrapper{
    display: none;
  }
</style>
<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/sweetalert/1.1.3/sweetalert.css">
  <navbar></navbar>
  <div id="page-wrapper">
    <!-- Row Header -->
    <div class="row">
      <div class="col-lg-12">
        <h1 class="page-header">
          Category
        </h1>
        <a style="cursor: pointer" @click="add">Add Category</a>
        <ol class="breadcrumb" style="margin-bottom: 5px;">
          <li><a href="#">Home</a></li>
          <li class="active">Category</li>
        </ol>
      </div>
    </div>
    <!-- End of Row -->

    <!-- Row List -->
    <div class="row">
      <div class="col-lg-4 col-md-4">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in arr">
              <td>
                {{item.name}}
              </td>
              <td>
                <i class="fa fa-trash" @click="remove(item)"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- End Row -->
  </div>
</template>


<script type="text/javascript">
  var swal = require('sweetalert');
  export default {
    ready: function(){
      console.log("Category Ready");
      this.list();
    },
    data: function(){
      return {
        arr: [],
      }
    },
    methods:{
      list: function(){
        var self = this;
        var handle  = function(e){
          self.arr = e;
        }
        $.ajax({
          method: 'GET',
          async: true,
          cache : false,
          url : window.location.origin + '/admin/category/list',
          success: function(e){
            handle(e);
          }
        })
      },
      _add: function(data){
        var self = this;
        var handle = function(res){
          self.arr.push(res.category);
          swal("Nice!", "You wrote: " + res.category.name, "success");
        }

        $.ajax({
          async: true,
          cache: false,
          data: {'name' : data},
          url : window.location.origin + '/admin/category',
          method : 'POST',
          success: function(e){
            handle(e);
          }
        });
      },
      add: function(){
        var self = this;
        var handle = function(e){
          self._add(e);
        }

        swal({
          title: "Add Category",
          text: "Add Category:",
          type: "input",
          showCancelButton: true,
          closeOnConfirm: false,
          animation: "slide-from-top",
          inputPlaceholder: "Write something"
        },
        function(inputValue){
          if (inputValue === false)
            return false;
          if (inputValue === "")
          {
            swal.showInputError("You need to write something!");
            return false;
          }
          handle(inputValue);
        });
      },
      _delete: function(e){
        console.log(e);
        swal("Ajax request finished!");
      },
      remove: function(item){
        var self = this;
        var handle = function(data){
          self.arr.$remove(item);
        }
        $.ajax({
          async: true,
          data: {'id' : item.id},
          url : window.location.origin + '/admin/category',
          method: 'DELETE',
          success: function(results){
            handle(results)
          }
        })
        //swal("Here's a message!");
      }
    },
    components:{
      navbar: require('./_navbar.vue')
    },
  }
</script>
