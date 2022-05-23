import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CatsVotingComponent} from "./components/cats-voting/cats-voting.component";
import {VotesComponent} from "./components/votes/votes.component";

const routes: Routes = [
  {path: 'cats', component: CatsVotingComponent},
  {path: 'votes', component: VotesComponent},
  {path: '**', redirectTo: 'cats', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
