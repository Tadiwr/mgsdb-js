import axios from "axios";

export class SearchStudent {

    private baseUrl = "http://localhost:3000/api";

    public async callJson(value:string): Promise<object[]> {
        const res = (await axios.get(`${this.baseUrl}/students/name/${value}`)).data;
        const resList: any[] = [];
    
        for (const data of res) {
            resList.push(data);
        }
        return resList;
    }
}