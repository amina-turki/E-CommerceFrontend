import { Component, OnInit } from '@angular/core';
import { ProduitServiceService } from '../../Services/produit-service.service';
import { CategorieServiceService } from '../../Services/categorie-service.service';
import { MessageService } from '../../Services/message.service';
import { Categorie } from '../Categorie';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-afficher-cat',
  templateUrl: './afficher-cat.component.html',
  styleUrls: ['./afficher-cat.component.scss']
})
export class AfficherCatComponent implements OnInit {

  closeResult: string;
  categories: any;
  searchText : string;
  constructor( private CategorieService: CategorieServiceService,private modalService: NgbModal, private router: Router,private messageService: MessageService,public produitService: ProduitServiceService) { }

  ngOnInit(): void {
   this.AfficheProduit()
   this.getMessage();
  }

  AfficheProduit(){
   
    this.CategorieService.getAllc().subscribe((data: Categorie[]) => {
      this.categories = data;
      console.log(data);
    })
  }

  Supprimercategorie(id){
    console.log(id)
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
        this.CategorieService.Delete(id).subscribe((data) => {
          this.messageService.setMessage('delete  Produit ');
         // console.log(this.categories);
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

    Modifiercategorie(id){
      localStorage.setItem('idModif',id)
      this.router.navigateByUrl('/ModifierCategorie/'+id); 
    }
}
