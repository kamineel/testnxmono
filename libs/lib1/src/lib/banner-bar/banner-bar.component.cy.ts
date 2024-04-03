import { TestBed } from '@angular/core/testing';
import { BannerBarComponent } from './banner-bar.component';

describe(BannerBarComponent.name, () => {

  beforeEach(() => {
    TestBed.overrideComponent(BannerBarComponent, {
      add: { 
        imports: [],
        providers: []
      }
    }) 
  })

  it('renders', () => {
     cy.mount(BannerBarComponent,);
  })

})
