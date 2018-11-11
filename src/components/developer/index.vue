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
            //Parklinks
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
            //Alviera
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
            //The Residences - Azuela Cove
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
            //Cerilo - Nuvali
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
            //Park Central Towers
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
            },
            //Arbor Lanes - Arca
            {
              title: 'Arbor Lanes - Arca',
              name: 'arbor-lanes-arca',
              featureImage: {
                url: require('../../assets/properties/ayalaland/premier/parklinks.jpg'),
                alt: 'arbor-lanes-feature-image'
              },
              location: 'Taguig',
              address: 'Nexus Street, Arca South, Western Bucutan, Taguig, 1630 Metro Manila',
              googleMap: 'https://www.google.com/maps/search/Evoliving+Parkway,+NUVALI,+Sta.Rosa,+Laguna/@14.2150541,121.0528026,14z/data=!3m1!4b1',
              overview:
                `
                <p class='text-uppercase font-weight-bold'>AN IDYLLIC RETREAT</p>
                <p>Cultivating affinities, Arbor Lanes embraces leisure settings bathed in life. With gardens, pools, and shared open spaces, gatherings and everyday pursuits are inspired by a natural energy.</p>

                <p class='text-uppercase font-weight-bold'>SYNCHRONICITY EMBRACING THE SOUTH</p>

                <p>Presenting a vision for a progressive development, Arca South highlights access, variety, and efficiency through intuitively planned environments. The district builds a natural connectedness throughout with architecture within sightlines, natural lighting and ventilation within homes, and a spatial cadence complementing a development of human scale.</p>

                <p>Through walkable streets, generous urban gardens and pocket parks, lively retail spaces, and residential communities, Arca South is a new center for growth fully connected within and around the metro.</p>

                <p>Completion Date: Block 1 June 2018 | Block 2 April 2019 | Block 3 April 2021</p>`,
              details:
                `<p>At the core of a thriving city, Park Central Towers unfolds timeless residences in Makati’s urban oasis. An integrated locale places homes at the center of it all — paramount connectivity to the lush spaces of Ayala Triangle and proximity to premier lifestyle destinations in Ayala Center— positioning everything within reach from all directions.</p>
                <p>Infinity manifested—forming the number 8, an esteemed community symbolizes prosperity and good fortune, guaranteeing a multiplicity of experiences.</p>
                `,
              unitRange: `<p>50 - 120 SQM</p>`,
              priceRange: `<p>P9.7 M TO P40 M</p>`,
              amenities: `
                <ul>
                  <li>Concierge</li>
                  <li>Mailroom/Package Room</li>
                  <li>Garbage Room</li>
                  <li>Garbage Chute (per building)</li>
                  <li>Security Room</li>
                  <li>Car Washing Bay</li>
                  <li>Driver’s Lounge</li>
                  <li>Property Management Office</li>
                  <li>Loading Dock</li>
                  <li>Materials Recovery Facility</li>
                </ul>
              `
            },
            //The Alcoves
            {
              title: 'The Alcoves',
              name: 'the-alcoves',
              featureImage: {
                url: require('../../assets/properties/ayalaland/premier/parklinks.jpg'),
                alt: 'the-alcoves-feature-image'
              },
              location: 'Cebu',
              address: 'Luzon Avenue, Cebu Business Park, Brgy. Mabolo, Cebu City',
              googleMap: 'https://www.google.com/maps/place/The+Alcoves/@10.3168915,123.9021491,17z/data=!3m1!4b1!4m5!3m4!1s0x33a9993f6cbf4eb1:0x2b59dd01643ef83!8m2!3d10.3168862!4d123.9043378',
              overview:
                `
                <p class='text-uppercase font-weight-bold'>SETTING THE FRAME FOR LIVING</p>
                <p>Life abounds amidst a palate of manifold choices. Select opportunities for leisure, dining, and retail lie at your doorstep. Ayala Land Premier presents THE ALCOVES. Rising atop Ayala Center Cebu, a gathering of life’s finest details abounds with select opportunities for leisure, dining, and retail—defining sensibilities, expressing lifestyles.</p>
                `,
              details:
                `<p class='text-uppercase font-weight-bold'>A PORTRAIT OF DISTINCTION</p>
                <p>At the heart of Cebu City, an address of distinction to complement your lifestyle. Framed within Cebu Business Park, The Alcoves draws together the most sought after destinations for business, leisure, and living. Direct access to Ayala Center Cebu opens a flow of convenience, nurturing with the fine details of life.</p>
                <p>With everything within reach, your every gesture makes a mark- an assemblage of different shapes and textures. Light and shadow, color, experience, memory, a portrait of your home emerges – expressing essence, revealing identity.</p>
                `,
              unitRange: `<p>58 TO 259 SQM</p>`,
              priceRange: `<p>P7.9 M TO P51.3 M</p>`,
              amenities: `
                <p>Residents will have direct access to Ayala Center Cebu and enjoy retail and dining establishments at the ground level, 2nd level, and 3rd level.</p>
                <p>Amenity Deck at the 4th Level:</p>
                <ul>
                  <li>2,500 sqm landscaped garden deck</li>
                  <li>Kiddie pool</li>
                  <li>Lounge pool</li>
                  <li>Indoor and outdoor playgrounds</li>
                  <li>Function rooms</li>
                  <li>Veranda</li>
                </ul>
                <p>The Sky Pavilion at the 35th level:</p>
                <ul>
                  <li>Lap pool</li>
                  <li>Pool lounge</li>
                  <li>Fitness gym</li>
                </ul>
                <p>Back of house Facilities:</p>
                <ul>
                  <li>Concierge services</li>
                  <li>Mail room</li>
                  <li>Administration office</li>
                  <li>Water and fire services</li>
                  <li>Centralized sanitary disposal system</li>
                </ul>
              `
            },
            //Anvaya Cove
            {
              title: 'Anvaya Cove',
              name: 'anvaya-cove',
              featureImage: {
                url: require('../../assets/properties/ayalaland/premier/parklinks.jpg'),
                alt: 'anvaya-cove-feature-image'
              },
              location: 'Bataan',
              address: 'Brgy. Sabang and Brgy. Mabayo, Morong, Bataan',
              googleMap: 'https://www.google.com/maps/place/Anvaya+Cove+Nature+Club,+Morong,+Bataan/@14.721511,120.2567956,18z/data=!3m1!4b1!4m5!3m4!1s0x339673514fda83dd:0x6c931376a0b2a37e!8m2!3d14.7210901!4d120.2574027',
              overview:
                `
                <p>Anvaya Cove is Ayala Land Premier’s first venture in leisure development.  Its unique “mountains meet the sea” topography gives it the features of both a mountain retreat and a seaside resort.</p>
                <p>A seaside residential community like no other, Anvaya Cove encompasses 420 hectares, from a 3.5 kilometer coastline to a peak elevation of over 130 meters above sea level. The development offers neighborhoods with distinctive environments set against stunning views of the mountains of the Bataan range and the waters of Subic Bay.</p>
                <p>Careful planning has gone into keeping the natural lay of the land – splendid panoramas, open expanses, wetlands teeming with life, abundant forests -seamlessly transitioning into the architectural guidelines of the development. The homes and other structures are woven into the terrain using the airy and inviting Asian Tropical design aesthetic done in a palette of soft, earthy tones. Rolling asphalt roads and low-impact pedestrian paths preserve the natural beauty of the site. These verdant swathes of land encourage family bonding to flow from indoors to outdoors and easily into the activities and discoveries of the Anvaya Cove Beach & Nature Club found at its center.</p>
                <p>COMPLETION DATE: Sea Breeze Verandas Building E January 2021</p>
                `,
              details:
                `<p class='text-uppercase font-weight-bold'>NEIGHBORHOODS</p>
                <p>Anvaya Cove offer neighborhoods with distinct environments set against stunning views of the mountains of the Bataan range and the waters of Subic Bay.</p>
                <p class='text-uppercase font-weight-bold'>SOUTH COAST</p>
                <p>At the Southernmost part of Anvaya Cove, a scenic arrangement of natural living spaces open up to generous landscapes and private courtyards. Nestled within an 11 hectare expanse, South Coast is a dynamic neighborhood of 91 lots measuring 496 sqm to 1,246 sqm.</p>
                <p>South Coast is the first neighborhood in Anvaya Cove to feature a courtyard concept. Residential lots cluster around a shared green space – a perfect setting for intimate encounters with your family.</p>
                <p class='text-uppercase font-weight-bold'>SOUTH COAST</p>
                <p>At the Seascape Ridge, more than 85% of the neighborhood is devoted to open spaces and greenery so you can revel in its natural features – an expanse of green at the center complemented by landscaped gardens and natural footpaths for each corner home.</p>
                <p>Fourteen quads are spread out across 4.5 hectares maintaining wide open spaces, with quads approximately 20 meters away from each other. The quads and their landscaping blend effortlessly with the existing design of Anvaya Cove, yet are distinctive enough to provide a sense of community. Enjoy convenience parking – two slots for each corner home – apart from the designated parking area for guests.</p>
                <p>Seascape Ridge units provide all the privacy and comfort of a home, in a prime elevated location. Each unit, designed in the open and airy Tropical Asian architecture, extends the beauty of Anvaya Cove seamlessly inside and out. Every detail is laid out to encourage family bonding with more room for kids to enjoy their summers in the magnificent outdoors. And there’s no need to worry about the upkeep – Ayala Property Management Corporation is on the job to handle grounds maintenance and administration.</p>
                <p>Seascape Ridge is all about providing choices – there are options to buy more than a single corner home or to even own an entire leisure quad for your extended family. A warm and welcoming vacation house with the conveniences and security of condominium living – the ideal second home for clients of all nationalities.</p>
                <p>THE CONCEPT</p>
                <p>The Seascape Ridge is a 4.6 hectare masterplanned community with a tropical Asian-inspired architecture. They are composed of 14 quads with a total of 56 corner units, ready to move-in. Structured under a condominium set-up and managed by Ayala Property Management Corp., Seascape Ridge offers hassle-free planning & construction and worry-free ownership for all nationalities in search of their seaside leisure getaway.</p>
                <p class='text-uppercase font-weight-bold'>SEABREEZE VERANDAS</p>
                <p>The Seabreeze Verandas at Anvaya Cove is a low-rise condominium product of Ayala Land Premier’s signature leisure community. The Verandas offer thoughtfully-designed, ready-to-move-in units fro convenient and hassle-free living. located at the highest ridge of Anvaya Cove, 120 meters above sea level, the Sea Breeze Verandas affords panoramic views of the mountains and the Sea.</p>
                <p>Sprawled across 4 hectares, there will be 5 low-rise buildings varying from 4 to 6 stories. Exclusive amenities and shared parking will be provided for all unit owners.</p>
                <p>THE CONCEPT</p>
                <p>Located at the highest ridge of Anvaya Cove (120 meters above sea level), the Seabreeze Verandas offers views of Illingin Cove, West Philippine Sea, and the Bataan and Zambales Mountain Ranges. 60 to 70% of the property will be dedicated to open space and spacious verandas provide for a private outdoor respite while unit owners take in the views surrounding the building. Amenities include landscaped gardens and greenery, and a swimming pool. Common areas and grounds maintenance to be handled by Ayala Property Management Corporation.</p>
                `,
              unitRange: `<p>400 to 1600 SQM</p>`,
              priceRange: `<p>P4.2 M to P29.2 M</p>`,
              amenities: `
                <p>CLUBS</p>
                <p>BEACH AND NATURE CLUB</p>
                <p>At the Anvaya Cove Beach and Nature Club, throw yourself into the thick of things or wade slowly into a soothing day. You know you’ve found a treasure trove when family encounters with nature are a tradition and you’ve given our kids wonderful memories to last a lifetime.</p>
                <p>Main Pavilion:</p>
                <ul>
                  <li>Welcome Pavilion</li>
                  <li>Tennis Court</p>
                  <li>Bamboo Café</li>
                  <li>Sambali Lounge</li>
                  <li>Function Rooms</li>
                  <li>Game Room, Library Lounge,</li>
                  <li>Convenience Shop, and Clinic</li>
                  <li>Lookout Tower and Tower Bar</li>
                  <li>Seahorse Kiddie Village</li>
                </ul>
                <p>Recreational Beach Area:</p>
                <ul>
                  <li>Pawikan Bar and Grille</li>
                  <li>Water Sports Pavilion</li>
                  <li>Sunset Bar</li>
                  <li>Bonfire Area</li>
                </ul>
                <p>Great Lawn and Lagoon</p>
                <p>The Veda Spa</p>

                <p>The Pools at Anvaya</p>
                <ul>
                  <li>Infinity Pool</li>
                  <li>Lounge Pool</li>
                  <li>Lap Pool</li>
                </ul>
                <p>Casitas:</p>
                <ul>
                  <li>Garden Rooms</li>
                  <li>Garden Terrace</li>
                  <li>Lagoon Terrace</li>
                  <li>Anvaya Suite</li>
                </ul>

                <p>
                Nature Camp: (Developer Owned Facility)
                </p>
                <ul>
                  <li>Fitness Trail</li>
                  <li>Kiddie Trail</li>
                  <li>Kiddie Ziplines</li>
                  <li>Adventure Trail</li>
                  <li>Magma Trail</li>
                  <li>Full Ziplines and Adventure Tower</li>
                </ul>
                <p>GOLF AND SPORTS CLUB</p>

                <p>The Anvaya Cove Golf and Sports Club is an exclusive, non-profit membership club featuring an 18- hole all-weather golf course, a world-class golf club and an extensive sports complex—all delivered in the Ayala Land Premier tradition of excellence.</p>

                <p>At the Anvaya Cove Golf and Sports Club, sports, recreation, and family bonding intertwine in a lush, seaside setting. The Club consists of extensive sports facilities, a pool complex, and elegant yet relaxed dining,lounging and social spaces.</p>

                <p>The golf course aims to be as environmentally sustainable as possible by minimizing earth works, saving mature trees, landscaping with endemic flora and designing the fairways and tees so that the course feels as if “it has always been there”.</p>

                <p>The approximately 82 hectare, 18-hole all-weather, 7,200 yard, par 72 championship golf course meanders across the Anvaya Cove development and promises to enthrall players of all levels.</p>

                <p>MOUNTAIN NINE (Front 9 – Holes 1 to 9)
                The front nine course is situated at or near the peaks and ridges of the development providing elevated vistas of the sea, the Zambales and Bataan mountain ranges and it also showcases the different neighborhoods in Anvaya.</p>

                <p>Seaside Nine (Back 9 – Holes 10 to 18)
                The layout and design of this course is reminiscent of popular seaside courses. It combines panoramic sea views amidst nature preserves providing a truly unique golfing experience.</p>

                <p>The golf course is designed for various skill levels. Each hole will have 4 tee placements. This will allow all members of the family to learn and enjoy the sport:</p>
                <ul>
                  <li>RED TEE (Ladies)</li>
                  <li>WHITE (Beginners and novice players)</li>
                  <li>BLUE (Experienced golfers)</li>
                  <li>GOLD (Pro Tee)</li>
                </ul>
              `
            },
            //The Courtyards - Vermoso
            {
              title: 'The Courtyards - Vermosa',
              name: 'the-courtyards-vermosa',
              featureImage: {
                url: require('../../assets/properties/ayalaland/premier/parklinks.jpg'),
                alt: 'the-courtyards-vermosa-feature-image'
              },
              location: 'Imus and Dasmariñas, Cavite',
              address: 'Salawag, Dasmariñas, Cavite',
              googleMap: 'https://www.google.com/maps/place/The+Courtyards+by+Ayala+Land+Premier/@14.3593244,120.9682528,17z/data=!3m1!4b1!4m5!3m4!1s0x3397d40957d48dd1:0x1a66d512d824d592!8m2!3d14.3593192!4d120.9704415',
              overview:
                `
                <p>New Suburban Living in the South</p>
                <p>Vivid skies and a timeless air bring life to a community perched on vast landscapes. Ayala Land Premier presents a new suburban address—a rare confluence of life, work, leisure, and nature.</p>
                <p>
                NEW SUBURBAN LIVING IN THE SOUTH<br/>
                A private sanctuary with easy proximity to the city, The Courtyards celebrates the convenience of urban life and the calm of suburban living in a vast 130-hectare development. 238 residential allotments* enclaved in courtyards unfold various lot types.</p>
                <p>At The Courtyards, a distinctive living experience highlights possibilities as infinite as the horizon.</p>
                <p>Completion Date: October 31, 2024</p>
                `,
              details:
                `<p class='text-uppercase font-weight-bold'>Courtyard Living</p>
                <p>Families flourish within intimate neighborhoods. With an enduring natural landscape and abundant open space, The Courtyards nurtures lifelong relationships in a perfect setting for sharing moments.</p>
                `,
              unitRange: `<p>470 to 1,947 SQM</p>`,
              priceRange: `<p>P14.6 M TO P96.3 M</p>`,
              amenities: `
                <ul>
                  <li>Community Center</li>
                  <li>Swimming Pool</li>
                  <li>Playfield</li>
                  <li>Multi-Purpose Court</li>
                </ul>
              `
            },
            //West Gallery Place
            {
              title: 'West Gallery Place',
              name: 'west-gallery-place',
              featureImage: {
                url: require('../../assets/properties/ayalaland/premier/parklinks.jpg'),
                alt: 'west-gallery-place-feature-image'
              },
              location: 'Taguig',
              address: '9th ave. cor 28th Street, High Street South, Bonifacio Global City',
              googleMap: 'https://www.google.com/maps/place/West+Gallery+Place/@14.5488666,121.0490617,17z/data=!3m1!4b1!4m5!3m4!1s0x3397c8f206586561:0x46468c190ea6cb9e!8m2!3d14.5488614!4d121.0512504',
              overview:
                `
                <p>Myriad forms. Multiple dimensions. Manifold facets. Amidst an expanding cosmopolis, a singular community completes the picture of contemporary urban living.</p>
                <p>Complementing the flexibility of East Gallery Place, Ayala Land Premier presents its latest addition to High Street South’s esteemed selection of residential towers. A 49-storey vertical community unveiling a curated selection of timeless spaces. An address of classic sensibility. Welcome to West Gallery Place.</p>
                <p>Completion Date: March 2022</p>
                `,
              details:
                `
                <p>A profusion of lifestyle experiences unfold within and around, revealing new dimensions of cosmopolitan city living. Highlighting a living experience of urban ease, High Street South complements the tower’s selection of unique amenities, including its own set of retail establishments at the ground floor.</p>
                `,
              unitRange: `<p>52 to 701 SQM</p>`,
              priceRange: `<p>P10.9 M TO P181.7 M</p>`,
              amenities: `
                <p>Lobbies and Drop-Off:</p>
                <ul>
                  <li>Grand lobby and main drop-off located at the ground level</li>
                  <li>Pedestrian access for each wing located at the ground level</li>
                  <li>Concierge desk and mailroom located at the ground level</li>
                </ul>
                <p>Amenity Deck:</p>
                <ul>
                  <li>Function room/social hall with an adjacent pantry</li>
                  <li>Lap/lounge pool with adjacent deck</li>
                  <li>Gym with shower and locker rooms</li>
                  <li>Indoor children’s play area</li>
                  <li>Boardroom</li>
                </ul>
                <p>Back of House Facilities:</p>
                <ul>
                  <li>Property Management Office</li>
                  <li>Security Room</li>
                  <li>Maintenance and Janitorial Room</li>
                  <li>Fire Command Center Room</li>
                  <li>Driver’s Lounge</li>
                  <li>Loading Dock</li>
                  <li>Garbage Room</li>
                  <li>Materials Recovery Facility</li>
                  <li>Garbage Chute</li>
                </ul>
              `
            },
            //Ayala Greenfield Estates
            {
              title: 'Ayala Greenfield Estates',
              name: 'ayala-greenfield-estates',
              featureImage: {
                url: require('../../assets/properties/ayalaland/premier/parklinks.jpg'),
                alt: 'ayala-greenfield-estates-feature-image'
              },
              location: 'Laguna',
              address: 'Canlubang, Calamba, Laguna, Calamba, 4027 Laguna',
              googleMap: 'https://www.google.com/maps/place/Ayala+Greenfield+Estates/@14.1614307,121.1587838,17z/data=!4m5!3m4!1s0x33bd640469f19dd9:0x12815ab99152709c!8m2!3d14.1614255!4d121.1609725',
              overview:
                `
                <p>Only 20 minutes from Alabang, Ayala Greenfield Estates is a magical neighborhood that provides residents with a true sanctuary to come home to everyday.</p>
                <p>With priceless views of Mount Makiling, Laguna de Bay, Tagaytay Ridge, and the Metro Manila cityscape, Ayala Greenfield Estates also has first-class recreational amenities, including its very own 18-hole, par 72 championship golf course designed by Robert Trent Jones II, the father of environmental golf course design.</p>
                <p>A community that works around nature rather than suppresses it, this 350-hectare development serves as the habitat of 35 species and 21 families of endemic and migratory birds. The flora provides a magnificent backdrop to any family scene, and the cool mountain breezes comfort both body and mind.  This sense of being in a different world is made even better by an ideal location that keeps the conveniences of the city only a short drive away.</p>
                <p>Completion Date: Q4 2019</p>
                `,
              details:
                `
                <p>A profusion of lifestyle experiences unfold within and around, revealing new dimensions of cosmopolitan city living. Highlighting a living experience of urban ease, High Street South complements the tower’s selection of unique amenities, including its own set of retail establishments at the ground floor.</p>
                `,
              unitRange: `<p>311 to 1,833 SQM</p>`,
              priceRange: `<p>P7 M TO P21 M</p>`,
              amenities: `
                <p>Ayala Greenfield Estates boasts of world-class facilities that cater to an active lifestyle. Amidst this resplendent natural environment, world-class recreational facilities bestow Ayala Greenfield Estates with a genteel country-club lifestyle that its residents are able to enjoy every single day.</p>
                
                <p><strong>Nature Park</strong><br/>
                A 15-hectare Nature Park with picnic groves and other amenities such as an open playfield, tree groves, hike and bike trails, a skating rink, a fishing lagoon and camp and picnic sites, provide the perfect place for you and your family to live and grow.</p>

                <p>Fishing LagoonPicnic HutsTree HouseCamping GroundsBiking and Hiking TrailsPlayfield</p>

                <p><strong>View Deck</strong><br/>
                From this peak, at 315 meters above sea level, you can cast your gaze over the vast plains of Batangas, the Laguna Bay and the ridge of Tagaytay.</p>

                <p><strong>View Corridor</strong><br/>
                A symbolic connection between Mount Makiling and Laguna plains, the View Corridor traverses almost 500 meters of downhill slope and covers close to 2 hectares of land.</p>

                <p><strong>Arbor Trails</strong><br/>
                The Arbor Trails is a 15-hectare expanse of lush greens, which boasts of several hiking trails for either long leisurely walks or strenuous hikes. There is also a natural winding trail where residents can go biking through the vast surrounding nature. Park rangers, who constantly patrol the property, will conduct hiking seminars for those who would like to learn skills needed for the more difficult trails. Picnic tables, sitting areas and benches are strategically situated around the area.</p>

                <p><strong>Riparian Grove</strong><br/>
                The phrase “nature at its finest” is an understatement when it comes to describing the beauty of Riparian Grove. Whether you are looking for solace in nature, while taking in the lush flora that abundantly surrounds this place, or the adventure and company of other people through the challenging camping trails, it can all be done here in “The Grove” through the different kinds of amenities that it will offer.</p>

                <p><strong>Village Clubhouse</strong><br/>
                This is the perfect spot for those social gatherings with neighbors and friends. With social halls, function rooms and even a coffee shop, you can easily share an idle chat with visitors from the metropolis, or have that much-awaited reunion with relatives from around the world.</p>

                <p>Infinity PoolChildren’s PoolJacuzziSports Facilities- Indoor and outdoor basketball courts</p>
                <ul>
                  <li>Indoor and outdoor tennis courts</li>
                  <li>Indoor badminton court</li>
                  <li>Fitness gym</li>
                </ul>

                <p><strong>The Golf Course</strong><br/>
                Residents and guests can enjoy the 18-hole, par 72, all-weather championship golf course designed by the father of environmental golf course design, Robert Trent Jones II.
                </p>
  
                <p>Ayala Greenfield Golf and Leisure Club
                Beyond the golf course, residents can take a break from the activities and dine with a view at the Ayala Greenfield Golf & Leisure Club.</p>
              `
            },
            //Riomonte - Nuvali
            {
              title: 'Riomonte - Nuvali',
              name: 'west-gallery-place',
              featureImage: {
                url: require('../../assets/properties/ayalaland/premier/parklinks.jpg'),
                alt: 'west-gallery-place-feature-image'
              },
              location: 'Nuvali, Calamba, Laguna',
              address: 'Nuvali, Calamba, Laguna',
              googleMap: 'https://www.google.com/maps/place/Riomonte+by+Ayala+Land+Premier/@14.1792352,121.055455,17z/data=!3m1!4b1!4m5!3m4!1s0x33bd7b5d99d84519:0x7eb0658a477d7b32!8m2!3d14.17923!4d121.0576437',
              overview:
                `
                <p>At Ayala Land Premier’s newest residential development in NUVALI, five pocket neighborhoods abound as one bountiful community, woven together by a network of green belts and perimeter parks.</p>
                <p>Completion Date: February 2021</p>
                `,
              details:
                `
                <p>A verdant expanse for connections between family and community to blossom. Riomonte presents vast possibilities for evergreen moments and encounters.</p>
                `,
              unitRange: `<p>480 to 890 SQM</p>`,
              priceRange: `<p>P9.7 M TO P25.5 M</p>`,
              amenities: `
                <p>Lobbies and Drop-Off:</p>
                <ul>
                  <li>Grand lobby and main drop-off located at the ground level</li>
                  <li>Pedestrian access for each wing located at the ground level</li>
                  <li>Concierge desk and mailroom located at the ground level</li>
                </ul>
                <p>Amenity Deck:</p>
                <ul>
                  <li>Function room/social hall with an adjacent pantry</li>
                  <li>Lap/lounge pool with adjacent deck</li>
                  <li>Gym with shower and locker rooms</li>
                  <li>Indoor children’s play area</li>
                  <li>Boardroom</li>
                </ul>
                <p>Back of House Facilities:</p>
                <ul>
                  <li>Property Management Office</li>
                  <li>Security Room</li>
                  <li>Maintenance and Janitorial Room</li>
                  <li>Fire Command Center Room</li>
                  <li>Driver’s Lounge</li>
                  <li>Loading Dock</li>
                  <li>Garbage Room</li>
                  <li>Materials Recovery Facility</li>
                  <li>Garbage Chute</li>
                </ul>
              `
            },
            //The Enclaves
            {
              title: 'The Enclaves',
              name: 'the-enclaves',
              featureImage: {
                url: require('../../assets/properties/ayalaland/premier/parklinks.jpg'),
                alt: 'the-enclaves-feature-image'
              },
              location: 'Bacolod',
              address: 'Talisay City, Negros Occidental',
              googleMap: 'https://www.google.com/maps/place/The+Enclaves/@10.7165381,122.9782326,17z/data=!3m1!4b1!4m5!3m4!1s0x33aed1532a99b4e9:0xd17b9144dfab9fc5!8m2!3d10.7165328!4d122.9804213',
              overview:
                `
                <p>Centrally located in Talisay City with Bacolod to the south and Silay to its north, North Point allows you access to the area’s many offerings, opening up even bigger opportunities and owning up to its title as Negros’ premier lifestyle destination. And at the heart of this vibrant neighborhood is The Enclaves at North Point.</p>
                <p>DEVELOPMENT SUMMARY</p>
                <p>Gross Land Area: Aproximately 33 hectares</p>
                <p>Lot Size Range: 250: 435 square meters</p>
                <p>Average Lot Size: Approximately 295 square meters</p>
                <p>Number of Lots: 595</p>
                <p>Density: Approximately 18 lots per hectare</p>
                `,
              details:
                `
                  <p><strong>REST AND RECREATION AMIDST
                  UNSPOILED NATURAL LANDSCAPES.</strong></p>

                  <p>The village amenities will take advantage of its riverfront setting. These amenities and facilities are envisioned to create opportunities to commune with nature while spending leisure time with family and friends.</p>
                `,
              unitRange: `<p>250 to 435 SQM</p>`,
              priceRange: `<p>P2.2 M TO P6.9 M</p>`,
              amenities: `
                <ul>
                  <li>Social Hall</li>
                  <li>Multi-purpose Court</li>
                  <li>Indoor Fitness Area</li>
                  <li>Swimming Pool with Kiddie Pool</li>
                  <li>Indoor Play Area</li>
                </ul>
              `
            },
            //1016 Residences
            {
              title: '1016 Residences',
              name: '1016-residences',
              featureImage: {
                url: require('../../assets/properties/ayalaland/premier/parklinks.jpg'),
                alt: '1016-residences-feature-image'
              },
              location: 'Cebu City',
              address: 'Masbate Rd. Cebu Bussines Park, Cebu City, 6000 Cebu',
              googleMap: 'https://www.google.com/maps/place/1016+Residences/@10.3161983,123.9055113,17z/data=!3m1!4b1!4m5!3m4!1s0x33a9993fe40e22c9:0x431be1e5bd2f936e!8m2!3d10.316193!4d123.9077',
              overview:
                `
                  <p>1016 Residences is a high-end residential condominium project co-developed by Ayala Land, Inc. and Cebu Holdings, Inc. Carrying the Ayala Land Premier brand, the development promises to deliver an exclusive and distinctive living experience.</p>
                `,
              details:
                `
                  <p>1016 Residences is located centrally at Cebu Business Park. It is a short walk from the city’s premier retail and entertainment hub, the Ayala Center Cebu, and is directly connected to the exclusive City Sports Club Cebu – giving residents an endless array of facilities and amenities for shopping, recreation and business. Its convenient location is balanced with space and luxury through carefully planned and designed spaces which take advantage of scenic views of the sea and the mountains and open up opportunities for open spaces even on the upper floors.</p>

                `,
              unitRange: `<p>98 to 220 SQM</p>`,
              priceRange: `<p>P10.9 M TO P42 M</p>`,
              amenities: `
                <p>Amenities and Facilities:</p>
                <ul>
                  <li>Landscaped gardens</li>
                  <li>Kiddie play area</li>
                  <li>Lobby lounge</li>
                  <li>Roof deck</li>
                  <li>City Sports Club Cebu usage rights</li>
                </ul>

                <p>Efficiency Features:</p>
                <ul>
                  <li>Maximized natural ventilation for common areas</li>
                  <li>Inverter-type air-conditioning system</li>
                  <li>Convenience & Services</li>
                  <li>Three (3) elevators (2 passenger lifts, 1 service/passenger lift)</li>
                  <li>Elegantly-designed ground floor lobby</li>
                  <li>Mail room</li>
                  <li>Administrative office</li>
                  <li>Centralized sanitary disposal system</li>
                  <li>Direct access to City Sports Club Cebu</li>
                  <li>Safety & Security</li>
                  <li>Fire detection and alarm system24 hour security and building maintenance</li>
                  <li>Basement proximity card access</li>
                  <li>100% back-up power</li>
                </ul>
              `
            },
            //Amara Residences
            {
              title: 'Amara',
              name: 'amara',
              featureImage: {
                url: require('../../assets/properties/ayalaland/premier/parklinks.jpg'),
                alt: '1016-residences-feature-image'
              },
              location: 'Cebu',
              address: 'Liloan, Cebu',
              googleMap: 'https://www.google.com/maps/place/Amara/@10.3802586,124.017785,16z/data=!4m5!3m4!1s0x33a9bd0b6de25625:0x93be0b22204354e9!8m2!3d10.3801029!4d124.0176201',
              overview:
                `
                  <p>Amara is a high-end seaside residential community in Cebu island, with a century-old lighthouse standing on one of its rolling hills.</p>
                  <p>Amara is envisaged to provide the ideal resort-inspired lifestyle where residents can nurture relationships with family, neighbors and friends. Families can enjoy a rustic, seaside ambiance while the well-planned features and amenities ensure comfortable living.</p>
                `,
              details:
                `
                  <p>A luxurious section will be carved out along the scenic coastal ridge of the development. This part of Amara will offer wider latitude for extras to lot owners such as private jetties for yacht owners, private infinity pool and decks overlooking the sea, among others.</p>

                `,
              unitRange: `<p>405 to 779 SQM</p>`,
              priceRange: `<p>P5.8 M to P14.4 M</p>`,
              amenities: `
                <p>Clubhouse</p>
                <ul>
                  <li>Infinity swimming pool with jacuzzi</li>
                  <li>Garden lobby</li>
                  <li>Social hall</li>
                  <li>Function rooms</li>
                  <li>Beach bar</li>
                  <li>Admin Office</li>
                </ul>

                <p>Sports and Recreation Club</p>
                <ul>
                  <li>Covered basketball court</li>
                  <li>Covered badminton court</li>
                  <li>Locker rooms for male and female</li>
                  <li>Fitness gym</li>
                </ul>

                <p>Serenity Park</p>
                <ul>
                  <li>Meditation gazebos</li>
                  <li>Fish pond</li>
                  <li>Lush green landscaping with bamboo features</li>
                  <li>Calming light from the lighthouse that passes through the entire park</li>
                  <li>Central Park (5,200 sq.m)</li>
                  <li>Private garden chapel</li>
                  <li>Children’s Playground &Gazebos</li>
                  <li>Esplanade</li>
                  <li>Loading/unloading fair-weather wharf</li>
                  <li>Picnic Grove</li>
                  <li>Jogging trail/footpath</li>
                  <li>Sea Viewing decks</li>
                </ul>

                <p>Village Features and Facilities</p>
                <ul>
                  <li>Underground utilities for power/ telephone/ CATV</li>
                  <li>Road right of way – 12, 14, 15, 30 meters wide</li>
                  <li>Adequate water supply and drainage facilities</li>
                  <li>Centralized sewage treatment facilities</li>
                  <li>Landscaped entrance with guardhouse</li>
                  <li>Well-secured community</li>
                </ul>
              `
            },
          ],
          alveo: [
            //Abreeza Residences
            {
              title: 'Abreeza Residences',
              name: 'abreeza-residences',
              featureImage: {
                url: require('../../assets/properties/ayalaland/premier/parklinks.jpg'),
                alt: 'abreeza-feature-image'
              },
              location: 'Davao City',
              address: 'Abreeza, J.P. Laurel Ave., Bajada, Davao City',
              googleMap: 'https://www.google.com.ph/maps/place/Abreeza+Place+Tower+1,+Nicasio+Torres+St,+Poblacion+District,+Davao+City,+Davao+del+Sur/@7.0913905,125.6112062,17z/data=!3m1!4b1!4m2!3m1!1s0x32f96dabbeeac9b5:0x682d44936f1b3173',
              details:
                `<p>At Abreeza Place, find solace in lush gardens, freshness in cool waters, diversity in stylish shopping choices, and inspiration in brilliantly designed structures.</p>`,
              unitRange:
                `<p>(approx. sizes only) <br/>
                  Studio Unit: 31-33 sq.m. | 334-355 sq.ft <br/>
                  One-Bedroom Unit: 44-53 sq.m. | 476-574 sq.ft.</p>`,
              priceRange:
                `<p>P4.6 M to P17.9 M</p>`,
              amenities:
                `<p>Outdoor Amenities</p>
                  <ul>
                    <li>Swimming Pools (Adult Pool & Kiddie Pool)</li>
                    <li>Pool Deck</li>
                    <li>Landscaped Podium Gardens</li>
                    <li>Roof Deck Garden</li>
                  </ul>

                  <p>Indoor Amenities</p>
                  <ul>
                    <li>Swimming Pools (Adult Pool & Kiddie Pool)</li>
                  </ul>

                  <p>Indoor Amenities - Clubhouse</p>
                  <ul>
                    <li>Function Rooms</li>
                    <li>Fitness Gym</li>
                    <li>Multimedia Room</li>
                    <li>Game Room</li>
                  </ul>`
            },
            //Alveo Financial Tower
            {
              title: 'Alveo Financial Tower',
              name: 'alveo-financial-tower',
              featureImage: {
                url: require('../../assets/properties/ayalaland/premier/parklinks.jpg'),
                alt: 'alveo-financial-tower-feature-image'
              },
              location: 'Makati City',
              address: '6794 Ayala Avenue, Makati City',
              googleMap: 'https://www.google.com.ph/maps/place/ALVEO+FINANCIAL+TOWER/@14.5592566,121.0145838,17z/data=!3m1!4b1!4m5!3m4!1s0x3397c9059b0e133b:0x428e471713464530!8m2!3d14.5592514!4d121.0167725?hl=en',
              details:
                `<p>Situated within the Philippines' premier business address, Alveo Financial Tower reinvigorates Ayala Avenue into a new paradigm in office development.</p>`,
              unitRange:
                `<p>(approx. sizes only) <br/>
                  Middle Unit: 108-116 sq.m. | 1,160-1,250 sq.ft.<br/>
                  Corner Unit: 115-129 sq.m. | 1,240-1,390 sq.ft.<br/>
                  Whole Floor: 1,147-1,271 sq.m. | 12,350-13,680 sq.ft.</p>`,
              priceRange:
                `<p>P25.9 M to P69.7 M</p>`,
              amenities:
                `
                <p>Amenities</p>
                <ul>
                  <li>Signature lobby and retail outlets</li>
                  <li>Food hall</li>
                  <li>Business center</li>
                  <li>Executive dining and outdoor deck</li>
                </ul>
                <p>Building Features</p>
                <ul>
                  <li>Building Management System (BMS)</li>
                  <li>Interior-designed signature lobby and select common areas</li>
                  <li>Automatic standby generator system providing 100% back-up power</li>
                  <li>Centralized chilled water cooling system</li>
                  <li>Water reservoir with separate fire reserves</li>
                  <li>Fire security system24-hour security services and maintenance</li>
                  <li>Common restrooms on typical office floors</li>
                  <li>Centralized sanitary disposal system</li>
                  <li>Building management by Ayala Property Management Corporation (APMC)</li>
                </ul>
                `
            },
            //Ardia Vermosa
            {
              title: 'Ardia Vermosa',
              name: 'ardia-vermosa',
              featureImage: {
                url: require('../../assets/properties/ayalaland/premier/parklinks.jpg'),
                alt: 'ardia-vermosa-feature-image'
              },
              location: 'Imus, Cavite',
              address: 'Daang Hari Road cor. Vermosa Blvd., Imus, 4103 Cavite',
              googleMap: 'https://www.google.com.ph/maps/place/Vermosa/@14.3828372,120.9574533,17z/data=!3m1!4b1!4m5!3m4!1s0x3397d3942529f247:0xdbab4c09084a474f!8m2!3d14.382832!4d120.959642?hl=en',
              unitRange:
                `<p>
                  (approx. sizes only)<br/>
                  267 to 520 SQM
                </p>`,
              amenities:
                `<p>Main Central Park Complex</p>
                <ul>
                  <li>Clubhouse</li>
                  <li>Lobby area</li>
                  <li>Function room</li>
                  <li>Boardroom/ Meeting room</li>
                  <li>Male and female restroom/Shower room</li>
                  <li>Admin office</li>
                  <li>Security and Maintenance office</li>
                </ul>
                <p>Outdoor Amenities</p>
                <ul>
                  <li>Lap pool</li>
                  <li>Lounge pool</li>
                  <li>Children’s pool </li>
                  <li>Jogging and bike trails with distance markers around the development</li>
                </ul>
                <p>Central Park and Pocket Parks</p>
                <ul>
                  <li>Fitness trail</li>
                  <li>Multi-purpose field (for football, frisbee, etc.)</li>
                  <li>Multi-purpose court</li>
                  <li>Children’s play area</li>
                </ul>
                `
            },
            //Aveia
            {
              title: 'Aveia',
              name: 'aveia',
              featureImage: {
                url: require('../../assets/properties/ayalaland/premier/parklinks.jpg'),
                alt: 'aveia-feature-image'
              },
              location: 'Biñan City, Laguna',
              address: 'Brgy. Malamig, Biñan City, Laguna',
              googleMap: "https://www.google.com.ph/maps/place/14%C2%B015'57.9%22N+121%C2%B002'50.8%22E/@14.2657184,121.0435604,16z/data=!4m5!3m4!1s0x0:0x0!8m2!3d14.266089!4d121.047434",
              details:
                `<p>Envisioned to be a quaint, nurturing pocket community, Aveia offers a convenient and complete suburban lifestyle in the South.</p>`,
              unitRange:
                `<p>
                  (approx. sizes only)<br/>
                  296 - 470 sq.m. | 3,186.12 - 5,059.04 sq.ft.
                </p>`,
              priceRange:
                `<p>P4.3 M to P10.8 M</p>`,
              amenities:
                `<p>Main Central Park Complex</p>
                <ul>
                  <li>Main Central Park Complex - Central Park</li>
                  <li>Main Central Park Complex - Clubhouse (approx. 700 sq.m.)</li>
                  <li>Function room (100 sq.m.) that can accommodate 70 pax</li>
                  <li>Board room / meeting room (20 sq.m.)</li>
                  <li>Outdoor lounge area</li>
                  <li>400 sq.m. Swimming Pool</li>
                  <li>Kiddie pool Lap Pool</li>
                  <li>Basketball Court</li>
                </ul>`
            },
            //BPI Cebu Corporate Center
            {
              title: 'BPI Cebu Corporate Center',
              name: 'bpi-cebu-corporate-center',
              featureImage: {
                url: require('../../assets/properties/ayalaland/premier/parklinks.jpg'),
                alt: 'aveia-feature-image'
              },
              location: 'Cebu City',
              address: 'Cebu Business Park, Mindanao Ave., Cebu City',
              googleMap: "https://www.google.com.ph/maps/place/BPI+Cebu+Corporate+Center/@10.3173866,123.9017191,18z/data=!4m5!3m4!1s0x33a9993f3341dd15:0x19bd860b28cea871!8m2!3d10.3175133!4d123.9025962",
              details:
                `<p>Soaring to new heights, BPI Cebu Corporate Center is Alveo Land's first office condominium in the Southern Philippines. As the only development in Cebu to launch professional work spaces available for ownership, this iconic tower elevates you to the top of Southern Philippines' number one business address.</p>`,
              unitRange:
                `<p>
                  (approx. sizes only)<br/>
                  Retail (GF): 108-280 sq.m. | 1,163-3,014 sq.ft.<br/>
                  Typical (8-19F): 68-143 sq.m. | 732-1,539 sq.ft.<br/>
                  Penthouse: 68-143 sq.m. | 2,540-3,035 sq.ft.
                </p>`,
              priceRange:
                `<p>P10.5 M to P54.6 M</p>`
            },
            //Callisto
            {
              title: 'Callisto',
              name: 'callisto',
              featureImage: {
                url: require('../../assets/properties/ayalaland/premier/parklinks.jpg'),
                alt: 'callisto-feature-image'
              },
              location: 'Makati City',
              address: 'West Gala Drive corner Theater Drive, Circuit Makati, Makati City',
              googleMap: "https://www.google.com.ph/maps/place/Callisto+Towers+at+Circuit+Makati/@14.5751346,121.0167398,17z/data=!3m1!4b1!4m5!3m4!1s0x3397c9bb2b145b01:0xce3b100d0bc1ab55!8m2!3d14.5751294!4d121.0189285?hl=en&shorturl=1",
              details:
                `<p>With successful Alveo towers in Makati such as Alveo Financial Tower in Ayala Avenue; Escala Salcedo, The Gentry Residences and The Gentry Corporate Plaza in Salcedo Village, Alveo continues its streak at Circuit Makati.</p>
                <p>Taking off at Makati's Lifestyle Playground—dynamic pursuits and an exhilarating array of leisure and entertainment concepts. Alveo Land extends extraordinary experiences within the city's foremost emerging district to contemporary homes celebrating every unique lifestyle—the starting point for energized investment. With the success of Solstice condominium in Makati Philippines, Alveo Land now presents its second pre-selling residential condominium in Circuit Makati with the Callisto towers. To date, Callisto Alveo price offers the best value for investment.</p>
                <p>As the latest Alveo Circuit project, Callisto Circuit Makati rises at the core of unique lifestyle and entertainment concepts that redefines effortless city living. Callisto towers Circuit Makati presents compact spaces in sync with your every move.</p>
                `,
              unitRange:
                `<p>
                  (approx. sizes only)<br/>
                  Studio Unit: 28-32 sq.m. | 301-344 sq.ft.<br/>
                  One-Bedroom Unit: 56-65 sq.m. | 603-700 sq.ft.<br/>
                  Two-Bedroom Unit: 85-106 sq.m. | 915-1,142 sq.ft.<br/>
                  Three-Bedroom Investor Suites: 116-122 sq.m. | 1,249-1,313 sq.ft.<br/>
                  Three-Bedroom Prime Unit: 122-214 sq.m. | 1,313-2,303 sq.ft. 
                </p>`,
              priceRange:
                `<p>Callisto Circuit Makati price is available upon request.</p>`,
              amenities:
                `<p>Amenities</p>
                <ul>
                  <li>Function room (Tower 1)</li>
                  <li>Board room (Tower 1)</li>
                  <li>Fitness gym (Tower 2)</li>
                  <li>Library (Tower 2)</li>
                  <li>Game room (Tower 2)</li>
                  <li>Lap poolLounge pool</li>
                  <li>Children’s pool</li>
                  <li>Pool deckOutdoor lounge</li>
                  <li>Lawn area</li>
                  <li>Children’s play area</li>
                  <li>Function room spill-over area</li>
                </ul>
                <p>Building Feature</p>
                <ul>
                  <li>Interior-designed lobby</li>
                  <li>Mail room</li>
                  <li>100% stand-by back-up automatic generator system for common areas</li>
                  <li>Fire alarm and smoke detection system</li>
                  <li>Two (2) fire exits per residential floor</li>
                  <li>24-hour security services and maintenance</li>
                  <li>Proximity card access at elevators</li>
                  <li>Amenities located at the podium level</li>
                  <li>Centralized sanitary disposal system</li>
                  <li>Allocated emergency load for residential units in case of power outage</li>
                  <li>Automatic fire sprinkler system</li>
                  <li>Water reservoir with separate fire reserves</li>
                  <li>CCTV cameras</li>
                  <li>Davit system for unit maintenance</li>
                </ul>
                <p>Sustainable Feature</p>
                <ul>
                  <li>Four (4) notches that promote natural ventilation in residential corridors</li>
                  <li>Dual-flush toilets</li>
                  <li>Low-flow valves</li>
                  <li>LED lighting in common areas</li>
                  <li>Maximized natural lighting</li>
                  <li>Maximized cross ventilation</li>
                </ul>
                `
            },
            //Celadon
            {
              title: 'Celadon',
              name: 'celadon',
              featureImage: {
                url: require('../../assets/properties/ayalaland/premier/parklinks.jpg'),
                alt: 'celadon-feature-image'
              },
              location: 'Sta Cruz, Manila',
              address: 'Felix Huertas St., Barangay 350, Zone 35, Sta Cruz, Manila',
              googleMap: "https://www.google.com.ph/maps/place/Celadon+Park/@14.619745,120.986411,15z/data=!4m2!3m1!1s0x0:0x3e790cd9062bad26",
              details:
                `<p>An outstanding community dedicated to nurturing relaxation and rejuvenation, Celadon Park stands out as a picturesque, tranquil getaway in the heart and haven of Manila.</p>`,
              unitRange:
                `<p>
                  (approx. sizes only)<br/>
                  Studio Unit: 24-40 sq.m. | 258-430 sq.ft.<br/>
                  One-Bedroom Unit: 49-85 sq.m. | 527-917 sq.ft.<br/>
                  Two-Bedroom Unit: 69-70 sq.m. | 742-753 sq.ft.
                </p>`,
              priceRange:
                `<p>P2.5 M to P22.8 M</p>`,
              amenities:
                `<p>Outdoor Amenities</p>
                <ul>
                  <li>25-meter Swimming Pool</li>
                  <li>Lounge Pool</li>
                  <li>Jacuzzi and Sauna</li>
                  <li>Children's Pool</li>
                  <li>Private Massage Cabanas</li>
                  <li>Garden Sitting Areas</li>
                  <li>Barbeque and Grilling Area</li>
                  <li>Exercise Lawn</li>
                  <li>Meditation Garden</li>
                  <li>Wooden Lounge Deck</li>
                  <li>Viewing Deck</li>
                  <li>Full-sized Basketball and Multi-purpose Court</li>
                </ul>
                <p>Indoor Amenities</p>
                <ul>
                  <li>Function Rooms</li>
                  <li>Children's Activity Area</li>
                  <li>Gym and Fitness Center</li>
                  <li>Game Room</li>
                </ul>`
            },
            //High Park
            {
              title: 'High Park',
              name: 'high-park',
              featureImage: {
                url: require('../../assets/properties/ayalaland/premier/parklinks.jpg'),
                alt: 'high-park-feature-image'
              },
              location: 'Quezon City',
              address: 'Vertis North, North Avenue cor. EDSA, North Triangle, Bgy. Bagong Pagasa, Quezon City',
              googleMap: "https://www.google.com.ph/maps/place/High+Park+Vertis/@14.6481902,121.0392058,18.25z/data=!4m5!3m4!1s0x3397b703c075cc5d:0xa0dec60469c53c96!8m2!3d14.6480003!4d121.0382632?hl=en",
              details:
                `<p>High Park offers an inspiring two-tower development as part of the Vertis North masterplan, the latest mixed-use city center of Quezon City. Located in the emerging enterprise capital of the North, High Park is an ideal location with prime access to business districts, medical and educational institutions, and major thoroughfares in the metro.</p>
                <p>A Vertis North condo for sale, Alveo High Park Tower 2 combines thriving open spaces with minimalist and contemporary architecture at the heart of Quezon City. High Park is a Vertis North condo pre-selling project of Alveo. As Alveo Land's first residential development in this lifestyle destination, it is one of the first Vertis North condo for sale.</p>
                <p>High Park Tower Two is a prime Vertis North pre-selling condo project in Quezon City.</p>
                `,
              unitRange:
                `<p>
                  (approx. sizes only)<br/>
                  Studio Unit: 32 sq.m. | 345 sq.ft.<br/>
                  One-Bedroom Unit: 61 sq.m. | 657 sq.ft.<br/>
                  Two-Bedroom Unit: 88 sq.m. | 947 sq.ft.<br/>
                  Three-Bedroom Unit: 123 sq.m. | 1,324 sq.ft.
                </p>`,
              priceRange:
                `<p>High Park Vertis North prices offers a valuable return on investment. Vertis North condo prices, including Vertis North pre-selling price, Alveo High Park price, Alveo Vertis North price, and Vertis North price list are available upon request</p>`,
              amenities:
                `<p>Outdoor Amenities</p>
                <ul>
                  <li>Al Fresco Lounge (Tower One, 2nd floor)</li>
                  <li>Kiddie Pool and Lounge / Lap Pool (Tower One, 2nd floor)</li>
                  <li>Sky Park (Tower Two, Roofdeck)</li>
                  <li>Play Area (Tower Two, 2nd floor)</li>
                </ul>
                <p>Indoor Amenities</p>
                <ul>
                  <li>Board Room (Tower One, 2nd floor)</li>
                  <li>Indoor Fitness Gym (Tower One, 2nd floor)</li>
                  <li>Indoor Playroom (Tower Two, 2nd floor)</li>
                  <li>Function Room (Tower Two, 2nd floor)</li>
                  <li>Sky Lounge (Tower Two, Roofdeck)</li>
                </ul>
                <p>Retail</p>
                <ul>
                  <li>Al Fresco Dining</li>
                  <li>Cafés</li>
                </ul>`
            },
          ]
        }
      }
    }
  }
}
</script>
