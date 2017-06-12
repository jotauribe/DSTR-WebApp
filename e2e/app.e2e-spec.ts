import { DstrWebappPage } from './app.po';

describe('dstr-webapp App', () => {
  let page: DstrWebappPage;

  beforeEach(() => {
    page = new DstrWebappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
