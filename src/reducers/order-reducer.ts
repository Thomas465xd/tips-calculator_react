import { MenuItem, OrderItem } from "../types";

// Define the possible actions that can be dispatched to the reducer
export type OrderActions = 
    { type: "add-item", payload: { item: MenuItem } } | // Action to add an item to the order
    { type: "remove-item", payload: { id: MenuItem["id"] } } | // Action to remove an item by its ID
    { type: "place-order" } | // Action to place the order and reset state
    { type: "set-tip", payload: { value: number } } // Action to set the tip value

// Define the shape of the state the reducer manages
export type OrderState = {
    order: OrderItem[], // Array representing items in the order, each with its quantity
    tip: number // Represents the tip added to the order
}

// Initial state when the app starts
export const initialState: OrderState = {
    order: [], // Initially, there are no items in the order
    tip: 0 // The tip starts at 0
}

// The reducer function, which updates the state based on dispatched actions
export const orderReducer = (
    state: OrderState = initialState, // Current state, initialized to the default state
    action: OrderActions // Dispatched action that modifies the state
) => {

    // Handle adding an item to the order
    if (action.type === "add-item") {

        // Check if the item is already in the order
        const itemExist = state.order.find(orderItem => orderItem.id === action.payload.item.id);
        let order: OrderItem[] = [];

        if (itemExist) {
            // If the item exists, increase its quantity
            order = state.order.map(orderItem =>
                orderItem.id === action.payload.item.id
                    ? { ...orderItem, quantity: orderItem.quantity + 1 }
                    : orderItem
            );
        } else {
            // If the item is new, add it to the order with a quantity of 1
            const newItem: OrderItem = { ...action.payload.item, quantity: 1 };
            order = [...state.order, newItem];
        }

        // Return the new state with the updated order
        return {
            ...state,
            order
        };
    }

    // Handle removing an item from the order by its ID
    if (action.type === "remove-item") {
        const order = state.order.filter(item => item.id !== action.payload.id); // Filter out the item by ID

        // Return the new state with the updated order
        return {
            ...state,
            order
        };
    }

    // Handle placing the order (reset order and tip)
    if (action.type === "place-order") {
        const order: OrderItem[] = []; // Clear the order array
        const tip = 0; // Reset the tip

        // Return the new state with an empty order and reset tip
        return {
            ...state,
            order,
            tip
        };
    }

    // Handle setting the tip for the order
    if (action.type === "set-tip") {
        const tip = action.payload.value; // Set the tip value

        // Return the new state with the updated tip
        return {
            ...state,
            tip
        };
    }

    // Return the current state if no action types match
    return state;
};
