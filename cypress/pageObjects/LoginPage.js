class LoginPage {

    getHeaderCustomerLogin(){
        return cy.get('#leftPanel h2');
    }

    getLabelUsername(){
        return cy.get('#loginPanel form[name="login"] p:nth-child(1) b');
    }

    getLabelPassword(){
        return cy.get('#loginPanel form[name="login"] p:nth-child(3) b');
    }

    getInputFieldUserName(){
        return cy.get('.login input[name="username"]');
    }

    getInputFieldPassword(){
        return cy.get('.login input[name="password"]');
    }

    getButtonLogIn(){
        return cy.get('.login input[value="Log In"]');
    }

    getLinkForgotLogin(){
        return cy.get('#loginPanel p a[href="lookup.htm"]');
    }

    getLinkRegister(){
        return cy.get('#loginPanel p a[href="register.htm"]');
    }

    setInputUsername(){
        this.getInputFieldUserName().type('marusya5');
    }

    setInputPassword(){
        this.getInputFieldPassword().type('qwerty12345');
    }
}

export default LoginPage;

