import { writable } from "svelte/store";
import { Student } from "./api/model/student";

const pathUrls = {
    home : "/",
    addStudent : "/add-student",
    getStudent : "/get-student",
    studentInfo : "/student-info"
}

const currentStudent : Student = Student.empty();


export default pathUrls;
export const urlStore = writable(pathUrls.home)
export const currentStudentStore = writable(currentStudent)


export function navigateTo(path : string) {
    urlStore.update((old) => {
        console.log(`Used navigation function to navigate to ${path}`)
        return path;
    })   
}