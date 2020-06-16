$(document).ready(function(){
  $("#xport").click(function(){
    $("#export").modal({ keyboard: false });
    $("#export").modal('toggle');
    $("#export").modal('show');
  });

});
