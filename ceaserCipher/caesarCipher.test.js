const ceasercipher=require('./caesarCipher');

test('works with normal string', () => {
    expect(ceasercipher("Hello, World!",3)).toBe("Khoor, Zruog!");
});

test('Wrap around end of alphabet lowercase', () => {
    expect(ceasercipher("xyz",3)).toBe("abc");
});

test('Negative shift lowercase', () => {
    expect(ceasercipher("This is A Test", -3)).toBe("Qefp fp X Qbpq");
});

test('No shift', () => {
    expect(ceasercipher("unchanged", 0)).toBe("unchanged");
});

test('Default shift', () => {
    expect(ceasercipher("abc")).toBe("def");
});