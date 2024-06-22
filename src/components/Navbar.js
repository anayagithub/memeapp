import React, { Component } from 'react'


export class Navbar extends Component {
  render() {
    return (
      < div className=' px-6 py-6 bg-gradient-to-r from-fuchsia-900 to-fuchsia-500 flex items-center justify-start'>
        
            <img className='h-12 'src='./logo.png' alt='logo'/>
            <p className='text-2xl font-bold text-white mx-3'>Meme Generator</p>
        
        
      </div>
    )
  }
}

export default Navbar