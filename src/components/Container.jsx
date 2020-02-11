import React from 'react'
import Table from '../components/Table.jsx'
import Tbox from '../components/Tbox.jsx'
import CreditBar from '../components/CreditBar.jsx'
import '../styles/Container.css'

class Container extends React.Component{

    show = () => {
        document.getElementsByClassName('CreditData')
    }
    hide = () => {
        document.getElementsByClassName('CreditData')
    }
    
    

    render(){
        return(
            <div className='Main'>
                <Table/>
               
                <CreditBar/>
            </div>
        )
    }
}

export default Container