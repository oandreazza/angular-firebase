import { GrenalTictactoePage } from './app.po';

describe('grenal-tictactoe App', function() {
  let page: GrenalTictactoePage;

  beforeEach(() => {
    page = new GrenalTictactoePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
