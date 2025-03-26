// console.log("안녕하세요 반갑습니다.");
const fs = require('fs');
        let input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");
        let [H, M] = input.map(Number);

        if (M < 45) {
            if (H === 0) {
                console.log(23, 60 + (M - 45));
            } else {
                console.log(H - 1, 60 + (M - 45));
            }
        } else {
            console.log(H, (M - 45));
        }
 
// console.log(input[0]);
// console.log(input[1]);
// console.log(input);
// console.log(typeof input);

// split("\r\n")값이 위에서 아래로 떨어질 경우 *리눅스 기반에서는 \r이 빠짐
//.trim()문자의 공백을 제거해서