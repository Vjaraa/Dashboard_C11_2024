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