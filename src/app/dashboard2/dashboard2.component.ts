import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.scss']
})
export class Dashboard2Component implements OnInit {
  menus: any = [{ displayName: "Home", _id: "home", icon: "/assets/home.png", blue_icon: "/assets/home_blue.png" }, { displayName: "Scheduler", _id: "Scheduler", icon: "/assets/plans.png", blue_icon: "/assets/plans_blue.png" }, { displayName: "Notes", _id: "Notes", icon: "/assets/edit.png", blue_icon: "/assets/edit_blue.png" }, { displayName: "Functions", _id: "Functions", icon: "/assets/plans.png", blue_icon: "/assets/plans_blue.png" }, { displayName: "Account", _id: "Account", icon: "/assets/account.png", blue_icon: "/assets/account_blue.png" }]
  selectedMenu: any;
  

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

    for(var i=0;i<this.menus.length;i++){
      this.selectedMenu=this.menus[0];
    }
   }
  onSelect(menu:any): void {
   this.selectedMenu = menu;
   console.log("selcted menu",this.selectedMenu )
  }

}
