import { defineStore } from "pinia";
import axios from "axios";

export const useStore = defineStore('useStore', {
    // state

    state: () => {
        return {
            clinicTitle: "",
            doctors: '',
            selectedDoctor: '',
            client: "",
        }
    },
    persist: true,

    // actions

    actions: {
        fill() {
            axios.get('https://dev-app.rnova.org/api/public/getUsers/?api_key=8471e36fd1d7d22996278025475d6593')
                .then(res => res.data)
                .then(result => {
                    this.doctors = result.data
                })
        },
        filter(id) {
            return this.doctors.filter(element => element.clinic.includes(id))
        },
        saveDoctor(doctor) {
            this.selectedDoctor = doctor
        },
        saveClient(client) {
            this.client = client
        },
        saveClinic(clinic) {
            this.clinicTitle = clinic.title
        }
    }
})