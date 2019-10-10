import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'contactus', component: ContactUsComponent },
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    //{ path: 'view/:id', component: ViewComponent },
    // { path: 'reset', pathMatch: 'full', redirectTo: '/new' },
    // the ** will catch anything that did not match any of the above routes
    // { path: '**', component: PageNotFoundComponent }
];


@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }