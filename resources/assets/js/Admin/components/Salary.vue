<style>
  .salary{
    list-style-type: none;
    padding: 0;
  }
  .salarycard{
    border: 1px solid #fff;
    background: #e8cfcf;
    padding: 10px;
  }
  .salarycard .text{
    max-width: 70%;
  }
  .delete{
    text-align: right;
  }
</style>
<template>
  <navbar></navbar>
   <div id="page-wrapper">
    <!-- Row Header -->
    <div class="row">
      <div class="col-lg-12">
        <h1 class="page-header">
          Salary
        </h1>
        <ol class="breadcrumb" style="margin-bottom: 5px;">
          <li><a href="#">Home</a></li>
          <li class="active">Salary</li>
        </ol>
      </div>
    </div>
    <!-- End Row -->

    <div class="row">
      <div class="col-lg-4 col-md-4 col-sm-12">
        <ul class="salary">
          <li class="" v-for="item in salary">
            <div class="col-lg-12 salarycard">
              <div class="col-lg-8">
                {{item.name}}
              </div>
              <div class="col-lg-4 delete">
                <button class="destroy" @click="removeTodo(item)">x</button>
              </div>
            </div>
          </li>
        </ul>
        <div class="form-group">
          <input type="text" name="salary" id="salary" class="form-control" placeholder="Enter New Salary" @keyup.enter="addSalary">
        </div>
      </div>
    </div>
  </div>
</template>


<script type="text/javascript">
  export default {
    ready: function(){
      this.getSalary();
    },
    data: function(){
      return {
          salary : [],
      }
    },
    methods:{
      addSalary: function(e){
        //this.salary.push({'name' : $(e.target).val()});
        // Add Salary
        var data = {
            '_csrf' : $('meta[name=csrf]').attr('content'),
            name : $(e.target).val()
          }
        $.ajax({
          method : 'POST',
          async: true,
          data: data,
          url : window.location.origin + "/admin/salary/add",
          success: function(res){
            this.salary.push({'name': data.name, id : res.id});
          }.bind(this)
        })
        $(e.target).val('');
      },
      getSalary: function(){
        $.ajax({
          method: 'GET',
          async : false,
          cache: false,
          url : window.location.origin + '/admin/salary',
          success: function(res){
            this.salary = res;
          }.bind(this)
        });
      },
      removeTodo: function(e){
        var data = {
          '_csrf' : $('meta[name=csrf]').attr('content'),
            id : e.id
        }
        $.ajax({
          method: 'DELETE',
          async : false,
          cache: false,
          data: data,
          url : window.location.origin + '/admin/salary/delete',
          success: function(res){
            this.salary.$remove(e)
          }.bind(this)
        });
      }
    },
    components:{
      navbar : require('./_navbar.vue')
    }
  }
</script>
