<style>
	#mohe-demo .mh-btn{
		display: inline-block;
		*display:inline;
		*zoom:1;
		height: 29px;
		padding: 0px 15px;

		font: 14px "Microsoft Yahei";
		text-decoration: none;

		border-radius: 2px;
	}
	#mohe-demo .mh-btn-grey{
		color: #333;
		border: 1px solid #ccc;
		background: #f7f7f7;
		background: -moz-linear-gradient(top,#f7f7f7,#ececec); 
		background: -webkit-gradient(linear,left top,left bottom,color-stop(#f7f7f7), color-stop(#ececec));
		background: -ms-linear-gradient(top,#f7f7f7,#ececec);
		background: linear-gradient(to bottom,#f7f7f7,#ececec); 
		filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#f7f7f7',endColorstr='#ececec',GradientType=0 );
	}
	#mohe-demo .mh-btn-grey:hover{
		background: -moz-linear-gradient(top,#ececec,#f7f7f7);
		background: -webkit-gradient(linear,left top,left bottom,color-stop(#ececec), color-stop(#f7f7f7));
		background: -ms-linear-gradient(top,#ececec,#f7f7f7);
		background: linear-gradient(to bottom,#ececec,#f7f7f7);
		filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ececec',endColorstr='#f7f7f7',GradientType=0 );
	}
	#mohe-demo .mh-btn-grey:active{
		background: -moz-linear-gradient(top,#f3f3f3,#ffffff);
		background: -webkit-gradient(linear,left top,left bottom,color-stop(#f3f3f3), color-stop(#ffffff));
		background: -ms-linear-gradient(top,#f3f3f3,#ffffff);
		background: linear-gradient(to bottom,#f3f3f3,#ffffff);
		filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f3f3f3',endColorstr='#ffffff',GradientType=0 );
	}
	#mohe-demo .mh-btn-green{
		color: #fff;
		border: 1px solid #11a124;
		background: #3eae0e;
		background: -moz-linear-gradient(top,#3eae0e,#3aa40d); 
		background: -webkit-gradient(linear,left top,left bottom,color-stop(#3eae0e), color-stop(#3aa40d));
		background: -ms-linear-gradient(top,#3eae0e,#3aa40d);
		background: linear-gradient(to bottom,#3eae0e,#3aa40d); 
		filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#3eae0e',endColorstr='#3aa40d',GradientType=0 );
	}
	#mohe-demo .mh-btn-green:hover{
		background: -moz-linear-gradient(top,#4fc51c,#49b919);
		background: -webkit-gradient(linear,left top,left bottom,color-stop(#4fc51c), color-stop(#49b919));
		background: -ms-linear-gradient(top,#4fc51c,#49b919);
		background: linear-gradient(to bottom,#4fc51c,#49b919);
		filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#4fc51c',endColorstr='#49b919',GradientType=0 );
	}
	#mohe-demo .mh-btn-green:active{
		background: -moz-linear-gradient(top,#49b919,#4fc51c);
		background: -webkit-gradient(linear,left top,left bottom,color-stop(#49b919), color-stop(#4fc51c));
		background: -ms-linear-gradient(top,#49b919,#4fc51c);
		background: linear-gradient(to bottom,#49b919,#4fc51c);
		filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#49b919',endColorstr='#4fc51c',GradientType=0 );
	}
	#mohe-demo .mh-btn .mh-ico-play-default{
		display: inline-block;
		width: 17px;
		height: 100%;
		margin-right: 5px;
		background: url(http://p8.qhimg.com/t019f72bc6ec24b1aab.gif) no-repeat center;
		vertical-align: middle;
	}
	#mohe-demo .mh-btn .mh-ico-play-success{
		display: inline-block;
		width: 17px;
		height: 100%;
		margin-right: 5px;
		background: url(http://p7.qhimg.com/t01c247f63c1ca7dc50.png) no-repeat center;
		vertical-align: middle;
	}
	#mohe-demo .mh-btn span{
		display: inline-block;
		*display: inline;
		*zoom:1;
		line-height: 29px;
		_padding-top:2px;
		_line-height:27px;
		vertical-align: middle;
	}
</style>
<div id="mohe-demo" class="g-mohe">
	<a href="#" target="_blank" class="mh-btn mh-btn-grey"><i class="mh-ico-play-default"></i><span>重播</span></a>
	<a href="#" target="_blank" class="mh-btn mh-btn-green"><i class="mh-ico-play-success"></i><span>立即观看</span></a>
</div>