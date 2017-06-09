import { BrowserModule }                    from '@angular/platform-browser';
import { NgModule }                         from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule }                       from '@angular/http';

import { appRouting }                       from './app.routing';

import { AppComponent }                     from './app.component';
import { GreetingsComponent }               from './greetings/greetings.component';
import { NotFoundComponent }                from './not-found/not-found.component';

import { FacebookLoginButtonComponent } from './shared/template-components/facebook-login-button/facebook-login-button.component';
import { GoogleLoginButtonComponent } from './shared/template-components/google-login-button/google-login-button.component';
import { RotatingPlaneComponent } from './shared/template-components/loading-spinners/rotating-plane/rotating-plane.component';
import { DoubleBounceComponent } from './shared/template-components/loading-spinners/double-bounce/double-bounce.component';
import { RectangleBounceComponent } from './shared/template-components/loading-spinners/rectangle-bounce/rectangle-bounce.component';
import { WanderingCubesComponent } from './shared/template-components/loading-spinners/wandering-cubes/wandering-cubes.component';
import { PulseComponent } from './shared/template-components/loading-spinners/pulse/pulse.component';
import { ChasingDotsComponent } from './shared/template-components/loading-spinners/chasing-dots/chasing-dots.component';
import { ThreeBounceComponent } from './shared/template-components/loading-spinners/three-bounce/three-bounce.component';
import { CirclePulseComponent } from './shared/template-components/loading-spinners/circle-pulse/circle-pulse.component';
import { CubeGridComponent } from './shared/template-components/loading-spinners/cube-grid/cube-grid.component';
import { FoldingCubeComponent } from './shared/template-components/loading-spinners/folding-cube/folding-cube.component';
import { SpinnersComponent } from './spinners/spinners.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetingsComponent,
    NotFoundComponent,

    FacebookLoginButtonComponent,
    GoogleLoginButtonComponent,
    RotatingPlaneComponent,
    DoubleBounceComponent,
    RectangleBounceComponent,
    WanderingCubesComponent,
    PulseComponent,
    ChasingDotsComponent,
    ThreeBounceComponent,
    CirclePulseComponent,
    CubeGridComponent,
    FoldingCubeComponent,
    SpinnersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,

    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
