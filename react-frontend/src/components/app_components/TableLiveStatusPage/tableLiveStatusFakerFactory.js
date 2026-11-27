
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
tableCode: faker.lorem.sentence(""),
tableOccupied: faker.datatype.boolean(),
customerCount: faker.finance.amount(),
cleaningRequired: faker.datatype.boolean(),
attendanceRequired: faker.datatype.boolean(),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
