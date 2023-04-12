const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
let translator
suite('Unit Tests', () => {

    test('Translate Mangoes are my favorite fruit. to British English', () => {
        let locale = 'american-to-british', text = 'Mangoes are my favorite fruit.';
        translator = new Translator();
        let expected = 'Mangoes are my favourite fruit.';
        assert.equal(translator.translate(locale, text), expected);
      });

      test('Translate I ate yogurt for breakfast. to British English', () => {
        let locale = 'american-to-british', text = 'I ate yogurt for breakfast.';
        translator = new Translator();
        let expected = 'I ate yoghurt for breakfast.';
        assert.equal(translator.translate(locale, text), expected);
      });

      test("Translate We had a party at my friend's condo. to British English", () => {
        let locale = 'american-to-british', text = "We had a party at my friend's condo.";
        translator = new Translator();
        let expected = "We had a party at my friend's flat.";
        assert.equal(translator.translate(locale, text), expected);
      });
      test("Translate Can you toss this in the trashcan for me? to British English", () => {
        let locale = 'american-to-british', text = 'Can you toss this in the trashcan for me?';
        translator = new Translator();
        let expected = 'Can you toss this in the bin for me?';
        assert.equal(translator.translate(locale, text), expected);
      });
      test("Translate The parking lot was full. to British English", () => {
        let locale = 'american-to-british', text = 'The parking lot was full.';
        translator = new Translator();
        let expected = 'The car park was full.';
        assert.equal(translator.translate(locale, text), expected);
      });
      test("Translate Like a high tech Rube Goldberg machine. to British English", () => {
        let locale = 'american-to-british', text = 'Like a high tech Rube Goldberg machine.';
        translator = new Translator();
        let expected = 'Like a high tech Heath Robinson device.';
        assert.equal(translator.translate(locale, text), expected);
      });
      test("Translate To play hooky means to skip class or work. to British English", () => {
        let locale = 'american-to-british', text = 'To play hooky means to skip class or work.';
        translator = new Translator();
        let expected = 'To bunk off means to skip class or work.';
        assert.equal(translator.translate(locale, text), expected);
      });
      test("Translate No Mr. Bond, I expect you to die. to British English", () => {
        let locale = 'american-to-british', text = 'No Mr. Bond, I expect you to die.';
        translator = new Translator();
        let expected = 'No Mr Bond, I expect you to die.';
        assert.equal(translator.translate(locale, text), expected);
      });
      test("Translate Dr. Grosh will see you now. to British English", () => {
        let locale = 'american-to-british', text = 'Dr. Grosh will see you now.';
        translator = new Translator();
        let expected = 'Dr Grosh will see you now.';
        assert.equal(translator.translate(locale, text), expected);
      });
      test("Translate Lunch is at 12:15 today. to British English", () => {
        let locale = 'american-to-british', text = 'Lunch is at 12:15 today.';
        translator = new Translator();
        let expected = 'Lunch is at 12.15 today.';
        assert.equal(translator.translate(locale, text), expected);
      });
      test("Translate We watched the footie match for a while. to American English", () => {
        let locale = 'british-to-american', text = 'We watched the footie match for a while.';
        translator = new Translator();
        let expected = "We watched the soccer match for a while.";
        assert.equal(translator.translate(locale, text), expected);
      });
      test("Translate Paracetamol takes up to an hour to work. to American English", () => {
        let locale = 'british-to-american', text = 'Paracetamol takes up to an hour to work.';
        translator = new Translator();
        let expected = 'Tylenol takes up to an hour to work.';
        assert.equal(translator.translate(locale, text), expected);
      });
      test("Translate First, caramelise the onions. to American English", () => {
        let locale = 'british-to-american', text = 'First, caramelise the onions.';
        translator = new Translator();
        let expected = 'First, caramelize the onions.';
        assert.equal(translator.translate(locale, text), expected);
      });
      test("Translate I spent the bank holiday at the funfair. to American English", () => {
        let locale = 'british-to-american', text = 'I spent the bank holiday at the funfair.';
        translator = new Translator();
        let expected = "I spent the public holiday at the carnival.";
        assert.equal(translator.translate(locale, text), expected);
      });
      test("Translate I had a bicky then went to the chippy. to American English", () => {
        let locale = 'british-to-american', text = 'I had a bicky then went to the chippy.';
        translator = new Translator();
        let expected = 'I had a cookie then went to the fish-and-chip shop.';
        assert.equal(translator.translate(locale, text), expected);
      });
      test("Translate I've just got bits and bobs in my bum bag. to American English", () => {
        let locale = 'british-to-american', text = "I've just got bits and bobs in my bum bag.";
        translator = new Translator();
        let expected = "I've just got odds and ends in my fanny pack.";
        assert.equal(translator.translate(locale, text), expected);
      });
      test("Translate The car boot sale at Boxted Airfield was called off. to American English", () => {
        let locale = 'british-to-american', text = 'The car boot sale at Boxted Airfield was called off.';
        translator = new Translator();
        let expected = 'The swap meet at Boxted Airfield was called off.';
        assert.equal(translator.translate(locale, text), expected);
      });
      test("Translate Have you met Mrs Kalyani? to American English", () => {
        let locale = 'british-to-american', text = 'Have you met Mrs Kalyani?';
        translator = new Translator();
        let expected = "Have you met Mrs. Kalyani?";
        assert.equal(translator.translate(locale, text), expected);
      });
      test("Translate Prof Joyner of King's College, London. to American English", () => {
        let locale = 'british-to-american', text = "Prof Joyner of King's College, London.";
        translator = new Translator();
        let expected = "Prof. Joyner of King's College, London.";
        assert.equal(translator.translate(locale, text), expected);
      });
      test("Translate Tea time is usually around 4 or 4.30. to American English", () => {
        let locale = 'british-to-american', text = 'Tea time is usually around 4 or 4.30.';
        translator = new Translator();
        let expected = 'Tea time is usually around 4 or 4:30.';
        assert.equal(translator.translate(locale, text), expected);
      });
      test('Highlight translation in Mangoes are my favorite fruit', () => {
        let translator = new Translator();
        let locale = 'american-to-british';
        let text = 'Mangoes are my favorite fruit.';
        let expected = 'Mangoes are my favourite fruit.';
        let expectedTranslation = 'Mangoes are my <span class="highlight">favourite</span> fruit.';
        assert.equal(translator.translate(locale, text), expected);
        assert.equal(translator.highlightDifferences(text,expected),expectedTranslation );
      });
      test("Highlight translation in I ate yogurt for breakfast.", () => {
        let translator = new Translator();
        let locale = 'american-to-british';
        let text = 'I ate yogurt for breakfast.';
        let expected = 'I ate yoghurt for breakfast.';
        let expectedTranslation = 'I ate <span class="highlight">yoghurt</span> for breakfast.';
        assert.equal(translator.translate(locale, text), expected);
        assert.equal(translator.highlightDifferences(text,expected),expectedTranslation );
      });
      test("Highlight translation in We watched the footie match for a while.", () => {
        let translator = new Translator();
        let locale = 'british-to-american';
        let text = 'We watched the footie match for a while.';
        let expected = 'We watched the soccer match for a while.';
        let expectedTranslation = 'We watched the <span class="highlight">soccer</span> match for a while.';
        assert.equal(translator.translate(locale, text), expected);
        assert.equal(translator.highlightDifferences(text,expected),expectedTranslation );
      });
      test("Highlight translation in Paracetamol takes up to an hour to work.", () => {
        let translator = new Translator();
        let locale = 'british-to-american';
        let text = 'Paracetamol takes up to an hour to work.';
        let expected = 'Tylenol takes up to an hour to work.';
        let expectedTranslation = '<span class="highlight">Tylenol</span> takes up to an hour to work.';
        assert.equal(translator.translate(locale, text), expected);
        assert.equal(translator.highlightDifferences(text,expected),expectedTranslation );
      });

});
