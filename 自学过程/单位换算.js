dfql.convertWeight=function(a,b,num,format){
	if(!a||!b) return;
	if(a==b) return num;
	if((a==2||b==2)&&!format){
		e.ev.trigger('SYS_MESSAGE',{title:'错误提示',content:'请先输入幅宽'});
		return
	}
	var n,x=0.9144,m = 1.0936133,y = 4.3056;
	var f=format;
	if(a==1){
		if(b==2){
			n=num*f
		}else if(b==3){
			n=num*f*x
		}else{
			n=num/y
		}
	}else if(a==2){
		if(b==1){
			n=num/f
		}else if(b==3){
			n=num*x
		}else{
			n=num/f/y
		}
	}else if(a==3){
		if(b==1){
			n=num/m/f
		}else if(b==2){
			n=num/m
		}else{
			n=num/m/f/y
		}
	}else{
		if(b==1){
			n=num*y
		}else if(b==2){
			n=num*y*f
		}else{
			n=num*y*f*x
		}
	}
	return n.toFixed(0)
};
