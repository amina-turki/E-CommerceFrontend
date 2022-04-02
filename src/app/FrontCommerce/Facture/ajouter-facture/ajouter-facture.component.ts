import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProduitServiceService } from '../../Services/produit-service.service';
import Swal from 'sweetalert2';
import { Produit } from '../../Produit/Produit';

@Component({
  selector: 'app-ajouter-facture',
  templateUrl: './ajouter-facture.component.html',
  styleUrls: ['./ajouter-facture.component.scss']
})
export class AjouterFactureComponent implements OnInit {
 
  article: any;
  form: FormGroup;
  articles: any;
  constructor(public produitService: ProduitServiceService, private router: Router) { }

  ngOnInit(): void {
    this.AfficheProduit()
    //'code', 'tva','nom_societe','adresse','quantite','articleFac_id '
    this.form = new FormGroup({
      code: new FormControl('', [Validators.required, Validators.pattern('^[a-zAZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
      tva: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      nom_societe: new FormControl('', [Validators.required, Validators.pattern('^[a-zAZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
      adresse: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      quantite: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")])
    });
  }

  AfficheProduit(){
    this.produitService.getAll().subscribe((data: Produit[]) => {
      this.articles = data;
      console.log(this.articles);
    })
  }


  get f() {
    return this.form.controls;
  }

  submit(userForm) {
   
    if(userForm.valid!=''){
    this.produitService.create(userForm.value).subscribe(res => {
      console.log('Article created successfully!');
      this.router.navigateByUrl('/tableProduit');
    })
    Swal.fire({
      title:'Modifier Avec succés ',
      icon:'success',
      showConfirmButton: false,
      timer: 2000  
    });
  }
  else{
    Swal.fire({
      
      title:'Verfier les champs ',
      icon:'error',
      showConfirmButton: false,
      timer: 2000   
    });
  }
  }



}

