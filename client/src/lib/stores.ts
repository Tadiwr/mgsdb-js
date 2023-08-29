import { writable } from "svelte/store";

const pathUrls = {
    home : "/",
    addStudent : "/add-student",
    getStudent : "/get-student",
}

export default pathUrls;
export const urlStore = writable(pathUrls.home)