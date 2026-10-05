import dayjs from "dayjs";

const form = document.querySelector("form");
const clientName = document.getElementById("client");
const selectedDate = document.getElementById("date");
selectedDate.value = dayjs(new Date()).format("YYYY-MM-DD");


const selectedDateMin = dayjs(new Date()).format("YYYY-MM-DD");
const inputToday = document.getElementById("date");


form.onsubmit = (event) => {
    event.preventDefault();
    try {
        const name = clientName.value.trim()

        if (!name) {
            return alert("Por favor, insira o nome do cliente!");
            
        }

        const hourSelected = document.querySelector(".hour-selected");

        if (!hourSelected) {
            return alert("Por favor, selecione um horário!");
        }

        const [hour] = hourSelected.innerText.split(":");
        const when = dayjs(selectedDate.value).add(hour, "hour")
        const id = new Date().getTime();
        console.log({
            id,
            name,
            when
        })
        

    }catch (error) {
        alert("Não foi possível realizar o agendamento. Tente novamente mais tarde.");
    }
}
