import { Student } from "../entities/student";

export interface StudentService {

    getStudent() : Promise<Student>
    addStudent() : Promise<DbResult>

}

/**
 * Enum for the possible database operation results
 */

export enum DbResult {
    done = "DONE",
    error = "ERROR"
}