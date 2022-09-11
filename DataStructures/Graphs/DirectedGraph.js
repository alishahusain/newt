// give an example of a directed graph
let graph = {
    a: { b: 7, c: 8 },
    b: { a: 7, f: 2 },
    c: { a: 8, f: 6, g: 4 },
    d: { f: 8 },
    e: { h: 1 },
    f: { b: 2, c: 6, d: 8, g: 9, h: 3 },
    g: { c: 4, f: 9 },
    h: { e: 1, f: 3 }
    };
//let result = Dijkstra(graph, 'a');


