const DATE_NUMERICAL_OFFSET = 1712000000000

export default class PriorityQueue {
    queue: {
        [priority: number]: any;
    };

    constructor(rawData: {priority: number, value: any}[]) {
        console.log("Creating...")
        this.queue = {}
        this.load(rawData)
    }

    load(rawData: {priority: number, value: any}[]) {
        for (let data of rawData) {
            this.queue[data.priority - DATE_NUMERICAL_OFFSET] = data.value
        }
    }

    add(priority: number, value: any) {
        this.queue[priority - DATE_NUMERICAL_OFFSET] = value
    }

    peek() {
        console.log(Object.keys(this.queue))

        // look at the first element without removing it
        for (let key in this.queue) {
            console.log(this.queue)
            let object = this.queue[Number(key)]
            console.log(object)
            return object
        }
    }

    pop() {
        // look at the first element and remove it
        for (let key in this.queue) {
            let object = this.queue[Number(key)]
            delete this.queue[Number(key)]
            return object
        }
    }
}