import { Injectable } from '@angular/core'
import { CanDeactivate } from '@angular/router'

import { IFormComponent } from '../common-lib/IFormComponent'

@Injectable()
export class PreventUnsavedChangesGuardService implements CanDeactivate<IFormComponent>{

    canDeactivate(component: IFormComponent){

        if(component.isFormDirty()){    //Form is dirty. User will decide if he wants to navigate
            return confirm("Are you sure you want to unsave the changes and navigate ?")
        }
        return true;    //Form is not dirty and can be deactivated
    }
}