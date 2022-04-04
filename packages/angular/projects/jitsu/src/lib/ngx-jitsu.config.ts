import { InjectionToken } from '@angular/core';
import { JitsuOptions } from "@jitsu/sdk-js";

export const JITSU_CONFIG: InjectionToken<JitsuOptions> = new InjectionToken<JitsuOptions>('jitsu.config');
