import React, { Component } from 'react';
import axios from 'axios'


class UpDateUser extends Component {
    constructor(props) {
        super()
        this.state = {
            clientName: "",
            ownerList: {},
            ifInput: 0,
            eamiltypeList: {}

        }
    }




    ownerList = () => {
        let ownerList = {}
        this.props.data.map(d => ownerList[d.owner] ? null : ownerList[d.owner] = true)
        this.setState({
            ownerList: ownerList
        }, function () { console.log(this.state.ownerList, ownerList) })
    }

    somethins = () => {
        console.log(this.props.data)
    }

    updateusersText = (e) => {
        let name = e.target.name
        let text = e.target.value
        // this.state[name] = 0
        this.setState({
            [name]: text
        }, function () {
            console.log(this.state)
        })
    }

    eamiltype = () => {
        let eamiltypeList = {}
        this.props.data.map(d => eamiltypeList[d.emailType] ? null : eamiltypeList[d.emailType] = true)
        this.setState({
            eamiltypeList: eamiltypeList
        }, function () { console.log(this.state.eamiltypeList, eamiltypeList) })
    }


    updateClientNameState = (e) => {
        let clientName = e.target.value
        this.setState({
            clientName: clientName,
            ifInput: 1,
        })

        this.ownerList()
        this.eamiltype()
    }

    updateOwnerState = (e) => {
        let updateOwnerState = e.target.value
        console.log(updateOwnerState)
        this.setState({
            updateOwnerState
        })
    }
    updateEmailState = (e) => {
        let updateEmailState = e.target.value
        console.log(updateEmailState)
        this.setState({
            updateEmailState
        })
    }

    updateOwnership = async () => {
        let updateOwnerState = this.state.updateOwnerState
        // this.props.UpDateUser(updateOwnership, "owner")
        let upDate = { "owner": updateOwnerState }
        let id = this.state.clientId ? this.state.clientId : this.props.data.find(d => d.name === this.state.clientName)._id
        console.log(upDate, id)

        await axios.put(`http://localhost:3030/upDateCustomerSold/${id}`, upDate)
    }

    updateEmail = async () => {

        let updateEmailState = this.state.updateEmailState
        // this.props.UpDateUser(updateOwnership, "owner")
        let upDate = { "emailType": updateEmailState }
        let id = this.state.clientId ? this.state.clientId : this.props.data.find(d => d.name === this.state.clientName)._id
        console.log(upDate, id)

        await axios.put(`http://localhost:3030/upDateCustomerSold/${id}`, upDate)
    }

    updateSale =  async () => {
        let upDate = { "sold": true }
        let id = this.state.clientId ? this.state.clientId : this.props.data.find(d => d.name === this.state.clientName)._id
        console.log(upDate, id)

        await axios.put(`http://localhost:3030/upDateCustomerSold/${id}`, upDate)
    }

    render() {
        let data = this.props.data
        // let state = this.props.state
        return <disv>

            <div className='update'>

                <h5><i class="material-icons left">person</i> Update User </h5>
                <div>
                    Client: <datalist id="searchClient" className='select-input' onChange={this.updateClientNameState}>
                        {data.map(c => <option value={c.name}>{c.name} </option>)}
                    </datalist>
                    <input autoComplete="on" list="searchClient"
                        value={this.state.clientName}
                        placeholder='Client Name' onChange={this.updateClientNameState} className='select-input' />
                </div>

                <table>
                    <tr>
                        <td><span>Transfer Ownership To</span></td>
                        <td><select className="select-input" class="browser-default" onChange={this.updateOwnerState} >
                            {Object.keys(this.state.ownerList).map(u => {
                                return (<option value={u}>{u}</option>)
                            })}
                        </select>
                        </td>
                        <td><button onClick={this.updateOwnership} className='UpdateButtons'>Transfer</button></td>
                    </tr>

                    <tr>
                        <td><span>Send Email</span></td>
                        <td><select className="select-input" class="browser-default" onChange={this.updateEmailState}>
                            {Object.keys(this.state.eamiltypeList).map(u => {
                                return (<option value={u}>{u}</option>)
                            })}
                        </select>
                        </td>
                        <td><button onClick={this.updateEmail} className='UpdateButtons'>Send</button></td>
                    </tr>

                    <tr>
                        <td><span>Declare Sale!</span></td>
                        <td></td>
                        <td><button onClick={this.updateSale} className='UpdateButtons'>Declare</button></td>
                    </tr>

                </table>

                <hr></hr>
            </div>
        </disv>
    }

}

export default UpDateUser;
