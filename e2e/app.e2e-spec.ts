import { RxjsWebSocketPage } from './app.po';

describe('rxjs-web-socket App', () => {
  let page: RxjsWebSocketPage;

  beforeEach(() => {
    page = new RxjsWebSocketPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
