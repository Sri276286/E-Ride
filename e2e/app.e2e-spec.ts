import { EridePage } from './app.po';

describe('eride App', () => {
  let page: EridePage;

  beforeEach(() => {
    page = new EridePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
