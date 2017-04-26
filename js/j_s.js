/*定义全局常量*/
var url = "http://192.168.24.43:8080/SecondMarketServer";    
//var url = "http://123.56.217.249:8081/SecondMarketServer";    
function getUrl(){    
  return url;    
}  

/*输入框变化后登陆按钮变色*/
function sdee(event, vow) {
	if(event.length == 0) {
		vow.style.backgroundColor = "#ccc";
		vow.style.color = "#ACACB4";
		return false;
	} else {
		vow.style.backgroundColor = "#1fa5da";
		vow.style.color = "white";
	}
}

function Selected(evenr) { //购物车选中物品事件	
		if(evenr.checked == true){
			/*选中数大于0则不让第二个选中*/				
			if(several>0){
				shopping_id = evenr.parentNode.parentNode.parentNode.id; //获取父节点的shopping_id
				$("#" + shopping_id + "").find('input[type="checkbox"]').attr("checked", false);//不给第二个物品选中
				mui.alert("暂不允许多选下单");
			}else{
				shopping_id = evenr.parentNode.parentNode.parentNode.id; //获取父节点的shopping_id
				several++;
				$("#" + shopping_id + "").find('div[class="wu-Asingle-content-attribute"]').find('input').bind('input propertychange', function() {  
				   if($("#" + shopping_id + "").find('input[type="checkbox"]').is(":checked")){
				   	$("#Total").html($(this).val());
				   }else{
				   	mui.alert("都没选你改啥");
				   }
				   
				});  
				
				var final_price=$("#" + shopping_id + "").find('div[class="wu-Asingle-content-attribute"]').find('input').val();//获取填写的愿出价
				$("#Total").html(final_price);					
			}
		}else {
			$("#Total").html(0.00);
			several--;				
		}			
		//选中数大于0变色
		if(several>0){				
			document.getElementById("Settlement").style.backgroundColor = "orangered"
		}else{			
			document.getElementById("Settlement").style.backgroundColor = "#ccc";
		}
	
}






function getAjax(url, datas, successcallback, errorcallback) { //被调用的函数
	mui.ajax(url, { //mui.ajax是AJAX的规定前缀写法，后面的url是服务器的路径（库，表等等都在服务器内）
		data: JSON.stringify(datas), //也就是键值对可以
		contentType: "application/json", //解析你的内容是什么格式
		type: "post", //请求发送的方式，有post(快，安全低),get(慢，安全高)
		dataType: "json", //服务器返回的类型是什么，有"xml"(返回XML文档),"html"(返回纯文本HTML信息),"script"(返回纯文本JavaScript代码),"json"(返回JSON数据),"text"(返回纯文本字符串),
		timeout: 10000, //请求超时时间（毫秒），默认值为0，表示永不超时，如果超过请求时间还未依为收到，则失败
		success: function(da) { //正确的回调函数
			successcallback(da.d);
		},
		error: function(xhr, type, errorThrown) { //错误的回调函数
			errorcallback(xhr, type, errorThrown)
		}
	});
}

function setIten(key, value) { //被调用的函数
	plus.storage.setItem(key, value); //存储键值对
}


var men;

function Addend(even) { //商品加
	men = even.previousElementSibling.innerHTML;
	men++;
	even.previousElementSibling.innerHTML = men;
	var parEven = even.parentNode.parentNode.parentNode.parentNode;
	var parPrice = even.parentNode.parentNode;
	var evenPrice = parPrice.childNodes[1].childNodes[1].innerHTML; //获取价格
	var chiParEven = parEven.childNodes[2].childNodes[0].childNodes[1].childNodes[1]; //小计的标签所在
	var chiChe = parEven.childNodes[0].childNodes[0].childNodes[1]; //获取复选框标签
	var evrTotal = document.getElementById("Total").innerHTML;
	var parTotal = parseFloat(evrTotal); // 获取转换为字符型的合计总价
	var parPrice = parseFloat(evenPrice); // 获取转换为字符型的价格
	chiParEven.innerHTML = men * evenPrice;
	if(chiChe.checked == true) {
		document.getElementById("Total").innerHTML = parTotal + parPrice;
	} else {

	}

}

function Meiosis(meng) { //商品减
	men = meng.nextSibling.innerHTML;
	if(men == 1) {
		return false;
	} else {
		men--;
		meng.nextSibling.innerHTML = men;
		var parEven = meng.parentNode.parentNode.parentNode.parentNode;
		var parPrice = meng.parentNode.parentNode;
		var evenPrice = parPrice.childNodes[1].childNodes[1].innerHTML;
		var chiParEven = parEven.childNodes[2].childNodes[0].childNodes[1].childNodes[1];
		var chiChe = parEven.childNodes[0].childNodes[0].childNodes[1]; //获取复选框标签
		var evrTotal = document.getElementById("Total").innerHTML;
		var parTotal = parseFloat(evrTotal); // 获取转换为字符型的合计总价
		var parPrice = parseFloat(evenPrice); // 获取转换为字符型的价格
		chiParEven.innerHTML = men * evenPrice;
		if(chiChe.checked == true) {
			document.getElementById("Total").innerHTML = parTotal - parPrice;
		} else {

		}
	}
}
var several = 0;



function deleteOrder(event) {
	var evtOddNumbers = event.previousElementSibling.innerHTML;
	if(confirm("你确认删除吗？")) {
		getAjax(url + "/Delete", {
				id: 'www',
				table: 'orderForm',
				key: 'ordCommodityID',
				value: evtOddNumbers
			},
			function(ment) {
				mui.toast("   成功        ");
				location.reload();
			},
			function(en) {
				mui.toast("   失败        ");
			}
		)
	} else {

	}

}
var mycomNumber;

function myevaluate(eventr) {
	mycomNumber = eventr.previousElementSibling.innerHTML;
	mui('.mui-popover').popover('toggle');
}

var men = null;

function change(event) {
	document.getElementById("wwww").style.backgroundColor = "#F3F3F3";
	document.getElementById("wwww").style.borderLeft = "3px solid #f3f3f3";
	if(men != null) {
		men.style.backgroundColor = "#f3f3f3";
		men.style.borderLeft = "3px solid #f3f3f3";
	}
	event.style.backgroundColor = "#fff";
	event.style.borderLeft = "3px solid orangered";
	men = event;
}