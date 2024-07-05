import ikan1 from '../../../assets/image/bestSeller/Ikan KOI.jpg' 
import ikan2 from '../../../assets/image/bestSeller/Golden Fish.jpg' 
import ikan3 from '../../../assets/image/bestSeller/Waterfish.jpg' 

interface NewArrivals  {
    id : number
    name :string
    image :string
    rate: number
    price : number
}[];

const dataCars : NewArrivals[]= 
[
    {
        id : 1,
        name: "Ikan Koi new Version",
        image : ikan1,
        rate: 3,
        price: 1000000
    },
    {
        id : 2,
        name: "Gold Fish new Version",
        image : ikan2,
        rate: 1,
        price: 5000000
    },
    {
        id : 2,
        name: "Water Fishnew Version",
        image : ikan3,
        rate: 4.5,
        price: 800000
    },
]


export default dataCars