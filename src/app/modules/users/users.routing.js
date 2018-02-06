"use strict";
var router_1 = require("@angular/router");
var new_user_component_1 = require("./new.user.component");
var not_found_component_1 = require("../../not-found.component");
var prevent_unsaved_changes_guard_services_1 = require("../../route-guards/prevent-unsaved-changes-guard.services");
var users_component_1 = require("./users.component");
exports.UsersRouting = router_1.RouterModule.forChild([
    { path: 'users', component: users_component_1.UsersComponent },
    { path: 'users/new',
        component: new_user_component_1.NewUserComponent,
        canDeactivate: [prevent_unsaved_changes_guard_services_1.PreventUnsavedChangesGuardService]
    },
    {
        path: 'users/:id',
        component: new_user_component_1.NewUserComponent
    },
    {
        path: 'notfound',
        component: not_found_component_1.NotFoundComponent
    }
]);
//# sourceMappingURL=users.routing.js.map