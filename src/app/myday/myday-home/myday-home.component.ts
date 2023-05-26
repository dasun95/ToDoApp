import { Component } from '@angular/core';
import { faBell, faCalendarDays, faRepeat } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-myday-home',
  templateUrl: './myday-home.component.html',
  styleUrls: ['./myday-home.component.scss']
})
export class MydayHomeComponent {
  faBell = faBell;
  faCallendar = faCalendarDays;
  faRepeat = faRepeat;
}
