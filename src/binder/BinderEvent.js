//
//  BinderEvent.js
//  Binder
//
//  Created by Anthony Ezeh on 17/10/2024.
//

class BinderEvent { //<EventType> : NSObject, BinderProducer

    constructor() {
        this.uuid = UUID.randomUUID()
        this.listeners = []
    }

    // overrides
    subscribe(observer) {
        if (this.listeners.indexOf(observer) == -1) {
            this.listeners.push(observer)
        }
    }

    unsubscribe(observer) {
        let index = this.listeners.indexOf(observer)
        if (index > -1) {
            this.listeners.splice(index, 1)
        }
    }

    // publics
    produce(event) {
        this.produceInline(event)
    }

    produceInline(event) {
        this.notifyListeners(event)
    }

    destroy() {
        this.listeners = []
    }

    // privates
    notifyListeners(value) {
        this.listeners.forEach(listener => {
            if (listener.onEvent) {
                listener.onEvent(value)
            }
        });
    }
}