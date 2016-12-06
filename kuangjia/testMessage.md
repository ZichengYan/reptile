<!DOCTYPE html>
<html>
        
        
<head>
    <meta charset="UTF-8">
    <title>人气榜单_起点中文网</title>
    <meta name="description" content="起点中文网小说排行榜提供最新、流行、经典、精品原创小说排行榜,涵盖:玄幻小说排行榜,奇幻小说排行榜,武侠小说排行榜,仙侠小说排行榜,都市小说排行榜,历史小说排行榜,军事小说排行榜,竞技小说排行榜,灵异小说排行榜,二次元小说排行榜,免费小说排行榜,新书排行榜,完本小说排行榜,粉丝打赏排行榜">
    <meta name="keywords" content="小说,人气榜单，排行榜,小说排行榜,热门小说排行榜,网络小说排行榜,经典小说排行,免费小说排行榜,精品小说推荐榜">
    <meta name="robots" content="all">
    <meta name="googlebot" content="all">
    <meta name="baiduspider" content="all">
    <meta http-equiv="mobile-agent" content="format=wml; url=http://m.qidian.com">
    <meta http-equiv="mobile-agent" content="format=xhtml; url=http://m.qidian.com">
    <meta http-equiv="mobile-agent" content="format=html5; url=http://h5.qidian.com/bookstore.html">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
    <meta name="renderer" content="webkit" />
    
    <script>
        document.domain = 'qidian.com';
    </script>
    <!-- start speedTimer[var, zero] -->
    <script>
        var speedTimer = [],
                speedZero = new Date().getTime();
    </script>
    <!-- end speedTimer[var, zero] -->
    <!-- start 通用头逻辑 -->
    <script>
    //遇到cookie tf=1的话留在本站，否则跳转移动站
    if (getCookie('tf') != 1) {
        //判断是以下设备后跳转到m站
        if (navigator.userAgent.match(/(iPhone|iPod|Android)/i)) {
            location.href = "http://m.qidian.com"
        }
    }

    // start 防劫持
    //设置cookie
    function setCookie(name, value, domain, path, expires) {
        if(expires){
            expires = new Date(+new Date() + expires);
        }
        var tempcookie = name + '=' + escape(value) +
                ((expires) ? '; expires=' + expires.toGMTString() : '') +
                ((path) ? '; path=' + path : '') +
                ((domain) ? '; domain=' + domain : '');

        //Ensure the cookie's size is under the limitation
        if(tempcookie.length < 4096) {
            document.cookie = tempcookie;
        }
    }

    //获取cookie
    function getCookie(name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

        if (arr = document.cookie.match(reg))

            return (arr[2]);
        else
            return null;
    }

    //创建并发送请求
    function createSender(url){
        var img = new Image();
        img.onload = img.onerror = function(){
            img = null;
        };
        img.src = url;
    };

    (function(){
        /*
         *防劫持逻辑所需参数在此处设置参数即可
         *cookieName:用于记录连续被劫持的次数，为防止死循环，cookie值为3以上则不进行url重置
         *cookieDomain:cookie所在的域
         *reportUrl:非连续性劫持时上报的接口地址【如无需上报，可不填】
         *reportUrl2：连续性劫持时上报的接口地址【如无需上报，可不填】
         */
        var cookieName = 'hiijack';
        var cookieDomain = '.qidian.com';
        var reportUrl = '//book.qidian.com/ajax/safe/hiijackReport?times=1&_csrfToken='+ getCookie('_csrfToken')||'';
        var reportUrl2 = '//book.qidian.com/ajax/safe/hiijackReport?times=3&_csrfToken='+ getCookie('_csrfToken')||'';

        //判断是否被iframe
        if (top.location !== self.location) {
            //用于记录被劫持的次数
            var countHijack;

            //如果未设置cookie，则需要set一下cookie，否则获取此cookie的值
            if(!getCookie(cookieName)){
                setCookie(cookieName,0 ,cookieDomain, '', 30*24*60*60*1000);
                countHijack = 0;
            }else{
                countHijack = parseInt(getCookie(cookieName));
            }

            //如果连续被劫持的次数大于等于3次，则发请求上报此情况,否则上报非连续性的情况,同时累加被劫持次数、重置当前url
            if(countHijack >= 3){
                reportUrl2 && reportUrl2!='' && createSender(reportUrl2);
            }else{
                reportUrl && reportUrl!=''&& createSender(reportUrl);
                countHijack ++;
                setCookie(cookieName, countHijack ,cookieDomain, '', 30*24*60*60*1000);
                top.location = self.location;
            }
        }
        //每次成功进入页面则计数清0
        setCookie(cookieName, 0 ,cookieDomain, '', 30*24*60*60*1000);
    })();
    //end 防劫持
</script>

<link rel="shortcut icon" type="image/x-icon" href="//qidian.gtimg.com/qd/favicon/qd_icon.0.2.ico">
<link rel="Bookmark" type="image/x-icon" href="//qidian.gtimg.com/qd/favicon/qd_icon.0.2.ico">

    <!-- end 通用头逻辑 -->
    
<link rel="stylesheet" data-ignore="true" href="//qidian.gtimg.com/c/=/qd/css/reset.0.34.css,/qd/css/global.0.16.css,/qd/css/font.0.37.css,/qd/css/header.0.55.css,/qd/css/module.0.66.css,/qd/css/rank.0.36.css,/qd/css/list_module.0.43.css,/qd/css/layout.0.35.css,/qd/css/qd_popup.0.35.css,/qd/css/footer.0.35.css?v=201611291441" />

    
    
    
    
    
    
    
    
    
    
</head>
<body>
<!-- start 通用body层 -->
<!-- start 微信分享小图标 -->
<div class="share-img">
    <img src="//qidian.gtimg.com/qd/images/common/share.0.3.png" width='300' height="300">
</div>
<!-- end 微信分享小图标 -->
<!-- end 通用body层 -->

<div class="wrap">
    <!-- start 顶部导航 -->
<div class="top-nav" data-l1="1">
    <div class="box-center cf">
        <div class="login-box fr">
            <div class="sign-in hidden">
                <a class="new-user" id="new-user" href="//activity.qidian.com/newuser/index" data-eid="qd_A174" target="_blank"><b class="iconfont gift">&#xe629;</b><cite id="new-user-tip">新手任务</cite><em>|</em></a>
                <span>你好，</span><a class="black" id="user-name" href="//me.qidian.com" target="_blank" data-eid="qd_A08"></a><em>|</em><a class="black" id="msg-btn" href="//me.qidian.com/msg/systems.aspx?page=1" target="_blank" data-eid="qd_A09">消息<cite id="msg-box">(<i></i>)</cite></a><em>|</em><a id="exit-btn" href="javascript:" data-eid="qd_A10">退出</a>
            </div>
            <div class="sign-out">
                <a id="login-btn" class="black" href="javascript:" data-eid="qd_A06">登录</a><em>|</em><a id="reg-btn" href="http://reg.qidian.com" target="_blank" data-eid="qd_A07">注册</a>
            </div>
        </div>
        <div class="nav-link fl">
            <a class="act" href="//www.qidian.com" data-eid="qd_A01">起点中文网</a>
            <a href="http://www.qdmm.com" target="_blank" data-eid="qd_A02">起点女生网</a><em>|</em>
            <a href="http://chuangshi.qq.com" target="_blank" data-eid="qd_A03">创世中文网</a><em>|</em>
            <a href="http://yunqi.qq.com" target="_blank" data-eid="qd_A04">云起书院</a><em>|</em>
            
            <a href="javascript:" id="switchEl" data-eid="qd_A182">繁体版</a><em>|</em>
            <a class="black" id="back-old" href="javascript:" data-eid="qd_A05">返回旧版</a>
        </div>
    </div>
</div>
<!-- end 顶部导航 -->
<!-- start logo & 搜索 -->
<div class="logo-wrap box-center" data-l1="2">
    <div class="box-center cf">
        <div class="book-shelf fr">
            <a href="//me.qidian.com/bookCase/bookCase.aspx?caseId=-2" target="_blank" data-eid="qd_A14"><em class="iconfont shelf">&#xe60c;</em><i>我的书架</i>
            </a>
        </div>
        <div class="logo fl">
            <a href="//www.qidian.com" data-eid="qd_A11"></a>
        </div>
        <div class="search-wrap fl">
            <form id="formUrl" action="//se.qidian.com" method="get" target="_blank">
                <p><input class="search-box" id="s-box" name="kw" type="text" placeholder="修真百年归来"></p>
                <input class="submit-input" type="submit" id="searchSubmit" data-eid="qd_A13">
                <label id="search-btn" class="search-btn" for="searchSubmit"><em class="iconfont" data-eid="qd_A13">
                    &#xe60d;</em></label>
            </form>
        </div>
    </div>
</div>
<!-- end logo & 搜索 -->
    
    <!-- start 主导航 -->
    
<!-- 判断navHighLight值，分别在导航中高亮 -->

<div class="main-nav-wrap" data-l1="3">
    <div class="main-nav box-center cf" id="type-hover">
        <!-- Component Start 作品分类导航 模块 -->
        <!-- start 作品分类导航-->
