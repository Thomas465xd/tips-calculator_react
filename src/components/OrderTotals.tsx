import { Dispatch, useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"
import { OrderActions } from "../reducers/order-reducer"

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number, 
    dispatch: Dispatch<OrderActions>
}

export default function OrderTotals({order, tip, dispatch} : OrderTotalsProps) {

    const subtotalAmount = useMemo(() => {
        return order.reduce((total, item) => total + (item.price * item.quantity), 0)
    }, [order])

    const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order])

    const totalAmount = useMemo(() => subtotalAmount + tipAmount, [tip, order])

    return (
        <>
            <div className=" space-y-3">
                <h2 className="font-black text-2xl">Totales y Propina: </h2>
                <p>Subtotal a Pagar: 
                    <span className="font-bold"> {formatCurrency(subtotalAmount)}</span>
                </p>

                <p>Propina: 
                    <span className="font-bold"> {formatCurrency(tipAmount)}</span>
                </p>

                <p>Total a Pagar: 
                    <span className="font-bold"> {formatCurrency(totalAmount)}</span>
                </p>
            </div>

            <button 
                className="w-full bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded disabled:opacity-10"
                disabled={order.length === 0}
                onClick={() => dispatch({type: "place-order"})}
            >
                Guardar Orden
            </button>
        </>
    )
}
