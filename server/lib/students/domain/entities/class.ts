/**
 * A Entity that holds information about a single class
 */
export class Class {

    classID : string;
    teacherID : string;
    form : Form;
    className: string;

    constructor(
        classID : string,
        teacherID : string,
        form : Form,
        className: string

    ) {
        this.classID = classID;
        this.teacherID = teacherID;
        this.form = form;
        this.className = className;
    }
}


/**
 * Represents the grade form that a student is in
 * e.g Form Three would be Form.three
 */
enum Form {
    one = 1,
    two = 2,
    three = 3,
    four = 4,
    five = 5,
    six = 6,
}