import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenubarModule } from 'primeng/menubar';
import { SearchProfileComponent } from './components/search-profile/search-profile.component';
@NgModule({
  declarations: [HeaderComponent, FooterComponent, SearchProfileComponent],
  imports: [CommonModule, MenubarModule],
  exports: [HeaderComponent, FooterComponent],
})
export class SharedModule {}
