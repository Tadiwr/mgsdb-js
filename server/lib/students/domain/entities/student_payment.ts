/**
 * Represents the payment status of a student
 * e.g their studentID and the amount they paid
 */

export class StudentPayment {
    studentId : string;

    /**A floating point representation of currency */
    amountPaid : number;
    paymentStatus : PaymentStatus;

    constructor(
        studentId: string,
        amountPaid: number,
        paymentStatus : PaymentStatus
    ) {
        this.studentId = studentId;
        this.amountPaid = amountPaid;
        this.paymentStatus = paymentStatus
    }

    public static fromDefault(studentID : string) : StudentPayment {
        return new StudentPayment(
            studentID,
            0.0,
            PaymentStatus.notPaid
        );
    }

}

export enum PaymentStatus {
    paid = "PAID",
    notPaid = "NOT_PAID",
    partiallyPaid = "PARTIALLY_PAID"
}