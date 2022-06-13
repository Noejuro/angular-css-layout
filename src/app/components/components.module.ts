import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SectionsComponent } from './sections/sections.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { DescriptionComponent } from './description/description.component';
import { FeaturesComponent } from './features/features.component';
import { ExternalLinksComponent } from './external-links/external-links.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NavigationComponent,
    SectionsComponent,
    ProfilesComponent,
    ProfileCardComponent,
    DescriptionComponent,
    FeaturesComponent,
    ExternalLinksComponent
  ],
  exports: [
    HeaderComponent,
    NavigationComponent,
    SectionsComponent,
    ProfilesComponent,
    DescriptionComponent,
    FeaturesComponent,
    ExternalLinksComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ComponentsModule { }
