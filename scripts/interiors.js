import { getInterior, setInterior } from "./database.js"
const interior = getInterior()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "interiors") {
            const chosenOption = changeEvent.target.value
            setInterior(parseInt(changeEvent.target.value))
        }
    }
)

export const interiorsSelect = () => {
    let html = "<h2>Interiors</h2>"

    html += '<select id="interiors">'
    html += '<option value="0">Select an interiors package</option>'

    const arrayOfOptions = interior.map( (interior) => {
            return `<option value="${interior.id}">${interior.material}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}