import React from 'react'
import '../styles/TboxB.css'

class TboxB extends React.Component{
    assignClass = () => {
        
        switch (this.props.title) {
            
            case '':
                return 'Empty'
            break;

            case '7:00 Am':
                return 'Hour'
            break;

            case '8:00 Am':
                return 'Hour'
            break;
            
            case '9:00 Am':
                return 'Hour'
            break;

            case '10:00 Am':
                return 'Hour'
            break;

            case '11:00 Am':
                return 'Hour'
            break;

            case '12:00 Pm':
                return 'Hour'
            break;

            case '1:00 Pm':
                return 'Hour'
            break;

            case '2:00 Pm':
                return 'Hour'
            break;

            case '3:00 Pm':
                return 'Hour'
            break;

            case '4:00 Pm':
                return 'Hour'
            break;

            case '5:00 Pm':
                return 'Hour'
            break;

            case '6:00 Pm':
                return 'Hour'
            break;
            
            case 'Lunes':
                return 'Head'
            break;

            case 'Martes':
                return 'Head'
            break;

            case 'Miercoles':
                return 'Head'
            break;

            case 'Jueves':
                return 'Head'
            break;

            case 'Viernes':
                return 'Head'
            break;

            case 'Sabado':
                return 'Head'
            break;

            case 'Domingo':
                return 'Head'
            break;
            
            case "Hora/Dia":
                return 'HD'
            break;

            case 'Calculo':
                return 'CalculoB'
            break;
        
            case 'CBD':
                return 'CBDB'
            break;

            case 'Intro Prog':
                return 'IntroProgB'
            break;

            case 'Intro Ing':
                return 'IntroIngB'
            break;

            case 'Intro CAD':
                return 'IntroCADB'
            break;

            case 'Fund Tec Info':
                return 'FundTecInfoB'
            break;

            case 'CIB':
                return 'CIBB'
            break;

            default:
                break;
        }
    }

    render(){
        return(
            <div className={`Tbox__Container ${this.assignClass()}`}>
                <p>{this.props.title}</p>
            </div>
        )
    }
}


export default TboxB