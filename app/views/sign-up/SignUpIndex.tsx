import React, {Dispatch, SetStateAction, useState} from "react"
import {Some} from "monet"
import InputTextField from "./InputTextField"

export default () => {
    const [firstName, setFirstName]: [string, Dispatch<SetStateAction<string>>] = useState(String())
    const [lastName, setLastName]: [string, Dispatch<SetStateAction<string>>] = useState(String())
    const [email, setEmail]: [string, Dispatch<SetStateAction<string>>] = useState(String())
    const [username, setUsername]: [string, Dispatch<SetStateAction<string>>] = useState(String())
    const [password, setPassword]: [string, Dispatch<SetStateAction<string>>] = useState(String())
    const [confirmPassword, setConfirmPassword]: [string, Dispatch<SetStateAction<string>>] = useState(String())

    return (
        <div className="sign-up-form">
            <InputTextField
                label="First Name"
                value={firstName}
                onChange={target => setFirstName(target.value)}
                classNames={Some(["first-name"])}/>

            <InputTextField
                label="Last Name"
                value={lastName}
                onChange={target => setLastName(target.value)}
                classNames={Some(["last-name"])}/>

            <InputTextField
                label="Email"
                value={email}
                onChange={target => setEmail(target.value)}
                classNames={Some(["email"])}/>

            <InputTextField
                label="Username"
                value={username}
                onChange={target => setUsername(target.value)}
                classNames={Some(["username"])}/>

            <InputTextField
                label="Password"
                value={password}
                onChange={target => setPassword(target.value)}
                classNames={Some(["password"])}/>

            <InputTextField
                label="Confirm Password"
                value={confirmPassword}
                onChange={target => setConfirmPassword(target.value)}
                classNames={Some(["confirm-password"])}/>
        </div>
    )
}