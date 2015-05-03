var uagent=navigator.userAgent.toLowerCase();
var isIE=uagent.indexOf("msie") > -1;
var isIP=uagent.indexOf("deviceip") > -1;
var isAndroid=uagent.indexOf("android") > -1;
var isSymbian=uagent.indexOf("symbian") > -1;
var isBada=uagent.indexOf("bada") > -1;
var isMobile=isIP || isAndroid || isSymbian || isBada;
var isChrome=uagent.indexOf("chrome") > -1;
var isFirefox=uagent.indexOf("firefox") > -1;
var isOpera=uagent.indexOf("opera") > -1;
var isMini=uagent.indexOf("mini") > -1;

var scrollSpeed = 125;
var step = 1;
var currentWater = 0;
var restartPositionWater = 512;
function moveWater(){
currentWater+=step;
if (currentWater == restartPositionWater){ currentWater = 0; }
$(".water").css("background-position",currentWater+"px 0px");
}
if (!isMobile) { var init = setInterval("moveWater()", scrollSpeed); }

$(window).load(function(){
 if (isMobile) {
   $('.weed').css('background-attachment','scroll');
 }
 if (isAndroid && !(isChrome || isFirefox || isOpera)) {
   $('.water').css('background-attachment','scroll');
 }
});

$(window).load(function(){
$(".naslov").hover(
function () {
$(this).css('background-image','url("http://odredkretena.webs.com/background.gif")');
},
function () {
$(this).css('background-image','none');
});
});

function aniDugmad(){
$("a .dugme").hover(
function () {
$(this).stop(true,false).fadeTo('fast',0.01);
},
function () {
$(this).stop(true,true).fadeTo('fast',1);
});
}

var isPortrait;
function postaviOrij(){
 isPortrait = $(window).height() > $(window).width();
 if ((isMini && isOpera) || isPortrait) {
  $('#mainRightSide').css({'position':'relative','left':'0px'});
  $('#mainLeftSide').css('float','none');
 } else {
  $('#mainRightSide').css({'position':'absolute','left':'272px'});
  $('#mainLeftSide').css('float','left');
 }
}

function postaviScroll(time){
 if (isPortrait) {
  var y = $('#ajfrejm').offset().top - 5;
  $('body,html').animate({scrollTop:y},time);
 } else {
  $('body,html').animate({scrollTop:0},time);
 }
}

function postaviToTopCSS(){
 if (isPortrait) {
  $('#toTop').css({'background-color':'#ccffcc','left':'auto','right':'30px'});
 } else {
  $('#toTop').css({'background-color':'#ccccff','left':'30px','right':'auto'});
 }
}

function postaviSir(){
 var sir=$(window).width();
 if((isMini && isOpera) || isPortrait) {
  sir -= 20;
 } else {
  sir -= 285;
 }
 $("#mainRightSide").css("width",sir);
}

function postaviVis(){
  $("#mainRightSide").css("height","100%");
  var vis=document.getElementById("ajfrejm").contentDocument.documentElement.offsetHeight + 55;
  $("#mainRightSide").css("height",vis);
}

function fadeElements(perCent) {
    var count = $(".blog").size();
    var step = perCent / count;
    $(".blog").each(function(i) {
        var currentOpacity = 1 - (step * i)/100;
        this["defaultOpacity"]=currentOpacity;
        $(this).css("opacity", currentOpacity);
    });
}

function aniBlogad(){
$(".blog").hover(
function () {
$(this).stop(true,false).fadeTo('fast',1);
},
function () {
$(this).stop(true,false).fadeTo('fast',this["defaultOpacity"]);
});
}

function slideBrowsers(timeChrome,timeFirefox,timeOpera){
var middleIcon = ($(window).width() - 256) / 2;
setTimeout(function(){
$("#chrome").animate({left: middleIcon-266});
}, timeChrome);
setTimeout(function(){
$("#firefox").animate({left: middleIcon});
}, timeFirefox);
setTimeout(function(){
$("#opera").animate({left: middleIcon+266});
}, timeOpera);
}

function hoverBrowsers(){
$("a").hover(
function () {
$(this).css("border-width","5px");
},
function () {
$(this).css("border-width","0px");
});
}

function kretenizamTooltip(){
    $('#glavnaNaslovi').mouseover(function(e) {
        var tip = $('#kretenizam').attr('title');
        $('#kretenizam').attr('title','');
        $(this).append('<div id="tooltip"><div class="tipHeader"></div><div class="tipBody">' + tip + '</div><div class="tipFooter"></div></div>'); 
        $('#tooltip').css('top', e.pageY + 10 );
        $('#tooltip').css('left', e.pageX + 20 );
        $('#tooltip').fadeIn('500');
        $('#tooltip').fadeTo('10',0.8);
    }).mousemove(function(e) {
        $('#tooltip').css('top', e.pageY + 10 );
        $('#tooltip').css('left', e.pageX + 20 );
    }).mouseout(function() {
        $('#kretenizam').attr('title',$('.tipBody').html());
        $(this).children('div#tooltip').remove();
    });
}

function gifLoading(myGif){
 var offset=$(myGif).offset();
 $(myGif).css('opacity','0.25');
 var spinner=$('.spinner');
 $(spinner).css({'top':offset.top,'left':offset.left});
 $(myGif).load(function(){
  var spinnerOffset=$(spinner).offset();
  if ((offset.top==spinnerOffset.top)&&(offset.left==spinnerOffset.left)) {
   $(spinner).css({'top':'-500px','left':'0px'});
  }
  $(myGif).css('opacity','1');
 });
}
function gifAnimatingStart(myGif){
      var stillSrc = $(myGif).attr('src');
      $(myGif).removeClass('stillGif').addClass('animatingGif');
      $(myGif).attr('src', stillSrc.replace('_frame_0001.gif', '.gif'));
}
function gifAnimatingEnd(myGif){
      var animatedSrc = $(myGif).attr('src');
      $(myGif).removeClass('animatingGif').addClass('stillGif');
      $(myGif).attr('src', animatedSrc.replace('.gif', '_frame_0001.gif')); 
}

function gifAnimating(){
    $('#gifovi img').click(function(){
      if ($(this).hasClass('animatingGif')){
      gifAnimatingEnd(this);
      }
      else if ($(this).hasClass('stillGif')) {
      gifAnimatingStart(this);
      gifLoading(this);
      }
    });
}

function linkPreviews(){
 var position = 0 - screen.width;
 $('.linkPreview+span').css('left',position);
 $('.linkPreview').hover(
  function(){
   $(this).next('span').stop(true,true).animate({left: 0});
   $(this).css({'backgroundColor':'#000000'});
  },
  function(){
   $(this).css({'backgroundColor':'transparent'});
   $(this).next('span').stop(true,false).animate({left: position});
  }
 );
}

function backToTop(){
	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();	
		} else {
			$('#toTop').stop(true,false).fadeOut();
		}
	});
 
	$('#toTop').click(function() {
		$('body,html').stop(true,false).animate({scrollTop:0},750);
	});	
}
