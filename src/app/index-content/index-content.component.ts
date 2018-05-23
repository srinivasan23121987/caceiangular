import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';


@Component({
  selector: 'app-index-content',
  templateUrl: './index-content.component.html',
  styleUrls: ['./index-content.component.css']
})
export class IndexContentComponent implements OnInit {
  displayedColumns = ['position', 'name', 'weight', 'symbol', 'ccy', 'security_id', 'security_name', 'event_date', 'payment_date', 'settlement_date', 'shareOffer'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  matForm = new FormGroup({ foodValue: new FormControl('', [Validators.required]) });
  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];
  constructor() { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

}
export interface Element {
  sno: string;
  event_id: string;
  event_name: string;
  security_id_type: string;
  ccy: string;
  security_id: string;
  security_name: string;
  event_date: string;
  payment_date: string;
  settlement_date: string;
  pershare_offer: string;
}

const ELEMENT_DATA: Element[] = [{
  "sno": "1",
  "event_id": "CA111111",
  "event_name": "Rights",
  "security_id_type": "ISIN",
  "ccy": "INR",
  "security_id": "INE110L07054",
  "security_name": "Apple",
  "event_date": "05-15-18",
  "payment_date": "05-17-18",
  "settlement_date": "05-17-18",
  "pershare_offer": "2"
},
{
  "sno": "2",
  "event_id": "CA222222",
  "event_name": "Rights",
  "security_id_type": "ISIN",
  "ccy": "INR",
  "security_id": "INE134E08IY9",
  "security_name": "Micorosoft",
  "event_date": "05-15-18",
  "payment_date": "05-17-18",
  "settlement_date": "05-17-18",
  "pershare_offer": "10"
},
{
  "sno": "3",
  "event_id": "CA333333",
  "event_name": "Cash Dividend",
  "security_id_type": "ISIN",
  "ccy": "INR",
  "security_id": "INE134E08JD1",
  "security_name": "IBM",
  "event_date": "05-15-18",
  "payment_date": "05-17-18",
  "settlement_date": "05-17-18",
  "pershare_offer": "10"
},
{
  "sno": "4",
  "event_id": "CA444444",
  "event_name": "Cash Dividend",
  "security_id_type": "ISIN",
  "ccy": "INR",
  "security_id": "INE752E07MS4",
  "security_name": "Fiserv",
  "event_date": "05-15-18",
  "payment_date": "05-17-18",
  "settlement_date": "05-17-18",
  "pershare_offer": "10"
},
{
  "sno": "5",
  "event_id": "CA555555",
  "event_name": "Rights",
  "security_id_type": "ISIN",
  "ccy": "INR",
  "security_id": "INE001A07QI6",
  "security_name": "ICICI",
  "event_date": "05-15-18",
  "payment_date": "05-17-18",
  "settlement_date": "05-17-18",
  "pershare_offer": "5"
},
{
  "sno": "6",
  "event_id": "CA666666",
  "event_name": "Rights",
  "security_id_type": "ISIN",
  "ccy": "INR",
  "security_id": "INE040A08377",
  "security_name": "HDFC",
  "event_date": "05-15-18",
  "payment_date": "05-17-18",
  "settlement_date": "05-17-18",
  "pershare_offer": "6"
},
{
  "sno": "7",
  "event_id": "CA777777",
  "event_name": "Rights",
  "security_id_type": "ISIN",
  "ccy": "INR",
  "security_id": "INE721A08DA2",
  "security_name": "AXIS",
  "event_date": "05-15-18",
  "payment_date": "05-17-18",
  "settlement_date": "05-17-18",
  "pershare_offer": "10"
},
{
  "sno": "8",
  "event_id": "CA888888",
  "event_name": "Cash Dividend",
  "security_id_type": "ISIN",
  "ccy": "INR",
  "security_id": "INE110L08037",
  "security_name": "Hexaware",
  "event_date": "05-15-18",
  "payment_date": "05-17-18",
  "settlement_date": "05-17-18",
  "pershare_offer": "10"
},
{
  "sno": "9",
  "event_id": "CA999999",
  "event_name": "Stock Dividend",
  "security_id_type": "ISIN",
  "ccy": "INR",
  "security_id": "INE095A08074",
  "security_name": "Intellec",
  "event_date": "05-15-18",
  "payment_date": "05-17-18",
  "settlement_date": "05-17-18",
  "pershare_offer": "10"
},
{
  "sno": "10",
  "event_id": "CA1111110",
  "event_name": "Stock Dividend",
  "security_id_type": "ISIN",
  "ccy": "INR",
  "security_id": "INE134E08JP5",
  "security_name": "TCS",
  "event_date": "05-15-18",
  "payment_date": "05-17-18",
  "settlement_date": "05-17-18",
  "pershare_offer": "10"
},
{
  "sno": "11",
  "event_id": "CA1222221",
  "event_name": "Rights",
  "security_id_type": "ISIN",
  "ccy": "INR",
  "security_id": "INE020B08AY3",
  "security_name": "Polaris",
  "event_date": "05-15-18",
  "payment_date": "05-17-18",
  "settlement_date": "05-17-18",
  "pershare_offer": "3"
},
{
  "sno": "12",
  "event_id": "CA1333332",
  "event_name": "Rights",
  "security_id_type": "ISIN",
  "ccy": "INR",
  "security_id": "INE261F08642",
  "security_name": "Virtusa",
  "event_date": "05-15-18",
  "payment_date": "05-17-18",
  "settlement_date": "05-17-18",
  "pershare_offer": "10"
},
{
  "sno": "13",
  "event_id": "CA1444443",
  "event_name": "Rights",
  "security_id_type": "ISIN",
  "ccy": "INR",
  "security_id": "INE155A08274",
  "security_name": "Capegemini",
  "event_date": "05-15-18",
  "payment_date": "05-17-18",
  "settlement_date": "05-17-18",
  "pershare_offer": "10"
},
{
  "sno": "14",
  "event_id": "CA1555554",
  "event_name": "Rights",
  "security_id_type": "ISIN",
  "ccy": "INR",
  "security_id": "INE261F08881",
  "security_name": "Cognizant",
  "event_date": "05-15-18",
  "payment_date": "05-17-18",
  "settlement_date": "05-17-18",
  "pershare_offer": "5"
},
{
  "sno": "15",
  "event_id": "CA1666665",
  "event_name": "Rights",
  "security_id_type": "ISIN",
  "ccy": "INR",
  "security_id": "INE001A07NB8",
  "security_name": "Aspire",
  "event_date": "05-15-18",
  "payment_date": "05-17-18",
  "settlement_date": "05-17-18",
  "pershare_offer": "5"
}
];



