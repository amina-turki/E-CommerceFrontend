import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'filter_produit'
})

@Injectable()
export class filter_produit implements PipeTransform {
  transform(items: any[], value1: string){
    if (items && items.length){
      return items.filter(item => {
        if ((value1 && item.nom.indexOf(value1) === -1) ){
          return false;
        }


        return true;
      });
    }
    else{
      return items;
    }
  }
}
