import { StudentInfo } from "../entities/student_info";

export interface StudentService {

    getStudent() : Promise<StudentInfo>
    addStudent() : Promise<DbResult>

}

/**
 * Enum for the possible database operation results
 */

export enum DbResult {
    done = "DONE",
    error = "ERROR"
}