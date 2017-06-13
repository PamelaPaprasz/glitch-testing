import { GlitchTestingPage } from './app.po';

describe('glitch-testing App', () => {
  let page: GlitchTestingPage;

  beforeEach(() => {
    page = new GlitchTestingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
