describe('lib1', () => {
  beforeEach(() => cy.visit('/iframe.html?id=bannerbarcomponent--primary'));
  it('should render the component', () => {
    cy.get('testavapps-banner-bar').should('exist');
  });
});
