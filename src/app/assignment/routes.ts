import { Routes } from "@angular/router";
import { AssignmentDisplayPageComponent } from "./pages/assignment-display-page/assignment-display-page.component";
import { AssignmentUpdatePageComponent } from "./pages/assignment-update-page/assignment-update-page.component";
import { AssignmentPageComponent } from "./pages/assignment-page/assignment-page.component";


export default [
  {
  path: ''
  ,

  component: AssignmentPageComponent,
  children: [
  { path: '', redirectTo: 'display', pathMatch: 'full' },

  { path: 'display', component: AssignmentDisplayPageComponent },

  { path: 'update', component: AssignmentUpdatePageComponent },
  ],
  },
  ] as Routes;
