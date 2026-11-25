import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BetaComp } from './beta-comp';

describe('BetaComp', () => {
  let component: BetaComp;
  let fixture: ComponentFixture<BetaComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BetaComp],
    }).compileComponents();

    fixture = TestBed.createComponent(BetaComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
