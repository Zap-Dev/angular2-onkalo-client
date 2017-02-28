import { Angular2OnkaloClientPage } from './app.po';

describe('angular2-onkalo-client App', () => {
  let page: Angular2OnkaloClientPage;

  beforeEach(() => {
    page = new Angular2OnkaloClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
