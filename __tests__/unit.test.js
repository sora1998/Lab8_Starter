// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('Checking is (123)456-7890 a valid phone number', () => {
    expect(functions.isPhoneNumber('(123)456-7890')).toBe(true);
});

test('Checking is (321)356-7890 a valid phone number', () => {
    expect(functions.isPhoneNumber('(321)356-7890')).toBe(true);
});

test('Checking is (123)456-789  a valid phone number', () => {
    expect(functions.isPhoneNumber('(123)456-789')).toBe(false);
});

test('Checking is (12)456-78910 a valid phone number', () => {
    expect(functions.isPhoneNumber('(12)456789110')).toBe(false);
});

test('Checking is abcdefg@gmail.com  a valid email', () => {
    expect(functions.isEmail('abcdefg@gmail.com')).toBe(true);
});

test('Checking is abcdefg123456789@yahoo.com a valid email', () => {
    expect(functions.isEmail('abcdefg123456789@yahoo.com')).toBe(true);
});

test('Checking is abcdefg a valid email', () => {
    expect(functions.isEmail('abcdefg')).toBe(false);
});

test('Checking is 123456789@.com a valid email', () => {
    expect(functions.isEmail('123456789@.com')).toBe(false);
});

test('Checking is Q1W2E3R a valid Strong Password', () => {
    expect(functions.isStrongPassword('Q1W2E3R')).toBe(true);
});

test('Checking is q123asfa a valid Strong Password', () => {
    expect(functions.isStrongPassword('q123asfa')).toBe(true);
});

test('Checking is cse110110110110110110110110110 a Strong Password', () => {
    expect(functions.isStrongPassword('cse110110110110110110110110110')).toBe(false);
});

test('Checking is 1Theshy  a Strong Password', () => {
    expect(functions.isStrongPassword('1Theshy')).toBe(false);
});

test('Checking is 12/02/1998 a valid Date', () => {
    expect(functions.isDate('12/02/1998')).toBe(true);
});

test('Checking is 11/14/2021 a valid Date', () => {
    expect(functions.isDate('11/14/2021')).toBe(true);
});

test('Checking is 12/2/1998 a valid Date', () => {
    expect(functions.isDate('12/02/998')).toBe(false);
});

test('Checking is 120/2/1998 a valid Date', () => {
    expect(functions.isDate('120/2/1998')).toBe(false);
});

test('Checking is 270af7 a valid Hex Code', () => {
    expect(functions.isHexColor('270af7')).toBe(true);
});

test('Checking is 8f3d77 a valid Hex Code', () => {
    expect(functions.isHexColor('8f3d77')).toBe(true);
});

test('Checking is FFFFFFF a valid Hex Code', () => {
    expect(functions.isHexColor('FFFFFFF')).toBe(false);
});

test('Checking is GF1A a valid Hex Code', () => {
    expect(functions.isHexColor('GF1A')).toBe(false);
});