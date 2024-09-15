import { Dispatch } from "react"
import type { MenuItem } from "../types"
import { OrderActions } from "../reducers/order-reducer"

type MenuItemProps = {
    item: MenuItem,
    dispatch: Dispatch<OrderActions>
}

export default function Menuitem({item, dispatch} : MenuItemProps) {
    return (
        <>
            <button 
                className="border-teal-400 hover:bg-teal-200 border-2 w-full p-3 rounded-md flex justify-between"
                onClick={() => dispatch({type: "add-item", payload: {item}})}    
            >
                <p>{item.name}</p>
                <p className="font-black">$ {item.price}</p>
            </button>

        </>
    )
}
