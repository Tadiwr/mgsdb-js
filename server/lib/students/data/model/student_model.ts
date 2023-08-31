import { Student } from "../../domain/entities/student";
import {} from 'express'

export class StudentModel extends Student {

    constructor(
        id : number,
        firstname : string,
        surname : string,
        dob : Date,
        gender : string,
        form : number,
        phone_number : string,
        email : string
    ) {
        super(
            id,
            firstname,
            surname,
            dob,
            gender,
            form,
            phone_number,
            email
        )
    }    

    public static fromJson(data : any) : StudentModel {
        return new StudentModel(
            data["id"],
            data["firstname"],
            data["surname"],
            data["dob"],
            data["gender"],
            data["form"],
            data["phone_number"],
            data["email"]
        )
    }
    public toSqlStatement() : string {
        const tableName = 'student_info'
        return `
            INSERT INTO ${tableName}
            (firstname, surname, dob, gender, form, phone_number, email)
            VALUE (
                '${this.firstname}',
                '${this.surname}',
                '${this.dob}',
                '${this.gender}',
                ${this.form},
                '${this.phone_number}',
                '${this.email}'
            )
        `
    }

    public getUpdateSql() : string {
        const tableName = 'student_info';
        return `
            UPDATE ${tableName}
            
            SET firstname = '${this.firstname}',
                surname ='${this.surname}',
                dob ='${this.dob}',
                gender ='${this.gender}',
                form =${this.form},
                phone_number ='${this.phone_number}',
                email ='${this.email}'

            WHERE student_id = ${this.student_id};
        `
    }
}