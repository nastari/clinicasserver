import Clinic from '../models/Clinic';

export const store = async (req, res) => {

  const clinic = new Clinic(req.body);
  await clinic
    .save()
    .then((data) => {
      return res.status(200).json(data);
    })
    .catch((e) =>
      res.status(400).json({ Erro: `Falha ao criar Clínica.${e}` })
    );
};

export const list = async ( req, res ) => {
  Clinic.find().then((data, e) => {
    if (e) {
      return res.status(400).json({ Erro: e });
    }

    return res.json(data);
  });
}




export const index = async (req, res) => {
  const { PPRA, PCMSO, EXCLI, EXCOM } = req.query;

  const query = {};

  if (PPRA) {
    query.PPRA = true;
  } else if (PCMSO){
    query.PCMSO = true;
  } else if (EXCLI){
    query.EXCLI = true;
  } else if (EXCOM){
    query.EXCOM = true;
  }

    Clinic.find(query).then((data, e) => {
      if (e) {
        return res.status(400).json({ Erro: e });
      }

      return res.json(data);
    });

};


export const sort = async (req, res) => {

  const clinics = await Clinic.find().sort({"NAME": 1 })

  if(!clinics){
    return res.status(400).json({Erro: 'Ordenação falhou.'})
  }
  return res.json(clinics)

}
