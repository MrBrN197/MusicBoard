/**
 * @jest-environment jsdom
 */
import countTotalItems from './countTotalItems.js';

describe('Albums count', () => {
  it('Counts the total number of albums on the page', () => {
    document.body.innerHTML = `<div>
      <div class="item-container">
     </div>
    <div class="item-container">
    </div>
    <div class="different-container">
    </div>
   </div>`;
    expect(countTotalItems()).toBe(2);
  });
});