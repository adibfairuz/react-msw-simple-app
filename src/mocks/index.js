if (typeof window !== "undefined") {
    const { worker } = require('./browser')
    worker.start()
}
// untuk SSR
// else{
//     const { server } = require('./server')
//     server.listen()
// }