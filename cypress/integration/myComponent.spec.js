describe('My Component', () => {
    it('should display the correct text', () => {
      cy.visit('http://localhost:5173'); // 访问你的应用 URL
      cy.contains('Hello World').should('be.visible'); // 检查文本是否可见
    });
  
    it('should click a button and change text', () => {
      cy.get('button').click(); // 点击按钮
      cy.contains('New Text').should('be.visible'); // 检查新文本是否可见
    });
  });
  