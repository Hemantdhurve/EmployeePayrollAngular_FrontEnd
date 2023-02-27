import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchpipe'
})
export class SearchpipePipe implements PipeTransform {

 transform(value: any, searchText: any): any {
    if(!value || !searchText){
      return value;
    }
    //if i remove else condition and try to write in capital letter it not shows any result 
    else {
      searchText = searchText.toLowerCase();
    }

    return value?.filter((filterObj: any) => {
      return filterObj.employeeName.toLowerCase().includes(searchText) | filterObj.salary.toString().toLowerCase().includes(searchText)
    })
  }

}
