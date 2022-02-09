import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByarticleComponent } from './components/pages/byarticle/byarticle.component';
import { BysubscriberComponent } from './components/pages/bysubscriber/bysubscriber.component';
import { NewsComponent } from './components/pages/news/news.component';
import { RegisterComponent } from './components/shared/register/register.component';
import { HeaderComponent } from './components/shared/header/header.component';

const routes: Routes = [
  {path: 'news', component: NewsComponent },
  {path: 'byarticle', component: ByarticleComponent },
  {path: 'bysubscriber', component: BysubscriberComponent },
  {path: 'login', component: RegisterComponent },
  {path: 'register', component: RegisterComponent },
  {path: '', component: NewsComponent },
  {path: '**', redirectTo: 'news', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
