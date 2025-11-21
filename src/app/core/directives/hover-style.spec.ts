import { HoverHighlightDirective } from './hover-style';
import { ElementRef, Renderer2 } from '@angular/core';

describe('HoverHighlightDirective', () => {
  let el: ElementRef;
  let renderer: Renderer2;

  beforeEach(() => {
    el = new ElementRef(document.createElement('div'));

    // Створюємо mock Renderer2
    renderer = {
      setStyle: jasmine.createSpy('setStyle'),
      removeStyle: jasmine.createSpy('removeStyle')
    } as unknown as Renderer2;
  });

  it('should create an instance', () => {
    const directive = new HoverHighlightDirective(el, renderer);
    expect(directive).toBeTruthy();
  });
});
