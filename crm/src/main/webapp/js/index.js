$(function() {
	var tabsObj = $("#tabs");

	$("#tree").tree({
		method: 'get',
		url: '/data/tree_data.json',
		onClick: function(node) {
			//判断选项卡是否已经存在
			if (tabsObj.tabs("exists", node.text)) {
				//选中该选项卡
				tabsObj.tabs("select", node.text);
			} else {
				//新增一个选项卡
				tabsObj.tabs('add', {
					closable:true,
					title: node.text,
					//通过iframe可以引入另一个文档的所有内容
					content:'<iframe src="'+node.attributes.url+'"frameborder="0" style="height:100%;width:100%;"></iframe>'
					// content:'<iframe src="https://www.baidu.com" frameborder="0" style="height:100%;width:100%;"></iframe>'
					// href:'https://www.baidu.com'//只能引入页面中的body部分
				});
			}
		}
	});
	tabsObj.tabs({
		fit: true
	});

});
