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

  // TC_004 - 
  it("", () => {
    
  });
  
  // TC_005 - 
  it("", () => {
    
  });
  
  /*
  Cypress.Commands.add("login", (username, password) => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
  });

  // TC_004 - Menambahkan user admin baru
  it("TC_004 - Tambah user admin baru", () => {
    cy.login("Admin", "admin123"); // custom command login
    cy.get(":nth-child(1) > .oxd-main-menu-item").click(); // klik menu Admin
    cy.contains("Add").click();
    cy.get("form").within(() => {
      cy.get('input[name="username"]').type("Peter");
      cy.get('input[name="password"]').type("Qwerty!@123");
      cy.get('input[name="confirmPassword"]').type("Qwerty!@123");
      cy.root().submit();
    });
    cy.contains("Successfully Saved").should("be.visible");
  });

  // TC_005 - Menghapus user admin
  it("TC_005 - Hapus user admin dengan username Peter", () => {
    cy.login("Admin", "admin123");
    cy.get(":nth-child(1) > .oxd-main-menu-item").click();
    cy.get('input[placeholder="Search"]').type("Peter");
    cy.contains("Search").click();
    cy.contains("Peter")
      .parents("tr")
      .within(() => {
        cy.get(".oxd-icon-button").click(); // klik delete
      });
    cy.contains("Yes, Delete").click();
    cy.contains("Successfully Deleted").should("be.visible");
  });

  // TC_006 - Edit role user admin
  it("TC_006 - Edit role user Mudry dari ESS ke Admin", () => {
    cy.login("Admin", "admin123");
    cy.get(":nth-child(1) > .oxd-main-menu-item").click();
    cy.get('input[placeholder="Search"]').type("Mudry");
    cy.contains("Search").click();
    cy.contains("Mudry")
      .parents("tr")
      .within(() => {
        cy.get(".oxd-icon-button").eq(0).click(); // klik edit
      });
    cy.get('select[name="role"]').select("Admin");
    cy.contains("Save").click();
    cy.contains("Successfully Updated").should("be.visible");
  });

  // TC_007 - Tambah employee baru
  it("TC_007 - Tambah user employee baru", () => {
    cy.login("Admin", "admin123");
    cy.get(":nth-child(2) > .oxd-main-menu-item").click(); // klik menu PIM
    cy.contains("Add Employee").click();
    cy.get('input[name="firstName"]').type("Mudry");
    cy.get('input[name="middleName"]').type("Peter");
    cy.get('input[name="lastName"]').type("Jaya");
    cy.get('input[name="employeeId"]').clear().type("0491");
    cy.get('input[type="checkbox"]').check(); // create login detail
    cy.get('input[name="username"]').type("Mudry");
    cy.get('input[name="password"]').type("Qwerty!@123");
    cy.get('input[name="confirmPassword"]').type("Qwerty!@123");
    cy.contains("Save").click();
    cy.contains("Successfully Saved").should("be.visible");
  });
*/
});

