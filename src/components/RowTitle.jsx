import React from 'react'

class RowTitle extends React.Component{
    render(){
        return(
            <tr>
                    <th>{this.props.nameid0}</th>
                    <th>{this.props.nameid1}</th>
                    <th>{this.props.nameid2}</th>
                    <th>{this.props.nameid3}</th>
                    <th>{this.props.nameid4}</th>
                    <th>{this.props.nameid5}</th>
                    <th>{this.props.nameid6}</th>
                    <th>{this.props.nameid7}</th>
            </tr>
        )
    }
}

export default RowTitle