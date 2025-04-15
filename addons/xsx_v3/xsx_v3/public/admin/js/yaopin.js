function search_yaopin(id) {
    // 更新对应弹框的搜索区域
    console.log(666);
    console.log(id);
    const searchKeyword = $.trim($("#search-kwd_" + id).val());
    $("#yao-module-menus_" + id).html("正在搜索....");

$.ajax({
    type: "POST",
    url: "../web/index.php?c=site&a=entry&do=allyaopin&op=yaopin&m=xsx_v3",
    dataType: "html",
    data: { keyword_yaopin: searchKeyword, op: 'yaopin', id: id },
    success: function(dat) {
        $("#yao-module-menus_" + id).html(dat);
    }
});
}

function select_yaopin(data, id) {
    console.log(data);
    console.log(id);
    // 填充选中的药品信息到相应字段
    $("#yaopin_" + id).val(data.sname);
    $("#sid_" + id).val(data.sid);
    $("#yaopin_leixin_" + id).val(data.yaopin_leixin);
    $("#search-kwd_" + id).val(data.sname);
    $("#yao-module-menus_" + id).html("");
    $("#yaoModal_" + id).modal("hide");
    $(".modal-backdrop").remove();
}

function addType() {
    let timestamp = new Date().getTime(); // 使用时间戳作为唯一标识符
    $('#datas').append(`
        <div class="col-sm-12 data-item" style="margin-bottom: 10px;padding-left: 0;padding-right: 0;" id="item_${timestamp}">
            <div class="input-group form-group col-sm-6" style="margin: 0px;padding-left: 0;float: left;">
                <span class="input-group-addon">药品名称</span>
                <input type="text" name="registerdate[ypname][]" class="form-control" value="" id="yaopin_${timestamp}" readonly>
                <input type="hidden" name="registerdate[sid][]" id="sid_${timestamp}" value=""> 
                <input type="hidden" name="registerdate[yaopin_leixin][]" id="yaopin_leixin_${timestamp}" value=""> 
                <div class="input-group-btn">
                    <button class="btn btn-default" type="button" data-toggle="modal" data-target="#yaoModal_${timestamp}">选择药品</button>
                </div>
            </div>

            <div class="input-group form-group col-sm-6" style="margin: 0px;padding-left: 0;float: left;">
                <span class="input-group-addon">数量</span>
                <input type="text" name="registerdate[num][]" required class="form-control" value="">
            </div>

           <!--- <div class="input-group form-group col-sm-6" style="margin: 0px;padding-left: 0;float: left;">
                <span class="input-group-addon">用法</span>
                <input type="text" name="registerdate[yfa][]" class="form-control" value="">
            </div>

            <div class="input-group form-group col-sm-6" style="margin: 0px;padding-left: 0;float: left;">
                <span class="input-group-addon">单次用量</span>
                <input type="text" name="registerdate[yliang][]" class="form-control" value="">
            </div>

            <div class="input-group form-group col-sm-6" style="margin: 0px;padding-right: 0;float: left;">
                <span class="input-group-addon">用药次数</span>
                <input type="text" name="registerdate[jiliang][]" class="form-control" value="">
            </div>-->
           <span class="input-group-addon btn btn-default data-item-delete" data-item-id="item_${timestamp}"><i class="fa fa-remove"></i>删除</span>

            <!-- 药品选择弹框 -->
            <div class="modal fade" id="yaoModal_${timestamp}" tabindex="-1" role="dialog" aria-labelledby="yaoModal_${timestamp}" aria-hidden="true">
                <div class="modal-dialog" style="width: 660px;">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
                            <h3>选择药品(最多显示前200条)</h3>
                        </div>
                        <div class="modal-body">
                            <div class="input-group">
                                <input type="text" class="form-control" id="search-kwd_${timestamp}" placeholder="可搜索药品名称、供应商名称">
                                <span class="input-group-btn">
                                    <button type="button" class="btn btn-default" onclick="search_yaopin('${timestamp}');">搜索</button>
                                </span>
                            </div>
                            <div id="yao-module-menus_${timestamp}" style="padding-top:5px;"></div>
                        </div>
                        <div class="modal-footer">
                            <a href="#" class="btn btn-default" data-dismiss="modal" aria-hidden="true">关闭</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `);
     // 绑定删除事件
    $(`#item_${timestamp} .data-item-delete`).on('click', function() {
        const itemId = $(this).data('item-id');
        $(`#${itemId}`).remove(); // 删除对应的元素
    });
}
