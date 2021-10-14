import { calculateNumberOfComments } from './utils.js';

describe('', () => {
  it('should return the correct number of items', () => {
    const comments = [
      {
        comment: 'This is the first comment',
        creation_date: '2021-10-13',
        username: 'Mrs Girl',
      },
      {
        comment: 'This is the second comment',
        creation_date: '2021-10-14',
        username: 'Mr Man',
      },
    ];

    expect(calculateNumberOfComments(comments)).toBe(2);
  });
});