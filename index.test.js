const fill = require('.');

test('Fill right', () => {
  expect(fill('something went ${GOOD}').with({ GOOD: 'wrong' })).toBe('something went wrong');
});

test('Fill wrong', () => {
  expect(() => fill('something went ${BAD}').with({ GOOD: 'wrong' })).toThrowError(ReferenceError);
});
