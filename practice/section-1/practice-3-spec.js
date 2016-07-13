'use strict';

describe('practice-1-3', function() {

  var collectionA = ["a", "e", "h", "t", "f", "c", "g", "b", "d"];
  var collectionB = {value: ["a", "d", "e", "f"]};

  it("选出A集合中跟B对象中value属性中的元素相同的元素", function() {
    
    var result = collectSameElements(collectionA, collectionB);

    expect(result).toEqual(["a", "e", "f", "d"]);
  });
});
