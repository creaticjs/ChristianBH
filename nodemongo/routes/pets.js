const controllerPets = require('../controllers/pets');

module.exports = (app) =>{

    app.get('/pets', controllerPets.allPets);
    app.post('/createpet', controllerPets.createPets);
    app.post('/updatepet', controllerPets.updatePets);
    app.post('/deletepet', controllerPets.deletePet);

}