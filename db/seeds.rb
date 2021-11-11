# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

demo_user = User.create(username: "Demo", email: "example@example.com", password: "123456")
elliot = User.create(username: "ElliotWilson", email: "elliotandrewwilson@gmail.com", password: "123456")
evan = User.create(username: "Evan", email: "evan@example.com", password: "123456")
worldtraveler = User.create(username: "worldtraveler", email: "worldtraveler@example.com", password: "123456")
explorer2000 = User.create(username: "Explorer2000", email: "explorer2000@example.com", password: "123456")
mansoo = User.create(username: "Mansoo", email: "mansoo@example.com", password: "123456")
victor = User.create(username: "TheVictor", email: "victor@example.com", password: "123456")
jonb = User.create(username: "JonB", email: "jonb@example.com", password: "123456")
trekkie = User.create(username: "TrekkieTrekker", email: "trekkietrekker@example.com", password: "123456")
macdonald2 = User.create(username: "macdonald2", email: "macdonald2@example.com", password: "123456")
matteo = User.create(username: "MrMatteo", email: "matteo@example.com", password: "123456")
roadside = User.create(username: "roadsideAmerica", email: "roadside@example.com", password: "123456")
texaspecan = User.create(username: "TexasPecan", email: "texaspecan@example.com", password: "123456")
loslobos = User.create(username: "LosLobos", email: "loslobos@example.com", password: "123456")
parkerT = User.create(username: "ParkerT", email: "parkerT@example.com", password: "123456")

icecream = Location.new(
    title: "Chinatown Ice Cream Factory",
    summary: "Where the menu lists lychee under 'Regular' and vanilla under 'Exotic'",
    address: "65 Bayard Street B, New York, New York, 10013, United States",
    description: "CHINA INVENTED ICE CREAM HUNDREDS of years ago in the Tang Dynasty. At least that’s the myth at the Chinatown Ice Cream Factory, and whether or not it’s true, the Seid family has certainly perfected the art.\n\nFor nearly 30 years, the Factory has been offering a cold treat and has grown wildly popular due to their unique flavors. Wasabi, black sesame and peanut butter and jelly are just a few of the one-of-a kind ice cream options at the Chinatown institution. Walking into the building, the ice cream case dares those who enter to step outside their chocolate chip box and enter a new world of Chinatown flavor.",
    additional_info: "Accessible from 4, 6, B, D, J, N, R, Q, Z Trains at Canal Street",
    initial_author_id: 2,
    lat: 40.7154,
    lng: -73.9982
)

stonehenge = Location.new(
    title: "Stonehenge II",
    summary: "A recreated Stonehenge stands in a country field, complete with Easter Island moai heads standing as sentries.",
    address: "120 Point Theatre Rd S, Ingram, Texas, 78025, United States",
    description: "IN A FIELD ALONGSIDE THIS small country road stands a replica of Stonehenge.\n\nThis 60% scale replica is built by, and on the farmland of, the late Alfred Shepperd, along with the help of his friend and neighbor Doug Hill. It represents what Stonehenge might have looked like before weather and erosion toppled some of the original in Salisbury, England. Two years after Stonehenge II was built, a pair of Easter Island moai figures were added to the site.\n\nOne major difference between Stonehenge and Stonehenge II is weight. While the stones at Stonehenge weigh over 4 tons, the ones that compose Stonehenge II (with the exception of two stones in the center) are made of plaster applied to a wire mesh frame and are considerably lighter.\n\nUpdate: The Stonehenge II structure along with the moai heads has since been moved from the field on Texas Highway 1340 near Hunt, Texas to its current location in front of the Point Theater and Hill Country Arts Foundation on Highway 39 in Ingram, Texas.",
    additional_info: "64 miles west of San Antonio, South off I-10, Exit 505 to FM 783, Harper Rd., Right on TX-27, to Hwy 39 to Left on Point Theatre Rd. in Lions Park.",
    initial_author_id: 2,
    lat: 30.0717,
    lng: -99.2474
)

pecan = Location.new(
    title: "World's Largest Pecan",
    summary: "The saga of the massive nut begins and ends in Texas.",
    address: "390 Cordova Rd, Seguin, Texas, United States",
    description: "THE SAGA OF THE WORLD’S largest pecan began in 1962, when a dentist built a 1,000-pound, five-foot-long pecan in honor of Álvar Núñez Cabeza de Vaca, a Spanish explorer who subsisted on pecans while imprisoned on Texas’ Guadalupe River, which he referred to as the “the river of nuts.”\n\nThe massive pecan in front of City Hall in Seguin, known as the “pecan capital of Texas,” held on to the title for two decades. But in 1982, some pecan farmers in Brunswick, Missouri, built a 12,000-pound, 12-foot long replica of their patented Starking Hardy Giant pecan.\n\nDespite Brunswick’s gentle reminders, which came in the form of countless postcards with pictures of their beloved nut sent to Seguin’s Chamber of Commerce, the Texas town continued to tout its false claim of housing the world’s largest pecan.\n\nIn 2011, Seguin decided to make good on the claim and unveiled its new 16-foot long pecan. The giant nut sits in all its glory by the Texas Agricultural and Heritage Center, proving to visitors that everything is bigger in Texas.",
    initial_author_id: 3,
    lat: 29.6281,
    lng: -97.9701
)

horseman = Location.new(
    title: "Headless Horseman Bridge",
    summary: "The real-life site of Ichabod Crane's infamous gourd attack.",
    address: "415 Broadway, Sleepy Hollow, New York, United States",
    description: "WASHINGTON IRVING CERTAINLY PUT SLEEPY Hollow on the map with his 1820 Gothic horror story, The Legend of Sleepy Hollow. In it, the gloomy town is said to be haunted by the ghost of a Hessian soldier in search of his head, which he’s said to have lost to a cannonball while fighting in the American Revolution. While the story may evoke more fear than intrigue in the small town, it is of course completely fictional (and in fact a rather charming town). The bridge that sets the stories climax, however, is very much real.\n\nAfter the protagonist Ichabod Crane leads the Headless Horseman on a horseback chase through the woods in the dark of night, he’s finally caught at the foot of a wooden bridge that stretches over the Pocantico River (in many folktales, bridges symbolize a liminal space between the realms of the living and the dead). The Headless Horseman hurls a pumpkin at Crane, striking him in the head and leaving him to an unclear fate. Come morning, all that’s found are Crane’s trampled saddle and broken chunks of pumpkin.\n\nAt the time of its writing, there was an actual wooden bridge at the site of Crane’s fictional gourd attack. While it was replaced by a more modern, concrete iteration in 1912 by William Rockerfeller, the structure is still known as “The Headless Horseman Bridge.” You can walk across it or have someone chase you for the real Crane experience—just look out for pumpkins.",
    initial_author_id: 4,
    lat: 41.0897,
    lng: -73.8619
)

