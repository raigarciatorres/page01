import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page05 } from './page05';

describe('Page05', () => {
  let component: Page05;
  let fixture: ComponentFixture<Page05>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Page05]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page05);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
