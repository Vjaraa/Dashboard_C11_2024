/* Car list API call
*/

const apiUrlcars = 'https://parallelum.com.br/fipe/api/v1/carros/marcas';

fetch(apiUrlcars)
  .then(response => {

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {

    let jsonObjectsCount = 0;
    const carsQuantity = document.getElementById('cars_quantity');

    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        
        if (typeof data[key] === 'object' && !Array.isArray(data[key])) {
          jsonObjectsCount++;
        }
      }
    }

    console.log('Número de objetos JSON en la respuesta:', jsonObjectsCount);

    carsQuantity.textContent = jsonObjectsCount;

  })
  .catch(error => {
    console.error('Hubo un problema con la petición fetch:', error);
  });



/* Models list API call
*/
  
const apiUrlmodels = 'https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos';

fetch(apiUrlmodels)
  .then(response => {

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {

    const carsModelQuantity = document.getElementById('models_quantity');

    var json = JSON.parse(JSON.stringify(data));

    const totalModels = json.modelos.length;

    console.log("total models: "+ totalModels)

    carsModelQuantity.textContent = totalModels;

  })
  .catch(error => {
    console.error('Hubo un problema con la petición fetch:', error);
  });




/* Car detail API call
*/
  
const apiUrlDetail = 'https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos/2364/anos/2011-1';

fetch(apiUrlDetail)
  .then(response => {

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {

    const carPrice = document.getElementById('price_best_selling_car');
    const carModelName = document.getElementById('model_name_car');

    var json = JSON.parse(JSON.stringify(data));

    carPrice.textContent = json.Valor;
    carModelName.textContent = json.Modelo;

  })
  .catch(error => {
    console.error('Hubo un problema con la petición fetch:', error);
  });


  /* Models years list API call
*/
  
const apiUrlcarsYearsModel = 'https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos/2364/anos';

fetch(apiUrlcarsYearsModel)
  .then(response => {

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    return response.json();
  })
  .then(data => {

    let jsonObjectsCount = 0;
    const carsQuantityPerYear = document.getElementById('model_per_year');

    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        
        if (typeof data[key] === 'object' && !Array.isArray(data[key])) {
          jsonObjectsCount++;
        }
      }
    }

    console.log('Número de objetos JSON en la respuesta de AÑOS:', jsonObjectsCount);

    carsQuantityPerYear.textContent = jsonObjectsCount;

  })
  .catch(error => {
    console.error('Hubo un problema con la petición fetch:', error);
  });





/* First Car detail API call
*/
  
const apiUrlDetailBora = 'https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos/2364/anos/2011-1';

