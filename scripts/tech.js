import { getTech, setTech } from "./database.js"
const tech = getTech()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "tech") {
            const chosenOption = changeEvent.target.value
            setTech(parseInt(changeEvent.target.value))
        }
    }
)


export const techSelect = () => {
    let html = "<h2>Technologies</h2>"

    html += '<select id="tech">'
    html += '<option value="0">Select a technology package</option>'

    const arrayOfOptions = tech.map( (tech) => {
            return `<option value="${tech.id}">${tech.packageName}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}