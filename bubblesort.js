let arr = [64, 34, 25, 12, 22, 11, 90];
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;


    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        n--;
    } while (swapped);
}
bubbleSort(arr);
console.log("Початковий масив: " + arr);
console.log("Відсортований масив: " + arr);