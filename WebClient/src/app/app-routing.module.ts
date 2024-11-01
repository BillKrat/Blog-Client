import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MindMapComponent } from './components/tree-nodes/tree-nodes.component';

const routes: Routes = [{
  path: 'treenodes', component: MindMapComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
