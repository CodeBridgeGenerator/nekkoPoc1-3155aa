
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
customerPresent: faker.datatype.boolean(),
cashierPresent: faker.datatype.boolean(),
customerCount: faker.finance.amount(),
unattendedSeconds: faker.finance.amount(),
alertActive: faker.datatype.boolean(),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
