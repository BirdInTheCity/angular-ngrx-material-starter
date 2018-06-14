import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';

import { ExamplesRoutingModule } from './examples-routing.module';
import { ExamplesComponent } from './examples/examples.component';
import { ParentComponent } from './theming/parent/parent.component';
import { ChildComponent } from './theming/child/child.component';
import { AuthenticatedComponent } from './authenticated/authenticated.component';

@NgModule({
  imports: [
    SharedModule,
    ExamplesRoutingModule,
  ],
  declarations: [
    ExamplesComponent,
    ParentComponent,
    ChildComponent,
    AuthenticatedComponent
  ],
})
export class ExamplesModule {
  constructor() {}
}
