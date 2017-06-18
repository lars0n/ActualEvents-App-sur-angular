import { ActualeventsAppPage } from './app.po';

describe('actualevents-app App', () => {
  let page: ActualeventsAppPage;

  beforeEach(() => {
    page = new ActualeventsAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