unicorns = Location.new(
    title: "Unicorn Tapestries at the Cloisters",
    summary: "Mysterious 500-year-old tapestries depict a unicorn hunt.",
    address: "99 Margaret Corbin Drive, New York, New York, 10040, United States",
    description: "COMPRISED OF SEVEN WALL HANGINGS, each at least 12 feet high by eight feet wide, the Unicorn Tapestries at the Cloisters were created 500 years ago by an unknown artist for unknown royalty in Western Europe.\n\nIn violent and disturbing detail, the series tells the story of hunters stalking through the woods with their canines, hunting the mythical beast. As the story progresses, the unicorn is found and surrounded, ambushed and eventually attacked from all sides. Despite getting away from the hunters, the unicorn is eventually calmed by a virgin maiden and killed while under her charm.\n\nScholars who have studied the tapestries date them from 1495-1505. The design resembles Parisian aesthetic at the time, but it was likely the tapestries were actually produced in Brussels (although even these details disputed). Despite a general geographic location, the identity of the author is completely unknown. The tapestries’ only connection to the past is a small cipher, showing the letters A and E intertwined by some rope, which may signify the artist or the owner of the work.\n\nFrom this slight hint, some have devised that Anne of Brittany commissioned the works to celebrate her marriage to Louis XII, but there is no conclusive proof. Despite the mystery, art historians have reveled in the chance to decipher the tapestries, often comparing the hunt of the unicorn to Christ’s persecution. The unicorn itself, once a pagan symbol, became a symbol for Christ.\n\nAll of the vibrant tapestries are available for personal interpretation and are held in the Met’s Cloisters in upper Manhattan. In the same room, a narwhal tusk is displayed. Medieval Europeans often mistook their tusks as evidence of the mythical beast. ",
    initial_author_id: 2,
    lat: 40.8648,
    lng: -73.9318
)

santa = Location.new(
    title: "Santa Claus, Indiana",
    summary: "You thought Santa Claus didn't exist, but it turns out you were wrong.",
    address: "Santa Claus, Indiana, 47579, United States",
    description: "NOT ONLY THAT, BUT YOU can can totally send a letter to Santa Claus, provided you are sending mail to Indiana…Santa Claus, Indiana, that is.\n\nLabeled “America’s Christmas Hometown,” Santa Claus, Indiana was initially established as Santa Fe, Indiana. However, perhaps after being informed by the US Postal Service that there was another Santa Fe and showing up to the post office wearing the same dress was totally gauche, the town changed its name to…Santa Claus.\n\nThat means that the post office is the Santa Claus post office. And the police department is the Santa Claus PD. And the DMV is the Santa Claus DMV, but…maybe not so jolly.\n\nIf there are Grinches in Santa Claus, they don’t make themselves known around Christmas, when volunteers respond to each and every letter to Santa that comes through the post office. That’s right. Every kid who is smart enough to figure out that Santa has an entire town named after him and write to him there gets a personal letter in return from the Santa Claus Elves. Volunteer elves have been doing this since 1914 (it is doubtful that this is what caused WWI).\n\nThere is plenty to do in Santa Claus. There is Santa’s Candy Castle, where Santa’s woodworking shop can be found and actual toys are made (sorry kids, no Transformers–just stuff made of wood). Kids can also play with toys in various buildings representing various toymakers. There is the Santa Claus Museum, housing a number of Santa Claus mummies. Just kidding. It’s actually all about the history of the town and its transition from Santa Fe to Santa Claus.\n\nThe Holiday World & Splashin’ Safari is a Holiday-themed amusement and waterpark (originally named Santa Claus Land) once visited by Ronald Reagan. It offers non-frostbitey wintery watery fun for the whole family. You can also visit Frosty’s Fun Center (mini-golf, snacks, etc.), which doesn’t sound at all like the setting for an 80s slasher flick. Dad can play the links at the Christmas Lake Golf Course, and the kids can feed apples and carrots to the depressed horses in Santa’s Stables.\n\nIf you are feeling like your Christmas isn’t Christmasy enough, you know where to go.",
    initial_author_id: 5,
    additional_info: "April-May is a great time to visit, as the weather is tolerable, and the numbers of visitors is low. Go for the AO twofer with a visit to the Abraham Lincoln boyhood home, just a couple of miles to the west.",
    lat: 38.1127,
    lng: -86.9173
)

bunyon = Location.new(
    title: "Paul Bunyon of Atlanta, Illinois",
    summary: "While he no longer has an eatery to give him context, this off-brand Paul Bunyan still holds his giant hot dog with pride.",
    address: "Arch Street, Atlanta, Illinois, 61723, United States",
    description: "CREATED IN 1966 AS AN eye-grabbing restaurant advertisement along Route 66, the displaced muffler man known as Paul Bunyon (sic) still holds his precious hot dog for all to see even after being moved from his original spot.\n\nThe oversized fiberglass novelty was first installed on the roof of Bunyon’s hotdog stand in Cicero, Illinois in 1966. Unlike the Paul Bunyan figure from which the figure was molded, Bunyon is holding a massive hotdog instead of an ax. Owned by World War II veteran Hamlet Stephens, the hot dog stand’s name was purposefully misspelled to avoid any copyright issues. Eventually Stephens had the 19-foot woodsman transferred from the roof to the doorstep of his restaurant so that the children and visitors who loved the figure could actually clamber on and over his feet.\n\nPaul Bunyon became a beloved fixture along Route 66 over the decades, but the heady hot dog days could not last forever. Unfortunately Bunyon’s hot dog stand closed in 2002. However Bunyon’s story was not yet over. In 2003 Bunyon was moved to a spot in Atlanta, Illinois after they won a bid for the much lauded Americana statue.\n\nUnfortunately Stephens passed away in 2012, but his fiberglass legacy lives on. Unfortunately (or possibly fortunately) without the hot dog stand for context, Bunyon takes on a much more odd and wondrous presence.",
    additional_info: "After checking out Paul Bunyon, walk across the street to the charming Palms Grill Cafe for a good meal or an excellent piece of pie.",
    initial_author_id: 3,
    lat: 40.2452,
    lng: -89.2657
)

