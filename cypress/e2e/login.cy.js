describe("OrangeHRM Login Feature", () => {
  // TC_001 - Login dengan username "Admin" (kapital) dan password valid
  it("TC_001 - Login valid dengan username huruf depan kapital", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').type("admin123");
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/dashboard");
    cy.contains("Dashboard").should("be.visible");
  });

  // TC_002 - Login dengan username dan password salah
  it("TC_002 - Login invalid dengan username dan password salah", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.get('input[name="username"]').type("Admin1");
    cy.get('input[name="password"]').type("admin1234");
    cy.get('button[type="submit"]').click();
    cy.contains("Invalid credentials").should("be.visible");
  });

  // TC_003 - Login dengan username huruf kecil
  it("TC_003 - Login valid dengan username huruf kecil", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.get('input[name="username"]').type("admin");
    cy.get('input[name="password"]').type("admin123");
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/dashboard");
    cy.contains("Dashboard").should("be.visible");
  });

  //menambahkan perintah
  Cypress.Commands.add("login", (username, password) => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
  });

  // TC_004 - Menambahkan User Baru
  it("TC_004 - Tambah user baru", () => {
    cy.login("Admin", "admin123"); // custom command login
    cy.get(":nth-child(2) > .oxd-main-menu-item").click(); // klik menu Admin
    cy.contains("Add").click();
    cy.get("form").within(() => {
      cy.get('input[name="firstName"]').type("Peter");
      cy.get('input[name="middleName"]').type("Supri");
      cy.get('input[name="lastName"]').type("Yadi");
      cy.get('.oxd-input').eq(3).clear().type("0394");
      cy.root().submit();
    });
    cy.contains("Successfully Saved").should("be.visible");
  });
  
 // TC_005 - Menghapus user 
  it("TC_005 - Hapus user admin dengan username Peter", () => {
    cy.login("Admin", "admin123");
    cy.get(":nth-child(2) > .oxd-main-menu-item").click();
    cy.get("form").within(() => {
      cy.get('input[class="oxd-input oxd-input--active"]').type("0394");
      cy.contains("Search").click();
    });
    cy.contains("0394");
        cy.get("i.oxd-icon.bi-trash").click();
    cy.contains("Yes, Delete").click();
    cy.contains("Successfully Deleted").should("be.visible");
  });
  
