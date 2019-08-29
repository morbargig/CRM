import React, { Component } from 'react';
import NewUser from './NewUser';
import axios from 'axios'



class Clients extends Component {
    constructor() {
        super()
        this.state = {
            newUser: false, //if i want to add new user 
            userToUpdate: {}, // my new user i want to update
            userToUpdateId: "", // my id fot the user i want to Change
            users: []
        }
    }


    // UNSAFE_componentWillReceiveProps = () => {
    //     console.log(this.props.users)
    //     let users = [...this.props.users]
    //     this.setState({
    //         users: users
    //     }
    //         , function () { console.log(this.state.users, "dgsagsdagdsagasdjbkjbjb") }
    //     )
    // }



    isSold = (e) => {

        let answer = window.confirm("Are you Sure you Want to Change this Sell ?")
        if (answer) {
            this.props.isSold(e.target.id)
            console.log(e.target)
            // Save it!      }
        } else {
            //some code
            return null
        }

    }
    moreUsers = (e) => {
        let x = e.target.id
        if (x === 'Next') {
            if (this.props.users.length < 20)

                alert("sorry there are no more users")
            else { this.props.moreUsers(true) }
        }

        else {
            this.props.moreUsers(false)
        }
    }

    getNewUser = (e) => {
        let id = e.target.parentElement.id
        console.log(id)
        let x = this.state.newUser
        x = !x
        let users = this.props.users
        let userToUpdate = users.find(u => u._id === id)

        this.setState({
            userToUpdateId: id,
            userToUpdate: userToUpdate,
            newUser: x
        })
        console.log(this.state, this.state.userToUpdate)
    }

    // setNewUsr = (obj) => {
    //     this.setState({
    //         userToUpdate: obj
    //     }
    //         , function () { console.log(this.state.userToUpdate) }
    //     )
    // }

    afterSendNewUser = () => {
        let x = this.state.newUser
        x = !x
        this.setState({
            newUser: x
        })
    }

    updateusersText = (e) => {
        let name = e.target.name
        let text = e.target.value
        // this.state[name] = 0
        this.setState({
            [name]: text
        }, function () {
            console.log(this.state)
            // let input = this.state[name]
            // console.log(name)
            if (this.state.catagorySearch !== undefined) {
                // console.log("don't work")
                let catagorySearch = this.state.catagorySearch
                console.log(this.state.catagorySearch)
                let ifValue = true
                if (text === '') {
                    ifValue = false
                    // console.log(text, typeof text)
                } else {
                    this.searchByCatgory(catagorySearch, text, ifValue)
                }
                ///////////////////////////////////////////////////////////////////////
            } else { console.log("work") }
        })
    }

    // componentDidMount = () => {
    //     // this.setUsers()

    // }

    catagorySearch = (e) => {
        let x = e.target.value
        console.log(x)
        this.setState({
            // input: null,
            catagorySearch: x
        }
            , function () { console.log(this.state.catagorySearch) }
        )
    }

    searchByCatgory = (catagorySearch, text, ifValue) => {
        this.props.searchByCatgory(catagorySearch, text, ifValue)
    }

    refreseClient = () => {
        this.props.refreseClient()
    }



    delete = async (e) => {
        let id = e.target.parentElement.id
        let user = this.props.users.find(u => u._id === id)
        let answer = window.confirm(`are you sure you want to delete ${user.name}?`)
        if (answer === true) {
            await axios.delete(`http://localhost:3030/deleteUser/${id}`)
            console.log(id, user)

        }
    }

    upDateUsers = (obj) => {
        this.props.upDateUsers(obj,this.state.userToUpdateId)
    }

    render() {
        return <div>
            {
                this.state.newUser ? <NewUser upDateUsers={this.upDateUsers} users={this.state.users} afterSendNewUser={this.afterSendNewUser} id={this.state.userToUpdateId} userToUpdate={this.state.userToUpdate} createNewUser={this.props.createNewUser} newUser={this.state.newUser} />
                    : null
            }

            < table className="clientTable" >
                <tr className="nestLeft">
                    <td className='tdClassMain'> <button class="waves-effect waves-light btn" onClick={this.refreseClient}> <i class="material-icons left">refresh</i>refresh Clients</button></td>
                    {/* <input placeholder="Catgory" />
                        <select id="select-input" className="option-menu">
                        
                    </select> */}
                    <td className='tdClassMain'>    <input name="input" type="text" value={this.state.fullName} onChange={this.updateusersText} placeholder="type here" />
                    </td>
                    <td className='tdClassMain'>
                        <select class="browser-default" onClick={this.catagorySearch}>
                            <option value="Catgory" disabled selected>select a Category</option>
                            <option value="name">full name</option>
                            <option value="email">E-Mail </option>
                            {/* <option value="firstContact">First Contact</option> */}
                            <option value="emailType">Email Type</option>
                            {/* <option value="sold">Sold</option> */}
                            <option value="owner">Owner</option>
                            <option value="country">Country</option>
                        </select>
                    </td>
                    <td className='tdClassMain'>users : {this.props.page === 1 ? 1 : this.props.page * 20 - 20} to {this.props.page * 20} <i class="material-icons left">people</i></td>
                    <td className='tdClassMain'>Page :{this.props.page} <i class="material-icons left">insert_drive_file</i></td>
                    <td className='tdClassMain'><button class="waves-effect waves-light btn" onClick={this.moreUsers}> <i class="material-icons left">fast_rewind</i> Previous Page</button></td>
                    <td className='tdClassMain'><button class="waves-effect waves-light btn" id="Next" onClick={this.moreUsers} >  Next Page  <i class="material-icons right">fast_forward</i> </button></td>
                </tr>
                <tr className=' Catgories'>
                    <td className='tdClassMain'>Name<i class="material-icons left">person</i> </td>
                    <td className='tdClassMain' >E-Mail <i class="material-icons left">email</i></td>
                    <td className='tdClassMain'>First Contact <i class="material-icons left">access_time</i></td>
                    <td className='tdClassMain'>E-mail Type</td>
                    <td className='tdClassMain'>Sold <i class="material-icons left">business_center</i></td>
                    <td className='tdClassMain'>Owner</td>
                    <td className='tdClassMain'>Country <i class="material-icons left">location_city</i></td>
                </tr>
                {
                    this.props.users.map(u => {
                        return (
                            <tr className='rowClass' id={u._id} on onDoubleClick={this.getNewUser} onKeyDown={this.handleKeyDown} onContextMenu={this.delete}>
                                <td className='tdClass'>{u.name}</td>
                                <td className='tdClass'>{u.email}</td>
                                <td className='tdClass'>{u.firstContact.slice(0, 10)}</td>
                                <td className='tdClass'>{u.emailType ? u.emailType : "_"}</td>
                                <td className='tdClass'>{u.sold ? <i id={u._id} onClick={this.isSold} class="material-icons left green">done</i> || "Yes" : <i id={u._id} onClick={this.isSold} class="material-icons left red">clear</i> || "No"}</td>
                                <td className='tdClass'>{u.owner}</td>
                                <td className='tdClass'>{u.country}</td>
                            </tr>
                        )
                    }
                    )
                }
            </table >

        </div>
    }

}

export default Clients;
