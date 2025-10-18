import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ContactComponent } from './shared/contact/contact.component';

export const routes: Routes = [
    { path: '', component: MainContentComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'imprint', component: ImprintComponent },
    { path: 'privacyPolicy', component: PrivacyPolicyComponent }
];