<div class="classify-list fl so-awesome" id="classify-list" data-l1="3">
    <dl>
        <dd>
            <a href="//xuanhuan.qidian.com/" target="_blank" data-eid="qd_A71">
                <cite>
                    <em class="iconfont">&#xe642;</em>
                                    <span class="info">
                                        <i>玄幻</i>
                                        <b>543870</b>
                                    </span>
                </cite>
            </a>
        </dd>
        <dd>
            <a href="//qihuan.qidian.com/" target="_blank" data-eid="qd_A72">
                <cite>
                    <em class="iconfont">&#xe62f;</em>
                                    <span class="info">
                                        <i>奇幻
                                        </i>
                                        <b>112298</b>
                                    </span>
                </cite>
            </a>
        </dd>
        <dd class="even">
            <a href="//wuxia.qidian.com/" target="_blank" data-eid="qd_A73">
                <cite>
                    <em class="iconfont">&#xe632;</em>
                                    <span class="info">
                                        <i>武侠</i>
                                        <b>29300</b>
                                    </span>
                </cite>
            </a>

            </dd>
        <dd class="even">
            <a href="//xianxia.qidian.com/" target="_blank" data-eid="qd_A74">
                <cite>
                    <em class="iconfont">&#xe610;</em>
                                    <span class="info">
                                        <i>仙侠</i>
                                        <b>192309</b>
                                    </span>
                </cite>
            </a>
        </dd>
        <dd>
            <a href="//dushi.qidian.com/" target="_blank" data-eid="qd_A75">
                <cite>
                    <em class="iconfont">&#xe62c;</em>
                                    <span class="info">
                                        <i>都市</i>
                                        <b>295219</b>
                                    </span>
                </cite>
            </a>
        </dd>
        <dd>
            <a href="//zhichang.qidian.com/" target="_blank" data-eid="qd_A76">
                <cite>
                    <em class="iconfont">&#xe614;</em>
                                    <span class="info">
                                        <i>职场</i>
                                        <b>19845</b>
                                    </span>
                </cite>
            </a>
        </dd>
        <dd class="even">
            <a href="//junshi.qidian.com/" target="_blank" data-eid="qd_A77">
                <cite>
                    <em class="iconfont">&#xe602;</em>
                                    <span class="info">
                                        <i>军事</i>
                                        <b>17229</b>
                                    </span>
                </cite>
            </a>
        </dd>
        <dd class="even">
            <a href="//lishi.qidian.com/" target="_blank" data-eid="qd_A78">
                <cite>
                    <em class="iconfont">&#xe62d;</em>
                                    <span class="info">
                                        <i>历史</i>
                                        <b>60304</b>
                                    </span>
                </cite>
            </a>
        </dd>
        <dd>
            <a href="//youxi.qidian.com/" target="_blank" data-eid="qd_A79">
                <cite>
                    <em class="iconfont">&#xe634;</em>
                                    <span class="info">
                                        <i>游戏</i>
                                        <b>85695</b>
                                    </span>
                </cite>
            </a>
        </dd>
        <dd>
            <a href="//tiyu.qidian.com/" target="_blank" data-eid="qd_A80">
                <cite>
                    <em class="iconfont tiyu">&#xe631;</em>
                                    <span class="info">
                                        <i>体育</i>
                                        <b>8529</b>
                                    </span>
                </cite>
            </a>
        </dd>
        <dd class="even">
            <a href="//kehuan.qidian.com/" target="_blank" data-eid="qd_A81">
                <cite>
                    <em class="iconfont">&#xe603;</em>
                                    <span class="info">
                                        <i>科幻</i>
                                        <b>110007</b>
                                    </span>
                </cite>
            </a>
        </dd>
        <dd class="even">
            <a href="//lingyi.qidian.com/" target="_blank" data-eid="qd_A82">
                <cite>
                    <em class="iconfont lingyi">&#xe641;</em>
                                    <span class="info">
                                        <i>灵异</i>
                                        <b>44217</b>
                                    </span>
                </cite>
            </a>
        </dd>
        <dd>
            <a href="//www.qdmm.com/" target="_blank" data-eid="qd_A83">
                <cite>
                    <em class="iconfont">&#xe607;</em>
                                    <span class="info">
                                        <i>女生网</i>
                                        <b>552583</b>
                                    </span>
                </cite>
            </a>
        </dd>
        <dd>
            <a href="//2cy.qidian.com/" target="_blank" data-eid="qd_A84">
                <cite>
                    <em class="iconfont erciyuan">&#xe617;</em>
                                    <span class="info">
                                        <i>二次元</i>
                                        <b>69494</b>
                                    </span>
                </cite>
            </a>
        </dd>
    </dl>
</div>
<!-- end 作品分类导航-->

        <!-- Component End 作品分类导航 模块 -->
        <ul>
            <li class="first"><b><strong></strong></b><span><em>
                <i></i>
                <i></i>
                <i></i>
            </em>作品分类</span>
            </li>
            <li class="nav-li"><a href="//a.qidian.com" data-eid="qd_A15" >全部作品</a></li>
            <li class="nav-li"><a href="//r.qidian.com" data-eid="qd_A16" class=act>排行</a></li>
            <li class="nav-li"><a href="//fin.qidian.com" data-eid="qd_A17" >完本</a></li>
            <li class="nav-li"><a href="//f.qidian.com" data-eid="qd_A18" >免费</a></li>
            <li class="nav-li"><a href="http://write.qq.com/public/login.html" target="_blank" data-eid="qd_A19">作家专区</a>
            </li>
            <li class="nav-li"><a href="http://www.yuewen.com/app.html#appqd" target="_blank" data-eid="qd_A20"><b class="iconfont client">&#xe604;</b>客户端</a>
            </li>
            <!-- start 页游手游 -->
            <li class="game phone" id="game-phone">
    <a class="phone-game" href="http://xs.qidian.com/Home/Pc/Index/index" target="_blank" data-eid="qd_A22"><b class="iconfont webgame">
        &#xe630;</b>手游</a>
    <!-- start 手游下拉框 -->
    <div class="game-dropdown hidden" id="phone-dropdown">
        <cite></cite>
        <dl class="phone-list">
            
            <dd>
                <h3>
                    
                    <a href="" data-eid="qd_A39" target="_blank">傲世九重天</a><i>同名改编</i></h3>
                <p><a href="http://collect.game.qidian.com/Home/Stat/Index?gourl=aHR0cDovL3hzLnFpZGlhbi5jb20vSG9tZS9QYy9JbmRleC9kZXRhaWwvZ2FtZWlkLzIwMDUwNA==&amp;code=5733ed85f2cd0" target="_blank" data-eid="qd_A39"><img src="//qidian.qpic.cn/qidian_common/349573/d903c5a9a86e4b1af73c7fc1bec25734/0"><i class="op-tag"></i></a></p>
            </dd>
            
            <dd>
                <h3>
                    
                    <a href="" data-eid="qd_A40" target="_blank">合体三国</a><i>挂机对战</i></h3>
                <p><a href="http://collect.game.qidian.com/Home/Stat/Index?gourl=aHR0cDovL3hzLnFpZGlhbi5jb20vYXBpL3N5eHMvc2dhbWUvUGxheS5waHA/Z2FtZWlkPTIwMDQ3OSZzZXJ2ZXJpZD0xJnR5PTE=&amp;code=5733edc4a3435" target="_blank" data-eid="qd_A40"><img src="//qidian.qpic.cn/qidian_common/349573/84f56d32987f7b80bb450686d134ffe1/0"><i class="op-tag"></i></a></p>
            </dd>
            
            <dd>
                <h3>
                    
                    <a href="" data-eid="qd_A41" target="_blank">大富豪3</a><i>模拟经营</i></h3>
                <p><a href="http://collect.game.qidian.com/Home/Stat/Index?gourl=aHR0cDovL3hzLnFpZGlhbi5jb20vYXBpL3N5eHMvc2dhbWUvUGxheS5waHA/Z2FtZWlkPTIwMDQ4OSZzZXJ2ZXJpZD0yJnR5PTE=&amp;code=5769f94031529" target="_blank" data-eid="qd_A41"><img src="//qidian.qpic.cn/qidian_common/349573/138a5e08b1668bd2a8ebb1620b709432/0"><i class="op-tag"></i></a></p>
            </dd>
            
        </dl>
        <div class="bottom">
            <h4>新游上线|谁是大主公</h4>
            <p><a href="http://xs.qidian.com/api/syxs/sgame/Play.php?gameid=200491&amp;serverid=1&amp;ty=1&amp;qd_game_key=192x86&amp;qd_dd_p1=141" data-eid="qd_A42" target="_blank"><img src="//qidian.qpic.cn/qidian_common/349573/9df585502dd475acae74130e441b8eca/0" alt=""><i class="op-tag"></i></a></p>
        </div>
    </div>
    <!-- end 手游下拉框 -->
</li>
<li class="game web" id="game-web">
    <a class="web-game" href="http://game.qidian.com/" target="_blank" data-eid="qd_A21"><b class="iconfont">
        &#xe60b;</b>页游</a>
    <!-- start 页游下拉框 -->
    <div class="game-dropdown hidden" id="web-dropdown">
        <cite></cite>
        <!-- start 页游列表 -->
        <div class="web-game-list">
            <!-- start 最近玩过 -->
            <dl class="lately" id="lately">
                <dt>最近玩过</dt>
                <dd><a class="name" href="javascript:" target="_blank" data-eid="qd_A29"></a><strong></strong><a class="link" href="javascript:" target="_blank" data-eid="qd_A29">GO<i>&gt;</i></a></dd>
                <dd><a class="name" href="javascript:" target="_blank" data-eid="qd_A30"></a><strong></strong><a class="link" href="javascript:" target="_blank" data-eid="qd_A30">GO<i>&gt;</i></a></dd>
            </dl>
            <!-- end 最近玩过 -->
            <dl class="web-list" id="log-web-list">
                <dt>今日开服</dt>
                <dd class="act">
                    <h3>
                    
                    <span></span>
                    
                    <i>12-06</i><a href="http://cpgame.qd.game.qidian.com/Home/GameServer/lists?name=ddzb" data-eid="qd_A31" target="_blank">大大争霸</a><strong>1区</strong></h3>
                    <p><a href="http://cpgame.qd.game.qidian.com/Home/GameServer/lists?name=ddzb" data-eid="qd_A31" target="_blank"><img src="//qidian.qpic.cn/qidian_common/349573/6138dbc8389a2b379fe5c11fd20a0731/0"><i class="op-tag"></i></a></p>
                </dd>
                
                <dd>
                    <h3>
                        
                        <span></span>
                        
                        <i>12-06</i><a href="http://cpgame.qd.game.qidian.com/Home/GameServer/lists?name=qjcs" data-eid="qd_A32" target="_blank">奇迹重生</a><strong>2区</strong></h3>
                    <p><a href="http://cpgame.qd.game.qidian.com/Home/GameServer/lists?name=qjcs" data-eid="qd_A32" target="_blank"><img src="//qidian.qpic.cn/qidian_common/349573/777215e73a5752e58ed3777fc9428dac/0"><i class="op-tag"></i></a></p>
                </dd>
                
                <dd>
                    <h3>
                        
                        <span></span>
                        
                        <i>12-05</i><a href="http://cpgame.qd.game.qidian.com/Home/GameServer/lists?name=dmbj" data-eid="qd_A33" target="_blank">盗墓笔记</a><strong>20区</strong></h3>
                    <p><a href="http://cpgame.qd.game.qidian.com/Home/GameServer/lists?name=dmbj" data-eid="qd_A33" target="_blank"><img src="//qidian.qpic.cn/qidian_common/349573/0ea6868938d896410e19ff3aa4ae52b2/0"><i class="op-tag"></i></a></p>
                </dd>
                
                <dd>
                    <h3>
                        
                        <span></span>
                        
                        <i>12-05</i><a href="http://cpgame.qd.game.qidian.com/Home/GameServer/lists?name=dsg" data-eid="qd_A34" target="_blank">斗三国</a><strong>35区</strong></h3>
                    <p><a href="http://cpgame.qd.game.qidian.com/Home/GameServer/lists?name=dsg" data-eid="qd_A34" target="_blank"><img src="//qidian.qpic.cn/qidian_common/349573/4b5ce33191c5de3a6516d3f393658cec/0"><i class="op-tag"></i></a></p>
                </dd>
                
                <dd>
                    <h3>
                        
                        <span></span>
                        
                        <i>12-05</i><a href="http://cpgame.qd.game.qidian.com/Home/GameServer/lists?name=rxsg3" data-eid="qd_A35" target="_blank">热血三国3</a><strong>12区</strong></h3>
                    <p><a href="http://cpgame.qd.game.qidian.com/Home/GameServer/lists?name=rxsg3" data-eid="qd_A35" target="_blank"><img src="//qidian.qpic.cn/qidian_common/349573/785cb37b6d55eb3e9fc414ee72740399/0"><i class="op-tag"></i></a></p>
                </dd>
                
                <dd>
                    <h3>
                        
                        <i>12-05</i><a href="http://cpgame.qd.game.qidian.com/Home/GameServer/lists?name=xxmxc" data-eid="qd_A36" target="_blank">小小冒险村</a><strong>24区</strong></h3>
                    <p><a href="http://cpgame.qd.game.qidian.com/Home/GameServer/lists?name=xxmxc" data-eid="qd_A36" target="_blank"><img src="//qidian.qpic.cn/qidian_common/349573/bb5cd843144ccf7d0e5768114e417aa8/0"><i class="op-tag"></i></a></p>
                </dd>
                
                <dd>
                    <h3>
                        
                        <span></span>
                        
                        <i>12-04</i><a href="http://cpgame.qd.game.qidian.com/Home/GameServer/lists?name=dhd" data-eid="qd_A37" target="_blank">大皇帝</a><strong>123区</strong></h3>
                    <p><a href="http://cpgame.qd.game.qidian.com/Home/GameServer/lists?name=dhd" data-eid="qd_A37" target="_blank"><img src="//qidian.qpic.cn/qidian_common/349573/79c00b641b6e4683fa49d1fc6000ee5c/0"><i class="op-tag"></i></a></p>
                </dd>
                
            </dl>
            <div class="bottom">
                <h4>悬赏</h4>
                <p><a href="http://xs.game.qidian.com/?qd_game_key=xs192x86&amp;qd_dd_p1=124" data-eid="qd_A38" target="_blank"><img src="//qidian.qpic.cn/qidian_common/349573/88abf71a366b64ef0b5d53cf58d747ca/0"><span class="op-tag"></span></a></p>
            </div>
        </div>
        <!-- end 页游列表 -->
    </div>
    <!-- end 页游下拉框 -->
