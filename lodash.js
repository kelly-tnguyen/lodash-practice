const assert = require("assert");
let chunk = require('lodash.chunk');
let reverse = require('lodash.reverse');
let without = require('lodash.without');
let drop = require('lodash.drop');;
let join = require('lodash.join');


let dataArr = [1,4,3,6];

// _.chunk(array, [size=1])
let chunked = chunk(dataArr, 2)
console.log(chunked);

// // _.reverse(array)
let reversed = reverse(dataArr)
console.log(reversed)

// // _.without(array, [values])
let wo = without(dataArr, 3)
console.log(wo);

// // _.shuffle(collection)
let dropped = drop(dataArr, 2)
console.log(dropped);

// // _.join(array, [separator=','])
let joined = join(dataArr, "~")
console.log(joined);

// TESTS:

if (typeof describe === 'function') {

    describe('chunk test', () => {
      it('should chunk the dataArr', () => {
        assert.deepEqual(chunked, [ [1,4], [3,6]]);
        });
    });

    describe('reverse test', () => {
        it('should reverse the dataArr', () => {
          assert.deepEqual(reversed, [6,3,4,1]);
          });
      });

      describe('without 3 test', () => {
        it('should remove 3 from the dataArr', () => {
          assert.deepEqual(wo, [6,4,1]);
          });
      });

      describe('drop test', () => {
        it('should drop the first 2 values in the dataArr', () => {
          assert.deepEqual(dropped, [4,1]);
          });
      });

      describe('join test', () => {
        it('should turn the dataArr into a string separated by ~', () => {
          assert.deepEqual(joined, '6~3~4~1');
          });
      });
}
