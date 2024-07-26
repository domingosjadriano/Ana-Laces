import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CacheadaComponent } from './cacheada.component';

describe('CacheadaComponent', () => {
  let component: CacheadaComponent;
  let fixture: ComponentFixture<CacheadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CacheadaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CacheadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
