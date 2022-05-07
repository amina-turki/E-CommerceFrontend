import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {  FactureServiceService } from '../../Services/facture-service.service';
import { ProduitServiceService }from '../../Services/produit-service.service';
import Swal from 'sweetalert2';
import { Produit } from '../../Produit/Produit';
import { Facture } from '../Facture';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-ajouter-facture',
  templateUrl: './ajouter-facture.component.html',
  styleUrls: ['./ajouter-facture.component.scss']
})
export class AjouterFactureComponent implements OnInit {
 
  article: any;
  form: FormGroup;
  articles: any;
  constructor(private http: HttpClient,public FactureService:FactureServiceService ,public produitService: ProduitServiceService, private router: Router) { }

  ngOnInit(): void {
    this.AfficheProduit()
    //'code', 'tva','nom_societe','adresse','quantite','articleFac_id '
    this.form = new FormGroup({
      code: new FormControl('', [Validators.required, Validators.pattern('^[a-zAZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
      tva: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      nomsociete: new FormControl('', [Validators.required, Validators.pattern('^[a-zAZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
      adresse: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      quantite: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")])
    });
  }

  AfficheProduit(){
    this.produitService.getAll().subscribe((data: Produit[]) => {
      this.articles = data;
    //  console.log(this.articles);
    })
  }


  get f() {
    return this.form.controls;
  }


  envoyer(id){
   
      localStorage.setItem('idCreer',id);
 
  }
  submit(userForm) {

     this.http.get<any>('http://localhost:81/BackendEcommerce/E-Commerce_Backend/public/api/getTest/'+localStorage.getItem('idCreer')).subscribe(data=>{
      if(data =="" && userForm.valid!=''){
  
   this.FactureService.createFacture(userForm.value,localStorage.getItem('idCreer')).subscribe(res => {
      console.log(userForm.value)
   })
   alert("Ajouter Avec succés")
  // this.router.navigateByUrl('/tableProduit');
         }
      else {
        alert("Verfier les champs")
      }
    
    })
  

  }



}

