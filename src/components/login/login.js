import React from "react";
import {Button, Input, InputGroup} from "reactstrap";


function loging() {
    <>
        <div>
            <InputGroup>
                <Input placeholder="username"/>
            </InputGroup>
            <br/>
            <InputGroup>
                <Input placeholder="password"/>
            </InputGroup>
        </div>
        <Button onClick={
            () => {
                loging()
            }
        }>Loging</Button>
    </>
}
export default loging
