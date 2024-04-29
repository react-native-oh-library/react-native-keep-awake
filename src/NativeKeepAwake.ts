import type { TurboModule } from 'react-native/Libraries/TurboModule/RCTExport';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
    activate: () => void;
    deactivate: () => void;
} 
 
export default TurboModuleRegistry.get<Spec>('KeepAwakeNativeModule') as Spec | null;