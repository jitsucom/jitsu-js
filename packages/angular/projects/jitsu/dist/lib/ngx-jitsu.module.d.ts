import { ModuleWithProviders } from '@angular/core';
import { JitsuOptions } from "@jitsu/sdk-js";
import * as i0 from "@angular/core";
export declare class NgxJitsuModule {
    static forRoot(config?: JitsuOptions): ModuleWithProviders<NgxJitsuModule>;
    constructor(parentModule?: NgxJitsuModule);
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxJitsuModule, [{ optional: true; skipSelf: true; }]>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NgxJitsuModule, never, never, never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NgxJitsuModule>;
}
