import { Ng2githubsearchPage } from './app.po';

describe('ng2githubsearch App', function() {
  let page: Ng2githubsearchPage;

  beforeEach(() => {
    page = new Ng2githubsearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
