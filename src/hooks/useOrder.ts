import { useState } from "react"
import type { OrderItem } from "../types"

export default function useOrder() {
    const [order, setOrder] = useState([])
    const [total, setTotal] = useState(0)

    return {

    }
}