import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatListModule,
  MatGridListModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { RouterModule } from '@angular/router';
import { NotAuthComponent } from './components/not-auth/not-auth.component';

const materialModules = [
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatListModule,
  FlexLayoutModule
];

@NgModule({
  imports: [CommonModule, RouterModule, ...materialModules],
  declarations: [SidenavComponent, NotAuthComponent],
  exports: [SidenavComponent, ...materialModules]
})
export class SharedModule {}
