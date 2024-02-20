import { defineStore } from "pinia";
import axios from "axios";

export const useDoctorsStore = defineStore('DoctorsStore', {
    // state

    state: () => ({
        doctors: [],
        selectedDoctor: '',
    }),
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
        save(doctor) {
            this.selectedDoctor = doctor
        }
    }
})