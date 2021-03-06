import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalLinksComponent } from './external-links.component';

describe('ExternalLinksComponent', () => {
  let component: ExternalLinksComponent;
  let fixture: ComponentFixture<ExternalLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExternalLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
