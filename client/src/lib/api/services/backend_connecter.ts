import 'axios';
import axios from 'axios';
import { Student, fromJson } from '../model/student';
import type { RegistrationDetails } from '../model/registration_details';

export class BackendConnector {
    private domainName = "http://localhost:3000/api/students";

// Array<Student> Array of Student 
    public async getStudentWithName(studentName : string) : Promise<Student[]>  {
        const reqUrl = `${this.domainName}/name/${studentName}`;
        let output : Student[] = [];
        output.pop();

        const data = (await axios.get(reqUrl)).data as object[]

        data.forEach((student) => {
            output.push(fromJson(student));
        });

        return output;
    }

    /* Function that sends a request to the server to add a student to the database*/
    
    public async addStudent(data : RegistrationDetails) : Promise<boolean> {

        const reqUrl = `${this.domainName}/add`;
        const result = (await axios.post(reqUrl, data.toJson()));

        return result.status == 200;;

    }

    public async deleteStudent(studentID : number) : Promise<boolean> {
        const reqUrl = `${this.domainName}/delete/${studentID}`;

        const res = (await axios.delete(reqUrl))

        console.log(res.data);

        return res.status == 200;
    }

    public async getAllStudents() : Promise<Student[]> {
        const reqUrl = `${this.domainName}`;
        let output : Student[] = [];

        const data = (await axios.get(reqUrl)).data as object[]

        data.forEach((student) => {
            output.push(fromJson(student));
        });

        return output;
    }
}