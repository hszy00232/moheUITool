<style>
	#mohe-demo .mh-btn{
		display: inline-block;
		*display:inline;
		*zoom:1;
		height: 28px;
		padding: 0px 18px;
		font: 12px/28px "SimSun";
		text-decoration: none;
		border-radius: 2px;
	}
	#mohe-demo .mh-btn span{
		display: block;
		padding-left: 20px;
	}
	#mohe-demo .mh-btn-grey{
		color: #333;
		border: 1px solid #ccc;
		background: #fff;
	}
	#mohe-demo .mh-btn-grey:hover{
		border-color: #adadad;
		background: #eee;
	}
	#mohe-demo .mh-btn-grey:active{
		border-color: #adadad;
		-webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.1) inset;
		-moz-box-shadow: 0 1px 3px rgba(0,0,0,0.1) inset;
		box-shadow: 0 1px 3px rgba(0,0,0,0.1) inset;
	}
	#mohe-demo .mh-btn-green{
		color: #fff;
		border: 1px solid #5bba32;
		background: #65c33d;
	}
	#mohe-demo .mh-btn-green:hover{
		border-color: #329209;
		background: #3eaf0e;
	}
	#mohe-demo .mh-btn-green:active{
		border-color: #329209;
		background: #3eaf0e;
		-webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.1) inset;
		-moz-box-shadow: 0 1px 3px rgba(0,0,0,0.1) inset;
		box-shadow: 0 1px 3px rgba(0,0,0,0.1) inset;
	}
	#mohe-demo .mh-btn-orange{
		color: #fff;
		border: 1px solid #f3ab44;
		background: #f6b04c;
	}
	#mohe-demo .mh-btn-orange:hover{
		border-color: #e38800;
		background: #f19e27;
	}
	#mohe-demo .mh-btn-orange:active{
		border-color: #e38800;
		background: #f19e27;
		-webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.1) inset;
		-moz-box-shadow: 0 1px 3px rgba(0,0,0,0.1) inset;
		box-shadow: 0 1px 3px rgba(0,0,0,0.1) inset;
	}
	#mohe-demo .mh-btn .mh-ico-s-16{
		background: url(http://p3.qhimg.com/t0195a05486249cd8f0.png) no-repeat left center;
		/*以下为IE6设置PNG透明代码*/
		_background:url(http://p6.qhimg.com/t01fb2e2aab4ff5c9e4.png) no-repeat left center;
		cursor: pointer;
	}
	#mohe-demo .mh-btn .mh-ico-play-16{
		background: url(http://p2.qhimg.com/t0140cf911c961cbbaa.png) no-repeat left center;
		/*以下为IE6设置PNG透明代码*/
		_background: url(http://p6.qhimg.com/t019adaadd4f185fdcf.png) no-repeat left center;
		cursor: pointer;
	}
	
</style>
<div id="mohe-demo" class="g-mohe">
	<span class="mh-label">HTML结构简洁版：</span>
	<a href="#" target="_blank" class="mh-btn mh-btn-grey"><span class="mh-ico-s-16">搜索视频</span></a>
	<a href="#" target="_blank" class="mh-btn mh-btn-green"><span class="mh-ico-play-16">立即观看</span></a>
	<a href="#" target="_blank" class="mh-btn mh-btn-orange"><span class="mh-ico-play-16">付费观看</span></a>
</div>