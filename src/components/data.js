import Cote from '../images/cote700400.jpeg';
import Jardin from '../images/jardin700400.jpg';
import Plage from '../images/plage700400.jpg';
import Riviere from '../images/riviere700400.jpeg';
import Saintes from '../images/saintes700400.jpg';
import Randoaqua from '../images/Randoaqua2.jpg';
import PlageDeshaies from '../images/Plagedeshaies.jpg';
import SaintAnne from '../images/sainteAnne.jpg';
import MarcheSainteAnne from '../images/MarcheSainteAnne.jpg'; 
import PetiteTerre from '../images/petiteTerre.jpg';
import MarchePetitBourg from '../images/MarchePetitBourg.jpg';
import MarcheBasseTerre from '../images/MarcheBasseTerre.jpg';
import DistillerieBologne from '../images/Bologne.jpg';
import Soufriere from '../images/Souffriere.jpg';
import Plongee from '../images/plongee.jpeg';
import BateauVerre from '../images/BateauVerre.jpg';
import Surf from '../images/Surf.png';
import Randonnee from '../images/Randonnee.jpg';
import Memorial from '../images/Memorial.jpeg';
import Carbet from '../images/Carbet.jpg';
import JardinDeau from '../images/JardinDeau.jpeg';
import JardinValombreuse from '../images/JardinValombreuse.jpeg';
import CascadeEcrevisse from '../images/CascadeEcrevisse.jpeg';
import Mangrove from '../images/Mangrove2.jpg';
import Vanibel from '../images/Vanibel.jpg';
import Cacao from '../images/Cacao.jpeg';
import Mamelles from '../images/ParcMamelles.jpeg';
import DistillerieLongueteau from '../images/DistillerieLongueteau.jpeg';
import Desirade from '../images/Desirade.jpeg';
import MarieGalante from '../images/MarieGalante.jpeg';
import MarcheMoule from '../images/MarcheMoule.jpeg';
import PointeChateaux from '../images/PointeChateaux.jpg';




