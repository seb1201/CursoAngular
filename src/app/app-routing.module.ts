import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';


const routesapp: Routes = [
  {path: 'home', component: CatalogoComponent },
  {path: 'about', component: AboutComponent },
  {path: 'item', component: ItemComponent },
  {path: 'catalogo', component: CatalogoComponent},
  {path: '***', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routesapp, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
