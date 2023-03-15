import { getWheels, setWheels } from "./database.js";
const wheels = getWheels()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "wheels") {
            const chosenOption = changeEvent.target.value
            setWheels(parseInt(changeEvent.target.value))
        }
    }
)


export const wheelsSelect = () => {
    let html = "<h2>Wheels</h2>"

    html += '<select id="wheels">'
    html += '<option value="0">Select a wheels package</option>'

    const arrayOfOptions = wheels.map( (wheels) => {
            return `<option value="${wheels.id}">${wheels.style}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}