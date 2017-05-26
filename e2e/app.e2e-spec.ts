import { MyNg2GuidePage } from './app.po';

describe('my-ng2-guide App', () => {
  let page: MyNg2GuidePage;

  beforeEach(() => {
    page = new MyNg2GuidePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
