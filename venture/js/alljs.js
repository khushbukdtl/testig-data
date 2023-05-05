$(document).ready(function(){ 

    $(".tab-center").click(function(){
        var aac = $(this).attr('id');
        console.log(aac);
        $('.tab-contation').css('display','none');
        $('.'+ aac).show();
    });
    $('.form-check-input').on('click', function(){
      var  isChecked = $(this).is(':checked')
      var addgreen = $(this).parents()[0];
       $(addgreen).removeClass("green");
      
        if(isChecked)
        { 
            var green = $(addgreen).addClass("green");
            var value=  $(this).val();
            var vshow = $(".check_contain").append(`<li class=myclass data= "${value}">` + value+ "</li>").html();
            console.log(vshow);
        }
        else
        { 
           var hide= $(addgreen).removeClass("green");
           var uncheckvalue = $(this).val();
            $(`.myclass[data="${uncheckvalue}"]`).remove();
        }
            $(".btn").click(function(){
                var aa = $(this).attr('id');
                $('.tab-contation').css('display','none');
                 var showtab = $('.'+aa).show();
            });
            $("#step-2").click(function(){
                 $(".Requirements").addClass("opecity");
                });
            $("#step-3").click(function(){
                 $(".Solution").addClass("opecity");
                });   
       })  
});