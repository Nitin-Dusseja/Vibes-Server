import { User } from "../models/user.js";
import { faker } from "@faker-js/faker";

const createUser = async (numUser) => {
  try {
    const userPromise = [];

    for (let index = 0; index < numUser; index++) {
      const tempUser = User.create({
        name: faker.person.firstName(),
        username: faker.internet.username(),
        bio: faker.lorem.sentence(10),
        password: "password",
        avatar: {
          public_id: faker.system.fileName(),
          url: faker.image.avatar(),
        },
      });
      userPromise.push(tempUser);
    }

    await Promise.all(userPromise);
    console.log("users are created");
    process.exit(1);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

export { createUser };
