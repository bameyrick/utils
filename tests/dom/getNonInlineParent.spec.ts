import { getNonInlineParent } from '../../src';
import { createElement } from '../test-helpers/createElement.spec';

describe('getNonInlineParent', () => {
  describe('isDisplayInline', () => {
    it('should return non linline parent for a text node', () => {
      const element = createElement('div');

      element.innerHTML = 'text';

      expect(getNonInlineParent(element.childNodes[0] as Element)).toEqual(element);
    });

    it('should return non linline parent for a native inline element', () => {
      const element = createElement('span');
      const parent = createElement('div');

      parent.appendChild(element);

      expect(getNonInlineParent(element)).toEqual(parent);
    });

    it('should return non linline parent for a native inline element (multiple levels)', () => {
      const element = createElement('span');
      const parent = createElement('span');
      const grandparent = createElement('div');

      parent.appendChild(element);
      grandparent.appendChild(parent);

      expect(getNonInlineParent(element)).toEqual(grandparent);
    });

    it('should return null for an element with no parent', () => {
      expect(getNonInlineParent(document.documentElement)).toEqual(null);
    });
  });
});
