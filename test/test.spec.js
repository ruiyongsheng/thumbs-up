import a from "../js/index.es5";

describe("+1 test", function() {
  it("+1 测试", function() {
    a.add();
    expect(1).toBe(2);
  });
});
