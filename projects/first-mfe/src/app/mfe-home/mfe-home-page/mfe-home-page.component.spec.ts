import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfeHomePageComponent } from './mfe-home-page.component';

describe('MfeHomePageComponent', () => {
  let component: MfeHomePageComponent;
  let fixture: ComponentFixture<MfeHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MfeHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MfeHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
