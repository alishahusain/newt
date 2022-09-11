// make a SlidingWindow class
class SlidingWindow {
    constructor(array, windowSize) {
        this.array = array;
        this.windowSize = windowSize;
        this.max = this.max();
    }
    max() {
        let max = -Infinity;
        for (let i = 0; i < this.array.length - this.windowSize + 1; i++) {
            let sum = 0;
            for (let j = i; j < i + this.windowSize; j++) {
                sum += this.array[j];
            }
            if (sum > max) {
                max = sum;
            }
        }
        return max;
    }
}