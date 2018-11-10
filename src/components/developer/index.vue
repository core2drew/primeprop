<template>
  <div class="container-fluid px-0 h-100">
    <TopMenu v-bind:class="{ developer: isDeveloperPage}" v-bind:staticLogo="logo" v-bind:isDeveloperPage="isDeveloperPage"/>
    <router-view v-bind:developers="developers"></router-view>
    <Footer />
  </div>
</template>

<script>
import TopMenu from '../TopMenu'
import Footer from '../Footer'
export default {
  name: 'Developer',
  components: {
    TopMenu,
    Footer
  },
  data () {
    return {
      isDeveloperPage: true,
      logo: require('../../assets/prime_logo_secondary.svg'),
      developers: {
        ayalaland: {
          premier: [
            {
              title: 'Parklinks',
              name: 'parklinks',
              featureImage: {
                url: require('../../assets/properties/ayalaland/premier/parklinks.jpg'),
                alt: 'parklinks-feature-image'
              },
              location: 'Quezon City and Pasig',
              address: 'Ugong Norte, Quezon City, Metro Manila',
              googleMap: 'https://www.google.com/maps/place/Parklinks/@14.5984321,121.0776451,16.75z/data=!4m5!3m4!1s0x3397b8002edc464b:0xc4affe8a470bb3d9!8m2!3d14.5983005!4d121.0798039',
              overview:
                `<p>This fourth quarter, Ayala Land Premier unveils its newest residential tower in Parklinks.</p>
                <p class='text-uppercase font-weight-bold'>DISCOVER A DYNAMIC LIFE ENHANCED BY PANORAMIC LIVING AND URBAN CONVENIENCE</p>
                <p>
                  A joint venture between Ayala Land and Eton Properties, 
                  two of the country’s leading property developers, 
                  Parklinks is Ayala Land’s first master-planned mixed-used 
                  development in Quezon City and Pasig. Covering 35 hectares, 
                  it is envisioned to be the greenest urban estate in Metro Manila and the 
                  largest along the C-5 corridor.
                </p>`,
              details:
                `<p class='font-weight-bold'>Creating New Connections</p>
                <p>
                  With fifty percent of the 35-hectare estate dedicated to parks and open spaces, 
                  future residents will enjoy immediate access to four extensive parks, 
                  all linked to nurture an active lifestyle close to nature.
                </p>
                <p>
                  <b>Central Park:</b> a 3-hectare park with sprawling lawns and a line of retail establishments </br>
                  <b>River Park Terraces:</b> parks overlooking the river and include bike lanes, a viewing deck, nursery, and café </br>
                  <b>Riparian Gardens:</b> an enveloping green space patterned after the natural landscape of the area </br>
                  <b>River Esplanade:</b> a civic space fronting the river and directly accessible from Ayala Land Premier’s development
                </p>
                <p>
                  Intended to be a landmark of Parklinks, the River Esplanade will be an open stretch of landscape beside the Marikina river, featuring a large plaza and a covered pathway leading to the Parklinks Bridge. It will be directly accessible by the residents of Ayala Land Premier’s residential development on the east side.
                </p>
                <p>
                  Set to open in 2022, Ayala Malls Parklinks will be a 5-story premium shopping center with a large sports complex, an office space, and an entertainment zone. It will be directly accessible from C-5, giving future residents a dynamic living experience of utmost connectivity and convenience.
                </p>`
            },
            {
              title: 'Alviera',
              name: 'alviera',
              featureImage: {
                url: require('../../assets/properties/ayalaland/premier/parklinks.jpg'),
                alt: 'alviera-feature-image'
              },
              location: 'Porac, Pampanga',
              address: 'Porac Access Rd, Porac, Pampanga',
              googleMap: 'https://www.google.com.ph/maps/place/Alviera/@15.1148071,120.5128521,18.25z/data=!4m8!1m2!2m1!1sAlviera!3m4!1s0x33968cb8f2c72c57:0xb8277128d60245bb!8m2!3d15.1148009!4d120.5128956?hl=en',
              overview:
                `
                <p>Ayala Land Premier, the country’s leading luxury real estate developer, will soon unveil its most intimate neighborhood, its pioneer residential community in Pampanga.</p>
                <p class='text-uppercase font-weight-bold'>PAMPANGA’S NEWEST CENTER OF GROWTH</p>

                <p>Alviera is a mixed-use, sustainable, master-planned estate, a joint development by Ayala Land and Leonio Land, covering 1,800 hectares of prime land in Porac, Pampanga. Seamlessly connected to SCTEX through NLEX and TPLEX, it presents convenient access to the key areas north of Manila. Its strategic location puts it in proximity to the Clark International Airport, and the Subic Bay Freeport Zone, opening up numerous opportunities for its residents.</p>

                <p>The estate paints the picture of a complete community: residences catering to various lifestyles, multiple areas for leisure, recreation, and fitness, vibrant commercial centers, and renowned institutions.</p>

                <p>Central to the masterplan of the estate is the Alviera Country Club. The first of its kind in Pampanga, it offers members a full-range of amenities, perfect for family moments amidst the sprawling landscapes of Alviera.</p>

                <p>Spanning the entire length of the estate, stretching 5 kilometers is the distinctive Greenbelt – Alviera’s sprawling park. Located at the center will be the La Salle Botanical Gardens, envisioned to be a platform for sustainability, awareness, and caring for the environment.</p>

                <p class='text-uppercase font-weight-bold'>THE MOST COVETED RESIDENTIAL ADDRESS IN ALVIERA</p>

                <p>Offering a select number of lots, in a low-density enclave, Ayala land Premier’s distinctive address underscores utmost exclusivity, amidst the natural expansive landscapes of Alviera. Ayala Land Premier presents an incomparable living experience for families and generations to come.</p>`
            },
            {
              title: 'The Residences - Azuela Cove',
              name: 'the-residences-azuelacove',
              featureImage: {
                url: require('../../assets/properties/ayalaland/premier/parklinks.jpg'),
                alt: 'the-residences-feature-image'
              },
              location: 'Azuela Cove, Davao City',
              address: 'Azuela Cove, J.P. Laurel Avenue corner R. Castillo Street, KM. 7 Lanang, Brgy. Vicente Hizon Sr., Buhangin District, Davao City',
              googleMap: 'https://www.google.com/maps/place/Azuela+Cove/@7.1013426,125.6450558,18z/data=!3m1!4b1!4m5!3m4!1s0x32f96c259222bb27:0xc7cdc4c9025dd912!8m2!3d7.1013399!4d125.6461501',
              overview:
                `<p class='text-uppercase font-weight-bold'>AYALA LAND PREMIER’S FLAGSHIP PROJECT IN DAVAO</p>
                <p>The Residences at Azuela Cove is Ayala Land Premier’s first residential development in Davao, and espouses the brand’s dedication for delivering distinctive living experiences.</p>
                <p class='text-uppercase font-weight-bold'>AN UNMATCHED LOCATION</p>
                <p>Occupying the most prominent area within Azuela Cove, the two-tower development is situated right by the sea, providing its residents an incomparable waterside address.</p>
                <p>Completion Date: December 2023</p>`,
              details:
                `<p class='font-weight-bold'>LUXURY AS DEFINED BY PRIVACY AND EXCLUSIVITY</p>

                <p>The two low-density residential towers are tucked away in the quieter side of the estate. The 10,000-square meter plot is bounded by lush parks and the sea. The North Tower –the first phase of the development, comprises a total of only 70 units across just 21 floors, with each floor encompassing a maximum of four homes, providing heightened exclusivity and privacy for the residents.</p>

                <p class='font-weight-bold'>ICONIC ARCHITECTURE AND INTUITIVELY-DESIGNED HOMES</p>

                <p>The site’s condition and prime location defines the architectural design of the building, which opens up the residences to breathtaking views of the Davao Gulf and SamalIsland. Masterfully-designed, all units are afforded balconies and unobstructed sea views.</p>
                `,
              unitRange: `<p>181 to 377 SQM</p>`,
              priceRange: `<p>P31 M TO P81 M</p>`,
              amenities: `
                <ul>
                  <li>Lobby & Residents Lounge</li>
                  <li>Fitness Center & Changing Rooms</li>
                  <li>Social Hall & Pantry</li>
                  <li>Board Room</li>
                  <li>Building Administration Office</li>
                  <li>Outdoor Play Area</li>
                  <li>Pool Deck</li>
                </ul>
              `
            },
            {
              title: 'Cerilo - Nuvali',
              name: 'cerilo-nuvali',
              featureImage: {
                url: require('../../assets/properties/ayalaland/premier/parklinks.jpg'),
                alt: 'cerilo-feature-image'
              },
              location: 'Nuvali, Laguna',
              address: 'Nuvali, Laguna',
              googleMap: 'https://www.google.com/maps/search/Evoliving+Parkway,+NUVALI,+Sta.Rosa,+Laguna/@14.2150541,121.0528026,14z/data=!3m1!4b1',
              overview:
                `
                <p>Ayala Land Premier opens a distinctive living experience in NUVALI, nurtured by a deep connection to the land, bringing lifestyles in harmony with nature.</p>
                <p class='text-uppercase font-weight-bold'>GREEN SPACES INTERWOVEN WITH HOMES</p>
                <p>About 80% of Cerilo’s lots are adjacent to verdant open spaces. These unique natural areas are situated in between homes, creating shared expansive green corridors for the community to enjoy.</p>
                <p>Completion Date: September 2024</p>`,
              details:
                `<p>Cerilo is Ayala Land Premier’s eighth residential development in NUVALI, its celebrated showcase community in Calamba, Laguna, just south of Manila. Across 2,290 hectares of prime land, NUVALI is the largest of Ayala Land’s master-planned, mixed-use estates.</p>
                <p>In only around eight years, NUVALI has transformed into a flourishing eco-community, with more than half of the estate’s total land area already fully developed. Today, NUVALI has almost 130,000 square meters of commercial space, comprising both retail and office establishments. These include bustling lifestyle destination Solenad, which houses cinemas, restaurants and shops.</p>
                <p>Vital institutions such as Qualimed General Hospital and top-tier educational establishments such as Xavier School have also established themselves in the community. In fact, the newly-opened Miriam College will be one of Cerilo’s closest neighbors.</p>
                `,
              unitRange: `<p>520 to 1,300 SQM</p>`,
              priceRange: `<p>PHP12.8M TO PHP29.3M</p>`,
              amenities: `<p>The main park located at the heart of Cerilo encompasses an area of over six hectares, branching into linear parks and bike trails spread around the development.</p>
              <p>The focal point of the landscape will be a two-hectare clubhouse area featuring a social hall, multi-purpose court, swimming pool and residents lounge. Adjacent to Cerilo will be an upscale retail space envisioned to cater to future residents and the surrounding villages.</p>`
            },
            {
              title: 'Park Central Towers',
              name: 'park-central-towers',
              featureImage: {
                url: require('../../assets/properties/ayalaland/premier/parklinks.jpg'),
                alt: 'park-central-towers-feature-image'
              },
              location: 'Makati',
              address: 'Paseo de Roxas, 8735 Makati Ave, Makati, 1227 Metro Manila',
              googleMap: 'https://www.google.com/maps/search/Evoliving+Parkway,+NUVALI,+Sta.Rosa,+Laguna/@14.2150541,121.0528026,14z/data=!3m1!4b1',
              overview:
                `
                <p class='text-uppercase font-weight-bold'>UNBOUNDED PLANES OF IMAGINATION</p>
                <p>A limitless expanse divides earth and sky, a vibrant stillness dawning over the horizon. Soaring within Roxas Triangle, Ayala Land Premier unveils a radiant living experience — PARK CENTRAL TOWERS.</p>
                <p>At the intersection of Paseo de Roxas and Makati Avenue, an iconic two-tower residence converging dimensions of city living — spaces uplifted by vast skyline views, a profusion of lifestyle options amidst refreshing patches of green, illuminating the exuberance of the Makati Central Business District.</p>
                <p>An address gracefully unfolding —</p>
                <p class='text-uppercase font-weight-bold'>THE REST IS JUST LUXURY.</p>
                <p class='text-uppercase font-weight-bold'>PRISMATIC LIVING</p>
                <p>Park Central Towers exemplifies contemporary living, emboldened with the most inspired details of refinement — an elegant high glass ratio facade allowing natural light and expansive views to stream in, encompasses up to 68 storeys in the South Tower, highlighted by vast Sky Terraces.</p>
                <p>Anchored by a curated spectrum of retail, dining, service establishments, and dynamic workspaces at the podium level, a unique living experience opens a variety of delights and encounters, with matchless ease following every step.</p>
                <p>Completion Date: December 2025</p>`,
              details:
                `<p>At the core of a thriving city, Park Central Towers unfolds timeless residences in Makati’s urban oasis. An integrated locale places homes at the center of it all — paramount connectivity to the lush spaces of Ayala Triangle and proximity to premier lifestyle destinations in Ayala Center— positioning everything within reach from all directions.</p>
                <p>Infinity manifested—forming the number 8, an esteemed community symbolizes prosperity and good fortune, guaranteeing a multiplicity of experiences.</p>
                `,
              unitRange: `<p>138 - 1,635 SQM</p>`,
              priceRange: `<p>P32 M TO P476 M</p>`,
              amenities: `
                <ul>
                  <li>Pool</li>
                  <li>Fitness center</li>
                  <li>Indoor multi-purpose court</li>
                  <li>Indoor resident's lounge</li>
                  <li>Social hall</li>
                  <li>Function rooms</li>
                  <li>Boardroom</li>
                  <li>Indoor children's play area</li>
                  <li>Outdoor children's play area</li>
                  <li>Administration and engineering offices</li>
                  <li>Driver's lounge</li>
                  <li>Car wash bay</li>
                  <li>Storage</li>
                  <li>Motorcourt</li>
                </ul>
              `
            }
          ]
        }
      }
    }
  }
}
</script>

<style>

</style>
