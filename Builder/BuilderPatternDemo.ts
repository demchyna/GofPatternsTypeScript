import {User, UserBuilder} from "./BuilderPattern";

function main(): void {

    let user: User = new UserBuilder("Vasyl")
        .age(24)
        .phone("0845674195")
        .address("Shevchenka")
        .build();
    console.log(user.getName() + " " + user.getAge() + " " + user.getPhone() + " " + user.getAddress());
}

main();