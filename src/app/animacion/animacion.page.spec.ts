import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnimacionPage } from './animacion.page';

describe('AnimacionPage', () => {
  let component: AnimacionPage;
  let fixture: ComponentFixture<AnimacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnimacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
