import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsVotingComponent } from './cats-voting.component';

describe('CatsVotingComponent', () => {
  let component: CatsVotingComponent;
  let fixture: ComponentFixture<CatsVotingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatsVotingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatsVotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