</li>
            <!-- end 页游手游 -->
        </ul>
    </div>
</div>
    <!-- end 主导航 -->
    <div class="rank-box box-center cf">
        <!-- 设置 侧边栏高亮变量初始值 -->
        
        <!-- start 榜单列表导航-->
        <div class="rank-nav-list fl" data-l1="4">
    <ul>
        
        <li class="act"><a href="//r.qidian.com/" data-eid="qd_C01">人气榜单</a><cite></cite></li>
    </ul>
    <p class="line"></p>
    <h4>热门作品排行</h4>
    <ul class="list_type_detective">
        <li class=""><a href="//r.qidian.com/yuepiao?style=1" data-eid="qd_C02">原创风云榜</a><cite></cite></li>
        <li class=""><a href="//r.qidian.com/hotsales?style=1" data-eid="qd_C03">24小时热销榜</a><cite></cite></li>
        <li class=""><a href="//r.qidian.com/click?style=1" data-eid="qd_C04">会员点击榜</a><cite></cite></li>
        <li class=""><a href="//r.qidian.com/recom?style=1" data-eid="qd_C05">推荐票榜</a><cite></cite></li>
        <li class=""><a href="//r.qidian.com/collect?style=1" data-eid="qd_C06">收藏榜</a><cite></cite></li>
        <li class=""><a href="//r.qidian.com/vipup?style=1" data-eid="qd_C07">VIP更新榜</a><cite></cite></li>
        <li class=""><a href="//r.qidian.com/vipcollect?style=1" data-eid="qd_C08">VIP收藏榜</a><cite></cite></li>
        <li class=""><a href="//r.qidian.com/vipreward?style=1" data-eid="qd_C09">VIP打赏榜</a><cite></cite></li>
        <li class=""><a href="//r.qidian.com/fin?style=1" data-eid="qd_C10">完本榜</a><cite></cite></li>
    </ul>
    <p class="line"></p>
    <h4>新书排行</h4>
    <ul class="list_type_detective">
        <li class=""><a href="//r.qidian.com/signnewbook?style=1" data-eid="qd_C11">签约作家新书榜</a><cite></cite></li>
        <li class=""><a href="//r.qidian.com/pubnewbook?style=1" data-eid="qd_C12">公众作者新书榜</a><cite></cite></li>
        <li class=""><a href="//r.qidian.com/newsign?style=1" data-eid="qd_C13">新人签约新书榜</a><cite></cite></li>
        <li class=""><a href="//r.qidian.com/newauthor?style=1" data-eid="qd_C14">新人作者新书榜</a><cite></cite></li>
    </ul>
    <p class="line"></p>
    <h4>社区排行</h4>
    <ul>
        <li class=""><a href="//r.qidian.com/fans" data-eid="qd_C15">打赏粉丝榜</a><cite></cite></li>
    </ul>
    <p class="line"></p>
    <h4>其他排行</h4>
    <ul>
        <li><a target="_blank" href="http://www.qdmm.com/MMWeb/TopTen.aspx" data-eid="qd_C16">女生精选榜</a></li>
        <li><a target="_blank" href="http://top.qdmm.com/MMWeb/TopDetail.aspx?TopType=7&Time=1" data-eid="qd_C17">女生原创风云榜</a></li>
        <!--<li><a target="_blank" href="http://wwwploy.qdmm.com/MMWeb/PKList.aspx" data-eid="qd_C18">女生PK榜</a></li>-->
    </ul>
