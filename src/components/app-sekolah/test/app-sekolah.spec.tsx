import { newSpecPage } from '@stencil/core/testing';
import { AppSekolah } from '../app-sekolah';

describe('app-sekolah', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppSekolah],
      html: `<app-sekolah></app-sekolah>`,
    });
    expect(page.root).toEqualHtml(`
      <app-sekolah>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-sekolah>
    `);
  });
});
