<script>
    import { RegistrationDetails } from "../api/model/registration_details";
    import { BackendConnector } from "../api/services/backend_connecter";

    const genders = [
        {
            "display" : "Female",
            "value":"F"
        },
        {
            "display": "Male",
            "value": "M"
        }
    ];
    const forms = [1, 2, 3, 4, 5, 6];

    $: registrationData = RegistrationDetails.empty();
    $: message = '';

    async function onSubmit() {
        const api = new BackendConnector();
        const validationResult = registrationData.validate()


        if (validationResult == "OK") {
            const success = (await api.addStudent(registrationData))
            if(success) {
                message = "New student has been added successfully";
                registrationData = RegistrationDetails.empty();
            } else {
                message = "Something happened 🤕💔";
            }
        } else {
            message = validationResult;
        }

        
    }

</script>

<main>
    <h1>Student Form</h1>

    <div class="con">
        <input placeholder="First Name" bind:value={registrationData.firstName} />
        <input placeholder="Surname" bind:value={registrationData.surname}/>
        <input placeholder="DOB" bind:value={registrationData.dob} type="date" />
        <input placeholder="Phone Number" bind:value={registrationData.phoneNumber} type="tel"/>
        <input placeholder="Email" bind:value={registrationData.email} type="email" />

        
        <h3>Gender</h3>
        <select name="Gender" id="gender" bind:value={registrationData.gender}>
            {#each genders as gender}
            <option value={gender["value"]}>{gender["display"]}</option>
            {/each}
        </select>
        <br>
        <h3>Form</h3>
        <select name="Form" id="form" bind:value={registrationData.form} >
            {#each forms as form}
                <option value={form}>{form}</option>
            {/each}
        </select>

        <br>

        <button on:click={onSubmit} >Submit Form</button>

        <p>{message}</p>
    </div>

</main>

<style>

    main {
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
    }

    .con {
        flex: 1;
        display: flex;
        flex-direction: column;
        width: 50%;
        justify-content: center;
        align-items: center;
    }


    input {
        background-color: rgb(255, 255, 255);
        border-radius: 10px;
        height: 40px;
        width: 100%;
        margin: 10px;
        border: solid;
        border-color: rgb(88, 88, 88);
        padding-left: 10px;
        color: black;
    }

    button {
        width: 100%;
        margin-bottom: 20px;
        height: 50px;
    }
    select {
        width: 100%;
        height: 50px;
    }

    option {
        height: 50px;
        width: 100%;
    }

</style>