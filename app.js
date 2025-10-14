"use strict";

const account1 = {
  owner: "Mark Shmedtman",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  pin: 1111,
};

const account2 = {
  owner: "jessica davis",
  movements: [5000, 3400, -150, -790, -3210, 1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Park Thomas Williams",
  movements: [200, -200, 340 - 300, -20, 50, 400, -460, 100, -400],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

//////// import elements :
const app = document.querySelector("main");

const movementsContainer = document.querySelector(".left");
const balanceAccount = document.querySelector(".amount");
const inComes = document.querySelector(".average-in");
const outMoney = document.querySelector(".average-out");
const interest = document.querySelector(".average-interest");

/////// Auth elements ::

const userNameInput = document.querySelector(".user");
const pinInput = document.querySelector(".pin");

const btnLogin = document.querySelector(".btn-login");

const welcomeMessage = document.querySelector(".welcome");

/////// transfert box elements :::
const transfertUser = document.querySelector(".transfert-input");
const amountToTransfert = document.querySelector(".amount-transfert-box-input");
const transfertButton = document.querySelector(".btn-transfert-box");

function updateUi(currentAccount) {
  displayMovements(currentAccount);
  displayBalance(currentAccount);
  calcDisplaySummary(currentAccount);
}

////////// transfert functionnality ::::
//// conditions ::
// balance > amount && reciever should be true && amount > 0 && current account should be defferent of reciever

transfertButton.addEventListener("click", function (event) {
  event.preventDefault();
  const amount = Number(amountToTransfert.value);
  const balance = currentAccount.credit;
  const reciever = accounts.find((acc) => acc.userName === transfertUser.value);

  if (
    balance >= amount &&
    reciever &&
    currentAccount.userName !== reciever.userName &&
    amount > 0
  ) {
    currentAccount.movements.push(-amount);
    reciever.movements.push(amount);
    ///// update ui
    updateUi(currentAccount);
    ////
    transfertUser.value = amountToTransfert.value = "";
  }
});

///// authentication functionnality :::
let currentAccount;

btnLogin.addEventListener("click", function () {
  currentAccount = accounts.find((acc) => acc.userName === userNameInput.value);
  console.log("current:", currentAccount);
  if (currentAccount?.pin === Number(pinInput.value)) {
    welcomeMessage.textContent = `welcome back ${
      currentAccount.owner.split(" ")[0]
    }`;

    app.style.opacity = 1;
    ///// update ui :
    updateUi(currentAccount);
  } else {
    alert("wrong password or email  !!!");
  }

  userNameInput.value = pinInput.value = "";
});

//////// userName functionnality :::

const displayUserName = function (arr) {
  arr.forEach(
    (person) =>
      (person.userName = person.owner
        .toLowerCase()
        .split(" ")
        .map((ele) => ele[0])
        .join(""))
  );
};

displayUserName(accounts);
console.log(accounts);

//////////// display movements :::

const displayMovements = function (account) {
  movementsContainer.innerHTML = "";

  account.movements.forEach((mov, i) => {
    let type = mov > 0 ? "deposit" : "withdraw";

    let html = `
          <div class="${type}-container">
            <div class="${type}-info">
              <span class="${type}">${i + 1} ${type}</span>
              <span>3 DAYS AGO</span>
            </div>
            <p class="${type}-amount">
              ${mov} <i class="fa-solid fa-euro-sign"></i>
            </p>
          </div>
     `;

    movementsContainer.insertAdjacentHTML("afterbegin", html);
  });
};

///// invocation , call , run :

// displayMovements(account1.movements);

///////////// display balance :::

const displayBalance = function (account) {
  const blance = account.movements.reduce((acc, ele) => acc + ele, 0);
  //// update ui :::
  balanceAccount.textContent = `${blance} €`;
  account.credit = blance;
};

///// invocation ::
// displayBalance(account1.movements);

///////// display summary ::::

const calcDisplaySummary = function (account) {
  const inc = account.movements.reduce((acc, ele) => acc + ele, 0);

  //// display ui :::
  inComes.textContent = `${inc} €`;

  const outc = account.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  ////// update ui ::
  outMoney.textContent = `${Math.abs(outc)} €`;

  const interestc = account.movements
    .filter((mov) => mov > 0)
    .map((deposit, i, arr) => {
      // console.log("comes from filter :" , arr)
      return (deposit * currentAccount.interestRate) / 100;
    })
    .filter((ele, i, arr) => {
      // console.log("comes from map :" , arr)
      return ele > 1;
    })
    .reduce((acc, ele) => acc + ele, 0);

  interest.textContent = `${interestc} €`;
};

// calcDisplaySummary(account1.movements);

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

// const movements = [5000 , 3400 , -150 , -790 , -3210 , 1000 , 8500 , -30] ;

//// ====> movement 1 : you (deposit or withdraw) mov ....

// movements.map((mov,i)=> {
//     const message = mov > 0 ? "deposit" : "withdraw"
//     console.log(`movement ${i+1} : you ${message} ${mov}`)

// })

// const user = "Park Thomas Williams"   ///// but  => ptw

// const userName = user.toLowerCase()  //////// park thomas williams

// const userName1 = userName.split(" ") ////  ['park', 'thomas', 'williams']

//  const userName2 =   userName1.map((nom)=> nom[0] )        ///// ["p" ,"t","w"]

//      const result = userName2.join("")
//      console.log(result)

/////// chaining ; pipeline
// const user = "Park Thomas Williams"

//      const result = user.toLowerCase().split(" ").map((nom)=> nom[0]).join("")
//      console.log(result)    //// ptw

///////////////// filter ::

// const x = [3,1,4,3,2] ;

// const numbersGreaterThanTwo = x.filter(function(num , i){
//   return num > 2
// })
// console.log(numbersGreaterThanTwo)

////// with for loop ::::
// const x = [3,1,4,3,2] ;

// const numbersGreaterThanTwo = []  ;

// for (let i = 0 ; i < x.length ; i++){
//   if (x[i] > 2){
//     numbersGreaterThanTwo.push(x[i])
//   }
// }

// console.log(numbersGreaterThanTwo)

///// reduce  (snow ball) :::
// const x = [3,1,4,3,2] ;

// const sum = x.reduce((acc,num,i)=> acc+num ,0)
// console.log(sum)

///// with forEach :::
// const x = [3,1,4,3,2] ;
// let sum = 0   /// 3 /// 4 // 8

// x.forEach((ele)=> {
//   // sum = sum + ele  /// 0 = 0 + 3 /// 3 =  3 + 1 /// 4 = 4 + 4
//   sum+=ele
// })

// console.log(sum)

/////// exemple 2 ::

//  const x = [3,1,4,3,2]   ///  72

//  const multiple = x.reduce((acc, ele )=> ele*acc ,1)
//  console.log(multiple)

////// exemple 3 :::

// const y = [50,300,1000,200,2000,10] ;

///////// get max using reduce :::
///// acc = 50 /// 300 //1000 /// 1000 /// 2000 /// 2000
// const max = y.reduce((acc,ele,i)=> {
//   if (acc > ele ) {
//     return acc
//   } else return ele
// },y[0])

// console.log(max)

// const account = [200,450,-400,3000,-650,-130,70,1300] ; //// filter /// map /// reduce
// const euroToDinar = 3.3 ;
// //////// sum of deposit on tunisian dinar ...

// const result = account.filter((ele)=> ele > 0 )
// .map((ele)=> ele * euroToDinar)
// .reduce((acc,ele)=> ele + acc ,0)

// console.log(result)

///////////////////// find ////////////////////////

// const numbers = [10,20,30,40,20] ;

// const result = numbers.find((ele)=> {
//   console.log(ele)
//   return ele > 25
// })

// console.log(result)

// const dataBase = [
//   {
//     userName : "peter" ,
//     photo : "picture1" ,
//     coins : 100
//   } ,

//     {
//     userName : "mark" ,
//     photo : "picture2" ,
//     coins : 200
//   } ,

//     {
//     userName : "nicole" ,
//     photo : "picture3" ,
//     coins : 300
//   } ,

// ]

// const winner = dataBase.find((person)=> person.coins === 200)

// console.log(winner)
