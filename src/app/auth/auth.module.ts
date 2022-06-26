import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { RegisterComponent } from './components/register/register.component';
import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store/reducers";
import {AuthService} from "./services/auth.service";


const routes: Routes = [
  {path: 'register', component: RegisterComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
  ],
  declarations: [
    RegisterComponent
  ],
  providers: [AuthService]
})
export class AuthModule {

}
