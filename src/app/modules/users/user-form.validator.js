"use strict";
var UserFormValidator = (function () {
    function UserFormValidator() {
    }
    UserFormValidator.validateEmail = function (control) {
        var controlValue = control.value;
        var REG_EXP = /[^ @]*@[^ @]*/;
        /**this will also work */
        // return REG_EXP.test(controlValue) ? {validEmail: true}: {
        //     validEmail: false
        // }
        /*** */
        return REG_EXP.test(controlValue) ? null : {
            validEmail: false
        };
    };
    return UserFormValidator;
}());
exports.UserFormValidator = UserFormValidator;
//# sourceMappingURL=user-form.validator.js.map