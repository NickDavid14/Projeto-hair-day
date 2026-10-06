import { schedulesDay } from "./load.js"
import { scheduleCancel } from "../../services/schedules-cancel.js"

const periods = document.querySelectorAll(".period")

periods.forEach((period) => {
    period.addEventListener("click", async (event) => {
        if (!event.target.classList.contains("cancel-icon")) return

        const item = event.target.closest("li")
        const { id } = item.dataset

        if (!id) return

        const isConfirm = confirm("Tem certeza que deseja cancelar esse agendamento?")
        if (!isConfirm) return

        const cancelled = await scheduleCancel({ id })

        if (cancelled) {
            await schedulesDay()
        }
    })
})