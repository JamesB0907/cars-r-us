import { techSelect } from "./tech.js"
import { interiorsSelect } from "./interiors.js"
import { wheelsSelect } from "./wheels.js"
import { paintsSelect } from "./paints.js"
import { Orders } from "./orders.js"
import { addCustomOrder } from "./database.js"

document.addEventListener(
    "click",
    (event) => {
        const itemClicked = event.target

        if (itemClicked.id.startsWith("orderButton")) {
        
        addCustomOrder()
        }
    }
)

export const cars = () => {
    return `
        <h1>Cars-R-Us</h1>

        <article class="choices">
            <section class="choices__wheels options">
                ${wheelsSelect()}
            </section>
            <section class="choices__Tech options">
                ${techSelect()}
            </section>
            <section class="choices__paint options">
                ${paintsSelect()}
            </section>
            <section class="choices__interior options">
                ${interiorsSelect()}
            </section>
            
        </article>
        <article>
            <button id="orderButton"> Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2> ${Orders()}
        </article>
    `

}
