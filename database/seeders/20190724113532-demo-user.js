/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import faker from 'faker';
import Helper from '../../helpers/Auth';

const password = Helper.hashPassword('passwordHash');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          id: 'ffe25dbe-29ea-4759-8461-ed116f6739dd',
          firstName: 'John',
          lastName: 'Done',
          email: 'johndoe@test.com',
          isVerified: true,
          type: 'user',
          password: `${password}`,
        },
        {
          id: '1a9589fb-5b25-4df9-92ee-2b20ba4f9407',
          firstName: 'Aana',
          lastName: 'Bella',
          email: 'BA@test.com',
          isVerified: true,
          password: `${password}`,
        },
        {
          id: '8c9589fb-5b25-4df9-92ee-2b20ba4f9407',
          firstName: 'Jane',
          lastName: 'Done',
          email: 'janedoe@test.com',
          isVerified: true,
          type: 'user',
          password: `${password}`,
        },
        {
          id: 'fdfe8617-208d-4b87-a000-5d6840786ab8',
          firstName: 'Mike',
          lastName: 'Mike',
          email: 'mikemike@test.com',
          isVerified: false,
          type: 'user',
          password: `${password}`,
        },
        {
          id: '90356e2a-2f35-48e9-9add-9811c23f2122',
          firstName: 'David',
          lastName: 'Noah',
          email: 'davidnoah@test.com',
          isVerified: false,
          type: 'user',
          password: `${password}`
        },
        {
          id: '588ae2cd-de3f-404a-87b3-8a6d50864833',
          firstName: 'Pelumi',
          lastName: 'Noah',
          email: 'pelumi@test.com',
          password: Helper.hashPassword('PasswoRD123__'),
          isVerified: true,
          type: 'user'
        },
        {
          id: '356304da-50bc-4488-9c85-88874a9efb16',
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          password: Helper.hashPassword('PasswoRD123__'),
          isVerified: true,
          type: 'user'
        },
        {
          id: '51d509cc-b787-4abf-b176-fdb63cb9ed44',
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          password: Helper.hashPassword('PasswoRD123__'),
          isVerified: true,
          type: 'user'
        },
        {
          id: '1810e81d-9e5c-4a50-97e2-410fa230e166',
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          password: Helper.hashPassword('PasswoRD123__'),
          isVerified: true,
          type: 'user'
        },
        {
          id: 'c3ee24b4-46ea-4b96-bad9-a114a8baf7a8',
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          password: Helper.hashPassword('PasswoRD123__'),
          isVerified: true,
          type: 'user'
        },
        {
          id: 'a3868c24-6648-434c-8085-cf16ceb8915c',
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          password: Helper.hashPassword('PasswoRD123__'),
          isVerified: true,
          type: 'user'
        },
        {
          id: 'cf4aa1aa-7996-400e-a92d-b0ee07c91277',
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          password: Helper.hashPassword('PasswoRD123__'),
          type: 'user'

        },
        {
          id: '24000aa6-8bb4-48a5-b65a-3ab8e91ddbed',
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          password: Helper.hashPassword('PasswoRD123__'),
          type: 'user'

        },
        {
          id: 'dfd40601-af8a-4250-bb7c-1f01bb2de6d5',
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          password: Helper.hashPassword('PasswoRD123__'),
          type: 'user'

        },
        {
          id: 'b604652c-4332-4633-9217-a1d921024b6a',
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          password: Helper.hashPassword('PasswoRD123__'),
          type: 'user'

        },
        {
          id: '7c7a6097-2626-4136-b719-43f65977e021',
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          password: Helper.hashPassword('PasswoRD123__'),
          isVerified: true,
          type: 'user'
        },
        {
          id: '32fd7e50-b687-447f-af7c-c209b8f98765',
          firstName: 'Dave',
          lastName: 'Davies',
          email: 'dd@test.com',
          password: Helper.hashPassword('PasswoRD123__'),
          isVerified: true,
          type: 'user'
        },
        {
          id: '0ec73114-c834-4dc9-838d-089083680763',
          firstName: 'Tunji',
          lastName: 'Noah',
          email: 'tunji@test.com',
          password: Helper.hashPassword('PasswoRD123__'),
          isVerified: false,
          type: 'user'
        },
        {
          id: 'e89695aa-1f7e-468c-89dd-5fc2332e31f1',
          firstName: 'John',
          lastName: 'Kamali',
          email: 'john.kamali@outlook.com',
          password: Helper.hashPassword('P455w0rd'),
          isVerified: true,
          type: 'user',
          verificationToken: '#john.kamali@outlook.com#'
        },
        {
          id: '6675f038-8c66-4485-9dcf-4660ac27ccd1',
          firstName: 'Fatima',
          lastName: 'Kamali',
          email: 'fatima.kamali@outlook.com',
          password: Helper.hashPassword('P455w0rd'),
          isVerified: true,
          type: 'user',
          verificationToken: '#fatima.kamali@outlook.com#'
        },
        {
          id: 'e509854f-80df-413f-809f-66b5968d03ae',
          firstName: 'Sophie',
          lastName: 'Kamali',
          email: 'sophie.kamali@outlook.com',
          password: Helper.hashPassword('P455w0rd'),
          isVerified: false,
          type: 'user',
          verificationToken: '#sophie.kamali@outlook.com#'
        },
        {
          id: 'f876854f-80df-413f-809f-66b5968d03fa',
          firstName: 'Victor',
          lastName: 'Ajayi',
          email: 'saintyomex@gmail.com',
          password: Helper.hashPassword('P455w0rd'),
          isVerified: false,
          type: 'user',
          verificationToken: '$2a$10$i79.wjir1Y4VU60ompBe.evpStnMeAcJVVBCjkpuqasgmr4fFwEX.'
        },
        {
          id: '7b76954f-80df-413f-809f-66b5968d03fa',
          firstName: 'Victor',
          lastName: 'Ajayi',
          email: 'seconduser@outlook.com',
          password: Helper.hashPassword('P455w0rd'),
          isVerified: false,
          type: 'user',
          verificationToken: '$2a$10$i79.ksdjksjdks.ksdkshdksehdjahdjah.'
        },
        {
          id: '793213e7-044c-4f5e-9688-1884461b189f',
          firstName: 'Jamal',
          lastName: 'Sabri',
          email: 'jamal.sabri@mail.com',
          password: Helper.hashPassword('P455w0rd'),
          isVerified: true,
          verificationToken: 'jamal.sabri@outlook.com#',
          type: 'super-admin'
        },
        {
          id: '72c4f1fe-d442-4043-a2d1-53cf7ee273c7',
          firstName: 'banned ',
          lastName: 'guy',
          email: 'bannedguy@test.com',
          isVerified: true,
          verificationToken: 'bannedguy@test.com#',
          type: 'user',
          status: 'inactive',
          password: `${password}`,
        },
        {
          id: '7b76954f-80df-413f-809f-66b5968d03fb',
          firstName: 'Alex',
          lastName: 'Kamali',
          email: 'alex.kamali@outlook.com',
          password: Helper.hashPassword('P455w0rd'),
          isVerified: true,
          type: 'admin',
          verificationToken: '#alex.kamali@outlook.com#'
        },
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
