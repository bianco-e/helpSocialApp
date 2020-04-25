const offeredItems = [
  {
    image:
      "https://www.kine-estetic.com/UserFiles/mediaManager/3/3477b8fa365661934eb6cb5dbbe37a19e5da8fc9_77297360e9b69504740807c30d0d0a358d1fd97c.jpg",
    user: "Juan Perez",
    title: "Muletas de metal",
    description:
      "Acolchonadas en la punta con goma espuma nivel 3. Excelente estado",
    action: "Dona: ",
  },
  {
    image:
      "https://totalmedic.com.mx/pub/media/catalog/product/cache/image/1000x1320/249a04e11078a485979b671cc312a5a7/s/i/silla-economica-negra.jpg",
    user: "Martín Gonzalez",
    title: "Silla de ruedas",
    description:
      "Usada con dirección automática y posapies de hierro, con cubiertas de caucho.",
    action: "Dona: ",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2019/03/29/16/09/tablets-4089494_960_720.jpg",
    user: "Belén Juanto",
    title: "Medicamento oncológico",
    description:
      "2 tabletas de Ibupirac 600 que eran tomadas para reducir efectos de la quimio.",
    action: "Dona: ",
  },
  {
    image:
      "https://sanifixsoluciones.com.ar/wp-content/uploads/2017/06/COLCHON-ANTIESCARAS.jpg",
    user: "Leandro Lioni",
    title: "Colchón anti-escaras",
    description: "Una plaza, muy poco uso, se encuentra en perfecto estado.",
    action: "Dona: ",
  },
  {
    image:
      "https://http2.mlstatic.com/calentador-cama-gama-manta-termica-climatizador-1-plaza-D_NQ_NP_725968-MLA31061743011_062019-F.jpg",
    user: "Sofía Ibañez",
    title: "Manta de temperatura regulable",
    description: "Manta térmica eléctrica ideal para dolores en los lumbares",
    action: "Dona: ",
  },
  {
    image:
      "https://http2.mlstatic.com/orinal-papagayo-masculino-palermo-D_NQ_NP_693471-MLA26932646927_022018-Q.jpg",
    user: "Federico Luzuriaga",
    title: "Pelela",
    description:
      "Papagayo de plástico suizo con tapa y medidor para no moverse de la cama. Nunca fue utilizado por nadie. Marca Psykos",
    action: "Dona: ",
  },
  {
    image:
      "https://http2.mlstatic.com/andador-paso-ortopedico-reforzado-fijo-adultos-D_NQ_NP_931299-MLA29077036611_122018-F.jpg",
    user: "Marcelo Donador",
    title: "Andador",
    description: "Caminador de cuatro ruedas con goma en las agarraderas",
    action: "Dona: ",
  },
  {
    image:
      "https://d26lpennugtm8s.cloudfront.net/stores/619/750/products/baston-madera1-0a86cc687e56f3779415218090572777-640-0.jpg",
    user: "Elque Teco",
    title: "Bastón de madera",
    description: "Bastón de roble oscuro con tope de goma en la punta",
    action: "Dona: ",
  },
  {
    image:
      "https://http2.mlstatic.com/baston-tripode-de-aluminio-regulable-super-liviano-D_NQ_NP_926535-MLA29060736032_122018-Q.jpg",
    user: "Susana Torio",
    title: "Trípode de metal",
    description: "Bastón de 3 patas ideal para gente de la tercera edad",
    action: "Dona: ",
  },
  {
    image:
      "https://http2.mlstatic.com/almohadon-circular-aro-dona-antiescaras-coxis-post-parto-D_NQ_NP_662839-MLA31085518962_062019-F.jpg",
    user: "Mónica Galindo",
    title: "Almohadón circular",
    description:
      "Material: goma, ideal para personas que tienen que estar sentadas mucho tiempo en reposo.",
    action: "Dona: ",
  },
];

