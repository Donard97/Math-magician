import calculate from './calculate';

describe('calculate function', () => {
  test('returns undefined for calculation with only zero', () => {
    const obj = {
      total: 0,
      next: '0',
      operation: '+',
    };
    const buttonName = '0';
    expect(calculate(obj, buttonName).next).toBeUndefined();
  });

  test('returns both numbers when = is not called', () => {
    const obj = {
      total: 0,
      next: '3',
      operation: '+',
    };
    const buttonName = '2';
    expect(calculate(obj, buttonName).next).toBe('32');
  });

  test('performs addition when = is called', () => {
    const obj = {
      total: '3',
      next: '2',
      operation: '+',
    };
    const buttonName = '=';
    expect(calculate(obj, buttonName).total).toBe('5');
  });

  test('clears the objs when AC is called', () => {
    const obj = {
      total: '3',
      next: '2',
      operation: '+',
    };
    const buttonName = 'AC';
    expect(calculate(obj, buttonName).total).toBe(null);
  });
});