hotdog = Location.new(
    title: "Jimmy Carter's Hot Dog Bun",
    summary: "This restaurant proudly displays bread signed by the 39th president.",
    address: "1902 Front St., Toledo, Ohio, United States",
    description: "TONY PACKO’S HAS SOLD SAUSAGES with spicy chili sauce since 1932. Today, the restaurant has five locations, but you’ll have to visit the original to see Jimmy Carter’s actual signature scribbled across a piece of stale bread.\n\nHot dog buns signed by celebrities line the walls at Tony Packo’s in Toledo, Ohio. Most of these are custom-made, artificial recreations. But the original tradition involved signing an actual bun. The actor Burt Reynolds unintentionally got things started in the 1970s by putting his autograph on bread instead of a piece of paper. Since then, countless politicians, actors, and musicians put their John Hancock on the simple, perishable carbohydrate.\n\nWhile almost every piece of processed bread manufactured in the 1970s has since disintegrated, two signatures from Tony’s original collection of branded buns remain framed. The first belongs to Jimmy Carter, the 39th president of the United States. The second is emblazoned with the handwriting of Walter Mondale, the 42nd vice president of the United States. This particular intersection of Americana-meets-White House paraphernalia has, by no means, aged well. But, they’re both real, and still proudly mounted on the wall at Tony Packo’s.",
    additional_info: "There are three Tony Packo's locations in Toledo. To see the presidential bun, be sure to visit the original location on Front Street.",
    initial_author_id: 6,
    lat: 41.6600,
    lng: -83.5021
)

hobbit = Location.new(
    title: "The Hobbit Café",
    summary: "A taste of Middle Earth, in the middle of the Bayou City.",
    address: "2243 Richmond Avenue, Houston, Texas, 77098, United States",
    description: "AT THE END OF A peculiar L-shaped turn off Houston’s bustling Richmond Avenue sits the nerdiest neighborhood gem in town. The Hobbit Café—so-named for its impressive array of Lord of the Rings memorabilia—is a piquant pitstop for anyone interested in a sandwich based on one of the most successful fantasy series in history.\n\nFor nearly 50 years, the Hobbit Café has served its hefty gastropub fare and diverse beer selection smack in the middle of Texas’s largest city. Vegetarian for the first four years of its existence—a notable feat in longhorn-and-barbecue country—the menu, which opens with Tolkien’s iconic description of the Hobbit species, now also serves carnivores. Unceasingly, the cuisine is served in the same hobbit-sized (that is to say, huge) portions as before.\n\nThe restaurant plays host to classically Tex-Mex cuisine, with a Tolkienian twist. From nachos to fish tacos to their Balrog burger, the Hobbit now serves something for everyone. A favorite of some celebrities and beloved by Houston, the café offers a haven from the hubbub of the city, with outdoor seating bedecked by holiday lights year-round. Of course, that’s if you don’t want to sit on the sheepskin throne just inside the door.",
    additional_info: "If you're driving to the café (it's Houston, so let's be honest—you're driving to it), the turn in can sneak up on you if you're approaching on Richmond Avenue. To spare your driver's nerves, it may be best to approach from the quieter Portsmouth Street side.",
    initial_author_id: 7,
    lat: 29.7339,
    lng: -95.4148
)

serpent = Location.new(
    title: "The Great Serpent Mound",
    summary: "The largest earthwork effigy in the world.",
    address: "3850 OH-73, Peebles, Ohio, 45660, United States",
    description: "THE “MOUND BUILDERS” OF EARLY North America lived throughout what are now the Ohio Valley and Mississippi regions. The earliest group was probably the Adena people, who flourished from 1000 BCE to 200 BCE. They built mounds throughout North America, from Wisconsin to Mississippi.\n\nThe Great Serpent Mound—a 1,330-foot-long, three-foot-high prehistoric effigy mound in southern Ohio—is one of the few surviving relics from the mound builders. The earliest records say it depicts a serpent swallowing an egg, though another interesting theory suggests that the snake is swallowing the moon. In 1909, local German Baptist minister Landon West proposed another possibility: The serpent, he said, is writhing in its death throes as punishment for tempting Adam and Eve, in what West believed was the original Garden of Eden.\n\nIt is unclear who built the Great Serpent Mound. Though the Adena people built structures like it, as well as burial grounds near the mound, charcoal from the mound has been dated to later in history, to around 1000 CE. So the mound may have been built by the Fort Ancient peoples, who lived in the Ohio Valley from 1000 CE to 1550 CE.\n\nThe effigy is located within the Serpent Mound State Memorial and has been designated a National Historic Landmark. A nonprofit organization called Arc of Appalachia maintains a museum near the mound.",
    initial_author_id: 8,
    lat: 39.0252,
    lng: -83.4302
)

texas = Location.new(
    title: "The London Embassy of the Republic of Texas",
    summary: "An alleyway plaque in London is all that remains of the envoy from the Republic of Texas that forgot to pay their rent for over a century.",
    address: "4 St James's Street, London, England, SW1A 1EF, United Kingdom",
    description: "BERRY BROTHERS & RUDD IS one of London’s most venerable wine merchants. Located a few doors down from St. James’s Palace in the City of Westminster, they have been providing wines, ports, and whiskeys to the monarchs of England since King George II, but they were also the onetime landlords for the Embassy of the Republic of Texas.\n\nBuilt in 1730, the distinguished property at 4 St James’s Street is steeped in history and peculiar secrets. Under the shop floor lies two whole acres of wine cellars and caves which run underneath St. James’s Street. The Georgian rooms had once held a brothel and a notorious gambling den, and the courtyard at the back was also home to bear-baiting, cock-fighting and London’s last ever public duel. Napoleon III even lived here in exile whilst plotting his return to France.\n\nBut between 1836 and 1845 it was home to perhaps one its most unusual tenants; for the space above the wine shop was briefly home to the Embassy of the Republic of Texas. At the time of its founding, Texas was an independent sovereign country with its borders under threat from both the United States and Mexico. Then-President-of-Texas Sam Houston sent Dr. Ashbel Smith, the Secretary of State, to be the Texan diplomatic representative in England in an effort to build international sentiment for their country. A second Embassy was also established in France, located in what is now the Hôtel de Vendôme.\n\nTexas finally joined the Union in 1845, despite the Crown’s support of its independence, and the Embassy in London was closed. Taking full advantage of their desirable location above one of London’s best wine shops, the Texan delegation departed the capital leaving a £160 rent bill outstanding.\n\nToday, the historic wine shop is still thriving, but the peculiar chapter of their Texan tenants is long forgotten. Next door is a tiny alleyway called Pickering Place; where a small plaque marks the entrance to the Embassy’s rooms. Still proudly bearing the name of “The Republic Of Texas” it reads,\n\n“Texas Legation in this building was the legation for the ministers from the Republic of Texas to the Court of St. James 1842 - 1845.”\n\nThe onetime Republic of Texas, although consigned to history, still lives on in the hearts of Texans; in 1986 to mark the Texas sesquicentennial, 26 members of the Anglo-Texan society visited the wine shop, dressed in full buckskins, to settle the outstanding rent debt still owed by the Republic of Texas.",
    initial_author_id: 11,
    lat: 51.5055,
    lng: -0.1379
)

