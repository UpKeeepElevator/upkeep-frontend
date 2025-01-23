import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeTechPage } from './home-tech.page';

describe('HomeTechPage', () => {
  let component: HomeTechPage;
  let fixture: ComponentFixture<HomeTechPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTechPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
