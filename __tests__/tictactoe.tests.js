import { findPlayerMark } from './../src/scripts.js';
import { checkWin } from './../src/scripts.js';

describe('findPlayerMark', () => {
  
  test('should correctly display X or O based on the turn', () => {
    expect(findPlayerMark(5)).toEqual("X");
    expect(findPlayerMark(4)).toEqual("O");
  });
});

