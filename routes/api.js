'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      let {locale , text } = req.body
      if (text != '') {
        if( !locale || !text ){
          return res.json({ error: 'Required field(s) missing' })  
          }
          if(locale == "american-to-british" || locale == "british-to-american" ){
            let translate =  translator.translate( locale , text )
            let  result = translator.highlightDifferences(text,translate)
              return res.json({
               text :text,
               translation: result
              })
            
          }
          return res.json({ error: 'Invalid value for locale field' })
      }
      return res.json({ error: 'No text to translate' });

    });
};
