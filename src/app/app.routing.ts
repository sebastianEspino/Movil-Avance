import { HomeComponent } from "./components/home/home"; 
import { CitasComponent } from "./components/citas/citas"; 
import { LoginComponent } from "./components/login/login";
import { VerPerfilComponent } from "./components/verPerfil/verperfil";
import { FormularioDateComponent } from "./components/formularioDate/formularioDate";
import { CalificacionesComponent } from "./components/calificaciones/calificaciones";
import { RegistroComponent } from "./components/registro/registro";
import { LandingComponent } from "./components/landing/landing"; 
import { CotizacionComponent } from "./components/cotizacion/cotizacion"; 
import { ServicioComponent } from "./components/servicio/servicio"; 
import { ProductosComponent } from "./components/productos/productos"; 
import { Producto_VistaComponent } from "./components/producto_vista/producto_vista"; 
import { EditarPerfilComponent } from "./components/editarPerfil/editarPerfil"; 
//import { formulario_calificacionComponent } from "./components/formulario_calificacion/formulario_calificacion";




export const appRoutes: any = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "citas", component: CitasComponent },
  { path: "verperfil", component: VerPerfilComponent },
  { path: "formularioDate", component: FormularioDateComponent },
  { path: "calificaciones", component: CalificacionesComponent },
  { path: "registro", component: RegistroComponent },
  { path: "landing", component: LandingComponent },
  { path: "cotizacion", component: CotizacionComponent },
  { path: "servicio", component: ServicioComponent },
  { path: "productos", component: ProductosComponent },
  { path: "producto_vista", component: Producto_VistaComponent },
  { path: "editarPerfil" , component: EditarPerfilComponent },
  //{ path: "formulario_calificacion" , component: formulario_calificacionComponent },
  
  

];

export const appComponents: any = [
  HomeComponent,
  CitasComponent,
  LoginComponent,
  VerPerfilComponent,
  FormularioDateComponent,
  CalificacionesComponent,
  RegistroComponent,
  LandingComponent,
  CotizacionComponent,
  ServicioComponent,
  ProductosComponent,
  Producto_VistaComponent,
  EditarPerfilComponent,
  //formulario_calificacionComponent

];
