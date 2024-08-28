import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem,
    addItem: (item: MenuItem) => void
}

export default function Menuitem({item, addItem} : MenuItemProps) {
    return (
        <>
            <button 
                className="border-teal-400 hover:bg-teal-200 border-2 w-full p-3 rounded-md flex justify-between"
                onClick={() => addItem(item)}    
            >
                <p>{item.name}</p>
                <p className="font-black">$ {item.price}</p>
            </button>

        </>
    )
}
