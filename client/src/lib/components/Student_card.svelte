<script lang="ts">
    import { Student } from "../api/model/student";
    import pathUrls, { currentStudentStore } from "../stores";
    import Link from "./Link.svelte";

    export let studentData : Student ;

    function updateCurrentStudent() {
        currentStudentStore.update((old) => {
            return studentData;
        });

        currentStudentStore.set(studentData)
    }
</script>

<main>
    <div class="con">
        <h4>First Name: {studentData.firstname.toUpperCase()}</h4>
        <h4>Surname: {studentData.surname.toLocaleUpperCase()}</h4>
        <h4>Form: {studentData.form}</h4>

        <Link 
            title={`View full details for ${studentData.surname}`} 
            path={pathUrls.studentInfo}
            linkColor="purple"
            beforeNav={updateCurrentStudent}
        />
        
    </div>

    
</main>


<style>

    main {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
    }

    .con {
        border: solid;
        width: 75%;
        padding: 10px;
        border-radius: 10px;
    }
</style>
