import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@app/core';

import { ExamplesComponent } from './examples/examples.component';
import { TodosComponent } from './todos/todos.component';
import { StockMarketComponent } from './stock-market/stock-market.component';
import { ParentComponent } from './theming/parent/parent.component';
import { AuthenticatedComponent } from './authenticated/authenticated.component';

const routes: Routes = [
  {
    path: '',
    component: ExamplesComponent,
    children: [
      {
        path: 'theming',
        component: ParentComponent,
        data: {
          title: 'Theming'
        }
      },
      {
        path: 'authenticated',
        component: AuthenticatedComponent,
        canActivate: [AuthGuard],
        data: {
          title: 'Authenticated'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule {}
