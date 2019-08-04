import React from "react"
import classNames from "classnames"
import InputText from "./models/InputText"

export default (inputText: InputText) => (
    <div className={classNames("input-field", inputText.classNames)}>
        <div className="input-field-label">
            { inputText.label }
        </div>
        <input
            onChange={event => inputText.onChange(event.target)}
            value={inputText.value}
            className="input-field-text"/>
    </div>
)