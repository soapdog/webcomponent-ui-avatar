import { flush, render } from '@stencil/core/testing';
import { UiAvatar } from './ui-avatar';

describe('ui-avatar', () => {
  it('should build', () => {
    expect(new UiAvatar()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [UiAvatar],
        html: '<ui-avatar></ui-avatar>'
      });
    });

  });
});
