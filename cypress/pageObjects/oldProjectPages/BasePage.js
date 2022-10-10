class BasePage {
    
    getHeader(){
        return cy.get('#header');
    }

    getHeaderText(){
        return cy.get('#header h1');
    }

    getHeaderSecondText(){
        return cy.get('#header h2');
    }

    getMenuStart(){
        return cy.get('#menu li a[href="/"]');
    }

    getMenuBrowseLanguages(){
        return cy.get('#menu li a[href="/abc.html"]');
    }

    getMenuSearchLanguages(){
        return cy.get('#menu li a[href="/search.html"]');
    }

    getMenuTopLists(){
        return cy.get('#menu li a[href="/toplist.html"]');
    }

    getMenuGuestbook(){
        return cy.get('#menu li a[href="/guestbookv2.html"]');
    }

    getMenuSubmitNewLanguage(){
        return cy.get('#menu li a[href="/submitnewlanguage.html"]');
    }

    getFooterMenuStart(){
        return cy.get('#footer p a[href="/"]');
    }

    getFooterMenuBrowseLanguages(){
        return cy.get('#footer p a[href="/abc.html"]');
    }

    getFooterMenuSearchLanguages(){
        return cy.get('#footer p a[href="/search.html"]');
    }

    getFooterMenuTopLists(){
        return cy.get('#footer p a[href="/toplist.html"]');
    }

    getFooterMenuGuestbook(){
        return cy.get('#footer p a[href="/guestbookv2.html"]');
    }

    getFooterMenuSubmitNewLanguage(){
        return cy.get('#footer p a[href="/submitnewlanguage.html"]');
    }
}

export default BasePage;

