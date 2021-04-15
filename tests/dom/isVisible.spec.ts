import { GetViewportDetails } from 'viewport-details';
import { isVisible } from '../../src';
import { createElement } from '../test-helpers/createElement.spec';

describe(`isVisible`, () => {
  beforeAll(() => {
    const viewportDetails = GetViewportDetails();

    document.body.style.width = `${viewportDetails.width + 100}px`;
    document.body.style.height = `${viewportDetails.height + 100}px`;
  });

  afterAll(() => {
    document.body.removeAttribute('style');
  });

  afterEach(done =>
    setTimeout(() => {
      document.documentElement.scrollTo(0, 0);

      done();
    })
  );

  it(`should return false for an element that has a height of 0`, () => {
    const element = createElement('div', { width: '100px', height: '0' });

    expect(isVisible(element)).toEqual(false);
  });

  it(`should return false for an element that has a width of 0`, () => {
    const element = createElement('div', { width: '0', height: '100px' });

    expect(isVisible(element)).toEqual(false);
  });

  it(`should return false for an element that has a opacity of 0`, () => {
    const element = createElement('div', {
      width: '100px',
      height: '100px',
      opacity: '0',
    });

    expect(isVisible(element)).toEqual(false);
  });

  it(`should return false for an element that is display none`, () => {
    const element = createElement('div', {
      width: '100px',
      height: '100px',
      display: 'none',
    });

    expect(isVisible(element)).toEqual(false);
  });

  it(`should return false for an element that is visibility hidden`, () => {
    const element = createElement('div', {
      width: '100px',
      height: '100px',
      visibility: 'hidden',
    });

    expect(isVisible(element)).toEqual(false);
  });

  it(`should return false for an element that is positioned off screen (negative)`, () => {
    const element = createElement('div', {
      width: '100px',
      height: '100px',
      position: 'absolute',
      top: '-200px',
      left: '-200px',
    });

    expect(isVisible(element)).toEqual(false);
  });

  it(`should return false for an element that is positioned off screen (positive)`, () => {
    const element = createElement('div', {
      width: '100px',
      height: '100px',
      position: 'absolute',
      top: 'calc(100vh + 200px)',
      left: 'calc(100vw + 200px)',
    });

    expect(isVisible(element)).toEqual(false);
  });

  it(`should return true for an element that's ancestor has a height of 0`, () => {
    const ancestor = createElement('div', { position: 'absolute', top: '0', width: '100px', height: '0' });

    const element = createElement('div', { width: '50px', height: '50px' }, false);

    ancestor.appendChild(element);

    expect(isVisible(element)).toEqual(true);
  });

  it(`should return true for an element that's ancestor has a width of 0`, () => {
    const ancestor = createElement('div', { position: 'absolute', top: '0', width: '0', height: '100px' });

    const element = createElement('div', { width: '50px', height: '50px' }, false);

    ancestor.appendChild(element);

    expect(isVisible(element)).toEqual(true);
  });

  it(`should return false for an element that's ancestor has a height of 0 and overflow of hidden`, () => {
    const ancestor = createElement('div', { position: 'absolute', top: '0', width: '100px', height: '0', overflow: 'hidden' });

    const element = createElement('div', { width: '50px', height: '50px' }, false);

    ancestor.appendChild(element);

    expect(isVisible(element)).toEqual(false);
  });

  it(`should return false for an element that's ancestor has a width of 0 and overflow of hidden`, () => {
    const ancestor = createElement('div', { position: 'absolute', top: '0', width: '0', height: '100px', overflow: 'hidden' });

    const element = createElement('div', { width: '50px', height: '50px' }, false);

    ancestor.appendChild(element);

    expect(isVisible(element)).toEqual(false);
  });

  it(`should return false for an element that's ancestor has a opacity of 0`, () => {
    const ancestor = createElement('div', { position: 'absolute', top: '0', width: '100px', height: '100px', opacity: '0' });

    const element = createElement('div', { width: '50px', height: '50px' }, false);

    ancestor.appendChild(element);

    expect(isVisible(element)).toEqual(false);
  });

  it(`should return false for an element that's ancestor is display none`, () => {
    const ancestor = createElement('div', { position: 'absolute', top: '0', width: '100px', height: '100px', display: 'none' });

    const element = createElement('div', { width: '50px', height: '50px' }, false);

    ancestor.appendChild(element);

    expect(isVisible(element)).toEqual(false);
  });

  it(`should return false for an element that's ancestor is visibility hidden`, () => {
    const ancestor = createElement('div', { position: 'absolute', top: '0', width: '100px', height: '100px', visibility: 'hidden' });

    const element = createElement('div', { width: '50px', height: '50px' }, false);

    ancestor.appendChild(element);

    expect(isVisible(element)).toEqual(false);
  });

  it(`should return false for an element that's ancestor is positioned off screen (negative)`, () => {
    const ancestor = createElement('div', {
      width: '100px',
      height: '100px',
      position: 'absolute',
      top: '-200px',
      left: '-200px',
    });

    const element = createElement('div', { width: '50px', height: '50px' }, false);

    ancestor.appendChild(element);

    expect(isVisible(element)).toEqual(false);
  });

  it(`should return false for an element that's ancestor is positioned off screen (positive)`, () => {
    const ancestor = createElement('div', {
      width: '100px',
      height: '100px',
      position: 'absolute',
      top: 'calc(100vh + 200px)',
      left: 'calc(100vw + 200px)',
    });

    const element = createElement('div', { width: '50px', height: '50px' }, false);

    ancestor.appendChild(element);

    expect(isVisible(element)).toEqual(false);
  });

  it(`should return false for an element that's scrolled off screen (y positive)`, () => {
    const viewportDetails = GetViewportDetails();

    const element = createElement('div', {
      position: 'absolute',
      top: `${(viewportDetails.height + viewportDetails.scrollY).toString()}px`,
      width: '50px',
      height: '50px',
    });

    expect(isVisible(element)).toEqual(false);
  });

  it(`should return false for an element that's scrolled off screen (y negative)`, () => {
    document.documentElement.scrollTo(0, 50);

    const element = createElement('div', {
      position: 'absolute',
      top: `0`,
      width: '50px',
      height: '50px',
    });

    expect(isVisible(element)).toEqual(false);
  });

  it(`should return false for an element that's scrolled off screen (x positive)`, () => {
    const viewportDetails = GetViewportDetails();

    const element = createElement('div', {
      position: 'absolute',
      top: '0',
      left: `${(viewportDetails.width + viewportDetails.scrollX).toString()}px`,
      width: '50px',
      height: '50px',
    });

    expect(isVisible(element)).toEqual(false);
  });

  it(`should return false for an element that's scrolled off screen (x negative)`, () => {
    document.documentElement.scrollTo(100, 0);

    const element = createElement('div', {
      position: 'absolute',
      top: `0`,
      width: '50px',
      height: '50px',
    });

    expect(isVisible(element)).toEqual(false);
  });
});
