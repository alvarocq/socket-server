//Importamos de express lo que necesitamos para la api rest
import { Router, Request, Response} from 'express';

//Router es una función que nos permite crear objetos de tipo router.

export const router = Router();

//en este router vamos a crear los API endpoints o servicios REST, que es lo mismo.

// cuanto alguien haga una petición http a /mensajes, el siguiente parámetro es el handler, que es la función que va a manejar esa petición.


router.get('/mensajes', (req:Request, res:Response)=>{
  res.json({
    ok:true,
    mensaje:'Todo está bien"',
  });
});

router.post('/mensajes', (req:Request, res:Response)=>{

  const cuerpo = req.body.cuerpo;
  const de = req.body.de;


  res.json({
    ok:true,
    mensaje:'POST LISTO"',
    cuerpo: cuerpo,
    de: de,
  });
});

router.post('/mensajes/:id', (req:Request, res:Response)=>{

  const cuerpo = req.body.cuerpo;
  const de = req.body.de;
  const id = req.params.id;


  res.json({
    ok:true,
    mensaje:'POST LISTO"',
    cuerpo: cuerpo,
    de: de,
    id: id,
  });
});
