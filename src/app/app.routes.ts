import { Routes } from '@angular/router';
import { StudentProfile } from './profile-student';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: StudentProfile },
];