</div>
        <!-- end 榜单列表导航-->
        <!-- start 榜单列表内容 -->
        <div class="main-content-wrap fl" data-l1="5">
            <!-- start rank 头部区域 -->
             
            <div class="rank-header">
                   <h3 class="lang"><a class="link" href="http://wwwploy.qidian.com/HelpCenter/default.aspx?type=0&categoryid=67&parentid=13" data-eid="qd_C19" target="_blank">榜单规则</a>人气榜单<span><em>2016-12-06 14:31</em>更新</span></h3>
                <div class="type-list">
                    <p>
                        <a data-chanid="-1" class="act" href="javascript:" data-eid="qd_C20">全部分类</a><em>&#183;</em>
                        <a data-chanid="21" class="" href="javascript:" data-eid="qd_C21">玄幻</a><em>&#183;</em>
                        <a data-chanid="1" class="" href="javascript:" data-eid="qd_C22">奇幻</a><em>&#183;</em>
                        <a data-chanid="2" class="" href="javascript:" data-eid="qd_C23">武侠</a><em>&#183;</em>
                        <a data-chanid="22" class="" href="javascript:" data-eid="qd_C24">仙侠</a><em>&#183;</em>
                        <a data-chanid="4" class="" href="javascript:" data-eid="qd_C25">都市</a><em>&#183;</em>
                        <a data-chanid="15" class="" href="javascript:" data-eid="qd_C26">职场</a><em>&#183;</em>
                        <a data-chanid="6" class="" href="javascript:" data-eid="qd_C27">军事</a><em>&#183;</em>
                        <a data-chanid="5" class="" href="javascript:" data-eid="qd_C28">历史</a><em>&#183;</em>
                        <a data-chanid="7" class="" href="javascript:" data-eid="qd_C29">游戏</a><em>&#183;</em>
                        <a data-chanid="8" class="" href="javascript:" data-eid="qd_C30">体育</a><em>&#183;</em>
                        <a data-chanid="9" class="" href="javascript:" data-eid="qd_C31">科幻</a><em>&#183;</em>
                        <a data-chanid="10" class="" href="javascript:" data-eid="qd_C32">灵异</a><em>&#183;</em>
                        <a data-chanid="12" class="" href="javascript:" data-eid="qd_C33">二次元</a>
                    </p>
                </div>
            </div>
            <!-- end rank头部区域 -->
            <!-- start 榜单区域 -->
            <div class="rank-body">
                <div class="rank-list-row cf mb20">
                    <!-- start 原创风云榜 -->
                    <div class="rank-list">
                        <h3 class="wrap-title lang">原创风云榜<i>&#183;</i>新书<a class="more" href="//r.qidian.com/yuepiao" data-eid="qd_C45">更多<em class="iconfont">&#xe621;</em></a>
                        </h3>
                        <div class="book-list">
                            
                            <ul>
                                <li class="unfold" data-rid="1">
                                    <div class="book-wrap cf">
                                        <div class="book-info fl">
                                            <h3>NO.1</h3>
                                            <h4>
                                                <a href="//book.qidian.com/info/1003651309" target="_blank" data-eid="qd_C40" data-bid="1003651309">天神诀</a>
                                            </h4>
                                            <p class="digital"><em>12068</em>月票</p>
                                            <p class="author">
                                                <a class="type" href="//xuanhuan.qidian.com" target="_blank" data-eid="qd_C42">玄幻</a><i>&#183;</i><a class="writer" href="//me.qidian.com/authorIndex.aspx?id=4224551" target="_blank" data-eid="qd_C41">太一生水</a>
                                            </p>
                                        </div>
                                        <div class="book-cover">
                                            <a class="link" href="//book.qidian.com/info/1003651309" target="_blank" data-eid="qd_C39" data-bid="1003651309">
                                                <img src="//qidian.qpic.cn/qdbimg/349573/1003651309/90">
                                            </a>
                                            <span></span>
                                        </div>
                                    </div>
                                </li>

                     
                                <li data-rid="2">
                                    <div class="num-box"><span class="num2">2</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1004066088" target="_blank" data-eid="qd_C40" data-bid="1004066088">未来游乐场</a>
                                        
                                        <i class="total">9589</i>
                                    </div>
                                </li>
                        
                                <li data-rid="3">
                                    <div class="num-box"><span class="num3">3</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1004142144" target="_blank" data-eid="qd_C40" data-bid="1004142144">武道宗师</a>
                                        
                                        <i class="total">5922</i>
                                    </div>
                                </li>
                        
                                <li data-rid="4">
                                    <div class="num-box"><span class="num4">4</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1004595865" target="_blank" data-eid="qd_C40" data-bid="1004595865">主神崛起</a>
                                        
                                        <i class="total">2077</i>
                                    </div>
                                </li>
                        
                                <li data-rid="5">
                                    <div class="num-box"><span class="num5">5</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1004144972" target="_blank" data-eid="qd_C40" data-bid="1004144972">地球唯一修士</a>
                                        
                                        <i class="total">1159</i>
                                    </div>
                                </li>
                        
                                <li data-rid="6">
                                    <div class="num-box"><span class="num6">6</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1004571179" target="_blank" data-eid="qd_C40" data-bid="1004571179">真人美化系统</a>
                                        
                                        <i class="total">1158</i>
                                    </div>
                                </li>
                        
                                <li data-rid="7">
                                    <div class="num-box"><span class="num7">7</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1004173715" target="_blank" data-eid="qd_C40" data-bid="1004173715">修真百年归来</a>
                                        
                                        <i class="total">984</i>
                                    </div>
                                </li>
                        
                                <li data-rid="8">
                                    <div class="num-box"><span class="num8">8</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1003786423" target="_blank" data-eid="qd_C40" data-bid="1003786423">全能大歌王</a>
                                        
                                        <i class="total">802</i>
                                    </div>
                                </li>
                        
                                <li data-rid="9">
                                    <div class="num-box"><span class="num9">9</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1004151636" target="_blank" data-eid="qd_C40" data-bid="1004151636">大国重工</a>
                                        
                                        <i class="total">578</i>
                                    </div>
                                </li>
                        
                                <li data-rid="10">
                                    <div class="num-box"><span class="num10">10</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1004041465" target="_blank" data-eid="qd_C40" data-bid="1004041465">我妖重新做人</a>
                                        
                                        <i class="total">475</i>
                                    </div>
                                </li>
                        
                            </ul>
                            
                        </div>
                    </div>
                    <!-- end 原创风云榜 -->
                    <!-- start 24小时热销 -->
                    <div class="rank-list sort-list">
                        <h3 class="wrap-title lang">24小时热销榜<a class="more" href="//r.qidian.com/hotsales" data-eid="qd_C46">更多<em class="iconfont">&#xe621;</em></a></h3>
                        <div class="book-list">
                            
                            <ul>
                                <li class="unfold" data-rid="1">
                                    <div class="book-wrap cf">
                                        <div class="book-info fl">
                                            <h3>NO.1</h3>
                                            <h4>
                                                <a href="//book.qidian.com/info/3347598" target="_blank" data-eid="qd_C40" data-bid="3347598">我真是大明星</a></h4>
                                            <p class="digital f16">销量冠军</p>
                                            <p class="author">
                                                <a class="type" href="//zhichang.qidian.com" target="_blank" data-eid="qd_C42">职场</a><i>&#183;</i><a class="writer" href="//me.qidian.com/authorIndex.aspx?id=4362273" target="_blank" data-eid="qd_C41">尝谕</a>
                                            </p>
                                        </div>
                                        <div class="book-cover">
                                            <a class="link" href="//book.qidian.com/info/3347598" target="_blank" data-eid="qd_C39" data-bid="3347598">
                                                <img src="//qidian.qpic.cn/qdbimg/349573/3347598/90">
                                            </a>
                                            <span></span>
                                        </div>
                                    </div>
                                </li>
                                                  
                                <li data-rid="2">
                                    <div class="num-box"><span class="num2">2</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/3548786" target="_blank" data-eid="qd_C40" data-bid="3548786">重生之都市修仙</a>
                                        
                                        
                                        <span class="iconfont">&#xe627;</span>
                                        
                                    </div>
                                </li>
                                
                                <li data-rid="3">
                                    <div class="num-box"><span class="num3">3</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1003354631" target="_blank" data-eid="qd_C40" data-bid="1003354631">一念永恒</a>
                                        
                                        
                                        <span class="iconfont">&#xe627;</span>
                                        
                                    </div>
                                </li>
                                
                                <li data-rid="4">
                                    <div class="num-box"><span class="num4">4</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/3513193" target="_blank" data-eid="qd_C40" data-bid="3513193">雪鹰领主</a>
                                        
                                        
                                        <span class="iconfont">&#xe627;</span>
                                        
                                    </div>
                                </li>
                                
                                <li data-rid="5">
                                    <div class="num-box"><span class="num5">5</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1003667321" target="_blank" data-eid="qd_C40" data-bid="1003667321">美食供应商</a>
                                        
                                        
                                        <span class="iconfont up">&#xe626;</span>
                                        
                                    </div>
                                </li>
                                
                                <li data-rid="6">
                                    <div class="num-box"><span class="num6">6</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/3681560" target="_blank" data-eid="qd_C40" data-bid="3681560">龙王传说</a>
                                        
                                        
                                        <span class="iconfont up">&#xe626;</span>
                                        
                                    </div>
                                </li>
                                
                                <li data-rid="7">
                                    <div class="num-box"><span class="num7">7</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/2750457" target="_blank" data-eid="qd_C40" data-bid="2750457">大主宰</a>
                                        
                                        
                                        <span class="iconfont">&#xe627;</span>
                                        
                                    </div>
                                </li>
                                
                                <li data-rid="8">
                                    <div class="num-box"><span class="num8">8</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1003306811" target="_blank" data-eid="qd_C40" data-bid="1003306811">放开那个女巫</a>
                                        
                                        
                                        <span class="iconfont">&#xe625;</span>
                                        
                                    </div>
                                </li>
                                
                                <li data-rid="9">
                                    <div class="num-box"><span class="num9">9</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1003307568" target="_blank" data-eid="qd_C40" data-bid="1003307568">不朽凡人</a>
                                        
                                        
                                        <span class="iconfont">&#xe627;</span>
                                        
                                    </div>
                                </li>
                                
                                <li data-rid="10">
                                    <div class="num-box"><span class="num10">10</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/3602691" target="_blank" data-eid="qd_C40" data-bid="3602691">修真聊天群</a>
                                        
                                        
                                        <span class="iconfont">&#xe625;</span>
                                        
                                    </div>
                                </li>
                                
                            </ul>
                            
                        </div>
                    </div>
                    <!-- end 24小时热销 -->
                    <!-- start 会员点击榜 -->
                    <div class="rank-list">
                        <div class="tab-title">
                            <div class="tab-wrap"><a class="act" href="javascript:" data-eid="qd_C48">周</a><em>&#183;</em><a href="javascript:" data-eid="qd_C49">月</a><em>&#183;</em><a href="javascript:" data-eid="qd_C50">总</a></div>
                            <h3 class="wrap-title lang">会员点击榜<a class="more" href="//r.qidian.com/click" data-eid="qd_C47">更多<em class="iconfont">&#xe621;</em></a></h3>
                        </div>
                        <div class="tab-list">
                            <!-- 周 -->
                            <div class="book-list">
                                
                                <ul>
                                    <li class="unfold" data-rid="1">
                                        <div class="book-wrap cf">
                                            <div class="book-info fl">
                                                <h3>NO.1</h3>
                                                <h4>
                                                    <a href="//book.qidian.com/info/1004608738" target="_blank" data-eid="qd_C40" data-bid="1004608738">圣墟</a></h4>
                                                <p class="digital"><em>20813</em>点击</p>
                                                <p class="author">
                                                    <a class="type" href="//xuanhuan.qidian.com" target="_blank" data-eid="qd_C42">玄幻</a><i>&#183;</i><a class="writer" href="//me.qidian.com/authorIndex.aspx?id=4362453" target="_blank" data-eid="qd_C41">辰东</a>
                                                </p>
                                            </div>
                                            <div class="book-cover">
                                                <a class="link" href="//book.qidian.com/info/1004608738" target="_blank" data-eid="qd_C39" data-bid="1004608738">
                                                    <img src="//qidian.qpic.cn/qdbimg/349573/1004608738/90">
                                                </a>
                                                <span></span>
                                            </div>
                                        </div>
                                    </li>

                         
                                    <li data-rid="2">
                                        <div class="num-box"><span class="num2">2</span></div>
                                        <div class="name-box">
                                            
                                            <a class="name" href="//book.qidian.com/info/1003723851" target="_blank" data-eid="qd_C40" data-bid="1003723851">天影</a>
                                            <i class="total">18368</i>
                                        </div>
                                    </li>
                                    
                                    <li data-rid="3">
                                        <div class="num-box"><span class="num3">3</span></div>
                                        <div class="name-box">
                                            
                                            <a class="name" href="//book.qidian.com/info/1004179514" target="_blank" data-eid="qd_C40" data-bid="1004179514">天道图书馆</a>
                                            <i class="total">18125</i>
                                        </div>
                                    </li>
                                    
                                    <li data-rid="4">
                                        <div class="num-box"><span class="num4">4</span></div>
                                        <div class="name-box">
                                            
                                            <a class="name" href="//book.qidian.com/info/1003694333" target="_blank" data-eid="qd_C40" data-bid="1003694333">斗战狂潮</a>
                                            <i class="total">17931</i>
                                        </div>
                                    </li>
                                    
                                    <li data-rid="5">
                                        <div class="num-box"><span class="num5">5</span></div>
                                        <div class="name-box">
                                            
                                            <a class="name" href="//book.qidian.com/info/1003651309" target="_blank" data-eid="qd_C40" data-bid="1003651309">天神诀</a>
                                            <i class="total">16366</i>
                                        </div>
                                    </li>
                                    
                                    <li data-rid="6">
                                        <div class="num-box"><span class="num6">6</span></div>
                                        <div class="name-box">
                                            
                                            <a class="name" href="//book.qidian.com/info/1003578885" target="_blank" data-eid="qd_C40" data-bid="1003578885">超凡传</a>
                                            <i class="total">15423</i>
                                        </div>
                                    </li>
                                    
                                    <li data-rid="7">
                                        <div class="num-box"><span class="num7">7</span></div>
                                        <div class="name-box">
                                            
                                            <a class="name" href="//book.qidian.com/info/3552978" target="_blank" data-eid="qd_C40" data-bid="3552978">巫神纪</a>
                                            <i class="total">14763</i>
                                        </div>
                                    </li>
                                    
                                    <li data-rid="8">
                                        <div class="num-box"><span class="num8">8</span></div>
                                        <div class="name-box">
                                            
                                            <a class="name" href="//book.qidian.com/info/1001389020" target="_blank" data-eid="qd_C40" data-bid="1001389020">神荒龙帝</a>
                                            <i class="total">14688</i>
                                        </div>
                                    </li>
                                    
                                    <li data-rid="9">
                                        <div class="num-box"><span class="num9">9</span></div>
                                        <div class="name-box">
                                            
                                            <a class="name" href="//book.qidian.com/info/3623463" target="_blank" data-eid="qd_C40" data-bid="3623463">重生之2006</a>
                                            <i class="total">14659</i>
                                        </div>
                                    </li>
                                    
                                    <li data-rid="10">
                                        <div class="num-box"><span class="num10">10</span></div>
                                        <div class="name-box">
                                            
                                            <a class="name" href="//book.qidian.com/info/1003683523" target="_blank" data-eid="qd_C40" data-bid="1003683523">最后一个使徒</a>
                                            <i class="total">14558</i>
                                        </div>
                                    </li>
                                    
                                    </ul>
                                
                        </div>
                            <!-- 月 -->
                            <div class="book-list hidden">
                                
                                <ul>
                                    <li class="unfold" data-rid="1">
                                        <div class="book-wrap cf">
                                            <div class="book-info fl">
                                                <h3>NO.1</h3>
                                                <h4>
                                                    <a href="//book.qidian.com/info/1004608738" target="_blank" data-eid="qd_C40" data-bid="1004608738">圣墟</a></h4>
                                                <p class="digital"><em>61407</em>点击</p>
                                                <p class="author">
                                                    <a class="type" href="//xuanhuan.qidian.com" target="_blank" data-eid="qd_C42">玄幻</a><i>&#183;</i><a class="writer" href="//me.qidian.com/authorIndex.aspx?id=4362453" target="_blank" data-eid="qd_C41">辰东</a>
                                                </p>
                                            </div>
                                            <div class="book-cover">
                                                <a class="link" href="//book.qidian.com/info/1004608738" target="_blank" data-eid="qd_C39" data-bid="1004608738">
                                                    <img src="//qidian.qpic.cn/qdbimg/349573/1004608738/180">
                                                </a>
                                                <span></span>
                                            </div>
                                        </div>
                                    </li>
                     
                                <li data-rid="2">
                                    <div class="num-box"><span class="num2">2</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1003651309" target="_blank" data-eid="qd_C40" data-bid="1003651309">天神诀</a>
                                        
                                        <i class="total">56941</i>
                                    </div>
                                </li>
                        
                                <li data-rid="3">
                                    <div class="num-box"><span class="num3">3</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1003723851" target="_blank" data-eid="qd_C40" data-bid="1003723851">天影</a>
                                        
                                        <i class="total">47972</i>
                                    </div>
                                </li>
                        
                                <li data-rid="4">
                                    <div class="num-box"><span class="num4">4</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1004179514" target="_blank" data-eid="qd_C40" data-bid="1004179514">天道图书馆</a>
                                        
                                        <i class="total">43146</i>
                                    </div>
                                </li>
                        
                                <li data-rid="5">
                                    <div class="num-box"><span class="num5">5</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1003578885" target="_blank" data-eid="qd_C40" data-bid="1003578885">超凡传</a>
                                        
                                        <i class="total">43095</i>
                                    </div>
                                </li>
                        
                                <li data-rid="6">
                                    <div class="num-box"><span class="num6">6</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1003694333" target="_blank" data-eid="qd_C40" data-bid="1003694333">斗战狂潮</a>
                                        
                                        <i class="total">41050</i>
                                    </div>
                                </li>
                        
                                <li data-rid="7">
                                    <div class="num-box"><span class="num7">7</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/3347598" target="_blank" data-eid="qd_C40" data-bid="3347598">我真是大明星</a>
                                        
                                        <i class="total">39164</i>
                                    </div>
                                </li>
                        
                                <li data-rid="8">
                                    <div class="num-box"><span class="num8">8</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1003683523" target="_blank" data-eid="qd_C40" data-bid="1003683523">最后一个使徒</a>
                                        
                                        <i class="total">38527</i>
                                    </div>
                                </li>
                        
                                <li data-rid="9">
                                    <div class="num-box"><span class="num9">9</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/3681607" target="_blank" data-eid="qd_C40" data-bid="3681607">主角猎杀者</a>
                                        
                                        <i class="total">38073</i>
                                    </div>
                                </li>
                        
                                <li data-rid="10">
                                    <div class="num-box"><span class="num10">10</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/3679576" target="_blank" data-eid="qd_C40" data-bid="3679576">幻游猎人</a>
                                        
                                        <i class="total">36415</i>
                                    </div>
                                </li>
                        
                                </ul>
                                
                            </div>
                            <!-- 总 -->
                            <div class="book-list hidden">
                                
                                <ul>
                                    <li class="unfold" data-rid="1">
                                        <div class="book-wrap cf">
                                            <div class="book-info fl">
                                                <h3>NO.1</h3>
                                                <h4>
                                                    <a href="//book.qidian.com/info/1639199" target="_blank" data-eid="qd_C40" data-bid="1639199">吞噬星空</a></h4>
                                                <p class="digital"><em>11236476</em>点击</p>
                                                <p class="author">
                                                    <a class="type" href="//kehuan.qidian.com" target="_blank" data-eid="qd_C42">科幻</a><i>&#183;</i><a class="writer" href="//me.qidian.com/authorIndex.aspx?id=4362096" target="_blank" data-eid="qd_C41">我吃西红柿</a>
                                                </p>
                                            </div>
                                            <div class="book-cover">
                                                <a class="link" href="//book.qidian.com/info/1639199" target="_blank" data-eid="qd_C39" data-bid="1639199">
                                                    <img src="//qidian.qpic.cn/qdbimg/349573/1639199/180">
                                                </a>
                                                <span></span>
                                            </div>
                                        </div>
                                    </li>

                     
                                <li data-rid="2">
                                    <div class="num-box"><span class="num2">2</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1735921" target="_blank" data-eid="qd_C40" data-bid="1735921">遮天</a>
                                        
                                        <i class="total">6508427</i>
                                    </div>
                                </li>
                        
                                <li data-rid="3">
                                    <div class="num-box"><span class="num3">3</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1209977" target="_blank" data-eid="qd_C40" data-bid="1209977">斗破苍穹</a>
                                        
                                        <i class="total">5632906</i>
                                    </div>
                                </li>
                        
                                <li data-rid="4">
                                    <div class="num-box"><span class="num4">4</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/2048120" target="_blank" data-eid="qd_C40" data-bid="2048120">武动乾坤</a>
                                        
                                        <i class="total">5385564</i>
                                    </div>
                                </li>
                        
                                <li data-rid="5">
                                    <div class="num-box"><span class="num5">5</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/3106580" target="_blank" data-eid="qd_C40" data-bid="3106580">我欲封天</a>
                                        
                                        <i class="total">4260474</i>
                                    </div>
                                </li>
                        
                                <li data-rid="6">
                                    <div class="num-box"><span class="num6">6</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/107580" target="_blank" data-eid="qd_C40" data-bid="107580">凡人修仙传</a>
                                        
                                        <i class="total">4221176</i>
                                    </div>
                                </li>
                        
                                <li data-rid="7">
                                    <div class="num-box"><span class="num7">7</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/2083259" target="_blank" data-eid="qd_C40" data-bid="2083259">将夜</a>
                                        
                                        <i class="total">4182387</i>
                                    </div>
                                </li>
                        
                                <li data-rid="8">
                                    <div class="num-box"><span class="num8">8</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/2502372" target="_blank" data-eid="qd_C40" data-bid="2502372">莽荒纪</a>
                                        
                                        <i class="total">4014513</i>
                                    </div>
                                </li>
                        
                                <li data-rid="9">
                                    <div class="num-box"><span class="num9">9</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1693876" target="_blank" data-eid="qd_C40" data-bid="1693876">重生之贼行天下</a>
                                        
                                        <i class="total">3876136</i>
                                    </div>
                                </li>
                        
                                <li data-rid="10">
                                    <div class="num-box"><span class="num10">10</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1777445" target="_blank" data-eid="qd_C40" data-bid="1777445">天珠变</a>
                                        
                                        <i class="total">3771916</i>
                                    </div>
                                </li>
                        
                                </ul>
                                
                            </div>
                        </div>
                    </div>
                    <!-- end 会员点击榜 -->
                    <!-- start 推荐票榜 -->
                    <div class="rank-list mr0">
                        <div class="tab-title">
                            <div class="tab-wrap"><a class="act" href="javascript:" data-eid="qd_C52">周</a><em>&#183;</em><a href="javascript:" data-eid="qd_C53">月</a><em>&#183;</em><a href="javascript:" data-eid="qd_C54">总</a></div>
                            <h3 class="wrap-title lang">推荐票榜<a class="more" href="//r.qidian.com/recom" data-eid="qd_C51">更多<em class="iconfont">&#xe621;</em></a></h3>
                        </div>
                        <div class="tab-list">
                            <!-- 周 -->
                            <div class="book-list">
                                
                                <ul>
                                    <li class="unfold" data-rid="1">
                                        <div class="book-wrap cf">
                                            <div class="book-info fl">
                                                <h3>NO.1</h3>
                                                <h4>
                                                    <a href="//book.qidian.com/info/1004608738" target="_blank" data-eid="qd_C40" data-bid="1004608738">圣墟</a></h4>
                                                <p class="digital"><em>89978</em>推荐票</p>
                                                <p class="author">
                                                    <a class="type" href="//xuanhuan.qidian.com" target="_blank" data-eid="qd_C42">玄幻</a><i>&#183;</i><a class="writer" href="//me.qidian.com/authorIndex.aspx?id=4362453" target="_blank" data-eid="qd_C41">辰东</a>
                                                </p>
                                            </div>
                                            <div class="book-cover">
                                                <a class="link" href="//book.qidian.com/info/1004608738" target="_blank" data-eid="qd_C39" data-bid="1004608738">
                                                    <img src="//qidian.qpic.cn/qdbimg/349573/1004608738/90">
                                                </a>
                                                <span></span>
                                            </div>
                                        </div>
                                    </li>
                     
                                <li data-rid="2">
                                    <div class="num-box"><span class="num2">2</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/3347598" target="_blank" data-eid="qd_C40" data-bid="3347598">我真是大明星</a>
                                        
                                        <i class="total">72291</i>
                                    </div>
                                </li>
                        
                                <li data-rid="3">
                                    <div class="num-box"><span class="num3">3</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1003723851" target="_blank" data-eid="qd_C40" data-bid="1003723851">天影</a>
                                        
                                        <i class="total">59615</i>
                                    </div>
                                </li>
                        
                                <li data-rid="4">
                                    <div class="num-box"><span class="num4">4</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1003694333" target="_blank" data-eid="qd_C40" data-bid="1003694333">斗战狂潮</a>
                                        
                                        <i class="total">54436</i>
                                    </div>
                                </li>
                        
                                <li data-rid="5">
                                    <div class="num-box"><span class="num5">5</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1004179514" target="_blank" data-eid="qd_C40" data-bid="1004179514">天道图书馆</a>
                                        
                                        <i class="total">50880</i>
                                    </div>
                                </li>
                        
                                <li data-rid="6">
                                    <div class="num-box"><span class="num6">6</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/3513193" target="_blank" data-eid="qd_C40" data-bid="3513193">雪鹰领主</a>
                                        
                                        <i class="total">43232</i>
                                    </div>
                                </li>
                        
                                <li data-rid="7">
                                    <div class="num-box"><span class="num7">7</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1003683523" target="_blank" data-eid="qd_C40" data-bid="1003683523">最后一个使徒</a>
                                        
                                        <i class="total">39750</i>
                                    </div>
                                </li>
                        
                                <li data-rid="8">
                                    <div class="num-box"><span class="num8">8</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1004142144" target="_blank" data-eid="qd_C40" data-bid="1004142144">武道宗师</a>
                                        
                                        <i class="total">34644</i>
                                    </div>
                                </li>
                        
                                <li data-rid="9">
                                    <div class="num-box"><span class="num9">9</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1003354631" target="_blank" data-eid="qd_C40" data-bid="1003354631">一念永恒</a>
                                        
                                        <i class="total">34549</i>
                                    </div>
                                </li>
                        
                                <li data-rid="10">
                                    <div class="num-box"><span class="num10">10</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1003307568" target="_blank" data-eid="qd_C40" data-bid="1003307568">不朽凡人</a>
                                        
                                        <i class="total">34326</i>
                                    </div>
                                </li>
                        

                                </ul>
                                
                            </div>
                            <!-- 月 -->
                            <div class="book-list hidden">
                                
                                <ul>
                                    <li class="unfold" data-rid="1">
                                        <div class="book-wrap cf">
                                            <div class="book-info fl">
                                                <h3>NO.1</h3>
                                                <h4>
                                                    <a href="//book.qidian.com/info/3347598" target="_blank" data-eid="qd_C40" data-bid="3347598">我真是大明星</a></h4>
                                                <p class="digital"><em>242536</em>推荐票</p>
                                                <p class="author">
                                                    <a class="type" href="//zhichang.qidian.com" target="_blank" data-eid="qd_C42">职场</a><i>&#183;</i><a class="writer" href="//me.qidian.com/authorIndex.aspx?id=4362273" target="_blank" data-eid="qd_C41">尝谕</a>
                                                </p>
                                            </div>
                                            <div class="book-cover">
                                                <a class="link" href="//book.qidian.com/info/3347598" target="_blank" data-eid="qd_C39" data-bid="3347598">
                                                    <img src="//qidian.qpic.cn/qdbimg/349573/3347598/180">
                                                </a>
                                                <span></span>
                                            </div>
                                        </div>
                                    </li>
                     
                                <li data-rid="2">
                                    <div class="num-box"><span class="num2">2</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1004608738" target="_blank" data-eid="qd_C40" data-bid="1004608738">圣墟</a>
                                        
                                        <i class="total">235539</i>
                                    </div>
                                </li>
                        
                                <li data-rid="3">
                                    <div class="num-box"><span class="num3">3</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1003723851" target="_blank" data-eid="qd_C40" data-bid="1003723851">天影</a>
                                        
                                        <i class="total">184761</i>
                                    </div>
                                </li>
                        
                                <li data-rid="4">
                                    <div class="num-box"><span class="num4">4</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1003694333" target="_blank" data-eid="qd_C40" data-bid="1003694333">斗战狂潮</a>
                                        
                                        <i class="total">174956</i>
                                    </div>
                                </li>
                        
                                <li data-rid="5">
                                    <div class="num-box"><span class="num5">5</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1003307568" target="_blank" data-eid="qd_C40" data-bid="1003307568">不朽凡人</a>
                                        
                                        <i class="total">126299</i>
                                    </div>
                                </li>
                        
                                <li data-rid="6">
                                    <div class="num-box"><span class="num6">6</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1003354631" target="_blank" data-eid="qd_C40" data-bid="1003354631">一念永恒</a>
                                        
                                        <i class="total">123594</i>
                                    </div>
                                </li>
                        
                                <li data-rid="7">
                                    <div class="num-box"><span class="num7">7</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1004179514" target="_blank" data-eid="qd_C40" data-bid="1004179514">天道图书馆</a>
                                        
                                        <i class="total">122903</i>
                                    </div>
                                </li>
                        
                                <li data-rid="8">
                                    <div class="num-box"><span class="num8">8</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1004142144" target="_blank" data-eid="qd_C40" data-bid="1004142144">武道宗师</a>
                                        
                                        <i class="total">122219</i>
                                    </div>
                                </li>
                        
                                <li data-rid="9">
                                    <div class="num-box"><span class="num9">9</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/3638453" target="_blank" data-eid="qd_C40" data-bid="3638453">五行天</a>
                                        
                                        <i class="total">109228</i>
                                    </div>
                                </li>
                        
                                <li data-rid="10">
                                    <div class="num-box"><span class="num10">10</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1003683523" target="_blank" data-eid="qd_C40" data-bid="1003683523">最后一个使徒</a>
                                        
                                        <i class="total">104944</i>
                                    </div>
                                </li>
                        
                                </ul>
                                
                            </div>
                            <!-- 总 -->
                            <div class="book-list hidden">
                                
                                <ul>
                                    <li class="unfold" data-rid="1">
                                        <div class="book-wrap cf">
                                            <div class="book-info fl">
                                                <h3>NO.1</h3>
                                                <h4>
                                                    <a href="//book.qidian.com/info/107580" target="_blank" data-eid="qd_C40" data-bid="107580">凡人修仙传</a></h4>
                                                <p class="digital"><em>13438487</em>推荐票</p>
                                                <p class="author">
                                                    <a class="type" href="//xianxia.qidian.com" target="_blank" data-eid="qd_C42">仙侠</a><i>&#183;</i><a class="writer" href="//me.qidian.com/authorIndex.aspx?id=4362771" target="_blank" data-eid="qd_C41">忘语</a>
                                                </p>
                                            </div>
                                            <div class="book-cover">
                                                <a class="link" href="//book.qidian.com/info/107580" target="_blank" data-eid="qd_C39" data-bid="107580">
                                                    <img src="//qidian.qpic.cn/qdbimg/349573/107580/180">
                                                </a>
                                                <span></span>
                                            </div>
                                        </div>
                                    </li>
                  
                                <li data-rid="2">
                                    <div class="num-box"><span class="num2">2</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/22919" target="_blank" data-eid="qd_C40" data-bid="22919">从零开始</a>
                                        
                                        <i class="total">13309497</i>
                                    </div>
                                </li>
                        
                                <li data-rid="3">
                                    <div class="num-box"><span class="num3">3</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1017141" target="_blank" data-eid="qd_C40" data-bid="1017141">盘龙</a>
                                        
                                        <i class="total">7714529</i>
                                    </div>
                                </li>
                        
                                <li data-rid="4">
                                    <div class="num-box"><span class="num4">4</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1639199" target="_blank" data-eid="qd_C40" data-bid="1639199">吞噬星空</a>
                                        
                                        <i class="total">7457140</i>
                                    </div>
                                </li>
                        
                                <li data-rid="5">
                                    <div class="num-box"><span class="num5">5</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1479" target="_blank" data-eid="qd_C40" data-bid="1479">江山美人志</a>
                                        
                                        <i class="total">7305756</i>
                                    </div>
                                </li>
                        
                                <li data-rid="6">
                                    <div class="num-box"><span class="num6">6</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/118447" target="_blank" data-eid="qd_C40" data-bid="118447">星辰变</a>
                                        
                                        <i class="total">6713192</i>
                                    </div>
                                </li>
                        
                                <li data-rid="7">
                                    <div class="num-box"><span class="num7">7</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1209977" target="_blank" data-eid="qd_C40" data-bid="1209977">斗破苍穹</a>
                                        
                                        <i class="total">6628191</i>
                                    </div>
                                </li>
                        
                                <li data-rid="8">
                                    <div class="num-box"><span class="num8">8</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/2952453" target="_blank" data-eid="qd_C40" data-bid="2952453">完美世界</a>
                                        
                                        <i class="total">6592783</i>
                                    </div>
                                </li>
                        
                                <li data-rid="9">
                                    <div class="num-box"><span class="num9">9</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/45050" target="_blank" data-eid="qd_C40" data-bid="45050">兽血沸腾</a>
                                        
                                        <i class="total">6253516</i>
                                    </div>
                                </li>
                        
                                <li data-rid="10">
                                    <div class="num-box"><span class="num10">10</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/5060" target="_blank" data-eid="qd_C40" data-bid="5060">亵渎</a>
                                        
                                        <i class="total">6209593</i>
                                    </div>
                                </li>
                        

                                </ul>
                                
                            </div>
                        </div>
                    </div>
                    <!-- end 推荐票榜 -->
                    <!-- start 收藏榜 -->
                    <div class="rank-list">
                            <h3 class="wrap-title lang">收藏榜<a class="more" href="//r.qidian.com/collect" data-eid="qd_C55">更多<em class="iconfont">&#xe621;</em></a></h3>
                            <div class="book-list">
                                
                                <ul>
                                    <li class="unfold" data-rid="1">
                                        <div class="book-wrap cf">
                                            <div class="book-info fl">
                                                <h3>NO.1</h3>
                                                <h4>
                                                    <a href="//book.qidian.com/info/3676417" target="_blank" data-eid="qd_C40" data-bid="3676417">玄界之门</a></h4>
                                                <p class="digital"><em>2295936</em>收藏数</p>
                                                <p class="author">
                                                    <a class="type" href="//xianxia.qidian.com" target="_blank" data-eid="qd_C42">仙侠</a><i>&#183;</i><a class="writer" href="//me.qidian.com/authorIndex.aspx?id=4362771" target="_blank" data-eid="qd_C41">忘语</a>
                                                </p>
                                            </div>
                                            <div class="book-cover">
                                                <a class="link" href="//book.qidian.com/info/3676417" target="_blank" data-eid="qd_C39" data-bid="3676417">
                                                    <img src="//qidian.qpic.cn/qdbimg/349573/3676417/90">
                                                </a>
                                                <span></span>
                                            </div>
                                        </div>
                                    </li>

                  
                                <li data-rid="2">
                                    <div class="num-box"><span class="num2">2</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1003354631" target="_blank" data-eid="qd_C40" data-bid="1003354631">一念永恒</a>
                                        
                                        <i class="total">1833215</i>
                                    </div>
                                </li>
                        
                                <li data-rid="3">
                                    <div class="num-box"><span class="num3">3</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/3347598" target="_blank" data-eid="qd_C40" data-bid="3347598">我真是大明星</a>
                                        
                                        <i class="total">1379828</i>
                                    </div>
                                </li>
                        
                                <li data-rid="4">
                                    <div class="num-box"><span class="num4">4</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1209977" target="_blank" data-eid="qd_C40" data-bid="1209977">斗破苍穹</a>
                                        
                                        <i class="total">1375451</i>
                                    </div>
                                </li>
                        
                                <li data-rid="5">
                                    <div class="num-box"><span class="num5">5</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/2750457" target="_blank" data-eid="qd_C40" data-bid="2750457">大主宰</a>
                                        
                                        <i class="total">1344032</i>
                                    </div>
                                </li>
                        
                                <li data-rid="6">
                                    <div class="num-box"><span class="num6">6</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/2952453" target="_blank" data-eid="qd_C40" data-bid="2952453">完美世界</a>
                                        
                                        <i class="total">1182243</i>
                                    </div>
                                </li>
                        
                                <li data-rid="7">
                                    <div class="num-box"><span class="num7">7</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1003307568" target="_blank" data-eid="qd_C40" data-bid="1003307568">不朽凡人</a>
                                        
                                        <i class="total">1156274</i>
                                    </div>
                                </li>
                        
                                <li data-rid="8">
                                    <div class="num-box"><span class="num8">8</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/3513193" target="_blank" data-eid="qd_C40" data-bid="3513193">雪鹰领主</a>
                                        
                                        <i class="total">1094411</i>
                                    </div>
                                </li>
                        
                                <li data-rid="9">
                                    <div class="num-box"><span class="num9">9</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/173050" target="_blank" data-eid="qd_C40" data-bid="173050">琴帝</a>
                                        
                                        <i class="total">1088970</i>
                                    </div>
                                </li>
                        
                                <li data-rid="10">
                                    <div class="num-box"><span class="num10">10</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/3106580" target="_blank" data-eid="qd_C40" data-bid="3106580">我欲封天</a>
                                        
                                        <i class="total">1053038</i>
                                    </div>
                                </li>
                        
                                </ul>
                                
                            </div>
                    </div>
                    <!-- end 收藏榜 -->
                    <!-- start 完本榜 -->
                    <div class="rank-list">
                        <div class="tab-title">
                            <div class="tab-wrap"><a class="act" href="javascript:" data-eid="qd_C57">周</a><em>&#183;</em><a href="javascript:" data-eid="qd_C58">月</a><em>&#183;</em><a href="javascript:" data-eid="qd_C59">总</a></div>
                            <h3 class="wrap-title lang">完本榜<a class="more" href="//r.qidian.com/fin" data-eid="qd_C56">更多<em class="iconfont">&#xe621;</em></a></h3>
                        </div>
                        <div class="tab-list">
                            <!-- 周 -->
                            <div class="book-list">
                                
                                <ul>
                                    <li class="unfold" data-rid="1">
                                        <div class="book-wrap cf">
                                            <div class="book-info fl">
                                                <h3>NO.1</h3>
                                                <h4>
                                                    <a href="//book.qidian.com/info/2952453" target="_blank" data-eid="qd_C40" data-bid="2952453">完美世界</a></h4>
                                                <p class="digital"><em>884</em>点击</p>
                                                <p class="author">
                                                    <a class="type" href="//xuanhuan.qidian.com" target="_blank" data-eid="qd_C42">玄幻</a><i>&#183;</i><a class="writer" href="//me.qidian.com/authorIndex.aspx?id=4362453" target="_blank" data-eid="qd_C41">辰东</a>
                                                </p>
                                            </div>
                                            <div class="book-cover">
                                                <a class="link" href="//book.qidian.com/info/2952453" target="_blank" data-eid="qd_C39" data-bid="2952453">
                                                    <img src="//qidian.qpic.cn/qdbimg/349573/2952453/90">
                                                </a>
                                                <span></span>
                                            </div>
                                        </div>
                                    </li>

                     
                                <li data-rid="2">
                                    <div class="num-box"><span class="num2">2</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/105199" target="_blank" data-eid="qd_C40" data-bid="105199">极品家丁</a>
                                        
                                        <i class="total">698</i>
                                    </div>
                                </li>
                        
                                <li data-rid="3">
                                    <div class="num-box"><span class="num3">3</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/2413595" target="_blank" data-eid="qd_C40" data-bid="2413595">唐砖</a>
                                        
                                        <i class="total">624</i>
                                    </div>
                                </li>
                        
                                <li data-rid="4">
                                    <div class="num-box"><span class="num4">4</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/3195551" target="_blank" data-eid="qd_C40" data-bid="3195551">造化之门</a>
                                        
                                        <i class="total">592</i>
                                    </div>
                                </li>
                        
                                <li data-rid="5">
                                    <div class="num-box"><span class="num5">5</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/3249362" target="_blank" data-eid="qd_C40" data-bid="3249362">一世之尊</a>
                                        
                                        <i class="total">577</i>
                                    </div>
                                </li>
                        
                                <li data-rid="6">
                                    <div class="num-box"><span class="num6">6</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/107580" target="_blank" data-eid="qd_C40" data-bid="107580">凡人修仙传</a>
                                        
                                        <i class="total">519</i>
                                    </div>
                                </li>
                        
                                <li data-rid="7">
                                    <div class="num-box"><span class="num7">7</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/2407162" target="_blank" data-eid="qd_C40" data-bid="2407162">武神空间</a>
                                        
                                        <i class="total">482</i>
                                    </div>
                                </li>
                        
                                <li data-rid="8">
                                    <div class="num-box"><span class="num8">8</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/2248950" target="_blank" data-eid="qd_C40" data-bid="2248950">最强弃少</a>
                                        
                                        <i class="total">457</i>
                                    </div>
                                </li>
                        
                                <li data-rid="9">
                                    <div class="num-box"><span class="num9">9</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1517362" target="_blank" data-eid="qd_C40" data-bid="1517362">官神</a>
                                        
                                        <i class="total">414</i>
                                    </div>
                                </li>
                        
                                <li data-rid="10">
                                    <div class="num-box"><span class="num10">10</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1630599" target="_blank" data-eid="qd_C40" data-bid="1630599">明末边军一小兵</a>
                                        
                                        <i class="total">390</i>
                                    </div>
                                </li>
                        
                                </ul>
                                
                            </div>
                            <!-- 月 -->
                            <div class="book-list hidden">
                                
                                <ul>
                                     <li class="unfold" data-rid="1">
                                        <div class="book-wrap cf">
                                            <div class="book-info fl">
                                                <h3>NO.1</h3>
                                                <h4>
                                                    <a href="//book.qidian.com/info/2952453" target="_blank" data-eid="qd_C40" data-bid="2952453">完美世界</a></h4>
                                                <p class="digital"><em>2905</em>点击</p>
                                                <p class="author">
                                                    <a class="type" href="//xuanhuan.qidian.com" target="_blank" data-eid="qd_C42">玄幻</a><i>&#183;</i><a class="writer" href="//me.qidian.com/authorIndex.aspx?id=4362453" target="_blank" data-eid="qd_C41">辰东</a>
                                                </p>
                                            </div>
                                            <div class="book-cover">
                                                <a class="link" href="//book.qidian.com/info/2952453" target="_blank" data-eid="qd_C39" data-bid="2952453">
                                                    <img src="//qidian.qpic.cn/qdbimg/349573/2952453/180">
                                                </a>
                                                <span></span>
                                            </div>
                                        </div>
                                    </li>

                     
                                <li data-rid="2">
                                    <div class="num-box"><span class="num2">2</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/2413595" target="_blank" data-eid="qd_C40" data-bid="2413595">唐砖</a>
                                        
                                        <i class="total">2227</i>
                                    </div>
                                </li>
                        
                                <li data-rid="3">
                                    <div class="num-box"><span class="num3">3</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1004055305" target="_blank" data-eid="qd_C40" data-bid="1004055305">从零开始竞选总统</a>
                                        
                                        <i class="total">2182</i>
                                    </div>
                                </li>
                        
                                <li data-rid="4">
                                    <div class="num-box"><span class="num4">4</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/3195551" target="_blank" data-eid="qd_C40" data-bid="3195551">造化之门</a>
                                        
                                        <i class="total">2081</i>
                                    </div>
                                </li>
                        
                                <li data-rid="5">
                                    <div class="num-box"><span class="num5">5</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/105199" target="_blank" data-eid="qd_C40" data-bid="105199">极品家丁</a>
                                        
                                        <i class="total">2046</i>
                                    </div>
                                </li>
                        
                                <li data-rid="6">
                                    <div class="num-box"><span class="num6">6</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/107580" target="_blank" data-eid="qd_C40" data-bid="107580">凡人修仙传</a>
                                        
                                        <i class="total">2004</i>
                                    </div>
                                </li>
                        
                                <li data-rid="7">
                                    <div class="num-box"><span class="num7">7</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/3249362" target="_blank" data-eid="qd_C40" data-bid="3249362">一世之尊</a>
                                        
                                        <i class="total">1981</i>
                                    </div>
                                </li>
                        
                                <li data-rid="8">
                                    <div class="num-box"><span class="num8">8</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/2431891" target="_blank" data-eid="qd_C40" data-bid="2431891">单机穿越者的悠闲都市</a>
                                        
                                        <i class="total">1730</i>
                                    </div>
                                </li>
                        
                                <li data-rid="9">
                                    <div class="num-box"><span class="num9">9</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1517362" target="_blank" data-eid="qd_C40" data-bid="1517362">官神</a>
                                        
                                        <i class="total">1727</i>
                                    </div>
                                </li>
                        
                                <li data-rid="10">
                                    <div class="num-box"><span class="num10">10</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/2881692" target="_blank" data-eid="qd_C40" data-bid="2881692">大器宗</a>
                                        
                                        <i class="total">1495</i>
                                    </div>
                                </li>
                        
                                </ul>
                                
                            </div>
                            <!-- 总 -->
                            <div class="book-list hidden">
                                
                                <ul>
                                      <li class="unfold" data-rid="1">
                                        <div class="book-wrap cf">
                                            <div class="book-info fl">
                                                <h3>NO.1</h3>
                                                <h4>
                                                    <a href="//book.qidian.com/info/1639199" target="_blank" data-eid="qd_C40" data-bid="1639199">吞噬星空</a></h4>
                                                <p class="digital"><em>11236476</em>点击</p>
                                                <p class="author">
                                                    <a class="type" href="//kehuan.qidian.com" target="_blank" data-eid="qd_C42">科幻</a><i>&#183;</i><a class="writer" href="//me.qidian.com/authorIndex.aspx?id=4362096" target="_blank" data-eid="qd_C41">我吃西红柿</a>
                                                </p>
                                            </div>
                                            <div class="book-cover">
                                                <a class="link" href="//book.qidian.com/info/1639199" target="_blank" data-eid="qd_C39" data-bid="1639199">
                                                    <img src="//qidian.qpic.cn/qdbimg/349573/1639199/180">
                                                </a>
                                                <span></span>
                                            </div>
                                        </div>
                                    </li>
                     
                                <li data-rid="2">
                                    <div class="num-box"><span class="num2">2</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1735921" target="_blank" data-eid="qd_C40" data-bid="1735921">遮天</a>
                                        
                                        <i class="total">6508427</i>
                                    </div>
                                </li>
                        
                                <li data-rid="3">
                                    <div class="num-box"><span class="num3">3</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/2048120" target="_blank" data-eid="qd_C40" data-bid="2048120">武动乾坤</a>
                                        
                                        <i class="total">5385564</i>
                                    </div>
                                </li>
                        
                                <li data-rid="4">
                                    <div class="num-box"><span class="num4">4</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/107580" target="_blank" data-eid="qd_C40" data-bid="107580">凡人修仙传</a>
                                        
                                        <i class="total">4221176</i>
                                    </div>
                                </li>
                        
                                <li data-rid="5">
                                    <div class="num-box"><span class="num5">5</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/2083259" target="_blank" data-eid="qd_C40" data-bid="2083259">将夜</a>
                                        
                                        <i class="total">4182387</i>
                                    </div>
                                </li>
                        
                                <li data-rid="6">
                                    <div class="num-box"><span class="num6">6</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/2502372" target="_blank" data-eid="qd_C40" data-bid="2502372">莽荒纪</a>
                                        
                                        <i class="total">4014513</i>
                                    </div>
                                </li>
                        
                                <li data-rid="7">
                                    <div class="num-box"><span class="num7">7</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1693876" target="_blank" data-eid="qd_C40" data-bid="1693876">重生之贼行天下</a>
                                        
                                        <i class="total">3876136</i>
                                    </div>
                                </li>
                        
                                <li data-rid="8">
                                    <div class="num-box"><span class="num8">8</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1777445" target="_blank" data-eid="qd_C40" data-bid="1777445">天珠变</a>
                                        
                                        <i class="total">3771916</i>
                                    </div>
                                </li>
                        
                                <li data-rid="9">
                                    <div class="num-box"><span class="num9">9</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1264634" target="_blank" data-eid="qd_C40" data-bid="1264634">仙逆</a>
                                        
                                        <i class="total">3616189</i>
                                    </div>
                                </li>
                        
                                <li data-rid="10">
                                    <div class="num-box"><span class="num10">10</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1908768" target="_blank" data-eid="qd_C40" data-bid="1908768">锦衣夜行</a>
                                        
                                        <i class="total">3606655</i>
                                    </div>
                                </li>
                        
                                </ul>
                                
                            </div>
                        </div>
                    </div>
                    <!-- end 完本榜 -->
                    <!-- start 签约作家新书榜 -->
                    <div class="rank-list">
                        <h3 class="wrap-title lang">签约作家新书榜<a class="more" href="//r.qidian.com/signnewbook" data-eid="qd_C60">更多<em class="iconfont">&#xe621;</em></a></h3>
                        <div class="book-list">
                            
                            <ul>
                                 <li class="unfold" data-rid="1">
                                        <div class="book-wrap cf">
                                            <div class="book-info fl">
                                                <h3>NO.1</h3>
                                                <h4>
                                                    <a href="//book.qidian.com/info/1004834723" target="_blank" data-eid="qd_C40" data-bid="1004834723">通天仙路</a></h4>
                                                <p class="digital"><em>112036</em>潜力值</p>
                                                <p class="author">
                                                    <a class="type" href="//xuanhuan.qidian.com" target="_blank" data-eid="qd_C42">玄幻</a><i>&#183;</i><a class="writer" href="//me.qidian.com/authorIndex.aspx?id=4362761" target="_blank" data-eid="qd_C41">苍天白鹤</a>
                                                </p>
                                            </div>
                                            <div class="book-cover">
                                                <a class="link" href="//book.qidian.com/info/1004834723" target="_blank" data-eid="qd_C39" data-bid="1004834723">
                                                    <img src="//qidian.qpic.cn/qdbimg/349573/1004834723/90">
                                                </a>
                                                <span></span>
                                            </div>
                                        </div>
                                    </li>
                     
                                <li data-rid="2">
                                    <div class="num-box"><span class="num2">2</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1004832054" target="_blank" data-eid="qd_C40" data-bid="1004832054">超能力基因改造</a>
                                        
                                        <i class="total">104694</i>
                                    </div>
                                </li>
                        
                                <li data-rid="3">
                                    <div class="num-box"><span class="num3">3</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1004837400" target="_blank" data-eid="qd_C40" data-bid="1004837400">直死无限</a>
                                        
                                        <i class="total">90457</i>
                                    </div>
                                </li>
                        
                                <li data-rid="4">
                                    <div class="num-box"><span class="num4">4</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1004829459" target="_blank" data-eid="qd_C40" data-bid="1004829459">海贼王之最强主播</a>
                                        
                                        <i class="total">86143</i>
                                    </div>
                                </li>
                        
                                <li data-rid="5">
                                    <div class="num-box"><span class="num5">5</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1004834396" target="_blank" data-eid="qd_C40" data-bid="1004834396">超级卡牌系统</a>
                                        
                                        <i class="total">82928</i>
                                    </div>
                                </li>
                        
                                <li data-rid="6">
                                    <div class="num-box"><span class="num6">6</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1004832151" target="_blank" data-eid="qd_C40" data-bid="1004832151">武侠世界大明星</a>
                                        
                                        <i class="total">71623</i>
                                    </div>
                                </li>
                        
                                <li data-rid="7">
                                    <div class="num-box"><span class="num7">7</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1004870637" target="_blank" data-eid="qd_C40" data-bid="1004870637">我在商朝有块地</a>
                                        
                                        <i class="total">55374</i>
                                    </div>
                                </li>
                        
                                <li data-rid="8">
                                    <div class="num-box"><span class="num8">8</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1004848982" target="_blank" data-eid="qd_C40" data-bid="1004848982">抓只妖魔当老婆</a>
                                        
                                        <i class="total">55075</i>
                                    </div>
                                </li>
                        
                                <li data-rid="9">
                                    <div class="num-box"><span class="num9">9</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1004893763" target="_blank" data-eid="qd_C40" data-bid="1004893763">天空中的国度</a>
                                        
                                        <i class="total">50450</i>
                                    </div>
                                </li>
                        
                                <li data-rid="10">
                                    <div class="num-box"><span class="num10">10</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1004867609" target="_blank" data-eid="qd_C40" data-bid="1004867609">风水大术士</a>
                                        
                                        <i class="total">50437</i>
                                    </div>
                                </li>
                        
                            </ul>
                            
                        </div>
                    </div>
                    <!-- end 签约作家新书榜 -->
                    <!-- start 公众作家新书榜 -->
                    <div class="rank-list mr0">
                        <h3 class="wrap-title lang">公众作家新书榜<a class="more" href="//r.qidian.com/pubnewbook" data-eid="qd_C61">更多<em class="iconfont">&#xe621;</em></a></h3>
                        <div class="book-list">
                            
                            <ul>
                                 <li class="unfold" data-rid="1">
                                        <div class="book-wrap cf">
                                            <div class="book-info fl">
                                                <h3>NO.1</h3>
                                                <h4>
                                                    <a href="//book.qidian.com/info/1004881739" target="_blank" data-eid="qd_C40" data-bid="1004881739">丧尸都市修仙传</a></h4>
                                                <p class="digital"><em>26832</em>潜力值</p>
                                                <p class="author">
                                                    <a class="type" href="//dushi.qidian.com" target="_blank" data-eid="qd_C42">都市</a><i>&#183;</i><a class="writer" href="//me.qidian.com/authorIndex.aspx?id=9073749" target="_blank" data-eid="qd_C41">竹笋配鲫鱼</a>
                                                </p>
                                            </div>
                                            <div class="book-cover">
                                                <a class="link" href="//book.qidian.com/info/1004881739" target="_blank" data-eid="qd_C39" data-bid="1004881739">
                                                    <img src="//qidian.qpic.cn/qdbimg/349573/1004881739/90">
                                                </a>
                                                <span></span>
                                            </div>
                                        </div>
                                    </li>
                     
                                <li data-rid="2">
                                    <div class="num-box"><span class="num2">2</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1004839662" target="_blank" data-eid="qd_C40" data-bid="1004839662">成洋王战纪</a>
                                        
                                        <i class="total">15900</i>
                                    </div>
                                </li>
                        
                                <li data-rid="3">
                                    <div class="num-box"><span class="num3">3</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1004889729" target="_blank" data-eid="qd_C40" data-bid="1004889729">不仙劫</a>
                                        
                                        <i class="total">15312</i>
                                    </div>
                                </li>
                        
                                <li data-rid="4">
                                    <div class="num-box"><span class="num4">4</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1004873848" target="_blank" data-eid="qd_C40" data-bid="1004873848">叛逆的魔术师</a>
                                        
                                        <i class="total">14718</i>
                                    </div>
                                </li>
                        
                                <li data-rid="5">
                                    <div class="num-box"><span class="num5">5</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1004863045" target="_blank" data-eid="qd_C40" data-bid="1004863045">龙固</a>
                                        
                                        <i class="total">11578</i>
                                    </div>
                                </li>
                        
                                <li data-rid="6">
                                    <div class="num-box"><span class="num6">6</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1004865766" target="_blank" data-eid="qd_C40" data-bid="1004865766">白色红衬衣</a>
                                        
                                        <i class="total">8730</i>
                                    </div>
                                </li>
                        
                                <li data-rid="7">
                                    <div class="num-box"><span class="num7">7</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1004839461" target="_blank" data-eid="qd_C40" data-bid="1004839461">重生之最强神豪</a>
                                        
                                        <i class="total">6691</i>
                                    </div>
                                </li>
                        
                                <li data-rid="8">
                                    <div class="num-box"><span class="num8">8</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1004856409" target="_blank" data-eid="qd_C40" data-bid="1004856409">异界少女收容所</a>
                                        
                                        <i class="total">5550</i>
                                    </div>
                                </li>
                        
                                <li data-rid="9">
                                    <div class="num-box"><span class="num9">9</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1004839726" target="_blank" data-eid="qd_C40" data-bid="1004839726">都市之道士归来</a>
                                        
                                        <i class="total">4189</i>
                                    </div>
                                </li>
                        
                                <li data-rid="10">
                                    <div class="num-box"><span class="num10">10</span></div>
                                    <div class="name-box">
                                        
                                        <a class="name" href="//book.qidian.com/info/1004879549" target="_blank" data-eid="qd_C40" data-bid="1004879549">苍白之手</a>
                                        
                                        <i class="total">3057</i>
                                    </div>
                                </li>
                        
                            </ul>
                            
                        </div>
                    </div>
                    <!-- end 公众作家新书榜 -->
                </div>
            </div>
            <!-- end 榜单区域 -->
        </div>
    </div>
    <!-- start 页脚 -->
