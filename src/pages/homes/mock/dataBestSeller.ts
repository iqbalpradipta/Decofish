import ikan1 from '../../../assets/image/bestSeller/Ikan KOI.jpg' 
import ikan2 from '../../../assets/image/bestSeller/Golden Fish.jpg' 
import ikan3 from '../../../assets/image/bestSeller/Waterfish.jpg' 

interface Best  {
    id : number
    name :string
    image :string
    rate: number
    price : number
}[];

const dataBestSeller : Best[]= 
[
    {
        id : 1,
        name: "Ikan Koi",
        image : ikan1,
        rate: 5,
        price: 1000000
    },
    {
        id : 2,
        name: "Gold Fish",
        image : ikan2,
        rate: 5,
        price: 5000000
    },
    {
        id : 2,
        name: "Water Fish",
        image : ikan3,
        rate: 5,
        price: 800000
    },
]


export default dataBestSeller