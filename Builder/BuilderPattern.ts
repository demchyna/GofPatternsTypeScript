
    export class UserBuilder {
        private userName: string;
        private userAge: number;
        private userPhone: string;
        private userAddress: string;

        constructor(name: string) {
            this.userName = name;
        }

        getName() {
            return this.userName;
        }

        age(value: number): UserBuilder {
            this.userAge = value;
            return this;
        }

        getAge() {
            return this.userAge;
        }

        phone(value: string): UserBuilder {
            this.userPhone = value;
            return this;
        }

        getPhone() {
            return this.userPhone;
        }

        address(value: string): UserBuilder {
            this.userAddress = value;
            return this;
        }

        getAddress() {
            return this.userAddress;
        }

        build(): User {
            return new User(this);
        }
    }

    export class User {
        private name: string;
        private age: number;
        private phone: string;
        private address: string;

        constructor(builder: UserBuilder) {
            this.name = builder.getName();
            this.age = builder.getAge();
            this.phone = builder.getPhone();
            this.address = builder.getAddress()
        }

        getName() {
            return this.name;
        }
        getAge() {
            return this.age;
        }
        getPhone() {
            return this.phone;
        }
        getAddress() {
            return this.address;
        }
    }

