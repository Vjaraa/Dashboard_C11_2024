/* Car list API call
*/

const apiUrlCars = 'https://parallelum.com.br/fipe/api/v1/carros/marcas';

async function fetchBrandsList() {
  try {
    const response = await fetch(apiUrlCars);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

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
  } catch (error) {
    console.error('Hubo un problema con la petición fetch:', error);
  }
}

fetchBrandsList();



/* Models list API call
*/
  
const apiUrlModels = 'https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos';

async function fetchModelsList() {
  try {
    const response = await fetch(apiUrlModels);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    const carsModelQuantity = document.getElementById('models_quantity');

    const totalModels = data.modelos.length;

    console.log("total models: " + totalModels);

    carsModelQuantity.textContent = totalModels;
  } catch (error) {
    console.error('Hubo un problema con la petición fetch:', error);
  }
}

fetchModelsList();




/* Car detail API call
*/
  
const apiUrlDetail = 'https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos/2364/anos/2011-1';

async function fetchCarDetail() {
  try {
    const response = await fetch(apiUrlDetail);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    const carPrice = document.getElementById('price_best_selling_car');
    const carModelName = document.getElementById('model_name_car');

    carPrice.textContent = data.Valor;
    carModelName.textContent = data.Modelo;
  } catch (error) {
    console.error('Hubo un problema con la petición fetch:', error);
  }
}

fetchCarDetail();


  /* Models years list API call
*/
  
const apiUrlCarsYearsModel = 'https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos/2364/anos';

async function fetchModelsByYear() {
  try {
    const response = await fetch(apiUrlCarsYearsModel);
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();

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
  } catch (error) {
    console.error('Hubo un problema con la petición fetch:', error);
  }
}

fetchModelsByYear();





/* First Car detail API call
*/
  
const apiUrlDetailBora = 'https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos/2364/anos/2011-1';

async function fetchDetailsFirstCar() {
  try {
    const response = await fetch(apiUrlDetailBora);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    const modelFirstCar = document.getElementById('detail_first_car');
    const priceFirstCar = document.getElementById('price_first_car');
    const yearFirstCar = document.getElementById('year_first_car');
    const brandFirstCar = document.getElementById('brand_first_car');

    modelFirstCar.textContent = data.Modelo;
    priceFirstCar.textContent = data.Valor;
    yearFirstCar.textContent = data.AnoModelo;
    brandFirstCar.textContent = data.Marca;

  } catch (error) {
    console.error('Hubo un problema con la petición fetch:', error);
  }
}

fetchDetailsFirstCar();


  /* Second Car detail API call
*/
  
const apiUrlDetailCorolla = 'https://parallelum.com.br/fipe/api/v1/carros/marcas/56/modelos/5042/anos/2017-1';

async function fetchDetailsSecondCar() {
  try {
    const response = await fetch(apiUrlDetailCorolla);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    const modelSecondCar = document.getElementById('detail_second_car');
    const priceSecondCar = document.getElementById('price_second_car');
    const yearSecondCar = document.getElementById('year_second_car');
    const brandSecondCar = document.getElementById('brand_second_car');

    modelSecondCar.textContent = data.Modelo;
    priceSecondCar.textContent = data.Valor;
    yearSecondCar.textContent = data.AnoModelo;
    brandSecondCar.textContent = data.Marca;
  } catch (error) {
    console.error('Hubo un problema con la petición fetch:', error);
  }
}

fetchDetailsSecondCar();



   /* Third Car detail API call
*/
  
const apiUrlDetailSwift = 'https://parallelum.com.br/fipe/api/v1/carros/marcas/55/modelos/6931/anos/2015-1';

async function fetchDetailsThirdCar() {
  try {
    const response = await fetch(apiUrlDetailSwift);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    const modelThirdCar = document.getElementById('detail_third_car');
    const priceThirdCar = document.getElementById('price_third_car');
    const yearThirdCar = document.getElementById('year_third_car');
    const brandThirdCar = document.getElementById('brand_third_car');

    modelThirdCar.textContent = data.Modelo;
    priceThirdCar.textContent = data.Valor;
    yearThirdCar.textContent = data.AnoModelo;
    brandThirdCar.textContent = data.Marca;
  } catch (error) {
    console.error('Hubo un problema con la petición fetch:', error);
  }
}

fetchDetailsThirdCar();


  
  /* Fourth Car detail API call
*/
  
const apiUrlDetailPorsche = 'https://parallelum.com.br/fipe/api/v1/carros/marcas/47/modelos/9293/anos/2022-1';

async function fetchDetailsFourthCar() {
  try {
    const response = await fetch(apiUrlDetailPorsche);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    const modelFourthCar = document.getElementById('detail_fourth_car');
    const priceFourthCar = document.getElementById('price_fourth_car');
    const yearFourthCar = document.getElementById('year_fourth_car');
    const brandFourthCar = document.getElementById('brand_fourth_car');

    modelFourthCar.textContent = data.Modelo;
    priceFourthCar.textContent = data.Valor;
    yearFourthCar.textContent = data.AnoModelo;
    brandFourthCar.textContent = data.Marca;
  } catch (error) {
    console.error('Hubo un problema con la petición fetch:', error);
  }
}

fetchDetailsFourthCar();



    /* Fifth Car detail API call
*/
  
const apiUrlDetailTrailblazer = 'https://parallelum.com.br/fipe/api/v1/carros/marcas/23/modelos/6268/anos/2019-3';

async function fetchDetailsFifthCar() {
  try {
    const response = await fetch(apiUrlDetailTrailblazer);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    const modelFifthCar = document.getElementById('detail_fifth_car');
    const priceFifthCar = document.getElementById('price_fifth_car');
    const yearFifthCar = document.getElementById('year_fifth_car');
    const brandFifthCar = document.getElementById('brand_fifth_car');

    modelFifthCar.textContent = data.Modelo;
    priceFifthCar.textContent = data.Valor;
    yearFifthCar.textContent = data.AnoModelo;
    brandFifthCar.textContent = data.Marca;
  } catch (error) {
    console.error('Hubo un problema con la petición fetch:', error);
  }
}

fetchDetailsFifthCar();


    /* Sixth Car detail API call
*/
  
const apiUrlDetailElantra = 'https://parallelum.com.br/fipe/api/v1/carros/marcas/26/modelos/7757/anos/2018-1';

async function fetchData() {
  try {
    const response = await fetch(apiUrlDetailElantra);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    const modelSixthCar = document.getElementById('detail_sixth_car');
    const priceSixthCar = document.getElementById('price_sixth_car');
    const yearSixthCar = document.getElementById('year_sixth_car');
    const brandSixthCar = document.getElementById('brand_sixth_car');

    modelSixthCar.textContent = data.Modelo;
    priceSixthCar.textContent = data.Valor;
    yearSixthCar.textContent = data.AnoModelo;
    brandSixthCar.textContent = data.Marca;
  } catch (error) {
    console.error('Hubo un problema con la petición fetch:', error);
  }
}

fetchData();
  