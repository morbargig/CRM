// import React, { Component } from 'react';
import React, { PureComponent } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

// let data = []

export default class HottestCountry extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/vxq4ep63/';

    constructor() {
        super()
        this.state = {
            data: [],
            x: "name",
            y: "Qunantity",
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

    // componentDidMount = () =>{
    //     this.hotcountry()
    // }

    hotcountry = () => {
        if (this.state.x !== "name") {
            return this.state.data
        } else {

            let hotcountry = this.props.hotcountry
            let data = []
            console.log(hotcountry)
            for (let i in hotcountry) {
                let a = { [this.state.x]: i, [this.state.y]: hotcountry[i], }
                data.push(a)
            }
            // let data = [...data]
            data = data.sort(function (a, b) { return b.Sales - a.Sales })
            console.log(data)
            // this.setState({data})
            return data
        }
    }

    upDateGrafh = (e) => {
        let value = e.target.value
        // let id = e.target
        let y
        if (value === "country") {
            y = "country sales"
        }
        if (value === "owner") {
            y = "owner sales"
        }
        if (value === "emailType") {
            y = "sales by emailtape"
        }
        console.log(value)
        this.setState({ x: value, y: y }, function () {
            if (value !== "month") {
                let obj = {}
                //  let x = this.props.data.map(d => obj[d[value]] ? obj[d[value]] += 1 : obj[d[value]] = 0)
                let a = this.props.data.filter(d => d.sold === true)
                a.map(d => obj[d[value]] = 0)
                a.map(d => obj[d[value]] += 1)
                console.log(obj)
                let data = []
                for (let i in obj) {
                    let a = { [value]: i, [this.state.y]: obj[i], }
                    data.push(a)
                    console.log(data, this.state.x, this.state.y)
                } this.setState({ data: data })
                // return data
            } else { this.monthGrafh(value) }
        })
    }

    monthGrafh = (value) => {
        let date = new Date()
        date = date.toString()
        date = date.slice(4, 15)
        let month = date.slice(0, 3)
        let lastmonth = this.state.months[month].num
        let year = date.slice(7, 12)

        year = "2018"

        lastmonth < 10 ? lastmonth = `0${lastmonth}` : lastmonth = month.toString()

        // date = `${year}-${month}`

        this.setState({ name: value, y: `Sales for months in ${year}` }, function () {

            // let lastMonthUsers = 0
            let obj = {}
            let users = this.props.data.filter(d => d.firstContact.slice(0, 4) === year)
            users = users.sort(function (a, b) { return b.firstContact.slice(5, 7) - a.firstContact.slice(5, 7) })
            users.map(d => obj[d.firstContact.slice(5, 7)] = 0)
            users.map(d => obj[d.firstContact.slice(5, 7)] += 1)
            console.log(obj)
            let data = []
            for (let i in obj) {
                let a = { [value]: i, [this.state.y]: obj[i], }
                data.push(a)
                console.log(data, this.state.x, this.state.y)
            } this.setState({ data: data })
        })
    }

    render() {
        return (<div>
            <h6>Sales by variable  </h6>

            <select className="select-input" class="browser-default" onChange={this.upDateGrafh} >

                <option value={"country"}>{"Country"}</option>
                <option value={"owner"}>{"Owner"}</option>
                <option value={"emailType"}>{"emailType"}</option>
                <option value={"month"}>{"Month"}</option>
            </select>
            <BarChart
                width={500}
                height={300}
                data={this.hotcountry()}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={this.state.x} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey={this.state.y} barSize={20} fill="#8884d8" />
            </BarChart>
        </div>
        );
    }
}
