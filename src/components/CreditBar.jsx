import React from 'react'
import SubjectCredits from '../components/SubjetCredits.jsx'

class CreditBar extends React.Component{

    constructor(){
        super()
        this.state = {
            showMe:  false,
            name: 'Mostrar Mas',
            id: 'hide'
        }
    }

    handleClick = () => {
        if (this.state.showMe == false) {
            this.setState({
            showMe: true,
            name: 'Mostrar Menos',
            id: 'show'
            })
        }
        else{
            this.setState({
            showMe: false,
            name: 'Mostrar Mas',
            id: 'hide'
            })
        }
        
    }

    btnName = () => {
        
    }

    render(){
        return(
            <div className="CreditData" >
                <button onClick={this.handleClick} className='btn'>{this.state.name}</button>
                <div className="CreditsContainer" id={this.state.id}>

                
                    <h1 className='StudentId'>Créditos de Jonathan Buitrago Roncancio</h1>
                    <SubjectCredits
                        name = {'Calculo Diferencial'}
                        creditos = '3'
                        presenciales = '5'
                        ti = '4'
                    />
                    <SubjectCredits
                        name = {'Competencias Basicas Digitales'}
                        creditos = '3'
                        presenciales = '3'
                        ti = '6'
                    />
                    <SubjectCredits
                        name = {'Competencias Idiomaticas Basicas'}
                        creditos = '2'
                        presenciales = '2'
                        ti = '4'
                    />
                    <SubjectCredits
                        name = {'Fundamentos de Tecnologias de la Informacion'}
                        creditos = '1'
                        presenciales = '2'
                        ti = '1'
                    />
                    <SubjectCredits
                        name = {'Introducion a la Ingenieria'}
                        creditos = '2'
                        presenciales = '2'
                        ti = '4'
                    />
                    <SubjectCredits
                        name = {'Introduccion a la Programacion'}
                        creditos = '3'
                        presenciales = '4'
                        ti = '5'
                    />
                    <SubjectCredits
                        name = {'Introduccion al CAD'}
                        creditos = '2'
                        presenciales = '3'
                        ti = '3'
                    />
                </div>
            </div>
        )
    }
}

export default CreditBar