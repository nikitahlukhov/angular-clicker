import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StartButtonComponent } from './start-button/start-button.component';
import { GameComponent } from './game/game.component';
import { ResultComponent } from './result/result.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [{
  path: 'login',
  component: LoginComponent
}, {
  path: 'start',
  component: StartButtonComponent
}, {
  path: 'game',
  component: GameComponent
}, {
  path: 'result',
  component: ResultComponent
}, {
  path: '',
  component: LoginComponent
}, {
  path: '**',
  component: NotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
