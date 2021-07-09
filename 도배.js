
// 출력횟수만큼 문자 출력하는 프로그램

function 도배(반복횟수, 문자) {
    if(반복횟수 < 30) {
        for(let i=0; i<반복횟수; i++) {
            console.log(문자);
        }
    
    } else {
        console.log("반복횟수가 너무 많습니다.");
    }
}

도배(20, "민병준");