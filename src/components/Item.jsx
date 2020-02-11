import React from 'react'
import calculadora from '../images/calculadora.svg'
import '../styles/Item.css'

class Item extends React.Component{
    bk__color = () => {
        switch (this.props.subjectName) {
            case 'Calculo':
                return 'red1'
                break;
            
            case 'CBD':
                return 'red2'
            break;

            case 'Intro Programación':
                return 'red3'
            break;

            case 'Intro Ingenieria':
                return 'red4'
            break;

            default:
                break;
        }
    }

    bk__img = () => {
        switch (this.props.subjectName) {
            case 'Calculo':
                return {calculadora}
                break;
        
            default:
                break;
        }
    }

    handleClick =(e) => {
        e.preventDefault()
    }

    render(){
        return(
            <div className="item_container">
                <div className = {this.bk__color()}>
                <h2 >{this.props.subjectName}</h2>
                </div>
            </div>
            
            
        )
    }
}

export default Item