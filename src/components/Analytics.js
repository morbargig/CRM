import React, { Component } from 'react';
import Badges from './Badges';
import axios from 'axios'
import route from './config/mor'


class Analytics extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  async componentDidMount() {
    const res = await axios.get(`${route}Customers`)
    console.log(res.data)
    this.setState({
      data: res.data
    })
    console.log(this.state.data)
    this.hotcountry()
  }

  hotcountry = () => {
    // countryList = []
    let hotcountry = {

    }
    let x = this.state.data.map(d => d.sold === true ? hotcountry[d.country] = 0 : null)
    let a = this.state.data.map(d => d.sold === true ? hotcountry[d.country] += 1 : null)
    console.log(a, x, hotcountry)
    // this.setState({
    //   hotestCity : hotestCity
    // })
    this.countryList(hotcountry)
  }

  countryList = (hotcountry) => {
    let countryList = []
    for (let i in hotcountry) {
      countryList.push(i)
    }
    console.log(countryList)
    this.setState({
      countryList: countryList,
      hotcountry: hotcountry
    }
      , function () { console.log(this.state) }
    )
    return <div>bfdbsnblndfkblknsdflkbnsdlkn</div>
  }

  render() {

    return <div>
 
      <Badges data={this.props.data} hotcountry={this.state.hotcountry} />

    </div>
  }

}

export default Analytics;
