import React, { Component } from 'react';
import { connect } from 'react-redux'

class Home extends Component{

    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <div className ="card" key={item.id}>
                    <img src={item.img} alt={item.title}/>
                    <span className ="home-title">{item.title}</span>
                    <span to="/" className="btn-floating"<i i className="book car">Book car></i></span>
                </div>
            )
        }

        return(
            <div className="container">
                <h3>rent what you want.</h3>
            </div>
        )
    }
}
export default Home