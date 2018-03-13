const MongoLIB = require('mongodb').MongoClient;
const oAsserter = require('assert');

export default class MongoCRUDClient {

    _oDBClient = null;
    _sCollection = null;

    constructor(sURL, sDBName, sCollection) {
        MongoLIB.connect(sURL, (oError, oClient) => {
            if(oAsserter.equal(null, oError)) {
                this._oDBClient = oClient.db(sDBName);
            } else {
                throw 'CONNECTION FAILED';
            }
        })
    }

    create() {

    }

    find() {

    }

    findOne() {

    }

    findBy() {

    }

    findOneBy() {

    }

    update() {

    }

    delete() {

    }

    tearDown() {
        if(this._oDBClient !== null) {
            this._oDBClient.close();
        }            
    }
}