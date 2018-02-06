import { NgProjectCLIPage } from './app.po';

describe('ng-project-cli App', () => {
  let page: NgProjectCLIPage;

  beforeEach(() => {
    page = new NgProjectCLIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
