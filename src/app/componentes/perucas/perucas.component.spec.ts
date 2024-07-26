import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerucasComponent } from './perucas.component';

describe('PerucasComponent', () => {
  let component: PerucasComponent;
  let fixture: ComponentFixture<PerucasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerucasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerucasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
