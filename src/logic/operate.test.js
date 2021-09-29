import operate from './operate';

describe('Operate Function', () => {
  test('correctly returns 5 when 3 + 2 is summed', () => {
    expect(operate('3', '2', '+')).toBe('5');
  });

  test('correctly returns 5 when 7 is subtracted from 12', () => {
    expect(operate('12', '7', '-')).toBe('5');
  });

  test('correctly returns 7 when 35 is divided by 5', () => {
    expect(operate('35', '5', '÷')).toBe('7');
  });

  test("correctly returns Can't divide by 0 when 50 is divided by 0", () => {
    expect(operate('50', '0', '÷')).toBe("Can't divide by 0.");
  });

  test('correctly returns 49 when 8 is multiplied by 7', () => {
    expect(operate('8', '7', 'x')).toBe('56');
  });

  test('correctly returns remainder 2 when 20 is divided by 6', () => {
    expect(operate('20', '6', '%')).toBe('2');
  });
});