import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';


const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(AppComponent);

export default bootstrap;
