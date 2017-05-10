import { WebsiteNg4Page } from './app.po';

describe('website-ng4 App', () => {
  let page: WebsiteNg4Page;

  beforeEach(() => {
    page = new WebsiteNg4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
