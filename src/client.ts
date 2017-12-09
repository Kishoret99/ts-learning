import {
    Server,
    DataStore
} from './server';

export class Client {
    store: DataStore = {
        timestamp: 0,
        data: undefined
    }

    constructor(
        public server: Server
    ) {

    }

    synchronise(): void {
        let updatedStore = this.server.getData(this.store.timestamp);
        if (updatedStore) {
            this.store = updatedStore;
        }
    }
    
}