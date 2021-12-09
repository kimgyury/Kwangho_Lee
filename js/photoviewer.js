// JavaScript Document

		$(function(){// jQB /////////////////////////////////
			// 스크롤바 드래그 설정하여 움직이기
			$("#bar").draggable({
				axis: "x", //x축으로 드래그 고정!
				containment: "parent" //작동범위를 부모요소로 한정함
			});//////// draggable /////////
			/*
			바가 이동할때 사진을 이동시키려면
			비례식을 세워서 사진의 이동값을 구한다.
			
			식: 
			바의 최대이동값 : 바 이동값
			= 사진의 최대이동값 : 사진 이동값
			
		___________________________________________
		
			바최:바이=사최:사이
			바최*사이=바이*사최
			
			사이=바이*사최/바최
			*/
			var barmax=570;//바최(600-30)
			var barpos;//바이
			var imgmax=400;//사최(1000-600)
			var imgpos;//사이--> 우리가 구하는 값!!!
			
			// 바를 드래그 할때 이벤트 발생시 함수구현!!!
			// bind(이벤트명, 함수) -> 특정이벤트와 함수를 엮어줌!
			$("#bar").bind("drag",function(){
				// 바이동값 구하기(바이)
				barpos=$(this).offset().left;
//				console.log(barpos);
				
				//사이=바이*사최/바최
				imgpos=barpos*imgmax/barmax;
				// 비례식 계산에 따라 이미지 박스의 left값을 변경한다.
				$("#content").css({left:-imgpos+"px"});
				
				
			});///////// drag ////////////////////
			
			
			
		});//////// jQB /////////////////////////////////////
	