
import Item from "./Item";



export default function ItemList ( props){

    console.log(props.list);
       
    return(
        <>  
        
        {props.list.length > 0 ?

            <>
            {
                props.list.map(item=>{ 
                return <Item item={item} />})
            }
        
            </>
           :
            <>
                <div>Loading..</div>
            </>


            }
            
        
        </>
    )
}