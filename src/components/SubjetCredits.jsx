import React from 'react'
import '../styles/SubjectCredits.css'

class SubjectCredits extends React.Component{
    state = {}

    TotalHours = () => {
        
        return this.props.creditos * 3
    }

    getColor = () => {
        switch (this.props.name) {
            
            case 'Calculo Diferencial':
                return 'Calculo1 '
            break;
        
            case 'Competencias Basicas Digitales':
                return 'CBD1'
            break;

            case 'Introduccion a la Programacion':
                return 'IntroProg1'
            break;

            case 'Introducion a la Ingenieria':
                return 'IntroIng1'
            break;

            case 'Introduccion al CAD':
                return 'IntroCAD1'
            break;

            case 'Fundamentos de Tecnologias de la Informacion':
                return 'FundTecInfo1'
            break;

            case 'Competencias Idiomaticas Basicas':
                return 'CIB1'
            break;
        }
    }

    getColor2 = () => {
        switch (this.props.name) {
            
            case 'Calculo Diferencial':
                return 'Calculo2 '
            break;
        
            case 'Competencias Basicas Digitales':
                return 'CBD2'
            break;

            case 'Introduccion a la Programacion':
                return 'IntroProg2'
            break;

            case 'Introducion a la Ingenieria':
                return 'IntroIng2'
            break;

            case 'Introduccion al CAD':
                return 'IntroCAD2'
            break;

            case 'Fundamentos de Tecnologias de la Informacion':
                return 'FundTecInfo2'
            break;

            case 'Competencias Idiomaticas Basicas':
                return 'CIB2'
            break;
        }
    }


    render(){
        return(
            <div className="CreditosMain">
                <div className={`Scolor ${this.getColor()}` }></div>
                <div className="Csubject">
                    <p className='text'>{this.props.name}</p>
                    <p className='text'>Creditos: {this.props.creditos}</p>
                    <p className='text'>Horas Totales: {this.TotalHours()}</p>
                    <p className='text'>Horas Presenciales: {this.props.presenciales}</p>
                    <p className='text'>Horas Trabajo Independiente: {this.props.ti}</p>
                </div>
                <div className={`Scolor ${this.getColor2()}` }></div>
            </div>
            
        )
    }
}

export default SubjectCredits