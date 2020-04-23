const nums = [7, 2, 6, 3];
const list = [3, 6, 2, 9, -1, 10];

function printMsg(id, fun) {
    document.getElementById(id).innerHTML = fun;
}

function largestNum(numbers) {
    let largestNumber = 0;
    for (let i = 0; i < numbers.length; i++) {
        let tmp = numbers[i];
        if (tmp > largestNumber) {
            largestNumber = tmp;
        }
    }
    return largestNumber;
}

function binaryTree(arr) {
    let index = 0; // Overall index in arr
    let interval = 1; // Doubles each time
    let position = 1; // Position with an interval
    let leftTotal = 0;
    let rightTotal = 0;
    while (index < arr.length) {
        if (interval !== 1) {
            for (let i = 0; i < interval; i++) {
                if (index < arr.length) {
                    const tmp = arr[index];
                    if (tmp !== -1) {
                        if (position <= (interval / 2)) {
                            leftTotal += tmp;
                        } else {
                            rightTotal += tmp;
                        }
                    }
                    index++;
                    position++;
                }
            }
        } else {
            index++;
        }
        interval *= 2;
        position = 1;
    }
    if (leftTotal > rightTotal) {
        return "Left";
    } else if (leftTotal < rightTotal) {
        return "Right";
    } else {
        return "";
    }
}
