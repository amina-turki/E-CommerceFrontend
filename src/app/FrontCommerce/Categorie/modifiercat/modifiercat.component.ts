import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieServiceService } from '../../Services/categorie-service.service';
//import Swal from 'sweetalert2/dist/sweetalert2.js'; //npm i sweetalert2
import Swal from 'sweetalert2'
@Component({
  selector: 'app-modifiercat',
  templateUrl: './modifiercat.component.html',
  styleUrls: ['./modifiercat.component.scss']
})
export class ModifiercatComponent implements OnInit {

  article: any;
  form: FormGroup;

  constructor(public produitService: CategorieServiceService, private route: ActivatedRoute, private router: Router) { 
    
  }

  ngOnInit(): void {
  
    this.produitService.find(localStorage.getItem('idModif')).subscribe(data => {
      this.article = data;
      console.log(data)
    });
    this.form = new FormGroup({
      referance: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      nom: new FormControl('', [Validators.required, Validators.pattern('^[a-zAZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
      prixA: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")])
    });
  }
  get f() {
    return this.form.controls;
  }
  submit(userForm) {
  
    if( this.article.nom!='' && this.article.prix!=''){
    this.produitService.update(localStorage.getItem('idModif'), userForm.value).subscribe(res => {
      console.log('Article updated successfully!');
      this.router.navigateByUrl('/AfficherCategorie');
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
