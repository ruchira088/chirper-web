import {Maybe} from "monet";

export default interface InputText {
    readonly label: string
    readonly value: string
    readonly classNames: Maybe<string[]>
    onChange(inputElement: HTMLInputElement): void
}