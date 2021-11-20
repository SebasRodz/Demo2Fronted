import { RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { AppComponent } from "./app.component";
import { UsuarioComponent } from "./components/usuario/usuario.component";
import { AdminComponent } from "./components/admin/admin.component";
import { VentanaComponent } from "./components/ventana/ventana.component";
import { HomeComponent } from "./components/home/home.component";

const appRouter = [
    {path: 'home', component: HomeComponent},
    {path: 'ventana', component: VentanaComponent},
    {path: 'usuario', component: UsuarioComponent},
    {path: 'admin', component: AdminComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'app', component:AppComponent},
];

export const routing = RouterModule.forRoot(appRouter);
