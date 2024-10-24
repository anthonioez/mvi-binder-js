//
//  MviEvent.swift
//  Binder
//
//  Created by Anthony Ezeh on 17/10/2024.
//

class MviEvent {

    constructor(args) {
        this.state = args ? args.state : null
        this.effect = args ? args.effect : null
    }

    withState(state) {
        this.state = state
        return this
    }

}
