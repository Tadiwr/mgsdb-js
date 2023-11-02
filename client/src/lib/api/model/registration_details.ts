import { fromJson } from "./student";

export class RegistrationDetails {

    public firstName : string;
    public surname : string;
    public email : string;
    public dob : string;
    public phoneNumber : string;
    public gender : string;
    public form : string;

    constructor(
        firstName : string,
        surname : string,
        email : string,
        dob : string,
        phoneNumber : string,
        gender : string,
        form : string,
    ) {
        this.firstName = firstName;
        this.surname = surname;
        this.email = email;
        this.dob = dob;
        this.phoneNumber = phoneNumber;
        this.gender = gender;
        this.form = form;
    }


    public static empty() {
        return new RegistrationDetails(
            "",
            "",
            "",
            "",
            "",
            "",
            "",
        );
    }

    public toJson() : object {
        return {
            "surname": this.surname,
            "firstname": this.firstName,
            "dob": this.dob,
            "phone_number": this.phoneNumber,
            "email": this.email,
            "gender": this.gender,
            "form": this.form
        };
    }

    public toList() : string[] {
        return [
            this.firstName,
            this.surname,
            this.email,
            this.phoneNumber,
            this.form,
            this.gender,
            this.dob
        ];
    }

    public presenceCheck() : boolean {
        let success : boolean = true;

        let propList = this.toList() as string[];

        propList.forEach((prop) => {
            success = prop != "";
        })

        return success
    }

    /// Checks 
    public phoneNumberCheck() {
        const l = this.phoneNumber.length
        return l == 10 || l == 12;
    }

    public validate() : string {
        let message : string = '';
        let success = true;

        if(!this.presenceCheck()) {
            message = "You left a field empty";
            success = false;
        }

        if (!this.phoneNumberCheck()) {
            message = "You entered an invalid phone number";
            success = false;
        }

        if (success) {
            message = "OK"
        }

        return message;
        
    }
}