fetch(apiUrlDetailBora)
  .then(response => {

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {

    const modelFirstCar = document.getElementById('detail_first_car');
    const priceFirstCar = document.getElementById('price_first_car');
    const yearFirstCar = document.getElementById('year_first_car');
    const brandFirstCar = document.getElementById('brand_first_car');

    var json = JSON.parse(JSON.stringify(data));

    modelFirstCar.textContent = json.Modelo;
    priceFirstCar.textContent = json.Valor;
    yearFirstCar.textContent = json.AnoModelo;
    brandFirstCar.textContent = json.Marca;

  })
  .catch(error => {
    console.error('Hubo un problema con la petición fetch:', error);
  });


  /* Second Car detail API call
*/
  
const apiUrlDetailCorolla = 'https://parallelum.com.br/fipe/api/v1/carros/marcas/56/modelos/5042/anos/2017-1';

fetch(apiUrlDetailCorolla)
  .then(response => {

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {

    const modelSecondCar = document.getElementById('detail_second_car');
    const priceSecondCar = document.getElementById('price_second_car');
    const yearSecondCar = document.getElementById('year_second_car');
    const brandSecondCar = document.getElementById('brand_second_car');

    var json = JSON.parse(JSON.stringify(data));

    modelSecondCar.textContent = json.Modelo;
    priceSecondCar.textContent = json.Valor;
    yearSecondCar.textContent = json.AnoModelo;
    brandSecondCar.textContent = json.Marca;

  })
  .catch(error => {
    console.error('Hubo un problema con la petición fetch:', error);
  });



   /* Third Car detail API call
*/
  
const apiUrlDetailSwift = 'https://parallelum.com.br/fipe/api/v1/carros/marcas/55/modelos/6931/anos/2015-1';

fetch(apiUrlDetailSwift)
  .then(response => {

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {

    const modelThirdCar = document.getElementById('detail_third_car');
    const priceThirdCar = document.getElementById('price_third_car');
    const yearThirdCar = document.getElementById('year_third_car');
    const brandThirdCar = document.getElementById('brand_third_car');

    var json = JSON.parse(JSON.stringify(data));

    modelThirdCar.textContent = json.Modelo;
    priceThirdCar.textContent = json.Valor;
    yearThirdCar.textContent = json.AnoModelo;
    brandThirdCar.textContent = json.Marca;

  })
  .catch(error => {
    console.error('Hubo un problema con la petición fetch:', error);
  });


  
  /* Fourth Car detail API call
*/
  
const apiUrlDetailPorsche = 'https://parallelum.com.br/fipe/api/v1/carros/marcas/47/modelos/9293/anos/2022-1';

fetch(apiUrlDetailPorsche)
  .then(response => {

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {

    const modelFourthCar = document.getElementById('detail_fourth_car');
    const priceFourthCar = document.getElementById('price_fourth_car');
    const yearFourthCar = document.getElementById('year_fourth_car');
    const brandFourthCar = document.getElementById('brand_fourth_car');

    var json = JSON.parse(JSON.stringify(data));

    modelFourthCar.textContent = json.Modelo;
    priceFourthCar.textContent = json.Valor;
    yearFourthCar.textContent = json.AnoModelo;
    brandFourthCar.textContent = json.Marca;

  })
  .catch(error => {
    console.error('Hubo un problema con la petición fetch:', error);
  });



    /* Fifth Car detail API call
*/
  
const apiUrlDetailTrailblazer = 'https://parallelum.com.br/fipe/api/v1/carros/marcas/23/modelos/6268/anos/2019-3';

fetch(apiUrlDetailTrailblazer)
  .then(response => {

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {

    const modelFifthCar = document.getElementById('detail_fifth_car');
    const priceFifthCar = document.getElementById('price_fifth_car');
    const yearFifthCar = document.getElementById('year_fifth_car');
    const brandFifthCar = document.getElementById('brand_fifth_car');

    var json = JSON.parse(JSON.stringify(data));

    modelFifthCar.textContent = json.Modelo;
    priceFifthCar.textContent = json.Valor;
    yearFifthCar.textContent = json.AnoModelo;
    brandFifthCar.textContent = json.Marca;

  })
  .catch(error => {
    console.error('Hubo un problema con la petición fetch:', error);
  });


    /* Sixth Car detail API call
*/
  
const apiUrlDetailElantra = 'https://parallelum.com.br/fipe/api/v1/carros/marcas/26/modelos/7757/anos/2018-1';

fetch(apiUrlDetailElantra)
  .then(response => {

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {

    const modelSixthCar = document.getElementById('detail_sixth_car');
    const priceSixthCar = document.getElementById('price_sixth_car');
    const yearSixthCar = document.getElementById('year_sixth_car');
    const brandSixthCar = document.getElementById('brand_sixth_car');

    var json = JSON.parse(JSON.stringify(data));

    modelSixthCar.textContent = json.Modelo;
    priceSixthCar.textContent = json.Valor;
    yearSixthCar.textContent = json.AnoModelo;
    brandSixthCar.textContent = json.Marca;

  })
  .catch(error => {
    console.error('Hubo un problema con la petición fetch:', error);
  });
  