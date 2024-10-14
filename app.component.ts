import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  //Variables de tabla Pendientes
  title = 'New_project_plazoleta';
  tablaP_nombre:string="";
  tablaP_solicitudes:string="";
  tablaP_asignacion:string="";
  tablaP_estado:string="";
  tablaP_fechaCulminacion:string="";
  tablaP_fechaSolicitud:string="";
 //Variables de la tabla Solicitudes
  tablaS_nombre:string="";
  tablaS_solicitudes:string="";
  tablaS_asignacion:string="";
  tablaS_estado:string="";
  tablaS_fechaCulminacion:string="";
  tablaS_fechaSolicitud:string="";
  
  ngOnInit(){
    

  }
}
