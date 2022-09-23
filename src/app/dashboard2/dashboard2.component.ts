import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.scss']
})
export class Dashboard2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var selector: any = '.nav-links li a';
    $(selector).on('click', (e: any) => {
      $(selector).removeClass('active');
      $(e.currentTarget).addClass('active');
    });

    let sidebar: any = document.querySelector(".sidebar");
    let arrowBtn: any = document.querySelector(".arrow");
    arrowBtn.addEventListener("click", () => {
      sidebar.classList.toggle("closed");
    });

  }

}
