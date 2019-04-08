const help = require('../helpers');
const uuid = require('uuid');

//if we dont use __mocks__, then:
// jest.mock('uuid', () => {
//   return () => '123';
// });

jest.useFakeTimers();

const user = {
  id: '123',
  fullName: 'Jack',
  age: 1
};

describe('helpers module', () => {
  describe('returnsPromise function', () => {
    it('resolves even if passed even number', () => {
      const promise = help.returnsPromise(2);
      return expect(promise).resolves.toBe('even');
    });
  });

  it('resolves odd if passed odd number', () => {
    const promise = help.returnsPromise(3);
    return expect(promise).rejects.toBe('odd');
  });

  describe('callWithDelay function', () => {
    it('callWithDelay function', () => {
      const mySpy = jest.fn();
      help.callWithDelay(mySpy);
      //fast time forward
      jest.runAllTimers();
      expect(mySpy).toHaveBeenCalled();
    });
  });

  describe('sum function', () => {
    //a result we expect to get
    //a result we actually get

    // it('should sum correctly with 2 args', () => {
    //   expect(help.sum(2, 4)).toBe(6);
    //   expect(help.sum(2, 4)).not.toBe(7);
    //   expect(help.sum(2, 4)).not.toBeNull();
    //   expect(help.sum(2, 4)).not.toBeFalsy();
    //   expect(help.sum(2, 4)).toBeGreaterThan(1);
    //   expect(help.sum(2, 4)).toBeLessThan(20);
    // });

    // it('should sum correctly with 3 args', () => {
    //   expect(help.sum(2, 4, 8)).toBe(14);
    // });

    it('should return an object with result key', () => {
      expect(help.sum(1, 2)).toEqual({ result: 3 });
    });
  });

  describe('make user function', () => {
    it('should return a user object', () => {
      // expect(help.makeUser(`Jack`, 1, true)).toEqual(user);
      expect(help.makeUser(`Jack`, 1)).toEqual(user);
    });
    it('throws error if name arg is not a string', () => {
      expect(() => help.makeUser(5, 1).toThrow());
    });
    it('throws error if age arg is not a number', () => {
      expect(() => help.makeUser('Jack', 'Jack').toThrow());
      expect(() => help.makeUser('Jack', NaN).toThrow());
    });
  });
});
