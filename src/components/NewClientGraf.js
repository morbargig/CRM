import React, { Component } from 'react'
import {
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import {
  LineChart, Line
} from 'recharts';

class NewClientGraf extends Component {

  saleslast30days() {

    let priorDate = new Date();
    priorDate.setDate(priorDate.getDate() - 365)
    let arr = []
    let obj = {}
    let dates = this.props.data.filter(d => d.firstContact.split('T', 2)[0] > priorDate.toISOString().split('T')[0])

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    for (let d of dates) {
      let num = this.props.data.filter(a => a.firstContact.split('T', 2)[0] === d.firstContact.split('T', 2)[0])
      let numsales = num.filter(n => n.sold === true)
      obj[d.firstContact.split('T', 2)[0]] = { date: d.firstContact.split('T', 2)[0], newClientSales: numsales.length, newClients: num.length }
    }
    for (let i in obj) {
      arr.push(obj[i])
    }

    return [arr, months[priorDate.getMonth()], priorDate.getDay()]
  }


  render() {
    return <div>
      <h6>Sales in The last year </h6>
      <LineChart
        width={800}
        height={300}
        data={this.saleslast30days()[0]}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey='newClientSales' stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="newClients" stroke="#82ca9d" />

      </LineChart>
    </div>
  }

}

export default NewClientGraf;
