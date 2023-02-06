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
    <div class="pt-20 ">
    <div className='text-center'>
      <h1 class='style font-bold'>Agenda des Mariés</h1>
    </div>
    
    <Carousel cols={3} rows={1} gap={20}>
      <Carousel.Item>
      <div class="rounded overflow-hidden shadow-lg bg-white">
        <div class='relative'>
          <span class="absolute left-1 top-1 bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Jeudi 10 Après-midi</span>
          <img class="w-full" src={Chill} alt="Chill"/>
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Chill</div>
            <p class="text-gray-700 text-base">
            Fin de journée chill après notre arrivée en Guadeloupe : on profite de l'habitation Saint-Charles
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
          <span class="absolute left-1 top-1 bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Vendredi Matin</span>
          <img class="w-full" src={Randoaqua} alt="Randonnée Aquatique"/>
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Randonnée Aquatique</div>
          <p class="text-gray-700 text-base">
          Venez découvrir une nature préservée au coeur de la forêt tropicale
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
          <span class="absolute left-1 top-1 bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Vendredi Après-midi</span>
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
          <span class="absolute left-1 top-1 bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Samedi</span>
          <img class="w-full" src={Wedding} alt="Randonnée Aquatique"/>
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Mariage</div>
          <p class="text-gray-700 text-base">
          Préparation le matin, église à 15h puis cocktail et diner
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
          <span class="absolute left-1 top-1 bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Dimanche matin</span>
          <img class="w-full" src={Brunch} alt="Randonnée Aquatique"/>
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Brunch</div>
          <p class="text-gray-700 text-base">
          On vous attend le matin pour prolonger les festivités autour d'un brunch à l'habitation Saint Charles. Nous nous absenterons pour faire une séance photo.
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
          <span class="absolute left-1 top-1 bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Dimanche Après-midi</span>
          <img class="w-full" src={SaintAnne} alt="Randonnée Aquatique"/>
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Plage et marché</div>
          <p class="text-gray-700 text-base">
          Séance bronzage et chill à la plage de caravelle de Saint-Anne. On en profitera pour faire le marché.
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
          <span class="absolute left-1 top-1 bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Lundi toute la journée</span>
          <img class="w-full" src={PetiteTerre} alt="Randonnée Aquatique"/>
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Excursion dans la réserve de Petite terre</div>
          <p class="text-gray-700 text-base">
          Journée complète à 110 euros qui comprend la traversée, grillade sur la plage et open-bar. Réserve naturelle accessible uniquement par bâteau. Magnifique plage de sable blanc ombragée de cocotiers, un lagon aux eaux cristallines, une faune et une flore préservées.
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
          <span class="absolute left-1 top-1 bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Mardi Matin</span>
          <img class="w-full" src={DistillerieBologne} alt="Randonnée Aquatique"/>
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Visite de Basse terre : Distillerie et Fort Delgres</div>
          <p class="text-gray-700 text-base">
          Visite de la distillerie Bologne, la plus ancienne de Guadeloupe puis du Fort Delgres
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
          <span class="absolute left-1 top-1 bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Mardi Après midi</span>
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
          <span class="absolute left-1 top-1 bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Mercredi</span>
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
          <span class="absolute left-1 top-1 bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Jeudi Matin</span>
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
          <span class="absolute left-1 top-1 bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Jeudi Après-midi</span>
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
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#GlaceCoco</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Bronzage</span>
        </div>
      </div>
      </Carousel.Item>
      <Carousel.Item>
      <div class="rounded overflow-hidden shadow-lg bg-white">
        <div class='relative'>
          <span class="absolute left-1 top-1 bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Vendredi Matin</span>
          <img class="w-full" src={Riviere} alt="Randonnée Aquatique"/>
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Cascade de la lézarde</div>
          <p class="text-gray-700 text-base">
          Avant de partir, un dernier détour à la cascade de la lézarde pour se raffraichir.
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



// bg-[url('https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80')]

