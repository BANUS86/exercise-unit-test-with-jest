// test.js

const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("One euro should be 1.07 dollars", () => {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBe(expected);
});

test("One dollar should be approximately 146.26 yen", () => {
    const expected = (1 / 1.07) * 156.5;
    const yen = fromDollarToYen(1);
    expect(yen).toBeCloseTo(expected);
});

test("156.5 yen should be 0.87 pounds", () => {
    const expected = (156.5 / 156.5) * 0.87;
    const pounds = fromYenToPound(156.5);
    expect(pounds).toBeCloseTo(expected);
}); 

