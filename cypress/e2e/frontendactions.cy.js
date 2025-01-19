import 'cypress-iframe';

describe('all the frontend operations are performed', () => {
    const course_array = ['WebServices / REST API Testing with SoapUI', 'QA Expert Course :Software Testing + Bugzilla + SQL + Agile', 'Write effective QA Resume that will turn to interview call']
    let total_sum = 0

    beforeEach('pagelanding', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    })

    it("Radio button testcase", () => {

        cy.get("input[value='radio1']").check().should('be.checked')
        cy.get("input[value='radio2']").should('not.be.checked')
        cy.get("input[value='radio3']").should('not.be.checked')
    })

    it("autocomplete dropdown", () => {
        cy.get("#autocomplete").type("united")
        cy.get("ul[id='ui-id-1']>li").each(($el, index, list) => {
            if ($el.text() == "United Arab Emirates") {
                cy.wrap($el).click()
            }
        })
        cy.get("#autocomplete").then((e) => {
            let country_name = e.val()
            cy.log(country_name)
            expect(country_name).to.equal("United Arab Emirates")


        })

    })
    it("static select dropdown", () => {
        cy.get("#dropdown-class-example").select('option1').should('have.value', 'option1')

    })
    it.skip("switch tab", () => {
        cy.get("#opentab").invoke('removeAttr', 'target').click()

    })
    it("alerts", () => {
        cy.get("#name").type("Rajamegam")
        cy.get("#alertbtn").click()
        cy.on('window:confirm', (alertText) => {
            expect(alertText).to.contain('Hello Rajamegam, share this practice page and share your knowledge');
        });

    })
    it("confirm", () => {
        cy.get("#name").type("Rajamegam")
        cy.get("#confirmbtn").click()
        cy.on('window:confirm', (alertText) => {
            expect(alertText).to.contain('Hello Rajamegam, Are you sure you want to confirm?');
        });
    })
    it("confirm-negative", () => {
        cy.get("#name").type("Rajamegam")
        cy.get("#confirmbtn").click()
        cy.on('window:confirm', () => false)
    })
    it("show/hide", () => {
        cy.get("#displayed-text").should('be.visible')
        cy.get("#hide-textbox").click()
        cy.get("#displayed-text").should('not.be.visible')
        cy.get("#show-textbox").click()
        cy.get("#displayed-text").should('be.visible')
    })
    it("mouseover", () => {
        cy.get("#mousehover").trigger('mouseover').click()
        cy.contains('Top').click({ force: true })
        cy.url().should('include', 'top')
    })
    it("iframecheck", () => {
        cy.frameLoaded("#courses-iframe")
        cy.iframe().find(".btn.btn-theme.btn-sm.btn-min-block").should('be.visible')
    })
    it("tables", () => {
        /**
         * WebServices / REST API Testing with SoapUI - 35
         * QA Expert Course :Software Testing + Bugzilla + SQL + Agile - 25
         * Write effective QA Resume that will turn to interview call -0
         * get these three courses and their price
         * add these prices and check whether sum of the price is equal to 60
         */
        cy.get("div[class='left-align']>fieldset>table>tbody tr").each(($el) => {
            const courses = $el.find("td:nth-child(2)").text().trim()
            if (course_array.includes(courses)) {
                const total_price = $el.find("td:nth-child(3)").text().trim()
                total_sum += parseInt(total_price, 10)

            }

        }).then(() => {
            expect(total_sum).to.equal(60)

        })

    })


})
