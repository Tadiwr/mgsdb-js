export class Student {
    
    student_id : number;
    firstname : string;
    surname : string;
    dob : Date;
    phone_number : string;
    gender : string;
    form : number;
    email : string

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
        this.student_id = id;
        this.firstname = firstname;
        this.surname = surname
        this.dob = dob;
        this.gender = gender;
        this.form = form;
        this.phone_number = phone_number;
        this.email = email;
    }
}


export const fromJson = (data : any) : Student => {
    return new Student(
        data["id"],
        data["firtname"],
        data["surname"],
        data["dob"],
        data["gender"],
        data["form"],
        data["phone_number"],
        data["email"]
    )
}