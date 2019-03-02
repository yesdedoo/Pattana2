import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TestapiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TestapiProvider {
  data: any

  //Which IP and what is it purpose
  restApiQuestion = 'http://104.196.19.248:5001/question'
  restApiRegister = 'http://104.196.19.248:5002/register'
  constructor(public http: HttpClient) {
  }

  //Get question & choice from DB
  ImportQuestionGet()
  {
    //var that get data from DB
    
    return new Promise(resolve =>{
      fetch(this.restApiQuestion,{
        method:'GET',
      })
      .then(r=>{
        this.data = r.json()
        resolve(this.data)
      })
      .catch(err => console.log(err))
    });
  }
  
  //Include data from DB
  ImportQuestion(Text)
  {
    //var that get data from DB
    var data = {questionData : {text:Text}}
    return new Promise(resolve =>{
      fetch(this.restApiQuestion,{
        method:'POST',
        body:JSON.stringify(data),
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(r=>{
        this.data = r.json()
        resolve(this.data)
      })
      .catch(err => console.log(err))
    });
  }
  

}
