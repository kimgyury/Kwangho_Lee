// 공통 JS




////////////// html 로딩 후 실행구역 ////////////////////
window.addEventListener("load",function(){
	
	// GNB 링크 연결하기
	
	// 대상선정: #navibar>ul>li>a
	var gnb=document
	.querySelectorAll("#navibar>ul>li>a");
	
	// 링크설정하기
	
	//Home
	gnb[0].onclick=function(){
		//alert("나야나");
		location.href="index.html";
	};/////////////////////////
	//디바이스
	gnb[1].onclick=function(){
		//alert("나야나");
		location.href="items.html?pno=1";
	};//////////////////////////
	//패션
	gnb[2].onclick=function(){
		//alert("나야나");
		location.href="items.html?pno=4";
	};//////////////////////////
	//프로필
	gnb[3].onclick=function(){
		//alert("나야나");
		location.href="profile.html";
	};//////////////////////////
	
	
	/////////// GNB 서브메뉴 링크 연결하기 /////////
	// 대상선정: .smenu a
	var smenu = document.querySelectorAll(".smenu a");
	// 이벤트 연결하기
	
	/////디바이스 하위메뉴////////
	
	// 스마트폰
	smenu[0].onclick=function(){
		//alert("서브야!");
		location.href="items.html?pno=1";
	};///////////////////////////////
	// 태블릿PC
	smenu[1].onclick=function(){
		//alert("서브야!");
		location.href="items.html?pno=2";
	};///////////////////////////////
	// 노트북
	smenu[2].onclick=function(){
		//alert("서브야!");
		location.href="items.html?pno=3";
	};///////////////////////////////
	
	/////// 패션 하위메뉴 /////////////////
	// 가방
	smenu[3].onclick=function(){
		//alert("또서브야!");
		location.href="items.html?pno=4";
	};///////////////////////////////////
	// 시계
	smenu[4].onclick=function(){
		//alert("또서브야!");
		location.href="items.html?pno=5";
	};///////////////////////////////////
	// 구두
	smenu[5].onclick=function(){
		//alert("또서브야!");
		location.href="items.html?pno=6";
	};///////////////////////////////////
	
});///////////// load구역 //////////////////////////////////
////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////






