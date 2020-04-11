import { Selector } from 'testcafe'; // first import testcafe selectors

fixture `Getting Started`// declare the fixture
    .page `http://192.168.1.131:8080/estudioAlvarezYAsociados`;  // specify the start page


//then create a test and place your code there
test('My first test', async t => {
    await t
        .pressKey('tab')
        .pressKey('tab')
        .pressKey('j')
        .pressKey('u')
        .pressKey('a')
        .pressKey('n')
        .pressKey('tab')
        .pressKey('j')
        .pressKey('u')
        .pressKey('a')
        .pressKey('n')
        .pressKey('enter')
        .pressKey('tab')
        .pressKey('tab')
        .pressKey('enter')
        .pressKey('tab')
        .pressKey('tab')
        .pressKey('tab')
        .pressKey('enter')
        .navigateTo('http://192.168.1.131:8080/estudioAlvarezYAsociados/faces/agenda/List.xhtml')
        .pressKey('tab')
        .pressKey('tab')
        .pressKey('tab')
        .pressKey('tab')
        .pressKey('tab')
        .pressKey('tab')
        .navigateTo('http://192.168.1.131:8080/estudioAlvarezYAsociados/faces/expediente/List.xhtml') 
        .pressKey('tab')
        .pressKey('tab')
        .pressKey('tab')
        .pressKey('tab')
        
        .navigateTo('http://192.168.1.131:8080/estudioAlvarezYAsociados/faces/empleado/List.xhtml')
        .pressKey('tab')
        .pressKey('tab')
        .pressKey('tab')
        .pressKey('tab')
        
        .navigateTo('http://192.168.1.131:8080/estudioAlvarezYAsociados/faces/procedencia/List.xhtml')
        .pressKey('tab')
        .pressKey('tab')
        .pressKey('tab')
        .pressKey('tab')
        
        .navigateTo('http://192.168.1.131:8080/estudioAlvarezYAsociados/faces/turno/List.xhtml')
        .pressKey('tab')
        .pressKey('tab')
        .pressKey('tab')
        .pressKey('tab')
        
        .navigateTo('http://192.168.1.131:8080/estudioAlvarezYAsociados/faces/agenda/List_AgendasTurnos.xhtml')
        .pressKey('tab')
        .pressKey('tab')
        .pressKey('tab')
        .pressKey('tab')
        
        .navigateTo('http://192.168.1.131:8080/estudioAlvarezYAsociados/faces/estadoDelTramite/List.xhtml') 
        .pressKey('tab')
        .pressKey('tab')
        .pressKey('tab')
        .pressKey('tab')
        
        // Use the assertion to check if the actual header text is equal to the expected one
        .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
});