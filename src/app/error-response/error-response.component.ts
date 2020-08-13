import { Router  } from '@angular/router';
import { ProductSelectionService } from './../_shared/services/product-selection.service';
import { Component, OnInit } from '@angular/core';
import { filter, pairwise } from 'rxjs/operators';
import {Location} from '@angular/common';

@Component({
  selector: 'app-error-response',
  templateUrl: './error-response.component.html',
  styleUrls: ['./error-response.component.css']
})
export class ErrorResponseComponent implements OnInit {

  previousUrl: string;

  constructor(private location: Location, private productSelectionService: ProductSelectionService) {

  }

  ngOnInit(): void {
  }

  BackClicked(): void {
    this.location.back();
  }

}
