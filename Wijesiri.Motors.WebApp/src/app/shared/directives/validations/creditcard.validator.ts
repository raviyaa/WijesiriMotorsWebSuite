import { AbstractControl, ValidatorFn } from '@angular/forms';

export class CreditCardValidators {

    static ccNumber(min: number, max: number): ValidatorFn {
        return (c: AbstractControl): { [key: string]: boolean } | null => {
            if (c.value && (isNaN(c.value) || c.value < min || c.value > max)) {
                return { 'range': true };
            }
            return null;
        };
    }

    isValidCreditCard(type, ccnum) {
        // let re = ''
        // if (type === 'Visa') {
        //     // Visa: length 16, prefix 4, dashes optional.
        //   re = /^4\d{3}-?\d{4}-?\d{4}-?\d{4}$/;
        // } else if (type === 'MC') {
        //     // Mastercard: length 16, prefix 51-55, dashes optional.
        //      re = /^5[1-5]\d{2}-?\d{4}-?\d{4}-?\d{4}$/;
        // } else if (type === 'Disc') {
        //     // Discover: length 16, prefix 6011, dashes optional.
        //      re = /^6011-?\d{4}-?\d{4}-?\d{4}$/;
        // } else if (type === 'AmEx') {
        //     // American Express: length 15, prefix 34 or 37.
        //      re = /^3[4,7]\d{13}$/;
        // } else if (type === 'Diners') {
        //     // Diners: length 14, prefix 30, 36, or 38.
        //      re = /^3[0,6,8]\d{12}$/;
        // }
        // if (!re.test(ccnum)) { return false; }
        // Remove all dashes for the checksum checks to eliminate negative numbers
        ccnum = ccnum.split('-').join('');
        // Checksum ("Mod 10")
        // Add even digits in even length strings or odd digits in odd length strings.
        let checksum = 0;
        for (let i = (2 - (ccnum.length % 2)); i <= ccnum.length; i += 2) {
            checksum += Number(ccnum.charAt(i - 1));
        }
        // Analyze odd digits in even length strings or even digits in odd length strings.
        for (let i = (ccnum.length % 2) + 1; i < ccnum.length; i += 2) {
            const digit = Number(ccnum.charAt(i - 1)) * 2;
            if (digit < 10) { checksum += digit; } else { checksum += (digit - 9); }
        }
        if ((checksum % 10) === 0) { return true; } else { return false; }
    }
}
