$(function(){
  $('img#linkedinBtn').on({
    "mouseover" : function() {
    this.src = '/img/linkedinlogo/Retina/Sign-In-Large---Hover.png';
    },
    "mouseout" : function() {
      this.src='/img/linkedinlogo/Retina/Sign-In-Large---Default.png';
    }
  })
  $('a#share').click(function(){
  	$.ajax({
  		url:'/share',
  		// dataType:"json",
  		data: JSON.parse('{"test" : "hola"}'),
  		async:true,
  		cache:false,
  		timeout:30000,
  		headers:{"Content-Type": "application/json", "x-li-format": "json","Access-Control-Allow-Origin":"http"},
  		success:function(e){
  			console.log(e);
  		},
  		error:function(e,f,g){
  			console.log(f);
  		},
  		type:'GET'
  	});
  })
});