import React, { Component } from 'react'

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: '',
            bottomText: '',
            randomImage: 'http://i.imgflip.com/1bij.jpg'
        }
    }

    render() {
        return (
            <h1>Hola!</h1>
        )
    }
}

export default MemeGenerator