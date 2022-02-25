
import react, { useEffect,  useState} from "react";
import Item from "./Item";

export default function ItemList ( props){

    const[loading, setLoading] = useState(true);

    useEffect(() => {
       console.log("haciendo render");
    }, )

    useEffect(() => {
        setTimeout( ()=>{
            setLoading(false)
        },1000)
    }, [])

    return(
        <>  
        
        {props.list.length > 0 ?

            <>
            {
                props.list.map(item=>{ 
                return <Item key={item.id} item={item} />})
            }
        
            </>
           :
            <>

                   {loading &&  <>loading...</>}
               
            </>


            }
            
        
        </>
    )
}