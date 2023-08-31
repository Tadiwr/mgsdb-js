/**
 * An Entity Represents all the info about a student that is needed
 * for them to be registered into the School Database
 */
export class Student {
    
    student_id : number;
    firstname : string;
    surname : string;
    dob : Date;
    gender : string;
    form : number;

    constructor(
        id : number,
        firstname : string,
        surname : string,
        dob : Date,
        gender : string,
        form : number
    ) {
        this.student_id = id;
        this.firstname = firstname;
        this.surname = surname
        this.dob = dob;
        this.gender = gender;
        this.form = form;
    }
}