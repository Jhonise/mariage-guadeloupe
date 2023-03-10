import Cote from '../images/cote700400.jpeg';
import Riviere from '../images/riviere700400.jpeg';
import Randoaqua from '../images/Randoaqua2.jpg';
import PlageDeshaies from '../images/Plagedeshaies.jpg';
import SaintAnne from '../images/sainteAnne.jpg';
import PetiteTerre from '../images/petiteTerre.jpg';
import DistillerieBologne from '../images/Bologne.jpg';
import Soufriere from '../images/Souffriere.jpg';
import PointeChateaux from '../images/PointeChateaux.jpg';
import Wedding from '../images/wedding.jpg';
import VieuxFort from '../images/VieuxFort.jpg';
import Chill from '../images/chill2.jpg';
import Brunch from '../images/Brunch.jpg';
import Carousel from 'better-react-carousel';


export default function Agenda() {
  return (
    <div class="pt-10">
    <div className='text-center'>
      <h1 class='style font-bold text-[#00739F]'>Agenda des Mariés</h1>
    </div>
    
    <Carousel cols={3} rows={1} gap={20}>
      <Carousel.Item>
      <div class="rounded overflow-hidden shadow-lg bg-white">
        <div class='relative'>
          <span class="absolute left-1 top-1 bg-gray-200 rounded px-3 py-1 text-l text-[#0085B8] font-semibold mr-2 mb-2">Jeudi 1er Juin Après-midi</span>
          <img class="w-full" src={Chill} alt="Chill"/>
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Chill</div>
            <p class="text-gray-700 text-base">
            Fin de journée chill après notre arrivée en Guadeloupe (15h) : on profite de l'habitation Saint-Charles
            </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Chill</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Piscine</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Cocktail</span>
        </div>
    </div>
    </Carousel.Item>
    <Carousel.Item>
{/* <!--Card --> */}
<div class="rounded overflow-hidden shadow-lg bg-white">
        <div class='relative'>
          <span class="absolute left-1 top-1 bg-gray-200 rounded px-3 py-1 text-l text-[#0085B8] font-semibold mr-2 mb-2">Vendredi 2 Juin Matin</span>
          <img class="w-full" src={Randoaqua} alt="Randonnée Aquatique"/>
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Randonnée Aquatique</div>
          <p class="text-gray-700 text-base">
          Venez découvrir une nature préservée au coeur de la forêt tropicale. 
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Fleur</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Nature</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Rivière</span>
        </div>
      </div>
      </Carousel.Item>
      <Carousel.Item>
      <div class="rounded overflow-hidden shadow-lg bg-white">
        <div class='relative'>
          <span class="absolute left-1 top-1 bg-gray-200 rounded px-3 py-1 text-l text-[#0085B8] font-semibold mr-2 mb-2">Vendredi 2 Juin Après-midi</span>
          <img class="w-full" src={PlageDeshaies} alt=""/>
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Plage de Grande Anse - Deshaies</div>
          <p class="text-gray-700 text-base">
          La plage de Grande Anse est l'une des plus grandes plages de Guadeloupe, dans la partie nord-ouest de Basse-Terre. Selon les envies : bronzette, chill, baignade, marche le long du littoral
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Promenade</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Plage</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Mer</span>
        </div>
      </div>
      </Carousel.Item>
      <Carousel.Item>
      <div class="rounded overflow-hidden shadow-lg bg-white">
        <div class='relative'>
          <span class="absolute left-1 top-1 bg-gray-200 rounded px-3 py-1 text-l text-[#0085B8] font-semibold mr-2 mb-2">Samedi 3 Juin</span>
          <img class="w-full" src={Wedding} alt="Randonnée Aquatique"/>
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Mariage</div>
          <p class="text-gray-700 text-base">
          Préparation le matin, église à 15h puis cocktail, dîner et soirée dansante à l'habitation Saint-charles.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Union</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Eglise</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Fête</span>
        </div>
      </div>
      </Carousel.Item>
      <Carousel.Item>
      <div class="rounded overflow-hidden shadow-lg bg-white">
        <div class='relative'>
          <span class="absolute left-1 top-1 bg-gray-200 rounded px-3 py-1 text-l text-[#0085B8] font-semibold mr-2 mb-2">Dimanche 4 Juin matin</span>
          <img class="w-full" src={Brunch} alt="Randonnée Aquatique"/>
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Brunch</div>
          <p class="text-gray-700 text-base">
          On vous offre le brunch le matin pour prolonger les festivités à l'habitation Saint Charles. Nous nous absenterons pour faire une séance photo.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Tous ensemble</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Chill</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Miam</span>
        </div>
      </div>
      </Carousel.Item>
      <Carousel.Item>
      <div class="rounded overflow-hidden shadow-lg bg-white">
        <div class='relative'>
          <span class="absolute left-1 top-1 bg-gray-200 rounded px-3 py-1 text-l text-[#0085B8] font-semibold mr-2 mb-2">Dimanche 4 Juin Après-midi</span>
          <img class="w-full" src={SaintAnne} alt="Randonnée Aquatique"/>
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Plage et marché</div>
          <p class="text-gray-700 text-base">
          Séance bronzage et chill à la plage de Sainte-Anne jusqu'au soir (plage éclairée).
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Dodo</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Chill</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Plage</span>
        </div>
      </div>
      </Carousel.Item>
      <Carousel.Item>
      <div class="rounded overflow-hidden shadow-lg bg-white">
        <div class='relative'>
          <span class="absolute left-1 top-1 bg-gray-200 rounded px-3 py-1 text-l text-[#0085B8] font-semibold mr-2 mb-2">Lundi 5 Juin</span>
          <img class="w-full" src={PetiteTerre} alt="Randonnée Aquatique"/>
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Excursion dans la réserve de Petite terre</div>
          <p class="text-gray-700 text-base">
          Journée complète à 110 euros (on fait les réservations) qui comprend la traversée, grillade sur la plage et open-bar. Réserve naturelle accessible uniquement par bâteau. Magnifique plage de sable blanc ombragée de cocotiers, un lagon aux eaux cristallines, une faune et une flore préservées.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Paradis</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Tortue</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Open bar</span>
        </div>
      </div>
      </Carousel.Item>
      <Carousel.Item>
      <div class="rounded overflow-hidden shadow-lg bg-white">
        <div class='relative'>
          <span class="absolute left-1 top-1 bg-gray-200 rounded px-3 py-1 text-l text-[#0085B8] font-semibold mr-2 mb-2">Mardi 6 Juin Matin</span>
          <img class="w-full" src={DistillerieBologne} alt="Randonnée Aquatique"/>
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Visite de Basse terre : Fort Delgres, marché et distillerie</div>
          <p class="text-gray-700 text-base">
          On se balade au fort, on passe au marché et on termine par la visite de la distillerie Bologne
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Rhum</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Visite</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Culture</span>
        </div>
      </div>
      </Carousel.Item>
      <Carousel.Item>
      <div class="rounded overflow-hidden shadow-lg bg-white">
        <div class='relative'>
          <span class="absolute left-1 top-1 bg-gray-200 rounded px-3 py-1 text-l text-[#0085B8] font-semibold mr-2 mb-2">Mardi 6 Juin Après midi</span>
          <img class="w-full" src={VieuxFort} alt="Randonnée Aquatique"/>
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Balade à Vieux Fort</div>
          <p class="text-gray-700 text-base">
          Promenade jusqu'au phare de Vieux fort. Réputé pour être un site très tranquille, il permet d'admirer à gauche l'atlantique avec la vue sur les îles des Saintes et à droite la mer des Caraïbes.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Promenade</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Paysage</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Couché de soleil</span>
        </div>
      </div>
      </Carousel.Item>
      <Carousel.Item>
      <div class="rounded overflow-hidden shadow-lg bg-white">
        <div class='relative'>
          <span class="absolute left-1 top-1 bg-gray-200 rounded px-3 py-1 text-l text-[#0085B8] font-semibold mr-2 mb-2">Mercredi 7 Juin</span>
          <img class="w-full" src={Soufriere} alt="Randonnée Aquatique"/>
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Ascension de la Soufrière</div>
          <p class="text-gray-700 text-base">
          La Soufrière est le point culminant de la Guadeloupe et un volcan actif au repos. Par beau temps, la vue est magnifique. Si on a le temps nous ferons les chutes du Carbet à côté. Prévoir un pique nique.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Randonnée</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Paysage</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Sportif</span>
        </div>
      </div>
      </Carousel.Item>
      <Carousel.Item>
      <div class="rounded overflow-hidden shadow-lg bg-white">
        <div class='relative'>
          <span class="absolute left-1 top-1 bg-gray-200 rounded px-3 py-1 text-l text-[#0085B8] font-semibold mr-2 mb-2">Jeudi 8 Juin Matin</span>
          <img class="w-full" src={PointeChateaux} alt="Randonnée Aquatique"/>
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Pointe des Châteaux</div>
          <p class="text-gray-700 text-base">
          La pointe des Châteaux est une péninsule située à la pointe Est de la Grande-Terre en Guadeloupe et un lieu protégé. Il est très impressionnant en raison des formations rocheuses créées par l’érosion.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Randonnée</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Paysage</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Sportif</span>
        </div>
      </div>
      </Carousel.Item>
      <Carousel.Item>
      <div class="rounded overflow-hidden shadow-lg bg-white">
        <div class='relative'>
          <span class="absolute left-1 top-1 bg-gray-200 rounded px-3 py-1 text-l text-[#0085B8] font-semibold mr-2 mb-2">Jeudi 8 Juin Après-midi</span>
          <img class="w-full" src={Cote} alt="Randonnée Aquatique"/>
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Plage à Saint-françois</div>
          <p class="text-gray-700 text-base">
          Après l'effort, moment détente à la plage des raisins clairs à Saint-françois.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Sable blanc</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#SorbetCoco</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Bronzage</span>
        </div>
      </div>
      </Carousel.Item>
      <Carousel.Item>
      <div class="rounded overflow-hidden shadow-lg bg-white">
        <div class='relative'>
          <span class="absolute left-1 top-1 bg-gray-200 rounded px-3 py-1 text-l text-[#0085B8] font-semibold mr-2 mb-2">Vendredi 9 Juin Matin</span>
          <img class="w-full" src={Riviere} alt="Randonnée Aquatique"/>
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Cascade de la lézarde</div>
          <p class="text-gray-700 text-base">
          Avant de partir, un dernier détour à la cascade de la lézarde pour se rafraichir.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Baignade</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Promenade</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Végétation</span>
        </div>
      </div>
        </Carousel.Item>
      </Carousel>

      </div>
  );
}

