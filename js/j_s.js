/*定义全局常量*/
//var url = "http://192.168.24.43:8080/SecondMarketServer";    
var url = "http://123.56.217.249:8081/SecondMarketServer";    
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
//				   	mui.alert("都没选你改啥");
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




function setIten(key, value) { //被调用的函数
	plus.storage.setItem(key, value); //存储键值对
}


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