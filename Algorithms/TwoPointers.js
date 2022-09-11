// make a TwoPointers class
class TwoPointers {
    constructor(array, target) {
        this.array = array;
        this.target = target;
        this.count = this.count();
    }
    count() {
        let count = 0;
        let left = 0;
        let right = 0;
        let sum = 0;
        while (right < this.array.length) {
            sum += this.array[right];
            while (sum > this.target) {
                sum -= this.array[left];
                left++;
            }
            count += right - left + 1;
            right++;
        }
        return count;
    }
}