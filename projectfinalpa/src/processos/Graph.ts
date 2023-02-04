import Queue from './Queue';

export default class Graph {
    adjacencyMatrix: any;
    constructor() {
        this.adjacencyMatrix = {};
    }

    addNode(person: number){
        if(!this.adjacencyMatrix[person]){
            this.adjacencyMatrix[person] = {};
        }
    }

    addEdge(initialNode: any, finalNode: any){
        this.adjacencyMatrix[initialNode][finalNode] = 1;
    }

    BFS(startValue: any, currentFunction: any){
        let q = new Queue();
        let explored = new Set();

        q.enqueue(startValue);
        explored.add(startValue);

        while(!q.isEmpty()){
            let currentValue = q.dequeue();

            const shouldEnd = currentFunction(currentValue);
            if(shouldEnd) return;

            Object.keys(this.adjacencyMatrix[currentValue]).forEach((person) => {
                if(!explored.has(person)){
                    explored.add(person);
                    q.enqueue(person);
                };
            });
        }
    }
}