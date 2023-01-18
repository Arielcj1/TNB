// <reference types="cypress"/>
import { Login } from "../TheNewBlock/Login";
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
describe("Login page", () => {
  const login = new Login();
  beforeEach(function () {
    cy.fixture("datosUsuario").then((variables) => {
      this.variables = variables;
      cy.visit(this.variables.url);
    });
  });
  it("Verificar login de un usuario existente", function () {
    login.type_email(this.variables.email);
    login.type_password(this.variables.password);
    login.clic_sign_in();
    login.clic_AskForCode();
    //cy.wait(10000)
    //login.type_Code("222222");
    //login.clic_Enter();
  });
});
