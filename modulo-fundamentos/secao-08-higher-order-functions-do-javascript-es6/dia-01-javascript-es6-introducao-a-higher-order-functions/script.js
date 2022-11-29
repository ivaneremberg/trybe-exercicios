console.log('\nExample 01\n');

const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];

arrayOfValues.forEach((element, index) => {
  console.log(`O elemento atual é: ${element} e possui o index: ${index}`);
});

console.log('\nUse o método forEach para exibir a lista de emails com a seguinte frase: O email ${email} está cadastrado em nosso banco de dados!.\n');

const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
emailListInData.forEach((email) => {
    console.log(`O email ${email} está cadastrado em nosso banco de dados!`);
    }
);

console.log('\nFunction inline\n');

emailListInData.forEach((email) => console.log(`O email ${email} está cadastrado em nosso banco de dados!`));