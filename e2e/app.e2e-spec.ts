import { MyOMyPage } from './app.po';

describe('my-o-my App', () => {
  let page: MyOMyPage;

  beforeEach(() => {
    page = new MyOMyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
