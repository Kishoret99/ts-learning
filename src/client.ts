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
        let updatedStore = this.server.synchronise(this.store);
        if (updatedStore) {
            this.store = updatedStore;
        }
    }

    update(data: string): void {
        this.store.data = data;
        this.store.timestamp = Date.now();
    }
    
}