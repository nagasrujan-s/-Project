import Displayalldata from "./Displayalldata"

function Readalldata({ product }) {
    return product.map((items) =>
        <Displayalldata key={items.id} items={items}/>
    )
}

export default Readalldata
