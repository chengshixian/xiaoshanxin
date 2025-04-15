
function search_jibing() {
    $("#jibing-module-menus").html("正在搜索....");
    var url ="../web/index.php?c=site&a=entry&do=alljibing&op=jibing&m=xsx_v3";
    $.ajax({  
        type: "POST",  
        url: url,  
        dataType: "html",  
        data: {keyword_jibing: $.trim($("#search-kwd").val()),op:'jibing'},  
        success: function(dat){ 
        $("#jibing-module-menus").html(dat);
      }
  });
}
function select_jibing(o) {
    // console.log(o);
    $("#bianma").val(o.bianma);
    $("#id").val(o.id);
    $("#jibing").val(o.name);
    $("#search-kwd").val(o.name);
    $("#jibing-module-menus").html("");
    $("#jibingModal").modal("hide");
    $(".modal-backdrop").remove();
}
