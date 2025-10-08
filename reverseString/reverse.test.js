const reverseString= require('./reverse');

test('returns reversed string', () => {
    expect(reverseString('konnichiwa')).toEqual('awihcinnok');
});

test('returns whole sentences properly', () => {
    expect(reverseString('This is a test')).toEqual('tset a si sihT');
});

test('should return empty string when input is empty', () => {
    expect(reverseString('')).toBe('');
});

test('should return the same character for single character input', () => {
    expect(reverseString('a')).toBe('a');
});

test('should handle special characters correctly', () => {
    expect(reverseString('hello!$')).toBe('$!olleh');
});

test('should return the same string for palindromes', () => {
    expect(reverseString('madam')).toBe('madam');
});