yundong:function startMove(obj,attr,iTarget)
			{
				
				clearInterval(obj.time);
				obj.time=setInterval(function()
					{
						var iCur=parseInt(getStyle(obj, attr));//调用getStyle并传参数
						var iSpeed=(iTarget-iCur)/8;
						iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
						if(iCur==iTarget)
						{
							clearInterval(obj.time);
						}
						else
						{
							obj.style[attr]=iCur+iSpeed+'px';
						}
						
					}
				,30);
				
			}