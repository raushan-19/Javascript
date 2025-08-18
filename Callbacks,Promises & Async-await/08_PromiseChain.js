function getData (dataID, getNextdata){ 
  return new Promise((resolve, reject) => {         
    setTimeout(() => {                      
        console.log("Data = ",dataID);         
            if(getNextdata){                
                    getNextdata();        
            };
    },2000);
    });
};

// // -> Callback Hell

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

getData(1).then( () =>{

})