const neededItems = [
  {
    image:
      "https://ae01.alicdn.com/kf/H26b412c9fb2a4ef7b698f33b629fb4bb6/Aud-fono-port-til-de-o-do-interno-aud-fono-Invisible-minidispositivo-auditivo-Digital-amplificador-auditivo.jpg_q50.jpg",
    user: "Laureano Marengo",
    title: "Audífono",
    description: "Cualquiera de uso interno que permita regular el volumen",
    action: "Busca: ",
  },
  {
    image:
      "https://www.laboratoriosmicrosules.com/wp-content/uploads/2017/05/antiseptico-desinfectante-1-lts-1.jpg",
    user: "Juan Pablo Angelone",
    title: "Antiséptico",
    description:
      "Cualquier medicamento antiséptico de uso externo, para desinfectar llagas crónicas",
    action: "Busca: ",
  },
  {
    image:
      "https://pardohogar.vteximg.com.br/arquivos/ids/159633-1280-852/NEBU.jpg?v=636868703756430000",
    user: "Ángeles Di Capua",
    title: "Nebulizador para niño",
    description: "Que sea a vapor, cualquier marca, necesito urgente.",
    action: "Busca: ",
    special: true,
  },
  {
    image: "https://m.media-amazon.com/images/I/51U3GKw-rXL.jpg",
    user: "Alicia Acquarone",
    title: "Pañales para adulto",
    description: "Talle XL hipoalergénicos",
    action: "Busca: ",
  },
  {
    image:
      "https://previews.123rf.com/images/nipapornnan/nipapornnan1511/nipapornnan151100097/47423333-las-manos-de-un-m%C3%A9dico-que-llevaba-un-azul-guantes-de-l%C3%A1tex-con-gasa-.jpg",
    user: "Lucas García",
    title: "Guantes y gasas",
    description:
      "Guantes de latex y paquetes de gasas para tratar heridas de la piel",
    action: "Busca: ",
  },
  {
    image: "https://img.medicalexpo.es/images_me/photo-g/104321-8676583.jpg",
    user: "Luciano Ibarlucea",
    title: "Cama reclinable",
    description: "Cama con posiciones para internación puertas adentro",
    action: "Busca: ",
    special: true,
  },
  {
    image:
      "data:image/jpeg;base64,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",
    user: "Gastón Oviedo",
    title: "Jeringas descartables",
    description:
      "Todo tipo de jeringa descartable (no importa si incluye aguja)",
    action: "Busca: ",
  },
  {
    image:
      "https://http2.mlstatic.com/10-paquetes-algodon-estrella-clasico-300grs-D_NQ_NP_126815-MLA25312939641_012017-F.jpg",
    user: "María Bosques",
    title: "Algodón",
    description:
      "Cualquier marca, es para tratar heridas superficiales con desinfectante",
    action: "Busca: ",
  },
  {
    image:
      "https://http2.mlstatic.com/bicicleta-fija-world-fitness-bb-500x-alta-calidad-ccomputad-D_NQ_NP_971888-MLA31112651091_062019-Q.jpg",
    user: "Franco Peldaño",
    title: "Bicicleta fija",
    description:
      "Bicicleta fija para tratamiento de recuperación de una lesión en las piernas",
    action: "Busca: ",
  },
  {
    image:
      "https://http2.mlstatic.com/portasuero-con-4-ganchos-y-5-ruedas-dobles-D_NQ_NP_602605-MLA28721445264_112018-Q.jpg",
    user: "Agustín Sosa",
    title: "Sostén de pie para suero",
    description:
      "Palo para sostener el paquete de suero que sea adaptable a cualquier medida",
    action: "Busca: ",
    special: true,
  },
];
const myNeeds = [
  {
    image:
      "https://sanifixsoluciones.com.ar/wp-content/uploads/2017/06/COLCHON-ANTIESCARAS.jpg",
    user: "Mis búsquedas",
    title: "Colchón anti-escaras",
    description: "Una plaza, muy poco uso, se encuentra en perfecto estado.",
    action: "Dona: ",
  },
  {
    image:
      "https://sanifixsoluciones.com.ar/wp-content/uploads/2017/06/COLCHON-ANTIESCARAS.jpg",
    user: "Mis búsquedas 1",
    title: "Colchón anti-escaras",
    description: "Una plaza, muy poco uso, se encuentra en perfecto estado.",
    action: "Dona: ",
  },
  {
    image:
      "https://sanifixsoluciones.com.ar/wp-content/uploads/2017/06/COLCHON-ANTIESCARAS.jpg",
    user: "Mis búsquedas 2",
    title: "Colchón anti-escaras",
    description: "Una plaza, muy poco uso, se encuentra en perfecto estado.",
    action: "Dona: ",
  },
  {
    image:
      "https://sanifixsoluciones.com.ar/wp-content/uploads/2017/06/COLCHON-ANTIESCARAS.jpg",
    user: "Mis búsquedas 3",
    title: "Colchón anti-escaras",
    description: "Una plaza, muy poco uso, se encuentra en perfecto estado.",
    action: "Dona: ",
  },
  {
    image:
      "https://sanifixsoluciones.com.ar/wp-content/uploads/2017/06/COLCHON-ANTIESCARAS.jpg",
    user: "Mis búsquedas 4",
    title: "Colchón anti-escaras",
    description: "Una plaza, muy poco uso, se encuentra en perfecto estado.",
    action: "Dona: ",
  },
];
const myOffers = [
  {
    image:
      "https://sanifixsoluciones.com.ar/wp-content/uploads/2017/06/COLCHON-ANTIESCARAS.jpg",
    user: "Mis ofertas",
    title: "Colchón anti-escaras",
    description: "Una plaza, muy poco uso, se encuentra en perfecto estado.",
    action: "Dona: ",
  },
  {
    image:
      "https://sanifixsoluciones.com.ar/wp-content/uploads/2017/06/COLCHON-ANTIESCARAS.jpg",
    user: "Mis ofertas 1",
    title: "Colchón anti-escaras",
    description: "Una plaza, muy poco uso, se encuentra en perfecto estado.",
    action: "Dona: ",
  },
  {
    image:
      "https://sanifixsoluciones.com.ar/wp-content/uploads/2017/06/COLCHON-ANTIESCARAS.jpg",
    user: "Mis ofertas 2",
    title: "Colchón anti-escaras",
    description: "Una plaza, muy poco uso, se encuentra en perfecto estado.",
    action: "Dona: ",
  },
  {
    image:
      "https://sanifixsoluciones.com.ar/wp-content/uploads/2017/06/COLCHON-ANTIESCARAS.jpg",
    user: "Mis ofertas 3",
    title: "Colchón anti-escaras",
    description: "Una plaza, muy poco uso, se encuentra en perfecto estado.",
    action: "Dona: ",
  },
  {
    image:
      "https://sanifixsoluciones.com.ar/wp-content/uploads/2017/06/COLCHON-ANTIESCARAS.jpg",
    user: "Mis ofertas 4",
    title: "Colchón anti-escaras",
    description: "Una plaza, muy poco uso, se encuentra en perfecto estado.",
    action: "Dona: ",
  },
];

export { offeredItems, neededItems, myOffers, myNeeds };