<div class="footer">
    <!--start 友情链接-->
    <div class="box-center cf">
        <div class="friend-link">
            <em><a class="yuewen" href="http://www.yuewen.com" target="_blank">阅文集团</a><cite>旗下网站：</cite></em>
                <a href="//www.qidian.com">起点中文网</a>
                <a href="//www.qdmm.com/Default.aspx" target="_blank">起点女生网</a>
                <a href="http://chuangshi.qq.com" target="_blank">创世中文网</a>
                <a href="http://yunqi.qq.com" target="_blank">云起书院</a>
                <a href="http://www.rongshuxia.com" target="_blank">榕树下</a>
                <a href="http://www.hongxiu.com" target="_blank">红袖添香</a>
                <a href="http://yanqing.readnovel.com" target="_blank">小说阅读网</a>
                <a href="http://www.xs8.cn" target="_blank">言情小说吧</a>
                <a href="http://www.xxsy.net" target="_blank">潇湘书院</a>
                <a href="http://www.tingbook.com" target="_blank">天方听书网</a>
                <a href="http://www.lrts.me" target="_blank">懒人听书</a>
                <a href="http://yuedu.yuewen.com" target="_blank">阅文悦读</a>
                <a href="http://www.yuewen.com/app.html#appqq" target="_blank">QQ阅读</a>
                <a href="http://www.yuewen.com/app.html#appqd" target="_blank">起点读书</a>
                <a href="http://www.yuewen.com/app.html#appzj" target="_blank">作家助手</a>
        </div>
        <!--end 友情链接-->
        <!--start 页脚菜单-->
        <div class="footer-menu dib-wrap">
            <a href="//www.qidian.com/about/intro" target="_blank">关于起点</a>
            <a href="//www.qidian.com/about/contact" target="_blank">联系我们</a>
            <a href="http://join.book.qq.com/index.html" target="_blank">加入我们</a>
            <a href="http://kf.qidian.com/Default.aspx" target="_blank">客服中心</a>
            <a href="http://bbs.qidian.com/list/53" target="_blank">提交建议</a>
            <a href="http://wwwploy.qidian.com/help/about_link.aspx" target="_blank">合作伙伴</a>
            <a href="http://www.qidian.com/helpcenter/default.aspx" target="_blank">使用指南</a>
            <a href="http://bbs.qidian.com" target="_blank">起点论坛</a>
            <a href="http://shop.qidian.com/Index.aspx" target="_blank">起点商城</a>
        </div>
        <!--end 页脚菜单-->
        <!--start 版权-->
        <div class="copy-right">
            <p><span>Copyright &copy; 2002-2016 www.qidian.com All Right Reserved</span>版权所有 上海玄霆娱乐信息科技有限公司</p>
            <p>上海玄霆娱乐信息科技有限公司 增值电信业务经营许可证沪B2-20080046 沪网文[2015]0081-031 新出网证（沪）字010 沪ICP备08017520号-1</p>
            <p>请所有作者发布作品时务必遵守国家互联网信息管理办法规定，我们拒绝任何色情小说，一经发现，即作删除！客服电话：010-59357051</p>
            <p>本站所收录作品、社区话题、书库评论及本站所做之广告均属个人行为，与本站立场无关</p>
        </div>
        <!--end 版权-->

        
    </div>
