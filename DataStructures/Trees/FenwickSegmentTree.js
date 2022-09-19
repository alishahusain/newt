// make a FenwickSegmentTree class
class FenwickSegmentTree {
    constructor(array) {
        this.array = array;
        this.tree = new Array(array.length + 1).fill(0);
        for (let i = 0; i < array.length; i++) {
            this.update(i, array[i]);
        }
    }
    update(index, value) {
        index++;
        while (index <= this.array.length) {
            this.tree[index] += value;
            index += index & -index;
        }
    }
    query(index) {
        let sum = 0;
        index++;
        while (index > 0) {
            sum += this.tree[index];
            index -= index & -index;
        }
        return sum;
    }
}
