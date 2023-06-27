const myBeverage = {
  delicious: true,
  sour: false,
};
describe.each([myBeverage])(`test %o correctly`, (item) => {
  test("is delicious", () => {
    expect(item.delicious).toBeTruthy();
  });

  test("is not sour", () => {
    expect(item.sour).toBeFalsy();
  });
});