dunstan = Location.new(
    title: "The Ruins of St. Dunstan-in-the-East",
    summary: "One of the few remaining casualties of the London Blitz, this destroyed church has become an enchanting public garden.",
    address: "St. Dunstan-in-the-East, St. Dunstan's Hill, London, England, EC3R 8PP, United Kingdom",
    description: "THE CHURCH OF ST.DUNSTAN-IN-THE-EAST HAS survived a lot during its 900-year history, including the Great Fire of London in 1666.\n\nAn English parish church located halfway between the Tower of London and the London Bridge, it was originally built during Norman times. Although the Great Fire caused terrible damage to the church it was faithfully rebuilt, and topped with a steeple designed by Sir Christopher Wren.\n\nBut in 1941, the church was devastated by the Blitz. A direct hit destroyed everything apart from the north and south walls, and Wren’s steeple. The threat of German invasion of the United Kingdom had ended with the Battle of Britain a year earlier, but the sustained strategic bombing of the UK continued. By 1941, the Blitz was reaching its terrible crescendo. Starting on September 7th, 1940, London was bombed for nearly 60 consecutive nights. The night of December 29th saw the most ferocity, as the Luftwaffe blanketed London with bombs in what was called the Second Great Fire of London.\n\nBy the end of the Blitz, over 1,000,000 London homes were destroyed, including much of the old Saxon church. After the war, with much of London in rubble, the slow rebuilding process began. But St. Dunstan-in-the-East remained in ruins. In 1967, the City of London Corporation decided to turn the bombed out shell of the church into a public garden, which remains to this day.\n\nHidden away on a secluded side street, and long since dwarfed by the modern steel and chrome structures of the city, it remains one of London’s secret gardens. One of the last Blitz-damaged buildings left in the United Kingdom, overgrown with trees, ivy, and wall climbing flowers growing amongst the ruined arches, it’s a poignant living memorial to the horrors of the Blitz and a testament to the resilience of the City of London which survived it.",
    initial_author_id: 4,
    additional_info: "Be forewarned, this spot is popular for Instagrammers. Get there early and avoid the weekends, if you don't want to compete for photographs.",
    lat: 51.5097,
    lng: -0.0827
)

elephant = Location.new(
    title: "Elephant Fountain",
    summary: "An ancient elephant made of volanic rock and said to possess magic powers is now the symbol of a Sicilian city.",
    address: "1 Piazza Duomo, Catania, Italy",
    description: "IN THE MID-12TH CENTURY, GEOGRAPHER and traveler Muhammad al-Idrisi completed his life’s work—the most accurate map of the world yet produced, along with its accompanying commentaries. In this cartographic gem, he records that in the Sicilian city of Catania, locals venerated an ancient basalt elephant called “u Liotru” said to possess magic powers and he ability to predict the eruptions of nearby Mount Etna.\n\nToday, the enigmatic pachyderm mentioned by the geographer sits atop an 18th-century fountain in the middle of a piazza. The fountain was constructed in the 1730s by Sicilian architect Giovanni Battista Vaccarini, who appropriated the city’s by-then legendary elephant as its centerpiece. Vaccarini draped a marble saddle cloth over the elephant that bears the coat of arms of St. Agatha, Catania’s patroness. For the icing on his totemic cake, Vaccarini plopped an Egyptian obelisk of equally mysterious origin on the elephant’s back.\n\nThe facts surrounding the construction of the fountain are known, but pretty much everything else regarding u Liotru the elephant and the Egyptian obelisk he carries is not. Though the best guess at dating the elephant is during Roman times, and a local provenance makes sense given the statue’s volcanic rock construction, some have observed the statue’s design doesn’t appear to be Roman.\n\nThe mysterious elephant was a symbol of the city long before it was officially put on the map. During the 9th through 11th-century Muslim rule of Sicily, Catania was known in Arabic as Madinat al-fīl, “The City of the Elephant,” hinting at the existence of u Liotru prior to al-Idrisi’s 12th-century description. A folktale regarding the elephant is set even earlier, in eighth-century Byzantine Catania. It describes a Catanese nobleman named Heliodorus (from whom the name Liotru might have derived), who turned to necromancy after losing a bid to become bishop of Catania to a certain Leo (later sainted as St. Leo Thaumaturgus, or “The Wonderworker”).\n\nIn a plot that resembles the New Testament story of Simon Magus, Heliodorus dazzles the townsfolk with his mastery of the dark arts to outshine his pious rival. The sorcerer builds the elephant and brings it to life, at one point even riding it to Constantinople. As delighted as the simple townsfolk are by Heliodorus’ antics, Bishop Leo is enraged, and has the last laugh by ordering Heliodorus burned alive in the nearby thermal baths. Presumably the townsfolk are equally entertained by this outcome. Against Leo’s wishes, however, the people of Catania insist the magical elephant be kept intact inside the city walls.\n\nIn 1239, Catania rebelled successfully against its ruling bishop-count to become a royal city, free from previous feudal obligations (better to be ruled by a king in distant Palermo than a bishop next door). It was at this time the Catanese chose u Liotru as the city’s symbol, replacing St. George. The elephant can now be seen on the coat of arms of the city of Catania, the province of Catania, and the University of Catania, as well as on the insignia of many local organizations and sports clubs.",
    initial_author_id: 2,
    lat: 37.5024,
    lng: 15.0872
)

cherry = Location.new(
    title: "Spoonbridge and Cherry",
    summary: "A toweringly silly piece of modern art has been delighting locals since the 1980s.",
    address: "14357 Loring Greenway, Minneapolis, Minnesota, 55403, United States",
    description: "AS FAR AS ICONIC PIECES of public art go, none may be as daringly modern or whimsical as Minneapolis’ iconic Spoonbridge and Cherry.\n\nThis giant spoon and cherry was erected in 1985 by artist Claes Oldenburg and his wife, Coosje van Bruggen and is the centerpiece of the Walker Art Center’s Minneapolis Sculpture Garden, the largest urban sculpture park in the world. Oldenburg was an artist who was known for making oversized versions of everyday objects and food products. Together with his wife he set up a number of public sculptures, including Chicago’s Batcolumn sculpture. The spoon was Oldenburg’s idea, who had a habit of doodling spoons ever since 1962 when he was inspired by a spoon resting on a piece of fake chocolate. The cherry in the piece was van Bruggen’s idea, wanting to use it as a comment on the garden’s otherwise staid layout.\n\nThe spoon itself weighs 5,800 pounds and the cherry, another 1,200 pounds. The cherry’s stem also acts as a fountain which sprays into the bowl of the spoon and off into the pond beneath. Even the pond itself has meaning, being shaped to resemble a linden seed, drawing attention to the rows of linden trees planted nearby.\n\nThe city of Minneapolis seems to have largely embraced the massive sculpture, expressing almost universal outrage when Spoonbridge and Cherry was vandalized in 2012 as part of a “Kony 2012” protest. The artwork was cleaned up and still remains as a somewhat goofy, definitely unforgettable icon of the Minnesota city.",
    initial_author_id: 5,
    lat: 44.9703,
    lng: -93.2891
)

