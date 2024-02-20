import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardingDetailsComponent } from './boarding-details.component';

describe('BoardingDetailsComponent', () => {
  let component: BoardingDetailsComponent;
  let fixture: ComponentFixture<BoardingDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoardingDetailsComponent]
    });
    fixture = TestBed.createComponent(BoardingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
