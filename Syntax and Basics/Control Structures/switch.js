function greet(languageCode) {
    let greeting;
    
    switch (languageCode) {
      case 'en':
        greeting = "Hello";
        break;
      case 'fr':
        greeting = "Bonjour";
        break;
      case 'es':
        greeting = "Hola";
        break;
      case 'de':
        greeting = "Hallo";
        break;
      case 'it':
        greeting = "Ciao";
        break;
      case 'pt':
        greeting = "Olá";
        break;
      default:
        greeting = "Hello"; // Default greeting if language code is not recognized
    }
  
    console.log(greeting);
  }
  
  
  greet('en');
  greet('fr');  
  greet('es');  
  greet('de'); 
  greet('it');  
  greet('pt');
  greet('jp'); 
  