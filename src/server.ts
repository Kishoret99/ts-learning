export class Server {
    store: DataStore = {
        timestamp: 0,
        data: '',
    }

    synchronise(clientDatastore: DataStore): DataStore {
        if(clientDatastore.timestamp > this.store.timestamp) {
            this.store = clientDatastore;
            return undefined;
        } else if(clientDatastore.timestamp < this.store.timestamp) {
            return this.store;
        } else {
            return undefined;
        }

    }

}

export interface DataStore {
    timestamp: number;
    data: string;
}