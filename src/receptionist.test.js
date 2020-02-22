import Receptionist from './receptionist';

describe('when using receptionist', () => {
  function createReceptionistWithPerson (person) {
    const receptionist = new Receptionist();
    if (Array.isArray(person)) {
      person.forEach(value => receptionist.register(value));
    } else {
      receptionist.register(person);
    }

    return receptionist;
  }

  it('should register person to receptionist', () => {
    const receptionist = new Receptionist();
    expect(receptionist.register({ id: 1, name: 'Edogawa Conan' }))
      .toBeTruthy();
  });

  it('should get person', () => {
    const person = { id: 1, name: 'Edogawa Conan' };
    const receptionist = createReceptionistWithPerson(person);
    expect(receptionist.getPerson(1)).toEqual(person);
  });

  it('should get correct person', () => {
    const persons = [
      { id: 1, name: 'Edogawa Conan' },
      { id: 2, name: 'Kurusaki Ichigo' }
    ];
    const receptionist = createReceptionistWithPerson(persons);
    expect(receptionist.getPerson(1)).toEqual(persons[0]);
  });

  it('should get correct person with same name', () => {
    const persons = [
      { id: 1, name: 'Same Name' },
      { id: 2, name: 'Same Name' }
    ];
    const receptionist = createReceptionistWithPerson(persons);
    expect(receptionist.getPerson(1)).toEqual(persons[0]);
  });

  it('should get correct person multiple times', () => {
    const persons = [
      { id: 1, name: 'Edogawa Conan' },
      { id: 2, name: 'Kurusaki Ichigo' }
    ];
    const receptionist = createReceptionistWithPerson(persons);
    expect(receptionist.getPerson(1)).toEqual(persons[0]);
    expect(receptionist.getPerson(1)).toEqual(persons[0]);
  });

  it('should throw if person is null or undefined when register', () => {
    const receptionist = new Receptionist();
    expect(() => receptionist.register()).toThrow('Invalid person');
    expect(() => receptionist.register(null)).toThrow('Invalid person');
    expect(() => receptionist.register(undefined)).toThrow('Invalid person');
    expect(() => receptionist.register({})).toThrow('Invalid person');
    expect(() => receptionist.register({ id: 1 })).toThrow('Invalid person');
    expect(() => receptionist.register({ name: 'Good' })).toThrow('Invalid person');
  });

  it('should throw if person has already exist', () => {
    const receptionist = new Receptionist();
    receptionist.register({ id: 1, name: 'Edogawa Conan' });
    expect(() => receptionist.register({ id: 1, name: 'Kurosaki Ichigo' })).toThrow('Person already exist');
  });

  it('should throw if person does not exist', () => {
    const receptionist = new Receptionist();
    const idThatDoesNotExist = 999;

    expect(() => receptionist.getPerson(idThatDoesNotExist)).toThrow('Person not found');
  });
});
