import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenubarModule } from 'primeng/menubar';
import { SearchProfileComponent } from './components/search-profile/search-profile.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { StyleClassModule } from 'primeng/styleclass';
import { RippleModule } from 'primeng/ripple';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import { HttpClientModule } from '@angular/common/http';
import { PlatformSelectorComponent } from './components/platform-selector/platform-selector.component';
import{DialogModule} from 'primeng/dialog';
import { PlateformIconComponent } from './components/plateform-icon/plateform-icon.component';
@NgModule({
  declarations: [HeaderComponent, FooterComponent, SearchProfileComponent,SearchFormComponent, PlatformSelectorComponent, PlateformIconComponent],
  imports: [CommonModule, MenubarModule,ButtonModule,
    FormsModule,
    InputTextModule,
    StyleClassModule,
    RippleModule,
    OverlayPanelModule,
    HttpClientModule,
    DialogModule,
  ],
  exports: [HeaderComponent, FooterComponent, SearchFormComponent],
})
export class SharedModule {}
