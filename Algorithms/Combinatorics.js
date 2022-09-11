// make a Combinatorics class
/*
Combinatorics: a subset of math that focuses on counting and techniques for counting
 (for example, counting the number of arrangements of people on a line where people of similar eye color must be together).*/
class Combinatorics {
    constructor(array) {
        this.array = array;
        this.combinations = this.combinations();
    }
    combinations() {
        const combinations = [];
        for (let i = 0; i < 1 << this.array.length; i++) {
            const combination = [];
            for (let j = 0; j < this.array.length; j++) {
                if (i & 1 << j) {
                    combination.push(this.array[j]);
                }
            }
            combinations.push(combination);
        }
        return combinations;
    }
}

// use Combinatorics class
const array = [1, 2, 3];
const combinatorics = new Combinatorics(array);
console.log(combinatorics.combinations);

// output
