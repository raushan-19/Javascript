function getData (dataID, getNextdata){          
    setTimeout(() => {                     
        console.log("Data = ",dataID);   
        // resolve("success");      
            if(getNextdata){                
                    getNextdata();          
            };
    },2000);
};

// -> Callback Hell

// getData(1,() => {    
//       console.log("getting data 2.....");
//     getData(2, () => {
//           console.log("getting data 3.....");
//         getData(3, () => {          
//               console.log("getting data 4.....");
//             getData(4);
//         });
//     });      
// });

// -> Promise Chain

// getData(1).then( (res) =>{  

//   return getData(2);  
// }).then( (res) => {

//       return getData (3);   

// }).then((res) =>{    
    
//       console.log(res);  

// });

// -> Asyn-await

async function getAlldata() {       

    console.log("fetching data1...");   
    await getData(1);       
    console.log("fetching data2...");
    await getData(2);  
    console.log("fetching data3...");
    await getData(3);      
}

// -> IIFE function

// ( async function () {       

//     console.log("fetching data1...");   
//     await getData(1);       
//     console.log("fetching data2...");
//     await getData(2);  
//     console.log("fetching data3...");
//     await getData(3);      
// } ) () ;