// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// Part 2
test('isPhoneNumber true test #1', () => {
    expect(functions.isPhoneNumber('(619)-626-4348')).toBe(true);
});

test('isPhoneNumber true test #2', () => {
    expect(functions.isPhoneNumber('725-251-7268')).toBe(true);
});

test('isPhoneNumber false test #1', () => {
    expect(functions.isPhoneNumber('123123123123123')).toBe(false);
});

test('isPhoneNumber false test #2', () => {
    expect(functions.isPhoneNumber('09090!@#$%^$%^&*')).toBe(false);
});


test('isEmail true test #1', () => {
    expect(functions.isEmail('mpardin@ucsd.edu')).toBe(true);
});

test('isEmail true test #2', () => {
    expect(functions.isEmail('mdpardin@gmail.com')).toBe(true);
});

test('isEmail false test #1', () => {
    expect(functions.isEmail('mpardin@ucsd@gmail.com')).toBe(false);
});

test('isEmail false test #2', () => {
    expect(functions.isEmail('abcddotgmaildotcom')).toBe(false);
});


test('isStrongPassword true test #1', () => {
    expect(functions.isStrongPassword('joebiden_123')).toBe(true);
});

test('isStrongPassword true test #2', () => {
    expect(functions.isStrongPassword('jwidodo_123')).toBe(true);
});

test('isStrongPassword false test #1', () => {
    expect(functions.isStrongPassword('8819')).toBe(false);
});

test('isStrongPassword false test #2', () => {
    expect(functions.isStrongPassword('jo')).toBe(false);
});


test('isDate true test #1', () => {
    expect(functions.isDate('21/11/2022')).toBe(true);
});

test('isDate true test #2', () => {
    expect(functions.isDate('05/08/2000')).toBe(true);
});

test('isDate false test #1', () => {
    expect(functions.isDate('99/99/99')).toBe(false);
});

test('isDate false test #2', () => {
    expect(functions.isDate('99')).toBe(false);
});


test('isHexColor true test #1', () => {
    expect(functions.isHexColor('#FFFFFF')).toBe(true);
});

test('isHexColor true test #2', () => {
    expect(functions.isHexColor('#000000')).toBe(true);
});

test('isHexColor false test #1', () => {
    expect(functions.isHexColor('#joemama')).toBe(false);
});

test('isHexColor false test #2', () => {
    expect(functions.isHexColor('#hello')).toBe(false);
});