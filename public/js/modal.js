$(function(){
  $('img#linkedinBtn').on({
    "mouseover" : function() {
    this.src = '/img/linkedinlogo/Retina/Sign-In-Large---Hover.png';
    },
    "mouseout" : function() {
      this.src='/img/linkedinlogo/Retina/Sign-In-Large---Default.png';
    }
  })
});