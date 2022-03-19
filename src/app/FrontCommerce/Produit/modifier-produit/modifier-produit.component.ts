import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitServiceService } from '../../Services/produit-service.service';
import { Produit } from '../Produit';

@Component({
  selector: 'app-modifier-produit',
  templateUrl: './modifier-produit.component.html',
  styleUrls: ['./modifier-produit.component.scss']
})
export class ModifierProduitComponent implements OnInit {

  id: number;
  article: any;
  form: FormGroup;

  constructor(public produitService: ProduitServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  //  this.id = localStorage.getItem('id');
    this.produitService.find(localStorage.getItem('id')).subscribe(data => {
      this.article = data;
      console.log(data)
    });
    this.form = new FormGroup({
      nom: new FormControl('', [Validators.required, Validators.pattern('^[a-zAZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),

      prix: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")])
    });
  }
  get f() {
    return this.form.controls;
  }
  submit() {
    console.log(this.form.value);
    this.produitService.update(localStorage.getItem('id'), this.form.value).subscribe(res => {
      console.log('Article updated successfully!');
      this.router.navigateByUrl('/tableProduit');
    })
  }

}
