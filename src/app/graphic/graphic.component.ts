import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.css']
})
<<<<<<< HEAD

export class GraphicComponent implements OnInit{
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  source: any =
    {
      datatype: "csv",
      datafields: [
        { name: 'Date' },
        { name: 'S&P 500' },
        { name: 'NASDAQ' }
      ],
      url: 'https://api.exchangeratesapi.io/history?start_at=2018-01-01&end_at=2018-09-01'
    };
    
  dataAdapter: any = new jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + this.source.url + '" : ' + error); } });
  padding: any = { left: 10, top: 5, right: 10, bottom: 5 };
  titlePadding: any = { left: 50, top: 0, right: 0, bottom: 10 };
  getWidth(): any {
    if (document.body.offsetWidth < 850) {
      return '90%';
    }

    return 850;
  }

  xAxis: any =
    {
      dataField: 'Date',
      formatFunction: (value: any) => {
        return value.getDate() + '-' + this.months[value.getMonth()] + '-' + value.getFullYear();
      },
      type: 'date',
      baseUnit: 'month',
      valuesOnTicks: true,
      minValue: '01-01-2014',
      maxValue: '01-01-2015',
      tickMarks: {
        visible: true,
        interval: 1,
        color: '#BCBCBC'
      },
      unitInterval: 1,
      gridLines: {
        visible: true,
        interval: 3,
        color: '#BCBCBC'
      },
      labels: {
        angle: -45,
        rotationPoint: 'topright',
        offset: { x: 0, y: -25 }
      }
    };
  valueAxis: any =
    {
      visible: true,
      title: { text: 'Daily Closing Price<br>' },
      tickMarks: { color: '#BCBCBC' }
    };
  seriesGroups: any =
    [
      {
        type: 'line',
        series: [
          { dataField: 'S&P 500', displayText: 'S&P 500' },
          { dataField: 'NASDAQ', displayText: 'NASDAQ' }
        ]
      }
    ];

=======
export class GraphicComponent{
  months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    source: any =
    {
        datatype: "csv",
        datafields: [
            { name: 'Date' },
            { name: 'S&P 500' },
            { name: 'NASDAQ' }
        ],
        url: 'https://api.exchangeratesapi.io/history?start_at=2018-01-01&end_at=2018-09-01'
    };
    dataAdapter: any = new jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + this.source.url + '" : ' + error); } });
    padding: any = { left: 10, top: 5, right: 10, bottom: 5 };
    titlePadding: any = { left: 50, top: 0, right: 0, bottom: 10 };
	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    xAxis: any =
    {
        dataField: 'Date',
        formatFunction: (value: any) => {
            return value.getDate() + '-' + this. months[value.getMonth()] + '-' + value.getFullYear();
        },
        type: 'date',
        baseUnit: 'month',
        valuesOnTicks: true,
        minValue: '01-10-2019',
        maxValue: '01-01-2020',
        tickMarks: {
            visible: true,
            interval: 1,
            color: '#BCBCBC'
        },
        unitInterval: 1,
        gridLines: {
            visible: true,
            interval: 1,
            color: '#BCBCBC'
        },
        labels: {
            angle: -30,
            rotationPoint: 'topright',
            offset: { x: 0, y: -25 }
        }
    };
    valueAxis: any =
    {
        visible: true,
        title: { text: 'Daily Closing Price<br>' },
        tickMarks: { color: '#BCBCBC' }
    };
    seriesGroups: any =
    [
        {
            type: 'line',
            series: [
                { dataField: 'S&P 500', displayText: 'S&P 500' },
                { dataField: 'NASDAQ', displayText: 'NASDAQ' }
            ]
        }
    ];
>>>>>>> 2283d7217395622c7793273312b8320076cc84dc
}