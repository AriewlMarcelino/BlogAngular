import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBlogComponent } from './menu-blog.component';

describe('MenuBlogComponent', () => {
  let component: MenuBlogComponent;
  let fixture: ComponentFixture<MenuBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