export const activities =[
    {
        id : "1",
        link : Randoaqua,
        nom : 'Randonnée Aquatique',
        alt : 'randonnée aquatique',
        categories : ['Rivière','Randonnée','Végétation', 'Baignade','Sport'],
        infos : 'Venez découvrir une nature préservée au coeur de la forêt tropicale',
        Prix: '50 euros par personne',
        lien : 'https://www.gwada-experience.com/'
    },
    {
        id : "2",
        link : PlageDeshaies,
        nom : 'Plage de Grande Anse - Deshaies',
        alt : 'Plage de Grande Anse',
        categories : ['Promenade','Plage', 'Baignade'],
        infos : "La plage de Grande Anse est l'une des plus grandes plages de Guadeloupe, dans la partie nord-ouest de Basse-Terre. Selon les envies : bronzette, chill, baignade, marche le long du littoral",
        lien :'https://www.lodge-coco.com/plage-grande-anse/'
    },
    {
      id : "3",
      link : SaintAnne,
      nom :'Plage de Caravelle - Saint Anne',
      alt :'Plage de Caravelle - Saint Anne',
      categories : ['Promenade', 'Plage', 'Baignade'],
      infos : "Plage incontournable de la Guadeloupe, la plage de la caravelle est une plage où l'eau est calme et peu profonde. Idéale pour jouer, se prélasser ou regarder les poissons près des rochers durant la journée. Plage éclairée le soir",
      lien :'https://www.routard.com/guide_voyage_lieu/14855-plage_de_la_caravelle.htm'
    },
    {
        id : "4",
        link : MarcheSainteAnne,
        nom :'Marché de Saint-Anne',
        alt :'Marché de Saint-Anne',
        categories : ['Marché'],
        infos :"Le marché de Sainte-Anne est un marché aux multiples couleurs et parfums. Les nombreux étales du marché vous proposent des fleurs tropicales, de l'artisanat (colliers, boucles d'oreilles, paréos, paniers...), des maillots de bain et des serviettes de bain. Les étals de rhums et d'épices sont nombreux, il vous sera possible de gouter les différents rhums arrangés (vanille, ananas, banane, coco...).",
        lien :'https://www.annuaire-mairie.fr/marche-sainte-anne-971.html'
    },
    {
      id : "5",
      link : PetiteTerre,
      nom :'Excursion réserves à Petite Terre',
      alt :'Excursion réserves à Petite Terre',
      categories : ['Bateau', 'Mer', 'Baignade'],
      infos :"Petite Terre est un archipel de deux ilets classés Réserve Naturelle depuis 1998. Le phare est l’unique construction. Vous découvrirez une magnifique plage de sable blanc ombragée de cocotiers, un lagon aux eaux cristallines, une faune et une flore préservées.",
      lien :'https://www.petite-terre.com/'
  },
  {
    id : "6",
    link : MarchePetitBourg,
    nom :'Marché de Petit Bourg',
    alt :'Marché de Petit Bourg',
    categories : ['Marché'],
    infos :"Ce marché est aussi appelé le « jadenpéyi ti-bou », car vous découvrirez une atmosphère festive et familiale. A lieu tous les vendredis de 15h à 22h.",
    lien :'https://terres-de-guadeloupe.com/les-marches-sur-basse-terre/'
},
{
  id : "7",
  link : MarcheBasseTerre,
  nom :'Marché de Basse Terre',
  alt :'Marché de Basse Terre',
  categories : ['Marché'],
  infos :"Le marché de Basse Terre est le plus réputé de la Guadeloupe. Il est ouvert tous les jours de la semaine à partir de 6 heures le matin, sauf le dimanche. Face au front de mer, vous vous promènerez sous une halle semi-ouverte dans une ambiance colorée.",
  lien :'https://www.wlaps.com/marche-basse-terre-ville-guadeloupe/'
},
{
  id : "8",
  link : DistillerieBologne,
  nom :'Distillerie Bologne',
  alt :'Distillerie Bologne',
  categories : ['Rhum', "Culture"],
  infos :"La distillerie Bologne, la plus ancienne de Guadeloupe, est installée sur une plantation de cannes vieille de trois siècles qui s’étend des pentes du volcan de la Soufrière jusqu’à la mer des Caraïbes. Elle fait partie des 3 entreprises locales à détenir le label Entreprise du Patrimoine Vivant",
  lien :'https://www.rhumbologne.fr/accueil'
},
{
  id : "9",
  link : Soufriere,
  nom :'La Soufrière',
  alt :'Volcan la Soufrière',
  categories : ['Randonnée', 'Promenade', "Végétation"],
  infos :"La Soufrière est le point culminant de la Guadeloupe et un volcan actif au repos. Par beau temps, la vue est magnifique. Au sommet, on prend toute la mesure de la puissance qui git sous ses pieds...",
  lien :'http://www.guadeloupe-parcnational.fr/fr/des-decouvertes/les-sites/espaces-terrestres-du-parc-national/la-soufriere'
},
{
  id : "10",
  link : Carbet,
  nom :'Chutes du Carbet',
  alt :'Chutes du Carbet',
  categories : ['Randonnée', 'Promenade', "Végétation", 'Baignade'],
  infos :"Les Chutes de la rivière du Grand Carbet figurent parmi les cascades les plus impressionnantes des Antilles.",
  lien :'http://www.guadeloupe-parcnational.fr/fr/des-decouvertes/les-sites/espaces-terrestres-du-parc-national/les-chutes-du-carbet'
},
{
  id : "11",
  link : PointeChateaux,
  nom :'Pointe des châteaux',
  alt :'Pointe des châteaux',
  categories : ['Promenade', "Mer", 'Randonnée'],
  infos :"La pointe des Châteaux est une péninsule située à la pointe Est de la Grande-Terre en Guadeloupe et un lieu protégé. Il est très impressionnant en raison des formations rocheuses créées par l’érosion.",
  lien :'https://www.pointe-des-chateaux.com/'
},
{
  id : "12",
  link : Cote,
  nom :'Plage des raisins clairs - Saint-François',
  alt :'Plage des raisins clairs - Saint-François',
  categories : ['Promenade', 'Plage', 'Baignade'],
  infos :"Reconnaissable au loin par ses arbres dont les fruits ronds et clairs ressemblent à des raisins, la plage des Raisins Clairs porte bien son nom. Cette magnifique plage de Saint-François vous offre toute l’année, son superbe lagon et ses eaux transparentes. ",
  lien :'https://guadeloupe-destination.com/plages/plage-des-raisins-clairs/'
},
{
  id : "13",
  link : Riviere,
  nom :'Cascade de la lézarde',
  alt :'Cascade de la lézarde',
  categories : ['Promenade', 'Végétation', 'Baignade'],
  infos :"Dans la commune de Petit Bourg, à Vernou, sur la rivière La Lézarde, le Saut de la Lézarde est une belle cascade d'une dizaine de mètres, dotée d'un magnifique bassin propice à la baignade. Une courte et agréable randonnée à travers la forêt tropicale permet de l'atteindre sans difficultés.",
  lien :'https://www.otinbt.fr/decouvrir/sites-remarquables/article/saut-de-la-lezarde'
},
{
  id : "14",
  link : Plongee,
  nom :'Plongée sous-marine',
  alt :'Plongée sous-marine',
  categories : ['Mer', 'Plage', 'Baignade'],
  infos :"Explorez les récifs coralliens et la vie marine colorée de la Guadeloupe. Nous vous conseillons d'aller à la plage de Malendure à Bouillante)",
  lien :'http://www.reserve-cousteau.com/'
},
{
  id : "15",
  link : BateauVerre,
  nom :'Excursion et baignade dans la réserve cousteau',
  alt :'Excursion et baignade dans la réserve cousteau',
  categories : ['Mer', 'Plage', 'Baignade'],
  infos :"Observez les poissons et les tortues dans le bateau de verre puis plongez à leur rencontre (souvent les masques et tubas sont fournis) - Bonne alternative à la plongée sous-marine",
  lien :'https://www.guadeloupe-excursions.fr/top-excursion-guadeloupe.php'
},
{
  id : "16",
  link : Surf,
  nom :'Surf',
  alt :'Surf',
  categories : ['Mer', 'Plage', 'Baignade','Sport'],
  infos :"Anse Souffleur pour les débutants / Pointe d’Antigue pour les experts. Le spot de Port-Louis est parmi les plus beaux de la Guadeloupe. La vague de Port-Louis est réputée molle, mais splendide : de quoi débuter en beauté.",
  lien :'https://www.cabaigne.net/mag/surf-en-guadeloupe/'
},
{
  id : "17",
  link : Randonnee,
  nom :'Randonnées',
  alt :'Randonnées',
  categories : ['Promenade', 'Végétation'],
  infos :"Découvrez la biodiversité de la Guadeloupe en marchant dans les sentiers de la forêt ou le long du littoral.",
  lien :'https://www.visorando.com/randonnee-guadeloupe.html'
},
{
  id : "18",
  link : Memorial,
  nom :'Visite du Memorial ACTe',
  alt :'Visite du Memorial ACTe',
  categories : ['Culture'],
  infos :"Découvrez l'histoire de la Guadeloupe à travers des expositions sur l'esclavage, la culture créole et l'histoire de l'île.",
  lien :'https://memorial-acte.fr/'
},
{
  id : "19",
  link : Saintes,
  nom :'Les îles de Guadeloupe : Les Saintes',
  alt :'Les Saintes',
  categories : ['Mer', 'Plage', 'Baignade', "Promenade", "Bateau"],
  infos :"Visitez les îles voisines des Saintes et profitez de leur charme paisible et de leurs plages de sable blanc. Spécialité : Tourments d’amour (gâteau)",
  lien :'https://www.lesilesdeguadeloupe.com/tourisme/fr-fr/iles/les-saintes'
},
{
  id : "20",
  link : JardinDeau,
  nom :"Jardin d'eau",
  alt :"Jardin d'eau",
  categories : ["Promenade", "Végétation", "Baignade"],
  infos :"Unique en Guadeloupe, Le Jardin d'eau, situé à Goyave en bordure de la rivière La Rose est un Parc d'agrément de 8 ha dans lequel on peut mêler balades, pique-nique et baignade.",
  lien :'https://terres-de-guadeloupe.com/le-jardin-deau/'
},
{
  id : "21",
  link : JardinValombreuse,
  nom :"Jardin de Valombreuse",
  alt :"Jardin de Valombreuse",
  categories : ["Promenade", "Végétation"],
  infos :"Le jardin de Valombreuse est l'oeuvre d'une passionnée, Madame MagguyChaulet qui a décidé suite à un ouragan, de créer le 1er parc floral de Guadeloupe et d’y présenter les plus belles plantes de l’île.",
  lien :'https://www.valombreuse.com/'
},
{
  id : "22",
  link : CascadeEcrevisse,
  nom :"Cascade aux écrevisses",
  alt :"Cascade aux écrevisses",
  categories : ["Promenade", "Végétation", "Baignade","Rivière"],
  infos :"Découvrez cette jolie cascade en pleine forêt tropicale (située à Petit bourg)",
  lien :'https://terres-de-guadeloupe.com/cascade-aux-ecrevisses/'
},
{
  id : "23",
  link : Mangrove,
  nom :"Explorez la Mangrove",
  alt :"Explorez la Mangrove",
  categories : ["Sport", "Végétation"],
  infos :"Explorez les mangroves, un écosystème important pour la biodiversité de la Guadeloupe. Ville conseillée : Sainte-Rose où vous pouvez faire la visite en canoë kayak.",
  lien :'https://www.guadeloupe-excursion.com/excursion/mangrove/'
},
{
  id : "24",
  link : Vanibel,
  nom :"Visite du domaine Vanibel",
  alt :"Visite du domaine Vanibel",
  categories : ["Végétation", "Culture"],
  infos :"Apprenez comment est cultivé le café de la Guadeloupe et goûtez à différentes variétés. D’autres espèces sont abordées (vanille, cacao, bananeraies etc…)",
  lien :'http://www.vanibel.fr/'
},
{
  id : "25",
  link : Cacao,
  nom :"Visite du domaine Vanibel",
  alt :"Visite du domaine Vanibel",
  categories : ["Végétation", "Culture"],
  infos :"Cheminez dans la cacaoyère dans un parcours pédagogique et ludique ponctué d’informations botaniques et historiques sur le cacao.",
  lien :'https://www.maisonducacao.fr/'
},
{
  id : "26",
  link : Mamelles,
  nom :"Parc des Mamelles",
  alt :"Visite du parc des mamelles",
  categories : ["Végétation", "Culture", "Promenade"],
  infos :"Le Parc des Mamelles consacre plus de 2 hectares de forêt tropicale à la conservation d'espèces animales rares ou menacées.",
  lien :'https://www.zoodeguadeloupe.com/#bienvenue-au-zoo'
},
{
  id : "27",
  link : DistillerieLongueteau,
  nom :'Distillerie Longueteau',
  alt :'Distillerie Longueteau',
  categories : ['Rhum', "Culture"],
  infos :"Apprenez comment est produit le célèbre rhum guadeloupéen et goûtez à différentes variétés.",
  lien :'https://www.rhumlongueteau.fr/fr'
},
{
  id : "28",
  link : Jardin,
  nom :'Jardin Botanique',
  alt :'Jardin Botanique',
  categories : ['Promenade', "Végétation"],
  infos :"Découvrez une grande variété de plantes tropicales et exotiques de la Guadeloupe.",
  lien :'https://www.jardin-botanique.com/fr/accueil/'
},
{
  id : "29",
  link : Desirade,
  nom :'Les îles de Guadeloupe : La Desirade',
  alt :'La Desirade',
  categories : ['Mer', 'Plage', 'Baignade', "Promenade", "Bateau"],
  infos :"L’île de la Désirade se situe à l’est de la Grande-Terre dans l’archipel guadeloupéen. D’une superficie de 22 km², elle présente un large éventail de roches et de phénomènes géologiques",
  lien :'https://www.lesilesdeguadeloupe.com/tourisme/fr-fr/iles/la-desirade'
},
{
  id : "30",
  link : MarieGalante,
  nom :'Les îles de Guadeloupe : Marie Galante',
  alt :'Marie Galante',
  categories : ['Mer', 'Plage', 'Baignade', "Promenade", "Bateau"],
  infos :"Marie-Galante est une île de la Guadeloupe située au sud-est. Connue pour ses plages de sable blanc, ses falaises, ses mangroves, ses forêts tropicales, et sa production de rhum. Elle possède également des villages et des petits ports de pêche charmants avec une culture créole forte. Spécialité : sirop de batterie",
  lien :'https://www.lesilesdeguadeloupe.com/tourisme/fr-fr/iles/marie-galante'
},
{
  id : "31",
  link : MarcheMoule,
  nom :'Marché du Moule',
  alt :'Marché du Moule',
  categories : ['Marché'],
  infos :"Elu « plus beau marché des Antilles-Guyane » tous vos sens seront en éveil : épices, fruits, légumes, kassav, accras, gâteau « péi », gratins de légumes, poulet boucané, huile de coco... ",
  lien :'https://www.lemoule.fr/ma-ville/economie-et-emploi/marches-communaux/article/marches-communaux'
},
];

export const buttons = [
    {
      name: "All",
      value: "all"
    },
    {
      name: "Côte",
      value: "cote"
    },
    {
      name: "Promenade",
      value: "Jardin"
    },
    {
      name: "Îles",
      value: "plage"
    }
  ];