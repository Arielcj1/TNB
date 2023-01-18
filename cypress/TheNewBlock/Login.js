/// <reference types="cypress"/>
export class Login {
  type_email(email) {
    cy.get(".felx-col > :nth-child(1) > .w-full").type(email);
  }
  type_password(pass) {
    cy.get(".felx-col > :nth-child(2) > div.w-full > .w-full").type(pass);
  }
  clic_sign_in() {
    cy.get(".bg-gunmetalLight").click();
    cy.wait(1000);
  }
  clic_AskForCode() {
    cy.get('.justify-around > [type="button"]').click();
  }
  type_Code(code) {
    cy.get("div.w-full > .w-full").type(code);
  }
  clic_Enter() {
    cy.get('[type="submit"]').click();
  }
}
