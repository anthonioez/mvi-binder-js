//
//  Binder.js
//  Binder
//
//  Created by Anthony Ezeh on 17/10/2024.
//

class Binder {

    constructor(named) {
        this.bindings = []
        this.name = named
    }

    bind(from, to, connection) {        
        if (from && to) {
            let binding = connection ? connection : new BinderConnection(from, to)
            binding.producer = from
            binding.consumer = to
            binding.connect()
            this.bindings.push(binding)
        }
    }

    bindConnection(connection) {
        connection.name = this.name
        connection.connect()
        this.bindings.push(connection)
    }

    destroy() {
        this.bindings.forEach(binding => {
            binding.disconnect()
            binding.destroy()            
        });

        this.bindings = []
    }

}


