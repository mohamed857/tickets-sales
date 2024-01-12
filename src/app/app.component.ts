import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TableComponent } from "./components/table/table.component";
import { ChartComponent } from "./components/chart/chart.component";
import { TicketComponent } from "./components/ticket/ticket.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, TableComponent, ChartComponent, TicketComponent]
})
export class AppComponent {
  title = 'task';
}
