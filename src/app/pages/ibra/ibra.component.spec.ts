import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IbraComponent } from './ibra.component';

describe('IbraComponent', () => {
  let component: IbraComponent;
  let fixture: ComponentFixture<IbraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IbraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IbraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
