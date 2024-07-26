import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnduladaComponent } from './ondulada.component';

describe('OnduladaComponent', () => {
  let component: OnduladaComponent;
  let fixture: ComponentFixture<OnduladaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnduladaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnduladaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
