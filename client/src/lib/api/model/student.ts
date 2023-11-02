export class Student {
    
    student_id : number;
    firstname : string;
    surname : string;
    dob : string;
    phone_number : string;
    gender : string;
    form : number;
    email : string

    constructor(
        id : number,
        firstname : string,
        surname : string,
        dob : string,
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

    public static empty() : Student{
        return new Student(
            -1,
            "",
            "",
            "",
            "",
            0,
            "",
            ""
        )
    }
}


export const fromJson = (data : any) : Student => {
    return new Student(
        data["student_id"],
        data["firstname"],
        data["surname"],
        data["dob"],
        data["gender"],
        data["form"],
        data["phone_number"],
        data["email"]
    )
}