import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GestionarSolicitudComponent } from './gestionar-solicitud.component';

describe('GestionarSolicitudComponent', () => {
  let component: GestionarSolicitudComponent;
  let fixture: ComponentFixture<GestionarSolicitudComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionarSolicitudComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GestionarSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
