import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurtaComponent } from './curta.component';

describe('CurtaComponent', () => {
  let component: CurtaComponent;
  let fixture: ComponentFixture<CurtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurtaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
