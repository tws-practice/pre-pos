'use strict';

describe('practice-1-1', function() {

  var collectionA = ["a", "e", "h", "t", "f", "c", "g", "b", "d"];
  var collectionB = ["a", "d", "e", "f"];

  it("选出A集合中与B集合中相同的元素", function() {
    
    var result = collectSameElements(collectionA, collectionB);

    expect(result).toEqual(["a", "e", "f", "d"]);
  });
});
