// 글씨색, 버튼 value값 변경해주는 객체
var Links = {        
    SetColor : function(color){
        // var element = document.querySelectorAll('a');
        // var i = 0;
        // while(i < element.length){
        //     element[i].style.color = color;
        //     i = i + 1
        // }
        $('a').css('color', color); // 위 코드와 같음. 모든 'a'태그를 제어한다.
    },
    setTime : function(Time){
        // var a = document.querySelectorAll('#night_day');
        // var i = 0;
        // while(i < a.length){
        //     a[i].value = Time;
        //     i = i + 1
        // }
        $('input').val(Time); // 모든 input에 접근.
    }
}
// 객체 생성 끝

// 객체를 이용해서 setColor, setBackGroundColor 함수 생성.
var Body = {
    setColor : function(color){
        // document.querySelector('body').style.color = color;
        $('body').css('color', color); // jquery로 코드짜기.
    },
    setBackGroundColor : function(color){
        // document.querySelector('body').style.backgroundColor = color;    
        $('body').css('backgroundColor', color);
    }
}
// 객체 생성 끝

// 주,야간모드 버튼 함수
function nightDayHandler(self){
    if(self.value === 'night'){
        Body.setBackGroundColor('black');
        Body.setColor('white');
        
        Links.setTime('day');
        Links.SetColor('powderblue');
    } else{
        Body.setBackGroundColor('white');
        Body.setColor('black');
        
        Links.setTime('night');
        Links.SetColor('blue');
    }
}
// 주, 야간모드 버튼 함수 끝