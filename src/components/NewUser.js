import React, { Component } from 'react';

// const dumydata = {
//     country: "Israel",
//     email: "morbargig@gamil.com",
//     emailType: "G",
//     firstContact: "08-2019-20",
//     name: "mor bargig",
//     owner: "yarden avrham",
//     sold: "No"
// }

class NewUser extends Component {
    constructor() {
        super()
        this.state = {
            userToUpdate: {}
        }

    }

    componentWillMount = () => {
        // console.log(this.state.fullName)
        this.setState({
            userToUpdate: this.props.userToUpdate
        }
            , function () { console.log(this.state.userToUpdate) }
        )
    }

    updateusersText = (e) => {
        let name = e.target.name
        let text = e.target.value
        // console.log(text)
        // this.state[name] = 0
        this.setState({
            [name]: text
        }, function () {
            console.log(this.state, this.state.userToUpdate)
        })
    }
    getValue = (e) => {
        console.log(e.target.parentElement)
        console.log(this.state)
        let x = this.state
        let userToUpdate = this.state.userToUpdate
        let fullName
        x.fullName !== undefined ? fullName = x.fullName : fullName = userToUpdate.name
        let owner
        x.owner !== undefined ? owner = x.owner : owner = userToUpdate.owner
        let country
        x.country !== undefined ? country = x.country : country = userToUpdate.country
        let email
        x.email !== undefined ? email = x.email : email = userToUpdate.email
        let emailType
        x.emailType !== undefined ? emailType = x.emailType : emailType = userToUpdate.emailType

        console.log(fullName, this.state.userToUpdate)
        let obj = {
            _id: this.props.id,
            fullName: fullName,
            email: email,
            emailType: emailType,
            owner: owner,
            country: country
            // firstContact: date,
            // sold: x.Sold,
        }

        console.log(obj)
        this.setState({
            fullName: undefined,
            email: undefined,
            emailType: undefined,
            owner: undefined,
            country: undefined

            // userToUpdate: obj
        }
            , function () {
                console.log(obj)
                console.log(this.props.userToUpdate)
                this.props.createNewUser(obj)
                this.props.upDateUsers(obj)
                console.log(this.state.userToUpdate)
                this.afterSendNewUser()
            }
        )
    }

    // componentWillMount = () => {
    // 
    // }

    afterSendNewUser = () => {
        this.props.afterSendNewUser()
    }
    // id={this.state.userToUpdateId} userToUpdate={this.userToUpdate} newUser={this.state.newUser}

    render() {
        return <div class="newUser">
            {/* {u = this.props.userToUpdate} */}
            <label>Full Name</label><input name="fullName" type="text" value={this.state.fullName} onChange={this.updateusersText} placeholder={`full Name was "${this.props.userToUpdate.name}" before`} />
            {/* <input name="lastName" type="text" value={this.state.lastName} onChange={this.updateusersText} placeholder={"Last Name was " + this.props.userToUpdate.name + ' before'} /> */}
            <label>E-Mail</label>  <input name="email" type="text" value={this.state.email} onChange={this.updateusersText} placeholder={`E-Mail was "${this.props.userToUpdate.email}" before`} />
            {/* <input name="FirstContact" type="text" value={this.state.FirstContact} onChange={this.updateusersText} placeholder={"First-Contact"} /> */}
            <label>Email-Type</label>   <input name="emailType" type="text" value={this.state.emailType} onChange={this.updateusersText} placeholder={`emailType was "${this.props.userToUpdate.emailType}" before`} />
            <label>Owner</label>  <input name="owner" type="text" value={this.state.owner} onChange={this.updateusersText} placeholder={`Owner was "${this.props.userToUpdate.owner}" before`} />
            <label>Country</label> <input name="country" type="text" value={this.state.oountry} onChange={this.updateusersText} placeholder={`Country was "${this.props.userToUpdate.country}" before`} />
            {/* <input name="Sold" type="text" value={this.state.Sold} onChange={this.updateusersText} placeholder={"Sold was " + this.props.userToUpdate.sold + ' before'} /> */}

            <button onClick={this.getValue} >update User Or cancel</button>
            {/* <input type="checkbox" id="horns" name="horns"></input> */}
            {/* <label onClick={this.getValue} for="horns">Sold</label> */}
            {/* <input type="checkbox" name="vehicle" > I have a bike </input>
                <input type="submit" ></input> */}
        </div>
    }

}

export default NewUser;
