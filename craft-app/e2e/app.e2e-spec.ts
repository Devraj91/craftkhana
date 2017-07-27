import { CraftAppPage } from './app.po';

describe('craft-app App', () => {
  let page: CraftAppPage;

  beforeEach(() => {
    page = new CraftAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
