import { newSpecPage } from '@stencil/core/testing';
import { AppHello } from '../app-hello';

describe('app-hello', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppHello],
      html: `<app-hello></app-hello>`,
    });
    expect(page.root).toEqualHtml(`
      <app-hello>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-hello>
    `);
  });
});