lunch = Location.new(
    title: "Louis' Lunch",
    summary: "While many places make the claim, the Library of Congress says this restaurant is the birthplace of the hamburger.",
    address: "261-263 Crown Street, New Haven, Connecticut, 06511, United States",
    description: "THE BIRTHPLACE OF THE HAMBURGER is an honor that many eateries have tried to claim over the years, but only one has been officially recognized by the Library of Congress as the real thing. It may also be the only one still cooking burgers on a vertical stove.\n\nLouis Lunch in New Haven, Connecticut is a historic little diner that has been around since at least 1900 in some form or another. The original iteration was a lunch truck owned by Louis Lassen. According to the story the current restaurant owner tells, in 1900, a customer ran up to the wagon and demanded a quick lunch “to go”. Lassen took some trimmings from the regular steak sandwiches he sold, put them between two pieces of toast, and gave it to his customer. The hamburger was born.\n\nThe honor of being the birthplace of the hamburger was confirmed by the Library of Congress with the help of a member of the House of Representatives. (Sorry, Hamburg, Germany.)\n\nThe lunch truck later evolved into a small restaurant that has been in the same location since the mid-1970s. But even as the restaurant has grown and changed, they continue to cook their burgers on unique, vertical stove towers that date back to 1898.\n\nToday, the restaurant continues to serves their burgers as they always have, with only cheese, tomato, or onions as accompaniments to the basic meat. They don’t offer other condiments, so don’t ask. Louis Lunch invented the hamburger, and you’ll have it their way, thank you very much.",
    initial_author_id: 10,
    additional_info: "This is a cash-only restaurant (i.e., debit/credit cards not accepted), so plan accordingly when visiting.",
    lat: 41.3065,
    lng: -72.9303
)

bigmac = Location.new(
    title: "The Big Mac Museum",
    summary: "This shrine to McDonalds' most iconic sandwich holds a 14-foot tall burger.",
    address: "9061 U.S. 30, Irwin, Pennsylvania, 15642, United States",
    description: "THE IRWIN, PENNSYLVANIA MCDONALD’S LOCATION details the history of the iconic sandwich. However, the location of the museum rankled the residents of the city where the Big Mac was first sold, almost 40 miles away.\n\nThe Big Mac was created by western Pennsylvania franchisee Jim Delligatti, and first served in 1967. The sandwich would then become part of the nationwide menu a year later, and would go on to worldwide fame along with the company. The Economist even uses the Big Mac Index as a way to compare the purchasing power of two currencies. In 2007 the Irwin location was remodeled and became the Big Mac Museum, with a Big Mac sculpture 14 feet tall and 12 feet in diameter, a timeline of the sandwich’s history, and various merchandise and packaging displays.\n\nWhile the sandwich was introduced in western Pennsylvania, some residents of Uniontown, where it was first served, wondered why the museum was placed at this location. A company spokesman said that the museum was established there because of the size of the property and the proximity of the busy Irwin Interchange of the Pennsylvania Turnpike. However, displays in the Big Mac Museum prominently herald Uniontown as the birthplace of an American icon.",
    initial_author_id: 7,
    lat: 40.3207,
    lng: -79.6922
)

hell = Location.new(
    title: "Turkmenistan's Gates of Hell",
    summary: "A fiery crater has been burning in the Karakum Desert in Turkmenistan since 1971.",
    address: "Turkmenistan",
    lat: 40.2522,
    lng: 58.4397,
    description: "IN THE HOT, EXPANSIVE KARAKUM desert in Turkmenistan, near the 350-person village of Darvaza, is a hole 230 feet wide that has been on fire for over 50 years. Though technically called the Darvaza gas crater, locals know the crater as “The Gates of Hell.” Its fiery glow can be seen for miles around.\n\nThe Gates of Hell crater was created in 1971 when a Soviet drilling rig accidentally punched into a massive underground natural gas cavern, causing the ground to collapse and the entire drilling rig to fall in. Having punctured a pocket of gas, poisonous fumes began leaking at an alarming rate.\n\nTo head off a potential environmental catastrophe, the Soviets set the hole alight, figuring it would stop burning within a few weeks. Decades later, and the fiery pit is still going strong. The Soviet drilling rig is believed to still be down there somewhere, on the other side of the “Gates of Hell.”\n\nAmazingly, despite the crater’s foreboding name and ever-present flames, people still trek into the desert to witness the site in all its blazing glory. The country’s government hopes it’ll become a tourist site, and the nearby desert has already become a popular place to wild camp.",
    initial_author_id: 1
)

roots = Location.new(
    title: "The Root Bridges of Cherrapunji",
    summary: "The bridges are alive in the hills of Cherrapunji, where long tangles of rubber tree roots are an essential part of the village infrastructure.",
    address: "Latikynsew Village, Cherrapunjee, 793004, India",
    description: "IN THE DEPTHS OF NORTHEASTERN India, within sight of the India-Bangladesh border, in one of the wettest places on earth, bridges aren’t built—they’re grown.\n\nThe southern Khasi and Jaintia hills are humid and warm, crisscrossed by swift-flowing rivers and mountain streams. On the slopes of these hills, a species of Indian rubber tree with an incredibly strong root system thrives and flourishes.\n\nThe Ficus elastica produces a series of secondary roots from higher up its trunk and can comfortably perch atop huge boulders along the riverbanks, or even in the middle of the rivers themselves. The War-Khasis and War-Jaintias, two closely related tribes in Meghalaya, long ago noticed this tree and saw in its powerful roots an opportunity to easily cross the area’s many rivers. Now, whenever and wherever the need arises, they simply grow their bridges.\n\nIn order to make a rubber tree’s roots grow in the right direction—say, over a river—the people of southern Meghalaya have used several different strategies. Sometimes, the roots of the trees are simply pulled, tied, twisted, and encouraged by hand to merge with each other, until, over time, they form the desired architectural structure. Root bridges have also been made by creating scaffolds out of wood and bamboo, and then training the young roots out across these temporary structures, replacing the more perishable elements many times as they rot in the intense monsoon seasons.\n\nIn some places, such as around the village of Nongriat, betel nut trunks, sliced down the middle and hollowed out, are used to create root-guidance systems. The thin, tender roots of the rubber tree, prevented from fanning out by the betel nut trunks, grow straight out. The trunks also have the added advantage of providing the roots with additional nutrients as they decay. When they reach the other side of the river, they’re allowed to take root in the soil. Given enough time a sturdy, living bridge is produced.\n\nThe root bridges can grow for as long as the organism they are a part of remains healthy, though they can take many years to initially become functional, the length of time being dependent on local conditions such as the health of the tree, the way the bridge is being grown, and the availability of nutrients in the soil that its being grown in. However, once root bridges become established, they’re extraordinarily strong—strong enough that some of them can support the weight of 50 or more people at a time. In fact, because they are alive and still growing, the bridges actually gain strength over time—and some of the ancient root bridges used daily by the people of the villages around Cherrapunji may be well over 500 years old.\n\nThe roots bridges of southern Meghalaya come in a huge variety of shapes and sizes. They have been known to grow as long as 170 feet, and soar 80 feet above the streams they cross. Most living root bridges only have a single span, yet several have more than one, arranged as either as two parallel spans,  or as two bridges stacked one over the other, such as the famous “Umshiang Double-Decker Root Bridge.”\n\nThe practice of creating new living bridges, and of preserving ones already in existence, is over large parts of Southern Meghalaya slowly fading out. In many villages across the region, the root bridges are little more than a memory.  However, since they began attracting attention again in around 2004, local dedication to the bridges has, at least in a few places, kept them from being destroyed in favor of steel ones. What’s more, a few new root bridges are currently under construction. In the village of Rangthylliang, an entirely new bridge is being grown using a bamboo and wood scaffold, and at the double-decker site in Nongriat, a new, third span is currently being grown above the other two, and should be ready for use within a decade.",
    additional_info: "While there are dozens of root bridges, which can be found all throughout the valleys between (very roughly!) the towns of Mawsynram and Dawki, few of these are easily accessible, or have nearby tourist facilities. To visit the bridges in the more remote areas, a local guide is an absolute must!",
    initial_author_id: 1,
    lat: 25.2186,
    lng: 91.6626
)

