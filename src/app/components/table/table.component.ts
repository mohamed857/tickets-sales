import { Component, OnInit } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { Subject } from 'rxjs';
import { SharedService } from '../../services/shared.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [DataTablesModule,FormsModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  active=false;
  activeText='غير مفعلة'
  ticketss: any;
  place = 'سينما مصر، مول العرب ،برج الاطنان ، سرايا القبة'
  img = 'https://th.bing.com/th/id/OIP.WM9Oje-L3YLMOaH0XYfKLAHaNK?&rs=1&pid=ImgDetMain'
  tickets = [
    {
      name: 'احمد محمود', phon: '0123456789', ticketNo: 'c-101', price: '$40', cinam: 'سينما مصر، مول العرب ،برج الاطنان ، سرايا القبة',
      pepoleNo: '1', sellNo: 'مرة واحدة', ticketID: ' 45', img: 'https://th.bing.com/th/id/OIP.WM9Oje-L3YLMOaH0XYfKLAHaNK?&rs=1&pid=ImgDetMain'
    },
    {
      name: 'احمد محمود', phon: '0123456789', ticketNo: 'c-101', price: '$40', cinam: 'سينما مصر، مول العرب ،برج الاطنان ، سرايا القبة',
      pepoleNo: '1', sellNo: 'مرة واحدة', ticketID: '40', img: 'https://th.bing.com/th/id/OIP.WM9Oje-L3YLMOaH0XYfKLAHaNK?&rs=1&pid=ImgDetMain'
    }, {
      name: 'احمد علي', phon: '0123456789', ticketNo: 'c-101', price: '$40', cinam: 'سينما مصر، مول العرب ،برج الاطنان ، سرايا القبة',
      pepoleNo: '1', sellNo: 'مرة واحدة', ticketID: '47', img: 'https://th.bing.com/th/id/OIP.WM9Oje-L3YLMOaH0XYfKLAHaNK?&rs=1&pid=ImgDetMain'
    }, {
      name: 'احمد محمود', phon: '0123456789', ticketNo: 'c-101', price: '$40', cinam: 'سينما مصر، مول العرب ،برج الاطنان ، سرايا القبة',
      pepoleNo: '1', sellNo: 'مرة واحدة', ticketID: '40', img: 'https://th.bing.com/th/id/OIP.WM9Oje-L3YLMOaH0XYfKLAHaNK?&rs=1&pid=ImgDetMain'
    }, {
      name: 'احمد محمود', phon: '0123456789', ticketNo: 'c-101', price: '$40', cinam: 'سينما مصر، مول العرب ،برج الاطنان ، سرايا القبة',
      pepoleNo: '1', sellNo: 'مرة واحدة', ticketID: '40', img: 'https://th.bing.com/th/id/OIP.WM9Oje-L3YLMOaH0XYfKLAHaNK?&rs=1&pid=ImgDetMain'
    }, {
      name: 'احمد محمود', phon: '0123456789', ticketNo: 'c-101', price: '$40', cinam: 'سينما مصر، مول العرب ،برج الاطنان ، سرايا القبة',
      pepoleNo: '1', sellNo: 'مرة واحدة', ticketID: '40', img: 'https://th.bing.com/th/id/OIP.WM9Oje-L3YLMOaH0XYfKLAHaNK?&rs=1&pid=ImgDetMain'
    },
    {
      name: 'احمد محمود', phon: '0123456789', ticketNo: 'c-101', price: '$40', cinam: 'سينما مصر، مول العرب ،برج الاطنان ، سرايا القبة',
      pepoleNo: '1', sellNo: 'مرة واحدة', ticketID: '40', img: 'https://th.bing.com/th/id/OIP.WM9Oje-L3YLMOaH0XYfKLAHaNK?&rs=1&pid=ImgDetMain'
    },
    {
      name: 'احمد محمود', phon: '0123456789', ticketNo: 'c-101', price: '$40', cinam: 'سينما مصر، مول العرب ،برج الاطنان ، سرايا القبة',
      pepoleNo: '1', sellNo: 'مرة واحدة', ticketID: '40', img: 'https://th.bing.com/th/id/OIP.WM9Oje-L3YLMOaH0XYfKLAHaNK?&rs=1&pid=ImgDetMain'
    }, {
      name: 'احمد محمود', phon: '0123456789', ticketNo: 'c-101', price: '$40', cinam: 'سينما مصر، مول العرب ،برج الاطنان ، سرايا القبة',
      pepoleNo: '1', sellNo: 'مرة واحدة', ticketID: '40', img: 'https://th.bing.com/th/id/OIP.WM9Oje-L3YLMOaH0XYfKLAHaNK?&rs=1&pid=ImgDetMain'
    }, {
      name: 'احمد محمود', phon: '0123456789', ticketNo: 'c-101', price: '$40', cinam: 'سينما مصر، مول العرب ،برج الاطنان ، سرايا القبة',
      pepoleNo: '1', sellNo: 'مرة واحدة', ticketID: '40', img: 'https://th.bing.com/th/id/OIP.WM9Oje-L3YLMOaH0XYfKLAHaNK?&rs=1&pid=ImgDetMain'
    }, {
      name: 'احمد محمود', phon: '0123456789', ticketNo: 'c-101', price: '$40', cinam: 'سينما مصر، مول العرب ،برج الاطنان ، سرايا القبة',
      pepoleNo: '1', sellNo: 'مرة واحدة', ticketID: '40', img: 'https://th.bing.com/th/id/OIP.WM9Oje-L3YLMOaH0XYfKLAHaNK?&rs=1&pid=ImgDetMain'
    }, {
      name: 'احمد محمود', phon: '0123456789', ticketNo: 'c-101', price: '$40', cinam: 'سينما مصر، مول العرب ،برج الاطنان ، سرايا القبة',
      pepoleNo: '1', sellNo: 'مرة واحدة', ticketID: '40', img: 'https://th.bing.com/th/id/OIP.WM9Oje-L3YLMOaH0XYfKLAHaNK?&rs=1&pid=ImgDetMain'
    },
    {
      name: 'احمد محمود', phon: '0123456789', ticketNo: 'c-101', price: '$40', cinam: 'سينما مصر، مول العرب ،برج الاطنان ، سرايا القبة',
      pepoleNo: '1', sellNo: 'مرة واحدة', ticketID: '40', img: 'https://th.bing.com/th/id/OIP.WM9Oje-L3YLMOaH0XYfKLAHaNK?&rs=1&pid=ImgDetMain'
    },
    {
      name: 'احمد محمود', phon: '0123456789', ticketNo: 'c-101', price: '$40', cinam: 'سينما مصر، مول العرب ،برج الاطنان ، سرايا القبة',
      pepoleNo: '1', sellNo: 'مرة واحدة', ticketID: '40', img: 'https://th.bing.com/th/id/OIP.WM9Oje-L3YLMOaH0XYfKLAHaNK?&rs=1&pid=ImgDetMain'
    }, {
      name: 'احمد محمود', phon: '0123456789', ticketNo: 'c-101', price: '$40', cinam: 'سينما مصر، مول العرب ،برج الاطنان ، سرايا القبة',
      pepoleNo: '1', sellNo: 'مرة واحدة', ticketID: '40', img: 'https://th.bing.com/th/id/OIP.WM9Oje-L3YLMOaH0XYfKLAHaNK?&rs=1&pid=ImgDetMain'
    }, {
      name: 'احمد محمود', phon: '0123456789', ticketNo: 'c-101', price: '$40', cinam: 'سينما مصر، مول العرب ،برج الاطنان ، سرايا القبة',
      pepoleNo: '1', sellNo: 'مرة واحدة', ticketID: '40', img: 'https://th.bing.com/th/id/OIP.WM9Oje-L3YLMOaH0XYfKLAHaNK?&rs=1&pid=ImgDetMain'
    }, {
      name: 'احمد محمود', phon: '0123456789', ticketNo: 'c-101', price: '$40', cinam: 'سينما مصر، مول العرب ،برج الاطنان ، سرايا القبة',
      pepoleNo: '1', sellNo: 'مرة واحدة', ticketID: '40', img: 'https://th.bing.com/th/id/OIP.WM9Oje-L3YLMOaH0XYfKLAHaNK?&rs=1&pid=ImgDetMain'
    }, {
      name: 'احمد lpl]', phon: '0123456789', ticketNo: 'c-101', price: '$40', cinam: 'سينما مصر، مول العرب ،برج الاطنان ، سرايا القبة',
      pepoleNo: '1', sellNo: 'مرة واحدة', ticketID: '40', img: 'https://th.bing.com/th/id/OIP.WM9Oje-L3YLMOaH0XYfKLAHaNK?&rs=1&pid=ImgDetMain'
    },
  ]

  constructor(private _shar: SharedService) { }

  dtoptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  activtety=()=>{
    this.active=!this.active;
    if (this.active) {
      this.activeText='مفعلة'
    } else {
      this.activeText='غير مفعلة'
      
    }
  }
  ngOnInit(): void {
    this.dtoptions = {
      pagingType: 'numbers',
      language: {
        searchPlaceholder: 'بحث عن',
        search: 'مبيعات التذاكر',
      },
      pageLength: 4,
      lengthChange: false,

      // info:false
      // lengthMenu:[4,5]
    }
    this.getAllTickets();
  }

  getAllTickets = () => {
    this._shar.getAllTickets().subscribe(
      res => {
        this.ticketss = res
        this.dtTrigger.next(null);

      },
      err => {
        console.error('error:: ', err);

      }
    )
  }
}
