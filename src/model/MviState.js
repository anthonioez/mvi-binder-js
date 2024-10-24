//
//  MviState.swift
//  Binder
//
//  Created by Anthony Ezeh on 17/10/2024.
//

class MviState {
    
    copy(build) {
        var builder = this
        if (typeof build == 'function') {
            build(builder)
        }
        return builder
    }
    
}