buzludzha = Location.new(
    title: "Buzludzha Monument",
    summary: "An abandoned saucer-shaped monument in the Bulgarian mountains.",
    address: "5005, Kazanlak, 6150, Bulgaria",
    description: "ON THE REMOTE BUZLUDZHA PEAK in the mountains of Bulgaria stands an unusual abandoned monument.\n\nThe peak itself was the site of a battle between the Bulgarians and the Turks in 1868. In 1891 a group of socialists lead by Dimitar Blagoev met on the peak to plan for Bulgaria’s socialist future.\n\nTo celebrate these events, the government in power during the height of Soviet influence decided to erect a monument commemorating socialist communism.\n\nWork on the monument began in 1974, and was undertaken by units of the Bulgarian Army assisted by numerous artisans responsible for the large statues and murals. Large images of Lenin and Marx looked over the arena built for state functions and celebrations. Above it all blazed a red star-shaped window in honor of Soviet Russia.\n\nAfter the government’s fall from power in 1989, the site was abandoned and left open to vandalism. The main entrance has been sealed and therefore closed to public. However, there is still a little way to get into the building on the right hand side of the building. Inside the Buzludzha Monument, most of the artwork has been removed or destroyed, but the concrete structure still stands against the elements.\n\nA preservation team worked to get the monument listed as one of the seven most endangered heritage sites in Europe, and plans to preserve and restore the monuments are underway.\n\nA guard has been put in place 24/7, so it is no longer possible to break inside. Visitors are still encouraged to visit the outside to experience the unique architecture.",
    additional_info: "Approximately 12 km down a side road from the Shipka Pass. As of January 2018, guards have been placed at the site to deter urban explorers from illegally enter the building. They are on duty 24/7.",
    initial_author_id: 6,
    lat: 42.7360,
    lng: 25.3936
)

hand = Location.new(
    title: "Hand of the Desert",
    summary: "A sculpture of a giant hand reaches for the stars in the middle of the Atacama desert in Chile.",
    address: "Unnamed Road, Chile",
    description: "THE SCORCHED MOONSCAPE OF ATACAMA stretches for hundreds of miles on both sides of the Pan-American Highway, undisturbed by any sign of human activity. About 75km south-east of the town of Antofagasta, its monotony is shattered by a sight even more alien then the desert itself, and yet undoubtedly human: an 11-meter-tall hand protruding out of the sand.\n\nMano de Desierto is a work of the Chilean sculptor Mario Irarrázabal, built in the early 1980s. It was financed by a local booster organization called Corporación Pro Antofagasta.\n\nThe motion of hands rising from the ground is an obsession of Irarrázabal’s. His other famous works include another over-sized sculpture exploring the same idea: “Monument to the Drowned” is located on Parada 4 at Brava Beach in Punta del Este, a popular resort town in Uruguay. Another large sculpture, “The Awakening,” by American artist John Seward Johnson II expresses a similar idea and is located at National Harbor in Prince George’s County, Maryland.",
    additional_info: "From Antofagasta, Route 26 or Route 28, both connect to Route 5. The Mano can be found between mile markers 1309 and 1310. It is easy to reach from either direction and can be seen well in advance. If you're going to drive out for a visit, be sure you have sun-screen, plenty of water, and a full tank of gas.",
    initial_author_id: 11,
    lat: -24.1585,
    lng: -70.1564
)

sample_photo = File.open('app/assets/images/location_photos/pecan1.jpeg')
pecan.photos.attach(io: sample_photo, filename: 'pecan1.jpeg')
sample_photo = File.open('app/assets/images/location_photos/pecan2.jpeg')
pecan.photos.attach(io: sample_photo, filename: 'pecan2.jpeg')
sample_photo = File.open('app/assets/images/location_photos/stonehenge1.jpeg')
stonehenge.photos.attach(io: sample_photo, filename: 'stonehenge1.jpeg')
sample_photo = File.open('app/assets/images/location_photos/icecream1.jpeg')
icecream.photos.attach(io: sample_photo, filename: 'icecream1.jpeg')
sample_photo = File.open('app/assets/images/location_photos/horseman1.jpg')
horseman.photos.attach(io: sample_photo, filename: 'horseman1.jpg')
sample_photo = File.open('app/assets/images/location_photos/bunyon1.jpeg')
bunyon.photos.attach(io: sample_photo, filename: 'bunyon1.jpeg.jpg')
sample_photo = File.open('app/assets/images/location_photos/hotdog1.jpeg')
hotdog.photos.attach(io: sample_photo, filename: 'hotdog1.jpeg')
sample_photo = File.open('app/assets/images/location_photos/hobbit1.jpeg')
hobbit.photos.attach(io: sample_photo, filename: 'hobbit1.jpeg')
sample_photo = File.open('app/assets/images/location_photos/serpent1.jpg')
serpent.photos.attach(io: sample_photo, filename: 'serpent1.jpg')
sample_photo = File.open('app/assets/images/location_photos/santaclaus1.jpeg')
santa.photos.attach(io: sample_photo, filename: 'santaclaus1.jpeg')
sample_photo = File.open('app/assets/images/location_photos/unicorn1.jpeg')
unicorns.photos.attach(io: sample_photo, filename: 'unicorn1.jpeg')
sample_photo = File.open('app/assets/images/location_photos/texas1.jpeg')
texas.photos.attach(io: sample_photo, filename: 'texas1.jpeg')
sample_photo = File.open('app/assets/images/location_photos/dunstan1.jpeg')
dunstan.photos.attach(io: sample_photo, filename: 'dunstan1.jpeg')
sample_photo = File.open('app/assets/images/location_photos/elephant1.jpeg')
elephant.photos.attach(io: sample_photo, filename: 'elephant1.jpeg')
sample_photo = File.open('app/assets/images/location_photos/cherry1.jpeg')
cherry.photos.attach(io: sample_photo, filename: 'cherry1.jpeg')
sample_photo = File.open('app/assets/images/location_photos/lunch1.jpeg')
lunch.photos.attach(io: sample_photo, filename: 'lunch1.jpeg')
sample_photo = File.open('app/assets/images/location_photos/bigmac1.jpeg')
bigmac.photos.attach(io: sample_photo, filename: 'bigmac1.jpeg')
sample_photo = File.open('app/assets/images/location_photos/hell1.jpeg')
hell.photos.attach(io: sample_photo, filename: 'hell1.jpeg')
sample_photo = File.open('app/assets/images/location_photos/roots1.jpeg')
roots.photos.attach(io: sample_photo, filename: 'roots1.jpeg')
sample_photo = File.open('app/assets/images/location_photos/buzludzha1.jpeg')
buzludzha.photos.attach(io: sample_photo, filename: 'buzludzha1.jpeg')
sample_photo = File.open('app/assets/images/location_photos/hand1.jpeg')
hand.photos.attach(io: sample_photo, filename: 'hand1.jpeg')

