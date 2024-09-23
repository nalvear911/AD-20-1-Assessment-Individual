const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234, "Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
});

test('remove user from userController', () => {    
    let user = new User(1234, "Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.getUsers()).not.toContain(user);
});

// Tarea 2
// Prueba para agregar un usuario que no está en la lista
test('add user that is not in the list', () => {
    let user = new User(5678, "María", "maria@generation.org");
    expect(userController.getUsers()).not.toContain(user);
    userController.add(user);
    expect(userController.getUsers()).toContain(user);
});

// Prueba para eliminar un usuario que está en la lista
test('remove user that is not in the list', () => {
    let user1 = new User(1234, "Santiago", "santiago@generation.org");
    let user2 = new User(5678, "María", "maria@generation.org");
    userController.add(user1);
    userController.remove(user2);
    expect(userController.getUsers()).toContain(user1); 
});

// Pruebas para findByEmail()
test('find user by email', () => {
    let user = new User(1234, "Santiago", "santiago@generation.org");
    userController.add(user);
    expect(userController.findByEmail(user.email)).toEqual(user);
});

test('return undefined for non-existing email', () => {
    expect(userController.findByEmail("nonexistent@generation.org")).toBeUndefined();
});

// Pruebas para findById()
test('find user by id', () => {
    let user = new User(1234, "Santiago", "santiago@generation.org");
    userController.add(user);
    expect(userController.findById(1234)).toEqual(user);
});

test('return undefined for non-existing id', () => {
    expect(userController.findById(9999)).toBeUndefined();
});
