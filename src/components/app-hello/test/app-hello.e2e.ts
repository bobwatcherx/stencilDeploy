import { newE2EPage } from '@stencil/core/testing';

describe('app-hello', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-hello></app-hello>');

    const element = await page.find('app-hello');
    expect(element).toHaveClass('hydrated');
  });
});
