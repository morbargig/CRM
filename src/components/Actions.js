import React, { Component } from 'react';
import UpDateUser from './UpDateUser';

class Actions extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  updateusersText = (e) => {
    let name = e.target.name
    let text = e.target.value
    // this.state[name] = 0
    this.setState({
      [name]: text
    }, function () {
      // console.log(this.state,this.state.userToUpdate)
    })
  }
  createNewUser = () => {
    if (this.state.Sold === 'true' || this.state.Sold === 'false') {
      // if ( )
      let date = new Date()
      let x = this.state
      let a = 0
      let obj = {
        name: x.fullName === undefined || "" ? a = 'Full-Name' : x.fullName,
        email: x.EMail === undefined || "" ? a = "E-mail" : x.EMail,
        firstContact: date,
        emailType: x.emailType === undefined || "" ? a = "Email-Type" : x.emailType,
        sold: x.Sold === undefined || "" ? a = "Sold" : x.Sold,
        owner: x.owner === undefined || "" ? a = "Owner" : x.owner,
        country: x.country === undefined || "" ? a = "Country" : x.country
      }
      if (a === 0) {
        this.props.CreateNewClient(obj)
        console.log("saved secsefuly")
        this.setState({
          fullName: "",
          EMail: "",
          firstContact: "",
          emailType: "",
          Sold: "",
          owner: "",
          country: ""
        })
      } else { alert(`all fields sould be fill Properly chack ${a} field`) }
      console.log(obj)
    }
    else {
      alert("Sold must be true or false please try agin")
    }
  }


  render() {
    return <div className="actions">
      <UpDateUser UpDateUser={this.props.UpDateUser} data={this.props.data} state={this.state} />
      <h5><i class="material-icons left">person</i> Add New Client </h5>
      {/* code that make me input with updateusersText form aryy */}
      {/* {["name","email"].map( i => <label>{i} <input name={`${i}`} type="text" value={this.state[i]} onChange={this.updeBesniiesText} placeholder={`${i}`} /> </label> )  } */}
      <label>Full Name</label> <input name="fullName" type="text" value={this.state.fullName} onChange={this.updateusersText} placeholder={"Full Name"} />
      <label>E-Mail</label>  <input name="EMail" type="text" value={this.state.EMail} onChange={this.updateusersText} placeholder={"E-Mail"} />
      <label>Email-Type</label><input name="emailType" type="text" value={this.state.emailType} onChange={this.updateusersText} placeholder={"Email-Type "} />
      <label>Owner</label><input name="owner" type="text" value={this.state.owner} onChange={this.updateusersText} placeholder={"Owner "} />
      <label>Country</label> <input name="country" type="text" value={this.state.country} onChange={this.updateusersText} placeholder={"Country "} />
      <label>Sold</label> <input name="Sold" type="text" value={this.state.Sold} onChange={this.updateusersText} placeholder={"Sold *must be 'true' or 'false'!"} />
      <button onClick={this.createNewUser}>Add New User <i class="material-icons right">send</i> </button>

    </div>

  }

}

export default Actions;
