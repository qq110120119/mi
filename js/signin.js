var login=(function(){

	return{
		init:function(ele){
			this.$ele=document.querySelector(ele);
			this.$loginBtn=this.$ele['login-btn'];
			this.$usernameIpt=this.$ele['username'];
			this.$passwordIpt=this.$ele['password'];
			this.event();
		},
		event:function(){
			var _this=this;
			this.$loginBtn.onclick=function(){
				console.log(1);
				var parmas={
					method:'post',
					data:{
						username:_this.$usernameIpt.value,
						password:_this.$passwordIpt.value
					},
					success:function(data){
						data=JSON.parse(data);
						_this.loginSuccess(data);
					}
				}
				sendAjax('http://localhost:8089/mi/php/signin.php',parmas);
			}
		},
		loginSuccess:function(data){
			if(data.code==200){
				document.cookie="token="+data.data.token;
				document.cookie="user-id="+data.data.id;
				location.href='xiaomiguanwang.html';
			}else{
				alert(data.msg);
			}
		}
	}
}())