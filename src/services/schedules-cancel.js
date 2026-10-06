import { apiConfig } from "./api-config.js"

export async function scheduleCancel({ id }) {
    try {
        const response = await fetch(`${apiConfig.baseUrl}/schedules/${id}`, {
            method: "DELETE",
        })

        if (!response.ok) {
            throw new Error(`Erro ${response.status}`)
        }

        alert("Cancelamento realizado com sucesso!")
        return true
    } catch (error) {
        console.log(error)
        alert("Não foi possível cancelar o agendamento!")
        return false
    }
}