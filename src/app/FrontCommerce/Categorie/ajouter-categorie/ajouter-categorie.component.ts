import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategorieServiceService } from '../../Services/categorie-service.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-ajouter-categorie',
  templateUrl: './ajouter-categorie.component.html',
  styleUrls: ['./ajouter-categorie.component.scss']
})
export class AjouterCategorieComponent implements OnInit {

  constructor(public CategorieService: CategorieServiceService, private router: Router) { 
    
  }

  ngOnInit() {
  }
  submit(userForm) {     
    if(userForm.valid!=''){
    this.CategorieService.create(userForm.value,localStorage.getItem('idP')).subscribe(res => {
      console.log('Article created successfully!');
      this.router.navigateByUrl('/tableProduit');
    })
    Swal.fire({
      position: 'bottom-end',
      title:'Ajouter Avec succés ',
      icon:'success',
      showConfirmButton: false,
      timer: 2000  
    });
    //alert("Ajouter Avec succés ")
    location.reload();
  }
  else{
    Swal.fire({
      position: 'bottom-end',
      title:'Verfier les champs ',
      icon:'error',
      showConfirmButton: false,
      timer: 2000   
    });
  }
  
  }



}
