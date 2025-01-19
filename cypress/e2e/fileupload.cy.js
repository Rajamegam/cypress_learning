import 'cypress-file-upload'
/** NOtes
 * we need to add the file which we are going to upload in the fixtures folder
 * .attachFile('sample.pdf') -> give the name of the file to be uploaded
 * .attachFile({ filePath: 'sample.pdf', fileName: 'new_file.pdf' }) -> file rename
 * attachFile("sample.pdf", { subjectType: 'drag-n-drop' }) --> drag and drop
 * .attachFile(['sample.pdf', 'dummy.pdf']) - multiple file upload
 * cy.get(".smart-browse-input",{includeShadowDom:true}).attachFile('sample.pdf') --> upload files which in shadow dom
 */
describe("fileupload", () => {
    it("single file upload", () => {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile('sample.pdf')
        cy.get("#file-submit").click()
        cy.wait(5000)
        cy.get("div[class='example'] h3").should('have.text', "File Uploaded!")

    })
    it("file rename", () => {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile({ filePath: 'sample.pdf', fileName: 'new_file.pdf' })
        cy.get("#file-submit").click()
        cy.wait(5000)
        cy.get("div[class='example'] h3").should('have.text', "File Uploaded!")


    })
    it("drag and drop of file upload", () => {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#drag-drop-upload").attachFile("sample.pdf", { subjectType: 'drag-n-drop' })

    })
    it("multiple files", () => {
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
        cy.get("#filesToUpload").attachFile(['sample.pdf', 'dummy.pdf'])
        cy.get("#fileList li").each(($el) => {
            const file_name = $el.text()
            cy.log(file_name)

        })


    })
    it.only("file upload-shadow DOM", () => {
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")
        cy.get(".smart-browse-input",{includeShadowDom:true}).attachFile('sample.pdf')
        cy.get(".smart-item-name",{includeShadowDom:true}).contains('sample.pdf')



    })

})