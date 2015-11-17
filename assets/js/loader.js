$(document).ready(function(){

    // Find each element we should load
    $.each($("[data-load]"), function(index, el){
        $.ajax($(this).data('load'))
            .success(function(data){
                $(el).text(data);
                window.prettyPrint && prettyPrint();
            }).error(function(){
                $(el).text("Failed to load script");
            });
    });
});