import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProduitServiceService } from '../../Services/produit-service.service';

@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.scss']
})
export class AjouterProduitComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder,public produitService: ProduitServiceService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      nom: new FormControl('', [Validators.required, Validators.pattern('^[a-zAZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),

      prix: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")])
    });
  }

  get f() {
    return this.form.controls;
  }
<<<<<<< HEAD
  onsubmit() {
    //console.log(this.form.value);
=======
  submit() {
    console.log(this.form.value);
>>>>>>> ccfc4e7c84cf2cfba9c41722a567e26d0964c558
    this.produitService.create(this.form.value).subscribe(res => {
      console.log('Article created successfully!');
      this.router.navigateByUrl('/tableProduit');
    })
  }


}
