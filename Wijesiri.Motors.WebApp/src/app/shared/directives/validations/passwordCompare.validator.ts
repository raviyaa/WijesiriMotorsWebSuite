import {AbstractControl} from '@angular/forms';
export class PasswordValidation {

    static MatchPassword(AC: AbstractControl) {
       let password = AC.get('newPassword').value; // to get value in input tag
       let confirmPassword = AC.get('reTypePassword').value; // to get value in input tag
        if(password != confirmPassword) {
            console.log('false');
            AC.get('reTypePassword').setErrors( {MatchPassword: true} )
        } else {
            console.log('true');
            return null
        }
    }
}