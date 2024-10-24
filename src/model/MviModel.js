//
//  MviModel.js
//  Binder
//
//  Created by Anthony Ezeh on 17/10/2024.
//

class MviModel {

    constructor() {
        this.events = new BinderEvent()
    }

    destroy() {        
    }

    produce(event) {
        this.events.produce(event)
    }

    consume(event) {
        consumeEvent(event)
    }

    consumeEvent(event) {
        
    }

}
