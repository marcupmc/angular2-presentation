import { provideRouter, RouterConfig } from '@angular/router';
import { LifeCycleComponent } from '../lifecycle/lifecycle.component';
import { MenuComponent } from '../menu/menu.component';
import { HighlightComponent } from '../directives/highlight.component';
import { TodoListComponent} from '../todoList/todoList.component';
import { ExamplePipeComponent } from '../pipe/examplePipe.component';
import { ExampleServiceComponent } from '../services/exampleService.component'; 

export const routes: RouterConfig = [
    { path: '', redirectTo: '/menu', pathMatch: 'full'},
    { path: 'menu', component: MenuComponent},
    { path: 'lifecycle', component: LifeCycleComponent },
    { path: 'directives', component: HighlightComponent},
    { path: 'todolist', component: TodoListComponent},
    { path: 'pipe', component: ExamplePipeComponent},
    { path: 'services', component: ExampleServiceComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];