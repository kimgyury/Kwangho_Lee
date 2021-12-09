// JavaScript Document


// sns 메뉴클릭 //
    $(document).ready(function(){
        // menu 클래스 바로 하위에 있는 a 태그를 클릭했을때
        $(".menu>a").click(function(){
            var submenu = $(this).next("ul");
 
            // submenu 가 화면상에 보일때는 위로 보드랍게 접고 아니면 아래로 보드랍게 펼치기
            if( submenu.is(":visible") ){
                submenu.slideUp();
            }else{
                submenu.slideDown();
            }
        });
    });




function chgImg(obj){
	//alert(obj.alt);//호출확인
	//1. 대상선정
	var tg = document.getElementById("mimg");
	//2. 변경적용

	tg.setAttribute("src",obj.src);
	
	}///////////chgImg함수 //////////////////////////



	//////// 전역변수 구역 //////////////////
	var pno=0;// 현재 페이지 번호(첫페이지 0)
	var totpno=5;//전체 페이지개수
	var prot=0;//막기상태값(0-허용,1-막기)

	/////////////////////////////////////////
		
		
		
		
$(function(){/// jQB ///////////////////////////
	//var ptxt=["3.png","4.png","5.png","6.png"];
	$("#ptxt li a").mouseenter(
		function(e){
			e.preventDefault();//기본이동막기
			var src=$(this).attr("href");
			$("#mimg").attr("src",src).css({margin:"0 auto",paddingTop:"75px",paddingLeft:"220px",width: "50%",height:"85%"});
		});
	
	
	
	

	///스크롤이벤트는 document 문서전체에 설정함.
	$(document)// 이벤트를 다중 사용가능함!
	.on("mousewheel DOMMouseScroll", 
	function(e){
//			console.log("스크롤중~!");
		// 1. 스크롤 기본이동 막기(파라미터e를 써야함!)
		e.preventDefault();
		///////// 스크롤이동중 잠금장치!!!/////////
		if(prot===1){return false;}// 돌아가!
		prot=1;// 처음들어온 신호가 잠금!
		////////////////////////////////////////////////

		// 2. ie 구버전 구분하기
		var evt = window.event || e;
		var delta=evt.detail?evt.detail:evt.wheelDelta;
		if(/Firefox/i.test(navigator.userAgent)){
			delta=-evt.originalEvent.detail;
		}

		if(delta>0){// 윗방향(양수)				
			//페이지번호 감소
			pno--;
			//첫페이지고정!
			if(pno===-1){pno=0;} 				
		}/// if문///////////////////////
		else{// 아랫방향(음수)
			// 페이지번호 증가
			pno++;
			//끝페이지고정!
			if(pno===totpno){pno=totpno-1;} 
		}/// else문 //////////////////////

		console.log(pno);


		///// 4. 해당순번 페이지 높이값 구하기 //////
		var pagepos=$(".page").eq(pno).offset().top;

		//// 5. 페이지 이동 애니메이션 설정하기 /////
		$("html,body").animate({
			scrollTop: pagepos+"px"
		},800,"easeInOutCirc",function(){
			prot=0;//이동애니후 잠금풀기!
		});///// ani ////////

		/// 6.GNB메뉴, 블릿메뉴 class변경하기 함수호출
		chgMenu();
	});
		
		
		// GNB의 a링크를 클릭하면 해당 위치로 스크롤 애니메이션 하기
		$("#gnb>a,#bnavi a").click(function(e){
			// 기본이동 막기
			// href 속성에 "#아이디명" 을 쓰면 현재 페이지의 해당 아이디 시작위치로 이동하는 것은 기본 기능이다. 이것을 막자!
			e.preventDefault();
			
			
			/// 전역 페이지 번호에 클릭된 li의 순번을 넣어서 일치시켜준다!!
			var idx=$(this).parent().index();//클릭된a부모li순번
			pno=idx;//클릭된 메뉴 li순번=현재페이지순번
			
			// 클릭된 a태그의 href값으로 이동할 id요소의 위치값을 알아낸다.
			var cid=$(this).attr("href");//href값
			console.log(cid);
			
			if(cid==="#page6"){return false;}//SNS 클릭시 작동안함!
			
			var pagepos=$(cid).offset().top;
			// 현재 선택된 아이디의 top위치값을
			// offset().top 으로 알아낼 수 있다.(숫자로)
			console.log(pagepos);
			
			// 스크롤 애니메이션
			$("html,body").stop().animate({
				scrollTop: pagepos+"px"
			},800,"easeInOutCirc");
			chgMenu();
		});///////// click ///////////////////
	});//////// jQB ///////////////////////////////////
		
	function chgMenu(){
		/// 호출된 순간 전역변수 pno 현재페이지로변경함
		///GNB 메뉴 class변경
		$("#gnb>ul>li").eq(pno).addClass("selM")
		.siblings().removeClass("selM");

		///블릿메뉴 class변경
		$("#bnavi>li").eq(pno).addClass("selB")
		.siblings().removeClass("selB");
	}/////////  chgMenu함수 //////////////////////////////


			/* 3 page DIV hover*/
//	  $(".hover").mouseleave(
//		function () {
//		  $(this).removeClass("hover");
//		}
//	  );


		/*bxslider*/
	var colorSet=["#A02842","#4e265b","#1e3b79","#382c23","#313131"];
		$(function(){/// jQB ///
			$(".bxslider").bxSlider({
				auto:true,
				speed:500,
				onSlideBefore:function(ele,oidx,nidx){//슬라이드 출발시점에 실행구역!
//					console.log(nidx);//변경순번
					$("#page5").stop().animate({backgroundColor:colorSet[nidx]},1500,"easeOutQuint");
				}
			});
			
			
		$("#page5").css({backgroundColor:"#A02842"});
		});//jQb



	$(function(){// jQB ////////////////////////////////////////
		// 색상변경 버튼 셋팅하기 //
		/// for문 안쓰고 each로 셋팅한다!
		$(".bx-next div").each(function(idx,ele){
//			console.log(idx);
			//버튼박스 배경색 각각의 text와 동일하게 셋팅하기
			$(this).css({backgroundColor:$(this).text()});
		});//// each ///////////////////////////////
		
		$("#colorPicker div").click(function(){
			// div 버튼을 클릭하면 박스와 같은 색으로
			// body의 배경색이 애니메이션 되면서 변경되도록 함.
			$("body").animate({backgroundColor:$(this).text()},600);
			
		});/////////// click ///////////////////////////
		
		
		
		
		/// bx-slider 내부의 bx-next 버튼 클릭시 배경색 변경 애니메이션 하기
//		$(".bx-wrapper").css({backgroundColor:"red"});
		
		
		
		
		
		
	});////// jQB //////////////////////////////////////////////













