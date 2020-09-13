import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentNavbarComponent } from './agent-navbar.component';

describe('AgentNavbarComponent', () => {
  let component: AgentNavbarComponent;
  let fixture: ComponentFixture<AgentNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
