import React from 'react'
import Row from '../components/Row.jsx'
import RowTitle from '../components/RowTitle.jsx'
import Item from '../components/Item.jsx'
import Tbox from '../components/Tbox.jsx'
import TboxB from '../components/TboxB.jsx'
import '../styles/Table.css'

class Table extends React.Component{
    state = {
        calculo: 0,
        cbd: 0,
        introPro: 0,
        introIng: 0,
        introCAD: 0,
        fundTI: 0,
        cib: 0
    }

    count = (subject) => {
        switch (subject) {
            case 'Calculo':
                this.state.calculo++
                break;
            case 'CBD':
                this.state.cbd++
                break;
            case 'Intro Prog':
                this.state.introPro++
                break;
            case 'Intro Ing':
                this.state.introIng++
                break;
            case 'Intro CAD':
                this.state.introCAD++
                break;
            case 'Fund Tec Info':
                this.state.fundTI++
                break;
            case 'CIB':
                this.state.cib++
                break;
            
            default:
                break;
        }
    }

    final = () => {
    
    }

    render(){
        const calculo = 'Calculo'
        const cbd = 'CBD'
        const introPro = 'Intro Prog'
        const introIng = 'Intro Ing'
        const introCAD = 'Intro CAD'
        const FundTI = 'Fund Tec Info'
        const cib = 'CIB'
        const final = 'final'

        
        return(
            <div className="Main__Container">
                {/*HD*/}  <div className="Box">
                    <Tbox
                        title='Hora/Dia'
                    />
                    <Tbox
                        title='Lunes'
                    />
                    <Tbox
                        title='Martes'
                    />
                    <Tbox
                        title='Miercoles'
                    />
                    <Tbox
                        title='Jueves'
                    />
                    <Tbox
                        title='Viernes'
                    />
                    <Tbox
                        title='Sabado'
                    />
                    <Tbox
                        title='Domingo'
                    />
                </div>
                {/*7*/}  <div className="Box">
                    <Tbox
                        title='7:00 Am'
                    />
                    <Tbox
                        title='a'
                    />
                    <Tbox
                        title='a'
                    />
                    <Tbox
                        title='a'
                    />
                    <Tbox
                        title={FundTI}
                        count={this.count(FundTI)}
                    />
                    <Tbox
                        title='a'
                    />
                    <Tbox
                        title='a'
                    />
                    <Tbox
                        title='a'
                    />
                </div>
                {/*8*/}  <div className="Box">
                    <Tbox
                        title='8:00 Am'
                    />
                    <Tbox
                        title='a'
                    />
                    <Tbox
                        title={introIng}
                        count={this.count(introIng)}
                    />
                    <Tbox
                        title='a'
                    />
                    <Tbox
                        title={FundTI}
                        count={this.count(FundTI)}
                    />
                    <Tbox
                        title='a'
                    />
                    <TboxB
                        title='Fund Tec Info'
                    />
                    <Tbox
                        title='a'
                    />
                </div>
                {/*9*/}  <div className="Box">
                    <Tbox
                        title='9:00 Am'
                    />
                    <Tbox
                        title = {calculo}
                        count = {this.count(calculo)}
                    />
                    <Tbox
                        title={introIng}
                        count={this.count(introIng)}
                    />
                    <Tbox
                        title='a'
                    />
                    <Tbox
                        title={introPro}
                        count={this.count(introPro)}
                    />
                    <TboxB
                        title='Intro Ing'
                    />
                    <TboxB
                        title='Intro CAD'
                    />
                    <Tbox
                        title='a'
                    />
                </div>
                {/*10*/}  <div className="Box">
                    <Tbox
                        title='10:00 Am'
                    />
                    <Tbox
                        title={calculo}
                        count={this.count(calculo)}
                    />
                    <TboxB
                        title='Intro Ing'
                    />
                    <TboxB
                        title='Intro Ing'
                    />
                    <Tbox
                        title={introPro}
                        count={this.count(introPro)}
                    />
                    <Tbox
                        title={calculo}
                        count={this.count(calculo)}
                    />
                    <TboxB
                        title='Intro CAD'
                    />
                    <Tbox
                        title='a'
                    />
                </div>
                {/*11*/}  <div className="Box">
                    <Tbox
                        title='11:00 Am'
                    />
                    <TboxB
                        title='Calculo'
                    />
                    <Tbox
                        title='a'
                    />
                    <TboxB
                        title='Calculo'
                    />
                    <Tbox
                        title={cbd}
                        count={this.count(cbd)}
                    />
                    <TboxB
                        title='CIB'
                    />
                    <TboxB
                        title='CIB'
                    />
                    <Tbox
                        title='a'
                    />
                </div>
                {/*12*/}  <div className="Box">
                    <Tbox
                        title='12:00 Pm'
                    />
                    <TboxB
                        title='Calculo'
                    />
                    <TboxB
                        title='Intro CAD'
                    />
                    <Tbox
                        title={calculo}
                        count={this.count(calculo)}
                    />
                    <Tbox
                        title={cbd}
                        count={this.count(cbd)}
                    />
                    <TboxB
                        title='Intro Prog'
                    />
                    <TboxB
                        title='CIB'
                    />
                    <Tbox
                        title='a'
                    />
                </div>
                {/*1*/}  <div className="Box">
                    <Tbox
                        title='1:00 Pm'
                    />
                    <Tbox
                        title='a'
                    />
                    <Tbox
                        title={introCAD}
                        count={this.count(introCAD)}
                    />
                    <Tbox
                        title={calculo}
                        count={this.count(calculo)}
                    />
                    <TboxB
                        title='Intro Ing'
                    />
                    <TboxB
                        title='Intro Prog'
                    />
                    <Tbox
                        title='a'
                    />
                    <Tbox
                        title='a'
                    />
                </div>
                {/*2*/}  <div className="Box">
                    <Tbox
                        title='2:00 Pm'
                    />
                    <Tbox
                        title={cbd}
                        count={this.count(cbd)}
                    />
                    <Tbox
                        title={introCAD}
                        count={this.count(introCAD)}
                    />
                    <TboxB
                        title='Calculo'
                    />
                    <Tbox
                        title='a'
                    />
                    <TboxB
                        title='Intro Prog'
                    />
                    <Tbox
                        title='a'
                    />
                    <TboxB
                        title='CBD'
                    />
                </div>
                {/*3*/}  <div className="Box">
                    <Tbox
                        title='3:00 Pm'
                    />
                    <Tbox
                        title={introPro}
                        count={this.count(introPro)}
                    />
                    <Tbox
                        title={introCAD}
                        count={this.count(introCAD)}
                    />
                    <Tbox
                        title='a'
                    />
                    <Tbox
                        title={cib}
                        count={this.count(cib)}
                    />
                    <TboxB
                        title='Intro Prog'
                    />
                    <Tbox
                        title='a'
                    />
                    <TboxB
                        title='CBD'
                    />
                </div>
                {/*4*/}  <div className="Box">
                    <Tbox
                        title='4:00 Pm'
                    />
                    <Tbox
                        title={introPro}
                        count={this.count(introPro)}
                    />
                    <Tbox
                        title='a'
                    />
                    <Tbox
                        title='a'
                    />
                    <Tbox
                        title={cib}
                        count={this.count(cib)}
                    />
                    <TboxB
                        title='Intro Prog'
                    />
                    <Tbox
                        title='a'
                    />
                    <TboxB
                        title='CBD'
                    />
                </div>
                {/*5*/}  <div className="Box">
                    <Tbox
                        title='5:00 Pm'
                    />
                    <Tbox
                        title='a'
                    />
                    <TboxB
                        title='CBD'
                    />
                    <TboxB
                        title='CBD'
                    />
                    <Tbox
                        title='a'
                    />
                    <Tbox
                        title='a'
                    />
                    <TboxB
                        title='CIB'
                    />
                    <TboxB
                        title='CBD'
                    />
                </div>
                {/*6*/}  <div className="Box">
                    <Tbox
                        title='6:00 Pm'
                    />
                    <Tbox
                        title='a'
                    />
                    <Tbox
                        title='a'
                    />
                    <Tbox
                        title='a'
                    />
                    <Tbox
                        title='a'
                    />
                    <Tbox
                        title='a'
                    />
                    <Tbox
                        title='a'
                    />
                    <Tbox
                        title='a'
                        final = {this.final()}
                    />
                </div>
            </div>
        )
    }

}

export default Table