import { SupportPanelPage } from './app.po';

describe('support-panel App', () => {
  let page: SupportPanelPage;

  beforeEach(() => {
    page = new SupportPanelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
