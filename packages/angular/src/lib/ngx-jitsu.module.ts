import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { JitsuOptions } from "@jitsu/sdk-js";
import { NgxJitsuService } from "./ngx-jitsu.service";
import { JITSU_CONFIG } from "./ngx-jitsu.config";


/**
 * See for details http://jitsu.com/docs/sending-data/js-sdk/angular
 */
@NgModule({
  declarations: [],
  imports: [],
  exports: [],
})
export class NgxJitsuModule {

  public static forRoot(config?: JitsuOptions): ModuleWithProviders<NgxJitsuModule> {
    return {
      ngModule: NgxJitsuModule,
      providers: [
        { provide: JITSU_CONFIG, useValue: config },
        NgxJitsuService,
      ],
    };
  }

  constructor(
    @Optional() @SkipSelf() parentModule?: NgxJitsuModule
  ) {
    if (parentModule) {
      throw new Error('NgxJitsuTrackerModule is already loaded. Import it in the AppModule only');
    }
  }
}
