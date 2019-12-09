import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';


const routesapp: Routes = [
  {path: 'home', component: CatalogoComponent },
  {path: 'about', component: AboutComponent },
  {path: 'item/:id', component: ItemComponent },
  {path: 'catalogo', component: CatalogoComponent},
  {path: 'search/:termino', component: SearchComponent},
  {path: '***', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routesapp, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
