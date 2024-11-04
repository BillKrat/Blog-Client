import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreeNodeComponent } from './components/tree-nodes/tree-nodes.component';

const routes: Routes = [{
  path: 'treenodes', component: TreeNodeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
