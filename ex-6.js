const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  // Start coding here
//  return carCollection.includes(carBrand) !== true ? `${carCollection.push(carBrand)}new car collection is :  ${carCollection}.`:"toyota has already existed in the 1 position of car collection."; 
  if (carCollection.includes(carBrand) !== true){
    carCollection.push(carBrand)
    return "new car collection is : " + carCollection + ".";
  } else{
    return "toyota has already existed in the 1 position of car collection.";
  }
}
//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.