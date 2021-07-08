
// 잔돈 계산기
// 커피 : 1000, 콜라 : 1500

let coffee = 1000;
let cola = 1500;

function machine(drink, input) {
    if(drink == "coffee") {
        if(input > coffee) {
            console.log(input - coffee);
        
        } else {
            console.log("돈이 부족")
        }
    }

    if(drink == "cola") {
        if(input > cola) {
            console.log(input - cola);

        } else {
            console.log("돈이 부족")
        }
    }
}

machine("coffee", 2000);
machine("cola", 3000);
machine("coffee", 2999);
machine("cola", 1000);