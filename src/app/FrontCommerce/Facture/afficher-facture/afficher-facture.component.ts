import { Component, OnInit } from '@angular/core';
import { FactureServiceService } from '../../Services/facture-service.service';
import { MessageService } from '../../Services/message.service';
import { Facture } from '../Facture';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-afficher-facture',
  templateUrl: './afficher-facture.component.html',
  styleUrls: ['./afficher-facture.component.scss']
})
export class AfficherFactureComponent implements OnInit {

  closeResult: string;
  Factures: any;
  searchText : string;
  constructor( private modalService: NgbModal, private router: Router,private messageService: MessageService,public FactureService: FactureServiceService) { }

  ngOnInit(): void {
   this.AfficheProduit()
   this.getMessage();
  }

  AfficheProduit(){
    this.FactureService.getAll().subscribe((data: Facture[]) => {
      this.Factures = data;
      console.log(this.Factures);
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
        this.FactureService.Delete(id).subscribe((data) => {
          this.messageService.setMessage('delete  Produit ');
         // console.log(this.Factures);
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


  openLargeFacture(contentdemarcheFacture) {
   
    this.modalService.open(contentdemarcheFacture, {
      size: 'lg'
    });
  
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
