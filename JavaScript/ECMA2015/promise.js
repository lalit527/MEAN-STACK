function getDataFromBackend(){
  var promise = new Promise((resolve, reject) => {
    if(data){
      resolve("Data");
    }else{
      reject("Error");
    }
  });
  return promise;
}
//

function getDataFromBackend(){
  return new Promise((resolve, reject) => {
    if(data){
      resolve("Data");
    }else{
      reject("Error");
    }
  });
}

fetch();

function fetch(){
  console.log(4);
  getDataFromBackend().then((data) => {
    console.log(data);//Data
  }).catch((err) => {
    console.log(err); //Error
  });
  console.log(5);
}


function getDataFromBackend(){
  var promise = new Promise((resolve, reject) => {
    setTimeOut(function(){
      resolve("data");
    }, 1000);
  });
  return promise;
}

fetch();

function fetch(){
  console.log(4);
  getDataFromBackend().then((data) => {
    console.log(data);//Data
  }).catch((err) => {
    console.log(err); //Error
  });
  console.log(5);
}
