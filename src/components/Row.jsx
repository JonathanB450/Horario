import React from 'react'

class Row extends React.Component{
    render(){
        const Tipo = `t${this.props.type}`
        return(
            <tr>
                    <Tipo>{this.props.nameid0}</Tipo>
                    <td>{this.props.nameid1}</td>
                    <td>{this.props.nameid2}</td>
                    <td>{this.props.nameid3}</td>
                    <td>{this.props.nameid4}</td>
                    <td>{this.props.nameid5}</td>
                    <td>{this.props.nameid6}</td>
                    <td>{this.props.nameid7}</td>
            </tr>
        )
    }
}

export default Row