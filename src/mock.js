// import Mock from 'mockjs'
const Mock = require('mockjs')
const Random = Mock.Random

/************** home ***********/

let home = {
  recommends: [],
  loans: [],
  insuracnes: [],
  credits: [],
}
for (let i = 0; i < 4; i++) {
  let template = {
    id: home.recommends.length,
    url: Random.dataImage('320x200', Random.color()),
    title: Random.ctitle(),
    content: Random.cparagraph(1, 3),
  }
  home.recommends.push(template)
}
for (let i = 0; i < 3; i++) {
  let template = {
    id: home.credits.length,
    url: Random.dataImage('320x200', Random.color()),
    title: Random.ctitle(),
    content: Random.cparagraph(1, 3),
  }
  home.credits.push(template)
}
for (let i = 0; i < 3; i++) {
  let template = {
    id: home.loans.length,
    'maxAmount|1': ['房产值8-9成', '50万', '无上限', '1000万', '200万', '500万', '3000万'],
    title: Random.ctitle(),
    // 'description': Random.cparagraph(1, 3),
    'description|1': [
      '批贷时间：3-7个工作日\n贷款期限：1-20年\n利率范围：4.75%起',
      '批贷时间：最快24小时\n贷款期限：1-5年\n利率范围：0.52%起',
      '批贷时间：最快1小时\n贷款期限：1-2年\n利率范围：0.8%起',
    ],
  }
  home.loans.push(template)
}
for (let i = 0; i < 3; i++) {
  let template = {
    id: home.insuracnes.length,
    url: Random.dataImage('270x170', Random.color()),
    title: Random.ctitle(),
    subtitle: Random.csentence(),
    description: Random.cparagraph(1, 3),
    'age|1': ['18-65周岁', '30-65周岁', '50-65周岁', '0-65周岁', '终身'],
    'timeLimit|1': ['终身', '5年', '10年', '30年'],
    'price|100-1000': 1,
  }
  home.insuracnes.push(template)
  home.insuracnes[0].url = Random.dataImage('300x360', Random.color())
}

Mock.mock('/data/home', 'post', home)

/************** insurance ***********/
let insurance = {
  insurances: [],
  illnessInsurances: [],
  travelInsurances: [],
  healthInsurances: [],
  examples: [],
}
for (let i = 0; i < 3; i++) {
  let template = {
    id: insurance.examples.length,
    url: Random.dataImage('100x100', Random.color()),
    'sex|1': ['先生', '女士'],
    name: function() {
      return Random.cword() + this.sex
    },
    'age|20-65': 1,
    description: Random.cparagraph(1, 3),
    'insuranceCost|100-3000': 1,
    'insuranceAmount|100-3000': 1,
  }
  insurance.examples.push(template)
}
for (let i = 0; i < 4; i++) {
  let template = {
    id: insurance.insurances.length,
    background: {
      background: 'url(' + Random.dataImage('320x320', Random.color()) + ')',
    },
    title: Random.ctitle(),
    content: Random.cparagraph(1, 3),
    'price|100-1000': 1,
  }
  insurance.insurances.push(template)
}
for (let i = 0; i < 6; i++) {
  let template = {
    id: insurance.illnessInsurances.length,
    url: Random.dataImage('270x170', Random.color()),
    title: Random.ctitle(),
    subtitle: Random.csentence(),
    description: Random.cparagraph(1, 3),
    'age|1': ['18-65周岁', '30-65周岁', '50-65周岁', '0-65周岁', '终身'],
    'timeLimit|1': ['终身', '5年', '10年', '30年'],
    'price|100-1000': 1,
  }
  insurance.illnessInsurances.push(template)
}
for (let i = 0; i < 5; i++) {
  let template = {
    id: insurance.travelInsurances.length,
    url: Random.dataImage('270x170', Random.color()),
    title: Random.ctitle(),
    subtitle: Random.csentence(),
    description: Random.cparagraph(1, 3),
    'age|1': ['18-65周岁', '30-65周岁', '50-65周岁', '0-65周岁', '终身'],
    'timeLimit|1': ['终身', '5年', '10年', '30年'],
    'price|100-1000': 1,
  }
  insurance.travelInsurances.push(template)
}
for (let i = 0; i < 7; i++) {
  let template = {
    id: insurance.healthInsurances.length,
    url: Random.dataImage('270x170', Random.color()),
    title: Random.ctitle(),
    subtitle: Random.csentence(),
    description: Random.cparagraph(1, 3),
    'age|1': ['18-65周岁', '30-65周岁', '50-65周岁', '0-65周岁', '终身'],
    'timeLimit|1': ['终身', '5年', '10年', '30年'],
    'price|100-1000': 1,
  }
  insurance.healthInsurances.push(template)
}

Mock.mock('/data/insurance', 'post', insurance)
