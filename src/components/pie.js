import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector } from 'recharts';



const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent, value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{` ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};


export default class Piechart extends PureComponent {
   

  state = {
    activeIndex: 0,
  };

  onPieEnter = (data, index) => {
    this.setState({
      activeIndex: index,
    });
  };
   ClientAcquisition(){
    
    let priorDate = new Date();
    priorDate.setDate(priorDate.getDate() - 356)
    let priorDate2 = new Date();
    priorDate2.setDate(priorDate2.getDate() - 178)
    let priorDate3 = new Date();
    priorDate3.setDate(priorDate3.getDate() - 30)
      let arr=[]
      
      let num=this.props.data.filter(d=> d.firstContact.split('T',2)[0]<=priorDate.toISOString().split('T')[0]  )
        arr.push({name:'>12 monthes',value:num.length})
        let num2=this.props.data.filter(d=> d.firstContact.split('T',2)[0]>priorDate.toISOString().split('T')[0] && d.firstContact.split('T',2)[0]<priorDate2.toISOString().split('T')[0] )
        arr.push({name:'6-12 monthes',value:num2.length})
        let num3=this.props.data.filter(d=> d.firstContact.split('T',2)[0]>priorDate3.toISOString().split('T')[0]  )
        arr.push({name:'Last month',value:num3.length})
        return arr
    }
  render() {
    return (
   <div>
                    <h6>Client Acquisition </h6>
   <PieChart width={700} height={700}>
        <Pie
          activeIndex={this.state.activeIndex}
          activeShape={renderActiveShape}
          data={this.ClientAcquisition()}
          cx={200}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          onMouseEnter={this.onPieEnter}
        />
      </PieChart>
          </div>
    );
  }
}