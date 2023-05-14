var expect = chai.expect;

describe ("Card Creation", function() {
    it ("Create J of Hearts", function(){
            //Arrange
            const testDeck = [];
            //Act
            createHeart(11, testDeck);
            //Assert
            expect(testDeck[0].rank).to.equal("J");
    })
})