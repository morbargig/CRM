import React, { Component } from 'react';
import BestOwner from './BestOwner';
import HottestCountry from './HottestCountry';
import NewClientGraf from './NewClientGraf';
import Pie from './pie'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class Badges extends Component {
    constructor() {
        super()
        this.state = {
            months: {
                Jan: { num: 1, name: "January" },
                Feb: { num: 2, name: "February" },
                Mar: { num: 3, name: "March" },
                Apr: { num: 4, name: "April" },
                May: { num: 5, name: "May" },
                Jun: { num: 6, name: "June" },
                Jul: { num: 7, name: "July" },
                Aug: { num: 8, name: "August" },
                Sep: { num: 9, name: "September" },
                Oct: { num: 10, name: "October" },
                Nov: { num: 11, name: "November" },
                Dec: { num: 12, name: "December" }
            }
        }
    }
    emailsent = () => {
        let numberOfUserEmails = 0
        this.props.data.map(d => d.emailType !== null ? numberOfUserEmails += 1 : null
            // & d.sold === true ? numberOfUserEmails -= 1 : null
        )
        return `${numberOfUserEmails} Emails was Sent`
    }


    hotcountry = () => {
        console.log(this.props.hotcountry)
        // this.findBig3(this.props.hotestCity)
        let hotcountryName = ""
        let hotcountryNum = 0
        let hotcountry = this.props.hotcountry
        // console.log(hotcountry)
        for (let i in hotcountry) {
            // console.log(hotcountry[i])
            if (hotcountry[i] > hotcountryNum) {
                hotcountryName = i
                hotcountryNum = hotcountry[i]
            }
            // hotcountry[i] > hotcountryNum ? hotcountryNum = hotcountry[i] :  null
            // hotcountryName = i  

            // console.log(i)   
        }
        // console.log(hotcountryName, hotcountryNum)
        return `Hottest Country ${hotcountryName} with ${hotcountryNum} sales,`
    }


    hottestOwner = () => {
        let hottestOwner = {}
        this.props.data.map(d => hottestOwner[d.owner] ? hottestOwner[d.owner] += 1 : hottestOwner[d.owner] = 1)
        let hottestOwnerName = ""
        let hottestOwnerNum = 0
        for (let i in hottestOwner) {
            // console.log(hottestOwner[i])
            if (hottestOwner[i] > hottestOwnerNum) {
                hottestOwnerName = i
                hottestOwnerNum = hottestOwner[i]
            }
            console.log(hottestOwner, hottestOwnerName, hottestOwnerNum)
        }
        return `Outstanding Client Is ${hottestOwnerName} with ${hottestOwnerNum} sales `
    }

    newclients = () => {
        let date = new Date()
        date = date.toString()
        date = date.slice(4, 15)
        let month = date.slice(0, 3)
        let lastmonth = this.state.months[month].name
        let year = date.slice(7, 12)
        month = this.state.months[month].num
        // console.log(date)
        // console.log(year)
        month < 10 ? month = `0${month}` : month = month.toString()

        date = `${year}-${month}`
        // console.log(date)
        let lastMonthUsers = 0
        this.props.data.map(d => d.firstContact.slice(0, 7) === date ? lastMonthUsers += 1 : null)
        // lastMonthUsers
        return `${lastMonthUsers} new users in month/${lastmonth}`
    }

    outstandingClient = () => {
        let outstandingClient = 0
        this.props.data.map(d => d.sold === false ? outstandingClient += 1 : null)
        return `Outstanding Clients ${outstandingClient}`
    }


    render() {
        return <Router>
            {/* <div> */}
            <nav>
                <div class="nav-wrapper navbar">
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        {/* <li><a href="http://localhost:3000/analytics/BestOwner">Best Owner</a></li> */}
                        <li ><Link to="/analytics/BestOwner">Best Owner</Link></li>
                        <li ><Link to="/analytics/HottestCountry">Hottest Country</Link></li>
                        <li ><Link to="/analytics/NewClientGraf">new Month Client </Link></li>
                        <li ><Link to="/analytics/Pie">New Month Client</Link></li>
                    </ul>
                </div>
            </nav>
            <div className="badges" >
                <div className="bage">
                    <i id='awsomeProgress' class="fas fa-chart-line"></i>
                    <br></br>
                    <a>{this.newclients()}</a>
                </div>
                <div className="bage">
                    <i id='awsomeMail' class="fas fa-envelope" ></i>
                    <br></br>
                    <a> {this.emailsent()} </a>
                </div>
                <div className="bage">
                    <i id='awsomeClient' class="fas fa-user-circle"></i>
                    <br></br>
                    <a>
                        {/* {this.hottestOwner()} */}
                        {this.outstandingClient()}
                    </a>
                </div>
                <div className="bage">
                    <i id='awsomeEarth' class="fas fa-globe-americas"></i>
                    <br></br>
                    <a>  {this.hotcountry()} </a>
                </div>
                <div className="graphs">
                    {/* </div> */}

                </div>
            </div>
            <div className="badges">

                <Route path="/analytics/BestOwner" render={() =>
                    <BestOwner className="bestOwner graph" data={this.props.data} />
                } />
                <Route path="/analytics/HottestCountry" render={() =>
                    <HottestCountry className="Country graph" hotcountry={this.props.hotcountry} data={this.props.data} />
                } />
                <Route path="/analytics/NewClientGraf" render={() =>
                    <NewClientGraf className="newclients graph" data={this.props.data} />
                } />
                <Route path="/analytics/Pie" render={() =>

                    <Pie className="oie graph" data={this.props.data} />
                } />

            </div>
        </Router>
    }

}

export default Badges;

