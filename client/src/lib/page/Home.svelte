<script lang="ts" >
    import { GetAllStudents } from "../api/usecases/get_students";
    import Table from "../components/table.svelte";

    const usecase = new GetAllStudents();

    const columns = [
    { key: "student_id", title: "Student ID", value: (v : any) => v.student_id },
    { key: "surname", title: "Surname", value: (v : any) => v.surname },
    { key: "firstname", title: "First Name", value: (v : any) => v.firstname },
    { key: "dob", title: "Date of Birth", value: (v : any) => v.dob },
    { key: "phone_number", title: "Phone Number", value: (v : any) => v.phone_number },
    { key: "email", title: "Email", value: (v : any) => v.email },
    { key: "gender", title: "Gender", value: (v : any) => v.gender },
    { key: "form", title: "Form", value: (v : any) => v.form },
];

</script>
<main>
    <h1>Home</h1>
</main>

