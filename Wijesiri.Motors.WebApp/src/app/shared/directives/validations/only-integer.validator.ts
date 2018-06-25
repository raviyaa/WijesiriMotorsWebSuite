
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[OnlyInteger]'
})
export class OnlyIntegerValidator {

    //regexStr = '^[0-9]*$';
    constructor(private el: ElementRef) { }

    @Input() OnlyInteger: boolean;

    @HostListener('keydown', ['$event']) onKeyDown(event) {
        let e = <KeyboardEvent>event;
        if (this.OnlyInteger) {
            // 110[. keycode in number panel], 190 [. keycode in character panel]
            if ([46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
                // Allow: Ctrl+A
                (e.keyCode == 65 && e.ctrlKey === true) ||
                // Allow: Ctrl+C
                (e.keyCode == 67 && e.ctrlKey === true) ||
                // Allow: Ctrl+X
                (e.keyCode == 88 && e.ctrlKey === true) ||
                // Allow: home, end, left, right
                (e.keyCode >= 35 && e.keyCode <= 39)) {
                // let it happen, don't do anything
                return;
            }

            // using key codes
            // Ensure that it is a number and stop the keypress
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
            // end using key codes

            // using regular expression
            /*
            let ch = String.fromCharCode(e.keyCode);
            let regEx =  new RegExp(this.regexStr); 
            console.log(ch); 
            console.log(regEx.test(ch));   
            if(regEx.test(ch))
              return;
            else
               e.preventDefault();
            */
            // end 
        }
    }
}