    //버튼 클릭해서 이동하기
    $(".paraNav ul li").click(function(e){
        e.preventDefault();             //#의 기본 기능을 차단
        let target = $(this);           //사용자가 클릭한 버튼의 타겟이 저장
        let index = target.index();     //인덱스를 부여하여 저장
        let section = $(".content__item").eq(index);    
        let offset = section.offset().top;          //offset() : 요소의 위치(문서)
        $("html, body").animate({scrollTop:offset}, 600);  //offset 값을 scrollTop에 대입(애니메이션)
    });

    //스크롤이 됐을 때
    $(window).scroll(function(){
        let scrollTop = $(window).scrollTop();      //scrollTop() : 브라우저의 위치 값
        
        if( scrollTop >= $("#section1").offset().top - 2 ){
            $(".paraNav ul li").eq(0).addClass("active").siblings().removeClass("active");
        }
        if( scrollTop >= $("#section2").offset().top - 2 ){
            $(".paraNav ul li").eq(1).addClass("active").siblings().removeClass("active");;
        }
        if( scrollTop >= $("#section3").offset().top - 2 ){
            $(".paraNav ul li").eq(2).addClass("active").siblings().removeClass("active");;
        }
        if( scrollTop >= $("#section4").offset().top - 2 ){
            $(".paraNav ul li").eq(3).addClass("active").siblings().removeClass("active");;
        }
        if( scrollTop >= $("#section5").offset().top - 2 ){
            $(".paraNav ul li").eq(4).addClass("active").siblings().removeClass("active");;
        }
        if( scrollTop >= $("#section6").offset().top - 2 ){
            $(".paraNav ul li").eq(5).addClass("active").siblings().removeClass("active");;
        }
        if( scrollTop >= $("#section7").offset().top - 2 ){
            $(".paraNav ul li").eq(6).addClass("active").siblings().removeClass("active");;
        }
        if( scrollTop >= $("#section8").offset().top - 2 ){
            $(".paraNav ul li").eq(7).addClass("active").siblings().removeClass("active");;
        }
        if( scrollTop >= $("#section9").offset().top - 2 ){
            $(".paraNav ul li").eq(8).addClass("active").siblings().removeClass("active");;
        }

        // info                                                //parseInt() : 문자열 정수로 변경
        $(".paraScroll span").text(parseInt(scrollTop));       //브라우저의 스크롤 값을 텍스트로 표시

        // $(".offset1").text(parseInt($("#section1").offset().top) + "px");
        // $(".offset2").text(parseInt($("#section2").offset().top) + "px");
        // $(".offset3").text(parseInt($("#section3").offset().top) + "px");
        // $(".offset4").text(parseInt($("#section4").offset().top) + "px");
        // $(".offset5").text(parseInt($("#section5").offset().top) + "px");
        // $(".offset6").text(parseInt($("#section6").offset().top) + "px");
        // $(".offset7").text(parseInt($("#section7").offset().top) + "px");
        // $(".offset8").text(parseInt($("#section8").offset().top) + "px");
        // $(".offset9").text(parseInt($("#section9").offset().top) + "px");

        //for문
        for( let i=1; i<=9; i++ ){
            $(".offset"+i).text(parseInt($("#section"+i).offset().top) + "px");
        }

        //each()
    });