/**
 * Here we are using API chaining in gorest api without returning the values which is used in the consecutive apis
 */
import { faker } from "@faker-js/faker";
describe("GOrest API chaining", () => {
    const auth_token = "Bearer 41ea7e73716a5d3af88b4a3ec9efbc1058eac4faff3a5ae3a55c74fbf29dabca"
    it("get and update user", () => {
        cy.request({
            url: 'https://gorest.co.in/public/v2/users',
            method: 'POST',
            body: {
                "name": faker.person.firstName() + " " + faker.person.lastName(),
                "gender": "male",
                "email": faker.internet.email(),
                "status": "Active"
            },
            headers: {
                'Authorization': auth_token,
                'Content-Type': "application/json"
            }

        })
            .then((response) => {
                cy.log(JSON.stringify(response))
                expect(response.status).to.eq(201)
                const user_id = response.body.id
                cy.log(user_id)
                //update user
                cy.request({
                    method: 'PUT',
                    url: `https://gorest.co.in/public/v2/users/${user_id}`,
                    body: {
                        "name": faker.person.fullName(),
                        "gender": faker.person.gender,
                        "email": faker.internet.email(),
                        "status": faker.helpers.arrayElement(['active', 'inactive'])
                    },
                    headers: {
                        Authorization: auth_token
                    }


                })
                    .then((response) => {
                        expect(response.status).to.eq(200)
                        cy.log(JSON.stringify(response))
                        //delete user
                        cy.request({
                            method: 'DELETE',
                            url: `https://gorest.co.in/public/v2/users/${user_id}`,
                            headers: {
                                Authorization: auth_token

                            }
                        })
                            .then((response) => {
                                expect(response.status).to.eq(204)
                            })

                    })

            })

    })

})
