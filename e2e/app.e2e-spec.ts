import { StartePage } from './app.po';

describe('starte App', function() {
  let page: StartePage;

  beforeEach(() => {
    page = new StartePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
