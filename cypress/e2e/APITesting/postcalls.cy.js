import { faker } from '@faker-js/faker';

describe("post calls", () => {
    it("Approach1 - post call with hard coded data", () => {
        const request_body = {
            "firstname": "king",
            "lastname": "Richard",
            "totalprice": 11199,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2024-10-01",
                "checkout": "2024-10-30"
            },
            "additionalneeds": "Breakfast"
        }
        cy.request({
            method: 'POST',
            url: 'https://restful-booker.herokuapp.com/booking',
            body: request_body
        })
            .then((Response) => {
                expect(Response.status).to.eq(200)
                expect(Response.body.booking.firstname).to.eq("king")


            })

    })
    it("Approach2 - post with dynamically created data", () => {
        const requstbody = {
            "firstname": Math.random.toString(5).substring(2),
            "lastname": Math.random.toString(5).substring(2),
            "totalprice": Math.random.toString(5).substring(2),
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2024-10-01",
                "checkout": "2024-10-30"
            },
            "additionalneeds": "Breakfast"
        }
        cy.log("Generated Request Body:", JSON.stringify(requstbody));
        cy.request({
            method: 'POST',
            url: 'https://restful-booker.herokuapp.com/booking',
            body: requstbody

        })
            .then((responsebody) => {
                cy.log("response body:", JSON.stringify(responsebody))
                expect(responsebody.status).to.eq(200)
                expect(responsebody.body.booking.firstname).to.eq(requstbody.firstname)
                expect(responsebody.body.booking.lastname).to.eq(requstbody.lastname)
            })



    })
    it("Approach 3 - getting data from the fixture file", () => {
        cy.fixture("createbooking.json").then((data) => {
            const requestbody = data
            cy.request({
                method: 'POST',
                url: 'https://restful-booker.herokuapp.com/booking',
                body: requestbody

            }).then((response) => {
                expect(response.body.booking.firstname).to.eq(requestbody.firstname)
                //here we are asserting whether booking ID is available or not
                expect(response.body).have.property("bookingid")
            })


        })


    })
    it("Approach4 - post with dynamically created data using Faker", () => {
        const requestdata = {
            "firstname": faker.name.firstName(),
            "lastname": faker.name.lastName(),
            "totalprice": faker.number.int({ min: 100, max: 10000 }),
            "depositpaid": faker.datatype.boolean(),
            "bookingdates": {
                "checkin": faker.date.future(1).toISOString().split('T')[0],
                "checkout": faker.date.future(2).toISOString().split('T')[0],
            },
            "additionalneeds": faker.helpers.arrayElement(["Breakfast", "Lunch", "Dinner"])
        };
    
        cy.log("Generated Request Data:", JSON.stringify(requestdata));
    
        cy.request({
            method: 'POST',
            url: 'https://restful-booker.herokuapp.com/booking',
            body: requestdata
        }).then((response) => {
            cy.log("Response Body:", JSON.stringify(response.body));
    
            expect(response.status).to.eq(200);
            expect(response.body.booking.firstname).to.eq(requestdata.firstname);
            expect(response.body.booking.lastname).to.eq(requestdata.lastname);
        });
    });

})