import { NgModule, Optional, SkipSelf } from '@angular/core';
import { NgxJitsuService } from "./ngx-jitsu.service";
import { JITSU_CONFIG } from "./ngx-jitsu.config";
import * as i0 from "@angular/core";
export class NgxJitsuModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('NgxJitsuTrackerModule is already loaded. Import it in the AppModule only');
        }
    }
    static forRoot(config) {
        return {
            ngModule: NgxJitsuModule,
            providers: [
                { provide: JITSU_CONFIG, useValue: config },
                NgxJitsuService,
            ],
        };
    }
}
NgxJitsuModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.3", ngImport: i0, type: NgxJitsuModule, deps: [{ token: NgxJitsuModule, optional: true, skipSelf: true }], target: i0.ɵɵFactoryTarget.NgModule });
NgxJitsuModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.3", ngImport: i0, type: NgxJitsuModule });
NgxJitsuModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.3", ngImport: i0, type: NgxJitsuModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.3", ngImport: i0, type: NgxJitsuModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [],
                    exports: [],
                }]
        }], ctorParameters: function () { return [{ type: NgxJitsuModule, decorators: [{
                    type: Optional
                }, {
                    type: SkipSelf
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWppdHN1Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvbmd4LWppdHN1Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWxGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBUWxELE1BQU0sT0FBTyxjQUFjO0lBWXpCLFlBQzBCLFlBQTZCO1FBRXJELElBQUksWUFBWSxFQUFFO1lBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQUMsMEVBQTBFLENBQUMsQ0FBQztTQUM3RjtJQUNILENBQUM7SUFoQk0sTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFxQjtRQUN6QyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGNBQWM7WUFDeEIsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO2dCQUMzQyxlQUFlO2FBQ2hCO1NBQ0YsQ0FBQztJQUNKLENBQUM7OzJHQVZVLGNBQWMsa0JBYWdCLGNBQWM7NEdBYjVDLGNBQWM7NEdBQWQsY0FBYyxZQUhoQixFQUFFOzJGQUdBLGNBQWM7a0JBTDFCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLE9BQU8sRUFBRSxFQUFFO29CQUNYLE9BQU8sRUFBRSxFQUFFO2lCQUNaOzBEQWMwQyxjQUFjOzBCQUFwRCxRQUFROzswQkFBSSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSml0c3VPcHRpb25zIH0gZnJvbSBcIkBqaXRzdS9zZGstanNcIjtcbmltcG9ydCB7IE5neEppdHN1U2VydmljZSB9IGZyb20gXCIuL25neC1qaXRzdS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBKSVRTVV9DT05GSUcgfSBmcm9tIFwiLi9uZ3gtaml0c3UuY29uZmlnXCI7XG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgaW1wb3J0czogW10sXG4gIGV4cG9ydHM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hKaXRzdU1vZHVsZSB7XG5cbiAgcHVibGljIHN0YXRpYyBmb3JSb290KGNvbmZpZz86IEppdHN1T3B0aW9ucyk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Tmd4Sml0c3VNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5neEppdHN1TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogSklUU1VfQ09ORklHLCB1c2VWYWx1ZTogY29uZmlnIH0sXG4gICAgICAgIE5neEppdHN1U2VydmljZSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZT86IE5neEppdHN1TW9kdWxlXG4gICkge1xuICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTmd4Sml0c3VUcmFja2VyTW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkLiBJbXBvcnQgaXQgaW4gdGhlIEFwcE1vZHVsZSBvbmx5Jyk7XG4gICAgfVxuICB9XG59XG4iXX0=