pecan.save
stonehenge.save
icecream.save
horseman.save
bunyon.save
hotdog.save
hobbit.save
serpent.save
santa.save
unicorns.save
texas.save
dunstan.save
elephant.save
cherry.save
lunch.save
bigmac.save
hell.save
roots.save
buzludzha.save
hand.save

location_edits = LocationEdit.create([
    {location_id: 1, editor_id: 1},
    {location_id: 1, editor_id: 2},
    {location_id: 1, editor_id: 3},
    {location_id: 2, editor_id: 4},
    {location_id: 2, editor_id: 5},
    {location_id: 2, editor_id: 6},
    {location_id: 3, editor_id: 7},
    {location_id: 3, editor_id: 8},
    {location_id: 3, editor_id: 9},
    {location_id: 4, editor_id: 15},
    {location_id: 4, editor_id: 4},
    {location_id: 4, editor_id: 14},
    {location_id: 5, editor_id: 13},
    {location_id: 5, editor_id: 12},
    {location_id: 5, editor_id: 11},
    {location_id: 6, editor_id: 10},
    {location_id: 6, editor_id: 9},
    {location_id: 6, editor_id: 1},
    {location_id: 7, editor_id: 12},
    {location_id: 7, editor_id: 13},
    {location_id: 7, editor_id: 4},
    {location_id: 8, editor_id: 5},
    {location_id: 8, editor_id: 6},
    {location_id: 9, editor_id: 15},
    {location_id: 9, editor_id: 1},
    {location_id: 10, editor_id: 1},
    {location_id: 11, editor_id: 15},
    {location_id: 11, editor_id: 2},
    {location_id: 11, editor_id: 3},
    {location_id: 11, editor_id: 1},
    {location_id: 12, editor_id: 2},
    {location_id: 12, editor_id: 5},
    {location_id: 13, editor_id: 12},
    {location_id: 13, editor_id: 1},
    {location_id: 13, editor_id: 2},
    {location_id: 14, editor_id: 2},
    {location_id: 14, editor_id: 1},
    {location_id: 15, editor_id: 1},
    {location_id: 15, editor_id: 2},
    {location_id: 15, editor_id: 3},
    {location_id: 16, editor_id: 4},
    {location_id: 16, editor_id: 5},
    {location_id: 17, editor_id: 6},
    {location_id: 17, editor_id: 7},
    {location_id: 17, editor_id: 8},
    {location_id: 18, editor_id: 9},
    {location_id: 18, editor_id: 10},
    {location_id: 19, editor_id: 11},
    {location_id: 19, editor_id: 12},
    {location_id: 20, editor_id: 13},
    {location_id: 20, editor_id: 14},
    {location_id: 20, editor_id: 15}
])

location_visits = LocationVisit.create([
    {visitor_id: 1, location_id: 1},
    {visitor_id: 1, location_id: 2},
    {visitor_id: 1, location_id: 3},
    {visitor_id: 1, location_id: 4},
    {visitor_id: 1, location_id: 5},
    {visitor_id: 1, location_id: 6},
    {visitor_id: 1, location_id: 7},
    {visitor_id: 1, location_id: 8},
    {visitor_id: 1, location_id: 9},
    {visitor_id: 1, location_id: 10},
    {visitor_id: 2, location_id: 20},
    {visitor_id: 2, location_id: 19},
    {visitor_id: 2, location_id: 18},
    {visitor_id: 2, location_id: 17},
    {visitor_id: 2, location_id: 16},
    {visitor_id: 2, location_id: 15},
    {visitor_id: 2, location_id: 14},
    {visitor_id: 2, location_id: 13},
    {visitor_id: 2, location_id: 12},
    {visitor_id: 3, location_id: 11},
    {visitor_id: 3, location_id: 10},
    {visitor_id: 3, location_id: 9},
    {visitor_id: 3, location_id: 8},
    {visitor_id: 4, location_id: 7},
    {visitor_id: 4, location_id: 6},
    {visitor_id: 4, location_id: 5},
    {visitor_id: 4, location_id: 4},
    {visitor_id: 4, location_id: 2},
    {visitor_id: 4, location_id: 1},
    {visitor_id: 4, location_id: 14},
    {visitor_id: 5, location_id: 1},
    {visitor_id: 5, location_id: 12},
    {visitor_id: 5, location_id: 3},
    {visitor_id: 5, location_id: 4},
    {visitor_id: 5, location_id: 5},
    {visitor_id: 5, location_id: 6},
    {visitor_id: 5, location_id: 19},
    {visitor_id: 6, location_id: 1},
    {visitor_id: 6, location_id: 19},
    {visitor_id: 6, location_id: 18},
    {visitor_id: 6, location_id: 13},
    {visitor_id: 7, location_id: 12},
    {visitor_id: 7, location_id: 10},
    {visitor_id: 7, location_id: 20},
    {visitor_id: 8, location_id: 2},
    {visitor_id: 8, location_id: 1},
    {visitor_id: 8, location_id: 3},
    {visitor_id: 8, location_id: 4},
    {visitor_id: 9, location_id: 5},
    {visitor_id: 9, location_id: 11},
    {visitor_id: 9, location_id: 10},
    {visitor_id: 9, location_id: 9},
    {visitor_id: 10, location_id: 8},
    {visitor_id: 10, location_id: 2},
    {visitor_id: 10, location_id: 1},
    {visitor_id: 11, location_id: 2},
    {visitor_id: 11, location_id: 3},
    {visitor_id: 12, location_id: 4},
    {visitor_id: 12, location_id: 5},
    {visitor_id: 12, location_id: 6},
    {visitor_id: 13, location_id: 7},
    {visitor_id: 13, location_id: 11},
    {visitor_id: 13, location_id: 12},
    {visitor_id: 13, location_id: 15},
    {visitor_id: 13, location_id: 16},
    {visitor_id: 13, location_id: 17},
    {visitor_id: 13, location_id: 13},
    {visitor_id: 14, location_id: 11},
    {visitor_id: 14, location_id: 8},
    {visitor_id: 14, location_id: 7},
    {visitor_id: 14, location_id: 6},
    {visitor_id: 15, location_id: 1},
    {visitor_id: 15, location_id: 18},
    {visitor_id: 15, location_id: 12},
    {visitor_id: 15, location_id: 9},
    {visitor_id: 15, location_id: 6},
    {visitor_id: 15, location_id: 3},
    {visitor_id: 15, location_id: 20},
    {visitor_id: 15, location_id: 16},
    {visitor_id: 15, location_id: 8},
    {visitor_id: 15, location_id: 4},
    {visitor_id: 15, location_id: 5},
    {visitor_id: 15, location_id: 10},
    {visitor_id: 15, location_id: 15},
])

