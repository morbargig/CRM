import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Clients from './components/Clients ';
import Actions from './components/Actions';
import Analytics from './components/Analytics';
import route from '../src/components/config/mor'
// import { format } from 'url';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      users: [],
      userIndex: 0,// x-x+20
      page: 1

    }
  }

  async componentDidMount() {
    const res = await axios.get(`${route}Customers`)
    console.log(res.data)
    this.setState({
      data: res.data,
      users: res.data.slice(0, 20)
    })
    console.log(this.state.data, this.state.users)
  }

  isSold = (id) => {
    let users = [...this.state.users]
    let thisUser = users.filter(u => u._id === id)
    thisUser[0].sold = !thisUser[0].sold
    console.log(users)
    this.setState({
      users: users
    })
    console.log(thisUser[0].sold)
    this.upDateUser("sold", thisUser[0].sold, id)
    console.log(thisUser[0].sold, id)
    this.render()
  }

  upDateUser = async (key, value, id) => {

    let upDate = { [key]: value }
    console.log(upDate, id)
    await axios.put(`${route}upDateCustomerSold/${id}`, upDate)
  }

  createNewUser = async (obj) => {
    let id = obj._id
    let upDate = {
      'email': obj.email,
      "emailType": obj.emailType,
      "owner": obj.owner,
      "country": obj.country,
      "name": obj.fullName
    }
    //     let users = [...this.state.users]
    //     let user = users.filter(u => u._id === obj._id)
    // user.email = obj.email
    // user.emailType = obj.emailType
    // user.owner = obj.owner
    // user.country = obj.country
    // user.fullName = obj.fullName
    // this.setState({
    //   users
    // })

    console.log(upDate, id)
    await axios.put(`${route}upDateCustomer/${id}`, upDate)

    // console.log("kfdbbskjbkjsb")
    // this.myRender()
  }


  moreUsers = (next) => {
    let page = this.state.page
    let userIndex = this.state.userIndex
    if (page >= 1 && next | page > 1) {
      next ? userIndex += 20 : userIndex -= 20
      next ? page += 1 : page -= 1
      this.setState({
        userIndex: userIndex,
        users: this.state.data.slice(userIndex, userIndex + 20),
        page: page
      })
      // console.log(this.state.data)
      //  let a =this.state.data.slice(20, 40)
      // console.log(a)
      //  console.log(userIndex)
      // console.log(this.state.users)
      // this.render()
    } else { alert("soory you can't go Previous") }
  }

  CreateNewClient = async (obj) => {
    await axios.post(`${route}Customer`, obj)
  }

  searchByCatgory = async (catagorySearch, text, ifValue) => {
    // let obj = {
    //   catagorySearch: catagorySearch,
    //   text: text
    // }
    if (ifValue === false) {
      this.componentDidMount()
    } else {
      console.log(catagorySearch, text, typeof text)
      let res = await axios.get(`${route}searchByCatagory/${catagorySearch}/${text}`)
      console.log(res.data)
      this.setState({
        data: res.data,
        users: res.data.slice(0, 20)
      }, function () {
        console.log(this.state.data)
        // if (typeof text === "string" && text === "") {
        //   console.log("gfdgfdbgkjbdkgbkdj")
        //   this.setState({
        //     users: this.state.data.slice(0, 20)
        //   })
        // }
      })
    }
  }

  refreseClient = () => {
    this.componentDidMount()
  }

  upDateUsers = (obj, id) => {
    console.log("dsjghkjbkjbkjbk", obj, id)
    let users = [...this.state.users]
    let x = users.find(u => u._id === id)
    x.country = obj.country
    x.email = obj.email
    x.emailType = obj.emailType
    x.name = obj.fullName
    x.owner = obj.owner
    this.setState({
      users: users
    })

  }


  openMenu = () => {
    let x = this.state.openMenu
    this.setState({ openMenu: !x })
  }
  render() {

    return (
      <Router>
        <div className="topnav">
          <a onClick={this.openMenu} className="active"><Link >Menu</Link></a>

          {this.state.openMenu ?
            <div id="myLinks">
              {/* <ul id="nav-mobile" class="left hide-on-med-and-down"> */}

              <a ><Link to="/clients">Clients  </Link></a>
              <a ><Link to="/actions" >Actions  </Link></a>
              <a ><Link to="/analytics">Analytics </Link></a>
            </div>
            :
            <a className="right" ><Link to="/clients" >CRM</Link> </a>
          } </div>
        {/* <nav> */}
        {/* <div class="nav-wrapper navBar">
            <a href="" class="brand-logo right">CRM</a>
            <ul id="nav-mobile" class="left hide-on-med-and-down">
              <li ><Link to="/clients">Clients  </Link></li>
              <li ><Link to="/actions" >Actions  </Link></li>
              <li ><Link to="/analytics">Analytics </Link></li>
            </ul>
          </div>
        </nav> */}

        {/* <Route path="/" render={() => this.state.users ? <Clients upDateUsers={this.upDateUsers} refreseClient={this.refreseClient} searchByCatgory={this.searchByCatgory} createNewUser={this.createNewUser} isSold={this.isSold} page={this.state.page} users={this.state.users} moreUsers={this.moreUsers} data={this.state.data} /> : null} /> */}
        <Route path="/clients" render={() => this.state.users ? <Clients upDateUsers={this.upDateUsers} refreseClient={this.refreseClient} searchByCatgory={this.searchByCatgory} createNewUser={this.createNewUser} isSold={this.isSold} page={this.state.page} users={this.state.users} moreUsers={this.moreUsers} data={this.state.data} /> : null} />
        <Route path="/actions" render={() => <Actions CreateNewClient={this.CreateNewClient} data={this.state.data} />} />
        <Route path="/analytics" render={() => <Analytics data={this.state.data} />} />

      </Router>
    );
  }
}

export default App;
