"use strict" ;

const account1 = {
    owner : "Mark Shmedtman" , 
    movements : [200,450,-400,3000,-650,-130,70,1300] , 
    interestRate : 1.2 ,
    pin : 1111
} ; 


const account2 = {
    owner : "jessica davis" , 
    movements : [5000 , 3400 , -150 , -790 , -3210 , 1000 , 8500 , -30] , 
    interestRate : 1.5 ,
    pin : 2222
}

const account3 = {
        owner : "Park Thomas Williams" , 
    movements : [200,-200,340-300,-20,50,400,-460,100,-400] , 
    interestRate : 0.7 ,
    pin : 3333
}

const account4 = {
     owner : "Sarah Smith" , 
    movements : [430,1000,700,50,90] , 
    interestRate : 1 ,
    pin : 4444
}

const accounts = [account1 , account2 , account3 , account4] ;

//////// import elements : 

const movementsContainer = document.querySelector(".left") ; 


const displayMovements = function (arr){

   movementsContainer.innerHTML = "" ; 

    arr.forEach((mov , i )=> {
     let type = mov > 0 ?  "deposit" : "withdraw"

     let html = `
          <div class="${type}-container">
            <div class="${type}-info">
              <span class="${type}">${i+1} ${type}</span>
              <span>3 DAYS AGO</span>
            </div>
            <p class="${type}-amount">
              ${mov} <i class="fa-solid fa-euro-sign"></i>
            </p>
          </div>
     `
   
     movementsContainer.insertAdjacentHTML("afterbegin",html)

    })

}


///// invocation , call , run :

displayMovements(account4.movements)
















/////////////// lectures ////////////////////////////// :::

////// section :: data transformation ::: 

////// with forEach  ::: 

// const arr = [3,1,4,3,2] ; 
// console.log(arr) ; 

// const result = [] ; 
// arr.forEach((ele)=> {
//  result.push(ele*2)
// })
// console.log(result)



/////// (map) : (return new array)

// const arr = [3,1,4,3,2] ; 
// console.log(arr)


///// first exemple :: 

// const resultWithMap = arr.map(ele => ele*2) ;
// const resultWithMap = arr.map(function (ele){
//     return ele * 2 
// })

// console.log(resultWithMap)

//////// second exemple ::: 

// const euro = [100,50,10,25] ; 

// console.log("euro :" ,euro) ; 

// const toTunisianDinar = 3.3 ; 

// const dinar = euro.map(money=> money*toTunisianDinar )

// console.log("dinar :" , dinar)

////////// with for loop ::: 
// const euro = [100,50,10,25] ; 
// const toTunisianDinar = 3.3 ; 

// const dinar = [] ; 
// for (let i = 0 ; i <euro.length ; i++ ){
//     dinar.push(euro[i]* toTunisianDinar)
// }

// console.log(euro)
// console.log(dinar)


///////////// challange ::: 
///////// third exemple ::: 

const movements = [5000 , 3400 , -150 , -790 , -3210 , 1000 , 8500 , -30] ; 

//// ====> movement 1 : you (deposit or withdraw) mov ....