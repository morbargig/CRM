import React, { PureComponent } from 'react';
import {
  ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend,
} from 'recharts';


    export default class BestOwner extends PureComponent {
        static jsfiddleUrl = 'https://jsfiddle.net/alidingling/shjsn5su/';
      

    hottestOwner = () => {
        let hottestOwner = {}
        this.props.data.map(d => hottestOwner[d.owner] ? hottestOwner[d.owner] += 1 : hottestOwner[d.owner] = 1)

        let data = []
        for (let i in hottestOwner) {
            let x = { name: i, Sales: hottestOwner[i], }
            data.push(x)
        }
data = data.sort(function(a ,b){return b.Sales - a.Sales}).slice(0,3)
        console.log(data)
        return data
 
    }

    render() {
        return (
          <di>
                    <h6> Top Employees  </h6>

          <ComposedChart
            layout="vertical"
            width={500}
            height={400}
            data={this.hottestOwner()}
            margin={{
              top: 20, right: 20, bottom: 20, left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Legend />
            <Bar dataKey="Sales" barSize={20} fill="#413ea0" />
          </ComposedChart>
            </di>
        );
      }
    }
