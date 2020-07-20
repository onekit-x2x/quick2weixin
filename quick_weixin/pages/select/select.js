Page({
  data: {
    items:[
      {key:"A",name:"甲"},
      {key:"B",name:"乙"},
      {key:"C",name:"丙"}
    ]
},
changeOption (evt) {
console.log(evt.detail);
}
})