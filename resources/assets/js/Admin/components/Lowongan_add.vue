<template>
<link rel="stylesheet" href="/css/flatpickr.min.css">
<navbar></navbar>
<div id="page-wrapper">
  <div class="row">
    <div class="col-lg-12">
      <h1 class="page-header">Add Job</h1>
      <ol class="breadcrumb" style="margin-bottom: 5px;">
        <li><a href="#">Home</a></li>
        <li><a href="#" v-link="{path : '/'}">Job</a></li>
        <li class="active">Add</li>
      </ol>
    </div>
  </div>

  <div class="row">
    <div class="col-md-8">
      <div class="form-group">
        <label for="">Title</label>
        <input type="text" name="title" id="inputTitle" class="form-control" placeholder="Job Title" v-model="lowongan.name">
      </div>

      <div class="form-group">
        <label for="">Job Description</label>
        <textarea name="" id="jobdescription" cols="30" rows="40" class="form-control" v-model="lowongan.description"></textarea>
      </div>

      <div class="form-group">
        <label for="banner">Banner</label>
        <input type="file" name="bannner" id="banner" class="form-control">
      </div>
    </div>

    <div class="col-md-4">
      <div class="form-group">
        <label for="">Job Category</label>
        <select name="category" id="inputCategory" class="form-control" v-model="lowongan.category">
          <option value="">Pilih Salah Satu</option>
          <option v-for="item in category" v-bind:value="item.id">{{item.name}}</option>
        </select>
      </div>

      <div class="form-group">
        <label for="">Company</label>
        <select name="company" id="inputCompany" class="form-control" required="required" v-model="lowongan.company">
          <option value="">Select Company</option>
          <option v-for="item in company" v-bind:value="item.id">{{item.name}}</option>
        </select>
      </div>

      <div class="form-group">
        <label for="inputRegion">Region/Province</label>
        <input type="text" name="region" id="inputRegion" class="form-control" v-model="lowongan.region" placeholder="Sumetara Utara">
      </div>

      <div class="form-group">
        <label for="">Due Date</label>
        <input type="text" name="duedate" id="inputDuedateBaruLagi" class="calendar form-control" v-model="lowongan.duedate" placeholder="YYYY-MM-DD">
      </div>

      <div class="form-group">
        <label for="">Salary</label>
        <input type="number" name="" id="input" class="form-control" placeholder="Salary" v-model="lowongan.salary">
      </div>

    </div>
  </div>

  <div class="row">
    <div class="col-lg-12 col-md-12">
      <button type="button" class="btn btn-primary" @click="save">Save</button>
    </div>
  </div>
</div>
</template>


<script type="text/javascript">
  var Utils = require('../Utils').Utils;
  var cat = require('../lib/Category').Category;
  var flatpickr = require('flatpickr');
  var moment = require('moment');
  var summernote = require('summernote');
  export default {
    ready: function(){
      var self = this;
      var utils = new Utils;
      var category = new cat;
      utils.getAllCompany(function(e){
          self.company = e;
      });
      category.getCat(function(e){
        self.category = e;
      });
      var setDueDate = function(a){
        self.lowongan.duedate = a;
      }
      flatpickr('#inputDuedateBaruLagi')
        .set('onChange', function(d){
            setDueDate(moment(d).format("YYYY-MM-DD HH:mm:ss"));
        }.bind(this));

      $("#jobdescription").summernote({
        minHeight: 200
      });
    },
    data: function(){
      return {
        company: {},
        category : {},
        lowongan :{
          name: '',
          description : '',
          duedate : '',
          category : '',
          company : '',
          banner: '',
          region : '',
        }
      }
    },
    methods:{
      save: function(){
        var data;
        var self = this;
        data = this.lowongan;
        data['_csrf'] = $('meta[name=csrf]').attr('content');
        $.ajax({
          url : window.location.origin + '/admin/lowongan/add',
          async: false,
          cache :false,
          data: data,
          method: 'POST',
          success: function(res){
            self.$router.go({path : '/lowongan'});
          }
        });
        console.log(data);
      }
    },
    components:{
      navbar: require('./_navbar.vue')
    },
  }
</script>
