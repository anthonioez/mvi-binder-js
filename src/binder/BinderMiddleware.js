//
//  BinderMiddleware.js
//  Binder
//
//  Created by Anthony Ezeh on 17/10/2024.
//

class BinderMiddleware {

    static shared = new BinderMiddleware()

    constructor() {
        this.middlewares = []
    }

    registerMiddleware(middleware) {
        middlewares.push(middleware)
    }

    intercept(name, event) {
        var interceptedEvent = event
        this.middlewares.forEach(middleware => {
            let newEvent = middleware.intercept(name, interceptedEvent)
            if (newEvent) {
                interceptedEvent = newEvent
            }
        });
        return interceptedEvent
    }

}
