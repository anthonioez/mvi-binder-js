//
//  BinderConnection.js
//  Binder
//
//  Created by Anthony Ezeh on 07/07/2022.
//

class BinderConnection { //: NSObject, BinderObserver

    static using(transformer) {
        return new BinderConnection(null, null, transformer, null)
    }

    static tying(interceptor) {
        return new BinderConnection(null, null, null, interceptor)
    }

    static intercepted() {
        return new BinderConnection().withIntercept()
    }

    static interceptUsing(transformer) {
        return new BinderConnection(null, null, transformer, null).withIntercept()
    }

    constructor(from, to, using, tying) {
        this.producer = from
        this.consumer = to
        this.transformer = using
        this.interceptor = tying
    }


    from(producer) {
        this.producer = producer
        return this
    }

    to(consumer) {
        this.consumer = consumer
        return this
    }

    onEvent(event) {
        if (!this.consumer) {
            return
        }

        let interceptedEvent = this.intercepted ? BinderMiddleware.shared.intercept(this.name, event) : event
        if (this.transformer) {
            this.consumer.consume(this.transformer.transform(interceptedEvent))
        } else {
            this.consumer?.consume(interceptedEvent)
        }
    }

    withIntercept() {
        this.intercepted = true
        return this
    }

    connect() {
        if (this.producer) {
            if (this.producer.subscribe) {
                this.producer.subscribe(this)
            } else if (this.producer.events && this.producer.events.subscribe) {
                this.producer.events.subscribe(this)
            }
        }
    }

    disconnect() {
        if (this.producer) {
            if (this.producer.subscribe) {
                this.producer.unsubscribe(this)
            } else if (this.producer.events && this.producer.events.unsubscribe) {
                this.producer.events.unsubscribe(this)
            }
        }
    }

    destroy() {
        this.producer = null
        this.consumer = null
        this.transformer = null
        this.interceptor = null
    }

}