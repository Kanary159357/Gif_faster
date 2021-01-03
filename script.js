$(document).ready(function(){
    var xOffset = 10;
    var yOffset = 30;
    $("img:regex(src, .*\.gif)").hover(function(e){
        console.log($(this).attr('src'));
        //if((/.*\.gif/.test($(this).attr('src')))){
             
        $("body").append("<p id='preview'><img src='"+$(this).attr('src') +"' width='400px' /></p>");								 
        $("#preview")
            .css("top",(e.pageY - xOffset) + "px")
            .css("left",(e.pageX + yOffset) + "px")
            .fadeIn("fast");	
       // }
    }, 
    function(){
        $("#preview").remove()
    }
    )

    $("img:regex(src, .*\.gif)").mousemove(function(e){
        $("#preview")
            .css("top", (e.pageY-xOffset)+"px")
            .css("left", (e.pageX+yOffset)+"px");
        }
    );

});



