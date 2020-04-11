import React, { Component } from 'react'

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: '',
            bottomText: '',
            randomImage: 'http://i.imgflip.com/1bij.jpg',
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(response => {
            const { memes } = response.data
            console.log(memes)
            this.setState({ allMemeImgs: memes })
        })
    }

    handleChange(e) {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <form className='meme-form'>
                    <input 
                        type='text'
                        name='topText'
                        value={this.state.topText}
                        onChange={this.handleChange}
                        placeholder='Top Text'
                    />
                    <input 
                        type='text'
                        name='bottomText'
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                        placeholder='Bottom Text'
                    />                    
                    <button>Gen</button>
                </form>
                <div className='meme'>
                    <img src={this.state.randomImage} alt="" />
                    <h2 className='top'>{this.state.topText}</h2>
                    <h2 className='bottom'>{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator