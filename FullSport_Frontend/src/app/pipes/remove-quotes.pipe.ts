import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeQuotes'
})
export class RemoveQuotesPipe implements PipeTransform {

  transform(value: unknown): string {
    if (typeof value !== 'string') {
      throw new Error('Invalid input. Only strings are supported.');
    }

    return value.replace(/['"]/g, ''); // Elimina tanto las comillas simples como las comillas dobles
  }

}
