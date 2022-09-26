class BasePage {
    
    getImgClear(){
        return cy.get('#topPanel a img.admin');
    }

    getImgLogo(){
        return cy.get('#topPanel a img.logo');
    }

    getTextCaption(){
        return cy.get('#topPanel p');
    }

    getHeaderPanel(){
        return cy.get('#headerPanel');
    }

    getMenuAboutUs(){
        return cy.get('ul.leftmenu li a[href="about.htm"]');
    }

    getMenuServices(){
        return cy.get('ul.leftmenu li a[href="services.htm"]');
    }

    getMenuProducts(){
        return cy.get('ul.leftmenu li a[href="http://www.parasoft.com/jsp/products.jsp"]');
    }

    getMenuLocations(){
        return cy.get('ul.leftmenu li a[href="http://www.parasoft.com/jsp/pr/contacts.jsp"]');
    }

    getMenuAdminPage(){
        return cy.get('ul.leftmenu li a[href="admin.htm"]');
    }

    getButtonHome(){
        return cy.get('ul.button li.home a');
    }

    getButtonAboutUs(){
        return cy.get('ul.button li.aboutus a');
    }

    getButtonContact(){
        return cy.get('ul.button li.contact a');
    }

    
    getFooterMainPanel(){
        return cy.get('#footermainPanel');
    }

    getFooterHomeLink(){
        return cy.get('#footerPanel li a[href="/parabank/index.htm"]');
    }

    getFooterAboutLink(){
        return cy.get('#footerPanel li a[href="/parabank/index.htm"]');
    }

    getFooterServicesLink(){
        return cy.get('#footerPanel li a[href="/parabank/index.htm"]');
    }

    getFooterProductsLink(){
        return cy.get('#footerPanel li a[href="/parabank/index.htm"]');
    }

    getFooterLocationsLink(){
        return cy.get('#footerPanel li a[href="/parabank/index.htm"]');
    }

    getFooterForumLink(){
        return cy.get('#footerPanel li a[href="/parabank/index.htm"]');
    }

    getFooterSiteMapLink(){
        return cy.get('#footerPanel li a[href="/parabank/index.htm"]');
    }

    getFooterContactUsLink(){
        return cy.get('#footerPanel li a[href="/parabank/index.htm"]');
    }

    getTextCopyright(){
        return cy.get('#footerPanel p.copyright');
    }

    getTextVisitUsLabel(){
        return cy.get('#footerPanel ul.visit li');
    }
    
    getFooterVisitUsLink(){
        return cy.get('#footerPanel li a[target="_blank"]');

    }
}

export default BasePage;

