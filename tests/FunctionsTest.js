describe("HTML and CSS Tests", function() {
  
  // Test for the Table
  describe("Table Section", function() {
    it("should have a table with the correct number of rows and columns", function() {
      const rows = document.querySelectorAll("#table-section tbody tr");
      const cols = document.querySelectorAll("#table-section thead th");

      expect(rows.length).toBe(2); // Checking the number of rows
      expect(cols.length).toBe(3); // Checking the number of columns
    });

    it("should have the correct header background color", function() {
      const header = document.querySelector("#table-section th");
      const bgColor = window.getComputedStyle(header).backgroundColor;
      expect(bgColor).toBe("rgb(230, 247, 255)"); // Light blue
    });
  });
  

  // Test for the Form
  describe("Form Section", function() {
    it("should have input fields with correct border color", function() {
      const inputText = document.querySelector("#form-section input[type='text']");
      const inputEmail = document.querySelector("#form-section input[type='email']");
      const borderColor = window.getComputedStyle(inputText).borderColor;

      expect(borderColor).toBe("rgb(204, 204, 204)"); // Gray
    });

    it("should have the submit button with correct background color", function() {
      const submitButton = document.querySelector("#form-section input[type='submit']");
      const bgColor = window.getComputedStyle(submitButton).backgroundColor;

      expect(bgColor).toBe("rgb(0, 123, 255)"); // Blue
    });
  });

  // Test for the Ordered List
  describe("Ordered List Section", function() {
    it("should have ordered list with decimal style", function() {
      const ol = document.querySelector("#ordered-list-section ol");
      const listStyleType = window.getComputedStyle(ol).listStyleType;

      expect(listStyleType).toBe("decimal");
    });
  });

  // Test for the Unordered List
  describe("Unordered List Section", function() {
    it("should have unordered list with disc style", function() {
      const ul = document.querySelector("#unordered-list-section ul");
      const listStyleType = window.getComputedStyle(ul).listStyleType;

      expect(listStyleType).toBe("disc");
    });
  });

  // Test for Block Elements
  describe("Block Elements Section", function() {
    it("should have block elements with correct background color", function() {
      const blockElements = document.querySelector("#block-elements");
      const bgColor = window.getComputedStyle(blockElements).backgroundColor;

      expect(bgColor).toBe('rgb(255, 255, 0)'); // Yellow
    });

    it("should have block elements with correct padding", function() {
      const blockElements = document.querySelector("#block-elements");
      const padding = window.getComputedStyle(blockElements).padding;

      expect(padding).toBe("10px"); // Check if padding is 10px
    });
  });

  // Test for Inline Elements
  describe("Inline Elements Section", function() {
    it("should have inline elements with correct background color", function() {
      const inlineElements = document.querySelector("#inline-elements");
      const bgColor = window.getComputedStyle(inlineElements).backgroundColor;

      expect(bgColor).toBe('rgb(255, 255, 255)'); //red
    });

    it("should have inline elements with correct font size", function() {
      const span = document.querySelector("#inline-elements span");
      const fontSize = window.getComputedStyle(span).fontSize;

      expect(fontSize).toBe("16px"); // Check if font size is 16px
    });
  });

  
    


});
