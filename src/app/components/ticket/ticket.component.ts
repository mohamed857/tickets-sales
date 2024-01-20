import { Component } from '@angular/core';
import { QRCodeModule } from "angularx-qrcode";

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [QRCodeModule],
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
