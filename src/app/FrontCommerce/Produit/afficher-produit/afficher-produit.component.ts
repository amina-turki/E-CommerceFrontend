import { Component, OnInit } from '@angular/core';
import { ProduitServiceService } from '../../Services/produit-service.service';
import { MessageService } from '../../Services/message.service';
import { Produit } from '../Produit';
import { Router } from '@angular/router';

@Component({
  selector: 'app-afficher-produit',
  templateUrl: './afficher-produit.component.html',
  styleUrls: ['./afficher-produit.component.scss']
})
export class AfficherProduitComponent implements OnInit {

  articles: any;

  constructor( private router: Router,private messageService: MessageService,public produitService: ProduitServiceService) { }

  ngOnInit(): void {
   this.AfficheProduit()
   this.getMessage();
  }

  AfficheProduit(){
    this.produitService.getAll().subscribe((data: Produit[]) => {
      this.articles = data;
      console.log(this.articles);
    })
  }

  SupprimerProduit(id){
    this.produitService.Delete(id).subscribe((data) => {
      this.messageService.setMessage('delete  Produit ');
     // console.log(this.articles);
    })

  }



 getMessage() {
    this.messageService.getMessage().subscribe(
      (data) => 
      { this.AfficheProduit(); 
      });
  }
  ModifierProduit(id){
    localStorage.setItem('id',id)
  this.router.navigateByUrl('/ModifierProduit/'+id);
  }

}
