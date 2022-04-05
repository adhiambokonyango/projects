
const Models = require('./Models');

module.exports = class Controller {

    // insert projects
    static async insertProject(recordObject){
        let response = await Models.insert(recordObject)
        return response;
    }

}