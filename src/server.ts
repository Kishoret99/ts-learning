export class Server {
    store: Datastore = {
        timestamp: 0,
        data: '',
    }

    getData(clientTimestamp: number): Datastore {
        if(clientTimestamp < this.store.timestamp) {
            return this.store;
        }
        else {
            return undefined;
        }

    }

}

export interface Datastore {
    timestamp: number;
    data: string;
}