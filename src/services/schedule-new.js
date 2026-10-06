import { apiConfig } from "./api-config.js";


export async function scheduleNew ({id, name, when}){
    try{
        await fetch(`${apiConfig.baseUrl}/schedules`, {
            method: 'POST',
            headers:{
                "content-type": "application/json" 
            },
            body: JSON.stringify({id, name, when})

            
        })
        alert("Agendamento realizado!")
    }catch(error){
        alert("Não foi possível realizar o agendamento!")
    }
}