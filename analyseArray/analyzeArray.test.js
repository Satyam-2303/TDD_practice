const analyseArray=require('./analyzeArray');

test('works with a normal array', () => {
    expect(analyseArray([1,2,3,4,5])).toEqual({average:3,min:1,max:5,length:5 });
});

test('works with a negative numbers', () => {
    expect(analyseArray([-5,-10,0,5,10])).toEqual({average:0,min:-10,max:10,length:5 });
});

test('works with a negative numbers', () => {
    expect(analyseArray([42])).toEqual({average:42,min:42,max:42,length:1 });
});

test('works with a negative numbers', () => {
    expect(analyseArray([7,7,7,7,7,7,7])).toEqual({average:7,min:7,max:7,length:7 });
});