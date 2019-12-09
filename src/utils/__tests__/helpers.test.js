import { checkResponsesForErrors } from '../helpers';

describe('checkResponsesForErrors should return appropriate data', () => {
  test('checkResponsesForErrors should handle not being passed in params', () => {
    const errors = checkResponsesForErrors();

    expect(errors).toHaveLength(0);
    expect(errors).toEqual([]);
  });

  test('checkResponsesForErrors not return errors if no error params are passed', () => {
    const param1 = {
      name: 'Name 1'
    };
    const param2 = {
      name: 'Name 2'
    };

    const errors = checkResponsesForErrors(param1, param2);

    expect(Array.isArray(errors)).toBe(true);
    expect(errors).toHaveLength(0);
  });

  test('checkResponsesForErrors should return array of errors', () => {
    const err1 = {
      error: 'Error 1'
    };
    const err2 = {
      error: 'Error 2'
    };

    const errors = checkResponsesForErrors(err1, err2);

    expect(Array.isArray(errors)).toBe(true);
    expect(errors).not.toHaveLength(0);

    errors.map(err => expect(typeof err).toBe('string'));
  });
});
