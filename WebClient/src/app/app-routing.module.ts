import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreeNodeComponent } from './components/tree-nodes/tree-nodes.component';
import { DrawflowComponent } from './components/drawflow/drawflow.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'tree', component: TreeNodeComponent},
  {path: 'draw', component: DrawflowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
