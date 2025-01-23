import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Elevator } from 'src/app/core/models/Elevator.model';
import { Route, RouteElevator } from 'src/app/core/models/route';
import { ElevatorService } from 'src/app/core/services/elevator.service';
import { RouteService } from 'src/app/core/services/route.service';
import { fake_route } from 'src/app/core/utils/fake_route';

@Component({
  selector: 'app-editar-ruta',
  templateUrl: './editar-ruta.component.html',
  styleUrls: ['./editar-ruta.component.scss'],
  imports: [ReactiveFormsModule, RouterLink],
})
export class EditarRutaComponent implements OnInit {
  rutaForm: FormGroup;
  tecnicoInfo = {
    nombre: 'Juan Álvarez',
    estado: 'Activo',
  };
  private fb: FormBuilder = inject(FormBuilder);
  private _router = inject(ActivatedRoute);
  private _routeService = inject(RouteService);
  private _elevatorService = inject(ElevatorService);

  routeObj: Route = fake_route;

  equipments: RouteElevator[] = [];

  elevators: Elevator[] = [];

  constructor() {
    this.rutaForm = this.fb.group({
      date: ['', Validators.required],
      elevator: ['', Validators.required],
    });
  }

  private get Elevator() {
    const elevatorId = this.rutaForm.get('elevator')?.value;
    return elevatorId ? Number(elevatorId) : 0;
  }

  private get Date() {
    return this.rutaForm.get('date')?.value ?? '';
  }

  ngOnInit(): void {
    let routeId = ''; // Inicialización del componente

    this._elevatorService.getElevators().subscribe({
      next: (elevators) => {
        this.elevators = elevators;
      },
    });

    this._router.queryParams.subscribe((params) => {
      let data = params['routeid'];
      if (data) {
        routeId = data;
        this.GetRoute(routeId);
      }
    });
  }

  addElevator(): void {
    // Implementar lógica para agregar equipo
    console.log('Adding new elevator to route...');

    let newRouteElevator: RouteElevator = {
      routeId: this.routeObj.routeId,
      elevatorId: this.Elevator,
      visitDate: this.Date,
      order: 0,
    };

    this._routeService.addElevatorToRoute(newRouteElevator).subscribe({
      next: (elevator) => {
        console.log(elevator);
        this.GetRoute(this.routeObj.routeId);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
  GetRoute(routeId: string) {
    this._routeService.getRoute(routeId).subscribe({
      next: (route) => {
        this.routeObj = route;
        this.equipments = route.elevators;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  cancelar(): void {
    // Implementar lógica para cancelar
    this.rutaForm.reset();
  }

  onSubmit(): void {
    if (this.rutaForm.valid) {
      console.log('Formulario enviado:', this.rutaForm.value);
      // Implementar lógica para guardar
    } else {
      console.log('Formulario inválido');
    }
  }
}
