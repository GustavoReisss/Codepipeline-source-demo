import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalComponent } from '../../components/modal/modal.component';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';

@Component({
  selector: 'app-default-layout',
  standalone: true,
  imports: [RouterOutlet, SideMenuComponent],
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.scss'
})
export class DefaultLayoutComponent {
  showSelectedFeatures = signal(false)


  toggle() {
    this.showSelectedFeatures.set(!this.showSelectedFeatures())
  }


}
