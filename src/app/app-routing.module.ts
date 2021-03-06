import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { UserComponent } from './user/user.component';
import { DocumentmasterComponent } from './documentmaster/documentmaster.component';
import { DocumentnumberingComponent } from './documentnumbering/documentnumbering.component';
import { FinancialyearComponent } from './financialyear/financialyear.component';
import { FormmasterComponent } from './formmaster/formmaster.component';
import { PackingmasterComponent } from './packingmaster/packingmaster.component';
import { ChargesmasterComponent } from './chargesmaster/chargesmaster.component';
import { ManufacturermasterComponent } from './manufacturermaster/manufacturermaster.component';
import { CategorymasterComponent } from './categorymaster/categorymaster.component';
import { UomComponent } from './uom/uom.component';
import { TaxmasterComponent } from './taxmaster/taxmaster.component';
import { WarehousemasterComponent } from './warehousemaster/warehousemaster.component';
import { LabStoreMaster } from './model/labstoremaster';
import { HospitalMaster } from './model/hospitalmaster';
import { LabstoremasterComponent } from './labstoremaster/labstoremaster.component';
import { HospitalmasterComponent } from './hospitalmaster/hospitalmaster.component';
import { TermsandconditionComponent } from './termsandcondition/termsandcondition.component';
import { ItemmasterComponent } from './itemmaster/itemmaster.component';
import { AdditemmasterComponent } from './additemmaster/additemmaster.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'admin/:userId',component:AdminComponent
  // ,
  //   children:[
  //     {path: 'form',component: FormmasterComponent },
  //   ]
  },
  {path:'user/:userId',component:UserComponent},
  {path: 'document',component: DocumentmasterComponent },
  {path:'document/:docid',component:UserComponent},
  {path:'financial_year',component:FinancialyearComponent},
  {path:'document_numbering',component:DocumentnumberingComponent},
  {path:'form_master',component:FormmasterComponent},
  {path:'packing_master',component:PackingmasterComponent},
  {path:'charges_master',component:ChargesmasterComponent},
  {path:'manufactur_master',component:ManufacturermasterComponent},
  {path:'category_master',component:CategorymasterComponent},
  {path:'uom_master',component:UomComponent},
  {path:'tax_master',component:TaxmasterComponent},
  {path:'warehouse_master',component:WarehousemasterComponent},
  {path:'lab_store',component:LabstoremasterComponent},
  {path:'hospital_master',component:HospitalmasterComponent},
  {path:'terms_condition',component:TermsandconditionComponent},
  {path:'item_master',component:ItemmasterComponent},
  {path:'additem',component:AdditemmasterComponent}
];

@NgModule({
  imports: [
    CommonModule,BrowserModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
