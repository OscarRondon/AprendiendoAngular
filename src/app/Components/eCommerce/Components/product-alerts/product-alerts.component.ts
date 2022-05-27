import { Component, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Product } from '../../Classes/Product';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css','../../e-commerce-main/e-commerce-main.component.css']
})


export class ProductAlertsComponent implements OnInit {

  @Input() myproduct!: Product;
  @Output() notify = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  Notification(): void {
    this.notify.emit();
  }

}
