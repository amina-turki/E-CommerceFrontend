import { Component, OnInit } from '@angular/core';
import { ProduitServiceService } from '../../Services/produit-service.service';
import { MessageService } from '../../Services/message.service';
import { Produit } from '../Produit';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-afficher-produit',
  templateUrl: './afficher-produit.component.html',
  styleUrls: ['./afficher-produit.component.scss']
})
export class AfficherProduitComponent implements OnInit {
  closeResult: string;
  articles: any;
  searchText : string;
  constructor( private modalService: NgbModal, private router: Router,private messageService: MessageService,public produitService: ProduitServiceService) { }

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
    Swal.fire({
      title: 'Êtes-vous sûr?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimez-le!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
        title:'Supprimer Avec succés ',
        icon:'success',
        showConfirmButton: false,
        timer: 2000  
        })
        this.produitService.Delete(id).subscribe((data) => {
          this.messageService.setMessage('delete  Produit ');
         // console.log(this.articles);
        })
      }
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

  openLarge(content,id) {
   
    this.modalService.open(content, {
      size: 'lg'
    });
    localStorage.setItem('idP',id);
  }


    open(content) {
      
      this.modalService.open(content).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return `with: ${reason}`;
      }
    }
    formulaireAjouter(){
      this.router.navigateByUrl('/AjouterProduit');
    }
}
