var $hour=document.querySelector('.count-hour');
		var $min=document.querySelector('.count-min');
		var $sec=document.querySelector('.count-sec');
		function fn(date1){
					var date = new Date();//获取当前时间
					// var future=set
					var date1 = new Date(date1);
					var msec = (date1.getTime()-date.getTime())/1000;
					var second = Math.floor(msec % 60);
					var minute = Math.floor(msec / 60 % 60);
					var hour = Math.floor(msec / 60 / 60);


					$hour.innerHTML=hour;
					$min.innerHTML=minute;
					$sec.innerHTML=second;

					if($sec.innerHTML < 10){
						$sec.innerHTML = '0'+$sec.innerHTML;
					}
					if($min.innerHTML < 10){
						$min.innerHTML = '0'+$min.innerHTML;
					}
					if($hour.innerHTML < 10){
						$hour.innerHTML = '0'+$hour.innerHTML;
					}
					// console.log(''+hover+'/'+minuse +'/'+secont)
				}
				 setInterval(function() {fn('2018/10/17');},1000);