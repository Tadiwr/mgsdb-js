import { Student, fromJson} from "../model/student";
import axios, {isCancel, AxiosError, type AxiosResponse} from 'axios';

export class GetAllStudents {

    private baseUrl = "http://localhost:3000/api";

    public async call()  : Promise<Student[]>{
        const resList : Student[] = []

        const res = await (axios.get(`${this.baseUrl}/students/`));
        
        for(let student in res.data) {
            resList.push(fromJson(student))
            console.log(student)
        }

        return resList;
    }

    public async callJson(): Promise<object[]> {
        const res = (await axios.get(`${this.baseUrl}/students/`)).data;
        const resList: any[] = [];
    
        for (const data of res) {
            resList.push(data);
        }
        return resList;
    }
}