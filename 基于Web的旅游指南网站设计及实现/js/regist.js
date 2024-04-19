function check() {
	// 验证用户名
	var name=document.getElementById("user-name").value.trim();
	var nameRegex=/^[^@#]{3,15}$/;
	if(name == "" || name == null){
		alert("用户名不能为空");
	}
	else if(!nameRegex.test(name)){
		alert("用户名不合法");
		return false;
	}
	// 验证密码
	var password=document.getElementById("password").value.trim();
	//var password=$("#password").value;
	$("#password").alert("");
	//密码长度在6个字符到18个字符，由字母、数字和".""-""_""@""#""$"组成
	//var passwordRegex=/^[0-9A-Za-z.\-\_\@\#\$]{8,16}$/;
	//密码长度在6个字符到18个字符，由字母、数字和"_"组成
	var passwordRegex=/^[0-9A-Za-z_]\w{5,17}$/;
	if(pass == "" || pass == null){
		alert("密码不能为空");
	}
	else if(!passwordRegex.test(password)){
		alert("密码不合法");
	    return false;
	}
	// 验证确定密码
	var repassword=document.getElementById("repassword").value.trim();
	//校验密码和上面密码必须一致
	if(repassword!==password){
	    alert("两次输入的密码不一致");
		return false;
	}
	else if(repassword==password){
	    return false;
	}
	// 验证邮箱
	var inputEmail = document.getElementById("email");
	// 获取输入内容
	var uEmail = inputEmail.value;
	// 检测邮箱格式
	if (!/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/.test(uEmail)) {
	    alert("邮箱不合法");
	    return false;
	}
	验证手机号
	var inputtel = document.getElementById("tel");
	// 获取输入内容
	var utel = inputtel.value;
	// 检测手机号格式
	if (!(0-9)) {
	    alert("手机号不合法");
	    return false;
	}
	// 验证验证码
	var capTcha = document.getElementById("capt_cha");
	var capT_cha = /^[0-9A-Za-z_]\w{5}$/;
	if(captcha == "" || captcha == null){
		alert("验证码不能为空");
	}
	else if(!capT_cha.test(capt_cha)){
		alert("验证码不合法");
	    return false;
	}
	alert("注册成功");
}