const database = {
    orderBuilder:{},

    paints: [
        {id: 1,color:"Silver" ,price: 250},
        {id: 2,color: "Midnight Blue",price: 350},
        {id: 3,color: "Firebrick Red",price: 400},
        {id: 4,color: "Spring Green",price: 400}
    ],
    interiors:[
        {id: 1,material: "Beige Fabric",price: 500},
        {id: 2,material: "Charcoal Fabric",price: 450}, 
        {id: 3,material: "White Leather",price: 260},
        {id: 4,material: "Black Leather",price: 700}
    ],
    techs:[
        {id: 1,packageName: "Basic Package (basic sound system)",price: 600},
        {id: 2,packageName: "Navigation Package (includes integrated navigation controls)",price: 800},
        {id: 3,packageName: "Visibility Package (includes side and reat cameras)",price: 900},
        {id: 4,packageName: "Ultra Package (includes navigation and visibility packages)",price: 1000}
    ],
    wheels:[
        {id: 1,style: "17-inch Pair Radial",price: 300},
        {id: 2,style: "17-inch Pair Radial Black",price: 400},
        {id: 3,style: "18-inch Pair Spoke Silver",price: 500},
        {id: 4,style: "18-inch Pair Spoke Black",price: 600}
    ],
    customOrders:[
        {
            id: 1,
            paintId: 3,
            wheelId: 2,
            interiorId: 3,
            techId:3,
            timestamp: 1614659931693
        }
    ]
}

export const getPaint = () => {
    return [...database.paints]
}

export const getInterior = () => {
    return[...database.interiors]
}

export const getTech = () => {
    return[...database.techs]
}

export const getWheels = () => {
    return[...database.wheels]
}

export const getOrders = () => {
    return [...database.customOrders]
}

export const setTech = (id) => {
    database.orderBuilder.techId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setWheels = (id) => {
    database.orderBuilder.wheelId = id
}

export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}