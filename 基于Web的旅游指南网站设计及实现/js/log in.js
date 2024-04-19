function check() {
	var inputEmail = document.getElementById("email");
	// 获取输入内容
	var uEmail = inputEmail.value;
	// 检测邮箱格式
	if (!/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/.test(uEmail)) {
		alert("邮箱不合法");
		return false;
	}
	
	//获取用户名输入项
	var userNname = document.getElementById("password");
	var uName = userNname.value;
	if (uName.length < 3 || uName.length >= 15) {
		alert("账号长度需要大于3位小于15位");
		return false;
	}
	window.open("index_2.html");
}