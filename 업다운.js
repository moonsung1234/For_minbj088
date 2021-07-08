
let result = 888;

function updown(input) {
    if(input > result) {
        console.log("down");
    }

    if(input < result) {
        console.log("up");
    }

    if(input == result) {
        console.log("collect");
    }
}

updown(100); // up
updown(1000); // down