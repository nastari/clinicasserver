const data = require('./data');

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://nastari:crozter20@cluster0.vkr5g.mongodb.net/clinicas?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("clinicas").collection("clinics");

  const clinicas = data.map( clinic => {
    clinic['SERVIÇOS DISPONÍVEIS'] = clinic['SERVIÇOS DISPONÍVEIS'].toLowerCase()
    clinic['SERVIÇOS DISPONÍVEIS'] = clinic['SERVIÇOS DISPONÍVEIS'].toLowerCase()
    if(clinic["SERVIÇOS DISPONÍVEIS"].includes('pcmso')){
      clinic.PCMSO = true
    } else {
      clinic.PCMSO = false
    }

    if(clinic["SERVIÇOS DISPONÍVEIS"].includes('ppra')){
      clinic.PPRA = true
    } else {
      clinic.PPRA = false
    }

    if(clinic["SERVIÇOS DISPONÍVEIS"].includes('exames clínicos')){
      clinic.EXCLI = true
    } else {
      clinic.EXCLI = false
    }

    if(clinic["SERVIÇOS DISPONÍVEIS"].includes('exames complementares')){
      clinic.EXCOM = true
    } else {
      clinic.EXCOM = false
    }
    clinic.WHATSAPPFORMATTED = clinic.WHATSAPP.replace(/[^0-9]/g, '');
    return clinic
   })

   collection.insertMany(clinicas)

  client.close();
});


