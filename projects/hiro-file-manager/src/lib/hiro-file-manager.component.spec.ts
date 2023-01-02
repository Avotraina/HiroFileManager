import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiroFileManagerComponent } from './hiro-file-manager.component';

describe('HiroFileManagerComponent', () => {
  let component: HiroFileManagerComponent;
  let fixture: ComponentFixture<HiroFileManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiroFileManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HiroFileManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
