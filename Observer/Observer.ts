import {Subject} from "./Subject";

export abstract class Observer {
    protected  subject: Subject;
    abstract  update(): void;
}