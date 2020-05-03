import item1 from 'car image/item1.jpg';
import item2 from 'car image/item2.jpg';
import item3 from 'car image/item3.jpg';
import item4 from 'car image/item4.jpg';
import item5 from 'car image/item5.jpg';

const initState = {
    items:[
        {id:1, title:'car1',desc:"car1",vehicle no.-12,seating capacity-3,color:blue, rent/day = Rs.500,img:item1},
        {id:2, title:'car2',desc:"car2",vehicle no.-23,seating capacity-2,color:red, rent/day = Rs.350,img:item2},
        {id:3, title:'car3',desc:"car3",vehicle no.-22,seating capacity-4,color:white, rent/day = Rs.700,img:item4},
        {id:4, title:'car4',desc:"car4",vehicle no.-45,seating capacity-4,color:blue, rent/day = Rs.600,img:item4},
        {id:5, title:'car5',desc:"car5",vehicle no.-36,seating capacity-6,color:white, rent/day = Rs.450,img:item5}  
    ]
}
const homereducer = (state = initState,action)=>{

    return state;
}
export deafault homereducer;

