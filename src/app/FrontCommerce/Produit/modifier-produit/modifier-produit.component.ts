import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitServiceService } from '../../Services/produit-service.service';
//import Swal from 'sweetalert2/dist/sweetalert2.js'; //npm i sweetalert2
import Swal from 'sweetalert2'
@Component({
  selector: 'app-modifier-produit',
  templateUrl: './modifier-produit.component.html',
  styleUrls: ['./modifier-produit.component.scss']
})
export class ModifierProduitComponent implements OnInit {

  article: any;
  form: FormGroup;

  constructor(public produitService: ProduitServiceService, private route: ActivatedRoute, private router: Router) { 
    
  }

  ngOnInit(): void {
  
    this.produitService.find(localStorage.getItem('id')).subscribe(data => {
      this.article = data;
      //console.log(data)
    });
    this.form = new FormGroup({
      nom: new FormControl('', [Validators.required, Validators.pattern('^[a-zAZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),

      prix: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")])
    });
  }
  get f() {
    return this.form.controls;
  }
  submit(userForm) {
    
    if( this.article.nom!='' && this.article.prix!=''){
    this.produitService.update(localStorage.getItem('id'), userForm.value).subscribe(res => {
      console.log('Article updated successfully!');
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
