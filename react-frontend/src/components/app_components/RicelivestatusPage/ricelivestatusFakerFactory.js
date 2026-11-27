
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
boxId: faker.lorem.sentence(""),
boxStatus: faker.datatype.boolean(""),
estimatedPlates: faker.datatype.number(""),
refillThreshold: faker.date.past(""),
refillRequired: faker.date.past(""),
updatedAt: faker.date.past(""),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
