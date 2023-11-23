import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubMenuBlogComponent } from './sub-menu-blog.component';

describe('SubMenuBlogComponent', () => {
  let component: SubMenuBlogComponent;
  let fixture: ComponentFixture<SubMenuBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubMenuBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubMenuBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