</div>
<!-- end 页脚 -->
</div>
<!-- start LBF lib -->
<script data-ignore="true" src="//qidian.gtimg.com/lbf/1.0.2/LBF.js?max_age=31536000"></script>
<script>
    LBF.config({"paths":{"site":"//qidian.gtimg.com/qd/js","qd":"//qidian.gtimg.com/qd"},"vars":{"theme":"//qidian.gtimg.com/qd/css"},"combo":true,"debug":false});
    // 全局的通用数据都放g_data变量里
    var g_data = {};
    // 环境变量，会按照环境选择性打log
    g_data.envType = 'pro';
    // 用作统计PV
    g_data.pageId = 'qd_P_rank_01';
    //环境域名
    g_data.domainPreFix = '';
    g_data.domainSearch = 'se.qidian.com';
</script>
<script>
    LBF.use(['lib.jQuery', 'monitor.SpeedReport', 'qd/js/rank/index.0.53.js'], function ($, SpeedReport, Index) {

        // 页面逻辑入口
        new Index({});
        $(window).on('load.speedReport', function () {
            // speedTimer[onload]
            speedTimer.push(new Date().getTime());
            var f1 = 7718, // china reading limited's ID
                f2 = 219, // site ID
                f3 = 15; // page ID
            // chrome & IE9 Performance API
            SpeedReport.reportPerformance({
                flag1: f1,
                flag2: f2,
                flag3IE: f3,
                flag3Chrome: f3,
                rate:0.1,
                url: '//isdspeed.qidian.com/cgi-bin/r.cgi'
            });
            // common speedTimer:['dom ready', 'onload']
            var speedReport = SpeedReport.create({
                flag1: f1,
                flag2: f2,
                flag3: f3,
                start: speedZero,
                rate:0.1,
                url: '//isdspeed.qidian.com/cgi-bin/r.cgi'
            });
            // chrome & IE9 Performance API range 1~19, common speedTimer use 20+
            for (var i = 0; i < speedTimer.length; i++) {
                speedReport.add(speedTimer[i], i + 20)
            }
            // http://isdspeed.qq.com/cgi-bin/r.cgi?flag1=7718&flag2=224&flag3=1&1=38&2=38&…
            speedReport.send();
        })
    });
    // speedTimer[dom ready], put it before </body>
    speedTimer.push(new Date().getTime());
</script>
<!-- end LBF lib -->

</body>
</html>
