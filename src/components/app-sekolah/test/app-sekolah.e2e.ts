import { newE2EPage } from '@stencil/core/testing';

describe('app-sekolah', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-sekolah></app-sekolah>');

    const element = await page.find('app-sekolah');
    expect(element).toHaveClass('hydrated');
  });
});
