import {LoginPage} from "./pages/login_page"

const login_page = new LoginPage()

describe('All Login Tests', () => {

    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    })
    
    it('Login with valid credentials', function(){

        login_page.enterUsername('Admin')
        login_page.enterPassword('admin123')
        login_page.clickLogin()
        cy.get(':nth-child(4) > .oxd-topbar-body-nav-tab-item').click()
        
        //cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        //cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        //cy.get('.oxd-button').click()
    })

    it('Login with invalid unsername', function(){

        login_page.enterUsername('Adminn')
        login_page.enterPassword('admin123')
        login_page.clickLogin()
        
    })
})    
    it('Login with invalid password', function(){

        login_page.enterUsername('Admin')
        login_page.enterPassword('admin1233')
        login_page.clickLogin()
        
    })