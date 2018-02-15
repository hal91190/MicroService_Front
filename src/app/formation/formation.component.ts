import { Component, OnInit } from '@angular/core';
declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}
@Component({
    selector: 'formation-cmp',
    moduleId: module.id,
    templateUrl: 'formation.component.html',
    styleUrls: ['./formation.component.css']

})


export class FormationComponent implements OnInit{
    public tableData: TableData;
    constructor() { }

  
    ngOnInit(){
    this.tableData = {
        headerRow: [ 'ID', 'Name', 'Country', 'City', 'Salary'],
        dataRows: [
            ['1', 'Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'],
            ['2', 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
            ['3', 'Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
            ['4', 'Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'],
            ['5', 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542'],
            ['6', 'Mason Porter', 'Chile', 'Gloucester', '$78,615']
        ]
    };
   

    }
}