location_wanna_visits = LocationWannaVisit.create([
    {wanna_visitor_id: 1, location_id: 20},
    {wanna_visitor_id: 1, location_id: 19},
    {wanna_visitor_id: 1, location_id: 18},
    {wanna_visitor_id: 1, location_id: 17},
    {wanna_visitor_id: 1, location_id: 16},
    {wanna_visitor_id: 1, location_id: 15},
    {wanna_visitor_id: 1, location_id: 14},
    {wanna_visitor_id: 1, location_id: 13},
    {wanna_visitor_id: 1, location_id: 12},
    {wanna_visitor_id: 1, location_id: 11},
    {wanna_visitor_id: 2, location_id: 1},
    {wanna_visitor_id: 2, location_id: 2},
    {wanna_visitor_id: 2, location_id: 3},
    {wanna_visitor_id: 2, location_id: 4},
    {wanna_visitor_id: 3, location_id: 5},
    {wanna_visitor_id: 3, location_id: 6},
    {wanna_visitor_id: 3, location_id: 7},
    {wanna_visitor_id: 3, location_id: 8},
    {wanna_visitor_id: 4, location_id: 9},
    {wanna_visitor_id: 4, location_id: 10},
    {wanna_visitor_id: 4, location_id: 11},
    {wanna_visitor_id: 4, location_id: 12},
    {wanna_visitor_id: 4, location_id: 13},
    {wanna_visitor_id: 5, location_id: 14},
    {wanna_visitor_id: 5, location_id: 15},
    {wanna_visitor_id: 6, location_id: 16},
    {wanna_visitor_id: 7, location_id: 17},
    {wanna_visitor_id: 7, location_id: 18},
    {wanna_visitor_id: 7, location_id: 19},
    {wanna_visitor_id: 7, location_id: 20},
    {wanna_visitor_id: 7, location_id: 1},
    {wanna_visitor_id: 7, location_id: 2},
    {wanna_visitor_id: 8, location_id: 3},
    {wanna_visitor_id: 8, location_id: 4},
    {wanna_visitor_id: 8, location_id: 5},
    {wanna_visitor_id: 9, location_id: 6},
    {wanna_visitor_id: 9, location_id: 7},
    {wanna_visitor_id: 9, location_id: 8},
    {wanna_visitor_id: 10, location_id: 9},
    {wanna_visitor_id: 10, location_id: 10},
    {wanna_visitor_id: 10, location_id: 11},
    {wanna_visitor_id: 10, location_id: 12},
    {wanna_visitor_id: 10, location_id: 13},
    {wanna_visitor_id: 10, location_id: 14},
    {wanna_visitor_id: 11, location_id: 15},
    {wanna_visitor_id: 11, location_id: 16},
    {wanna_visitor_id: 11, location_id: 17},
    {wanna_visitor_id: 11, location_id: 18},
    {wanna_visitor_id: 12, location_id: 19},
    {wanna_visitor_id: 12, location_id: 20},
    {wanna_visitor_id: 13, location_id: 1},
    {wanna_visitor_id: 14, location_id: 2},
    {wanna_visitor_id: 15, location_id: 3},
    {wanna_visitor_id: 15, location_id: 4},
    {wanna_visitor_id: 15, location_id: 5},
    {wanna_visitor_id: 15, location_id: 6},
    {wanna_visitor_id: 15, location_id: 7},
    {wanna_visitor_id: 15, location_id: 8},
    {wanna_visitor_id: 15, location_id: 9},
])

sample_photo = File.open('app/assets/images/profile_photos/photo2.jpg')
elliot.photo.attach(io: sample_photo, filename: 'photo2.jpeg')
sample_photo = File.open('app/assets/images/profile_photos/photo3.jpg')
evan.photo.attach(io: sample_photo, filename: 'photo3.jpeg')
sample_photo = File.open('app/assets/images/profile_photos/photo4.jpg')
worldtraveler.photo.attach(io: sample_photo, filename: 'photo4.jpeg')
sample_photo = File.open('app/assets/images/profile_photos/photo5.jpg')
explorer2000.photo.attach(io: sample_photo, filename: 'photo5.jpeg')
sample_photo = File.open('app/assets/images/profile_photos/photo6.jpg')
mansoo.photo.attach(io: sample_photo, filename: 'photo6.jpeg')
sample_photo = File.open('app/assets/images/profile_photos/photo7.jpg')
victor.photo.attach(io: sample_photo, filename: 'photo7.jpeg')
sample_photo = File.open('app/assets/images/profile_photos/photo8.jpg')
jonb.photo.attach(io: sample_photo, filename: 'photo8.jpeg')
sample_photo = File.open('app/assets/images/profile_photos/photo9.jpg')
trekkie.photo.attach(io: sample_photo, filename: 'photo9.jpeg')
sample_photo = File.open('app/assets/images/profile_photos/photo10.jpg')
macdonald2.photo.attach(io: sample_photo, filename: 'photo10.jpeg')
sample_photo = File.open('app/assets/images/profile_photos/photo11.jpg')
matteo.photo.attach(io: sample_photo, filename: 'photo11.jpeg')
sample_photo = File.open('app/assets/images/profile_photos/photo12.jpg')
roadside.photo.attach(io: sample_photo, filename: 'photo12.jpeg')
sample_photo = File.open('app/assets/images/profile_photos/photo13.jpg')
texaspecan.photo.attach(io: sample_photo, filename: 'photo13.jpeg')
sample_photo = File.open('app/assets/images/profile_photos/photo14.jpg')
loslobos.photo.attach(io: sample_photo, filename: 'photo14.jpeg')
sample_photo = File.open('app/assets/images/profile_photos/photo15.jpg')
parkerT.photo.attach(io: sample_photo, filename: 'photo15.jpeg')