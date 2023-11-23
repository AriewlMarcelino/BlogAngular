import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsBlogComponent } from './cards-blog.component';

describe('CardsBlogComponent', () => {
  let component: CardsBlogComponent;
  let fixture: ComponentFixture<CardsBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
