import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NewsComponent } from './components/news/news.component';
import { SignComponent } from './components/sign/sign.component';
import { Error404Component } from './components/error404/error404.component';

const routes: Routes = [
  { path: "", redirectTo: '/home', pathMatch: "full" }, // Por si no hay nada después del /
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "news", component: NewsComponent },
  { path: "sign", component: SignComponent },
  { path: "error404", component: Error404Component}, // Error 404 component
  { path: "**", redirectTo: '/error404', pathMatch: "full" } // por si hay un para que me dirija al error 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
