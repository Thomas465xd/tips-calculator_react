import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem
}

export default function Menuitem({item} : MenuItemProps) {
    return (
        <>
            <button className="border-teal-400 hover:bg-teal-200 border-2 w-full p-3 flex justify-between">
                <p>{item.name}</p>
                <p className="font-black">$ {item.price}</p>
            </button>

        </>
    )
}
