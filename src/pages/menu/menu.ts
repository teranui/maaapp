import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  day: any;
  traiteur: any;
  // menus: any;

  // menuprocessed: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  //   this.menus= [{"id":1,"user_id":1,"meal_id":2,"date":"2018-06-26","quantity":5,"orders":3,"meal":[{"name":"Maa tinto","picture":"99a48e536c3b194.png"}]},{"id":2,"user_id":1,"meal_id":4,"date":"2018-06-26","quantity":10,"orders":3,"meal":[{"name":"chaomen Update","picture":"https:\/\/media.blueapron.com\/recipes\/2121\/c_main_dish_images\/1490637097-4-0002-2195\/403_2PRE07-steak-frites-18311_WEB_Center_high_feature.jpg"}]},{"id":3,"user_id":1,"meal_id":3,"date":"2018-06-26","quantity":-1,"orders":0,"meal":[{"name":"Chao Men","picture":"https:\/\/media.blueapron.com\/recipes\/2121\/c_main_dish_images\/1490637097-4-0002-2195\/403_2PRE07-steak-frites-18311_WEB_Center_high_feature.jpg"}]},{"id":4,"user_id":1,"meal_id":1,"date":"2018-06-26","quantity":-1,"orders":0,"meal":[{"name":"Escalope","picture":null}]},{"id":5,"user_id":2,"meal_id":12,"date":"2018-06-26","quantity":-1,"orders":0,"meal":[{"name":"Sashimi","picture":null}]},{"id":6,"user_id":2,"meal_id":13,"date":"2018-06-26","quantity":-1,"orders":0,"meal":[{"name":"azerty","picture":null}]},{"id":7,"user_id":2,"meal_id":14,"date":"2018-06-26","quantity":-1,"orders":0,"meal":[{"name":"chao men","picture":null}]}];
    
  }

  ionViewDidLoad() {
    this.day = this.navParams.get("jour");
    // this.processmenu();
    console.log('ionViewDidLoad MenuPage', this.day);
  }

  // processmenu(){
  //   for (let i=0;i<this.menus.length;i++){
  //     let userId=this.menus[i].user_id;
  //     let menu=this.menus[i];
  //     this.menuprocessed.push({userId : menu});
  //   }
  // }

}
