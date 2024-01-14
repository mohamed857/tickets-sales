import { Component } from '@angular/core';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
 clip='www.tazkty.com/473847'
  copyToClipboard=()=>{
    navigator.clipboard.writeText(this.clip)
    console.log(this.clip);
  }

}
