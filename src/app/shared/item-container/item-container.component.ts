import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-container',
  templateUrl: './item-container.component.html',
  styleUrls: ['./item-container.component.scss']
})
export class ItemContainerComponent implements OnInit {
  @Input() text: string = "";
  @Input() backgroundColor: string = "";
  @Input() border: string = "";
  @Input() size: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
