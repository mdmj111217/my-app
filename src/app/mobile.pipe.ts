import { Pipe, PipeTransform } from '@angular/core';  

@Pipe ({ 
   name: 'MobilePipe' 
})
 
export class MobilePipe implements PipeTransform {
    transform(value: string): string {
        value = value.replace("(09)", "");
        if (value.length > 2 && value.length < 5) {
            value = value.slice(0, 2) + '-' + value.slice(2);
        } else if (value.length > 6 && value.length < 8) {
            value = value.slice(0, 6) + "-" + value.slice(6);
        }else {
            value = value;
        }
        let phone = "(09)" + value;
        return phone;
    } 
}