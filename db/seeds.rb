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

icecream = Location.create(
    title: "Chinatown Ice Cream Factory",
    summary: "Where the menu lists lychee under 'Regular' and vanilla under 'Exotic'",
    address: "65 Bayard Street B, New York, New York, 10013, United States",
    description: "CHINA INVENTED ICE CREAM HUNDREDS of years ago in the Tang Dynasty. At least that’s the myth at the Chinatown Ice Cream Factory, and whether or not it’s true, the Seid family has certainly perfected the art.\n\nFor nearly 30 years, the Factory has been offering a cold treat and has grown wildly popular due to their unique flavors. Wasabi, black sesame and peanut butter and jelly are just a few of the one-of-a kind ice cream options at the Chinatown institution. Walking into the building, the ice cream case dares those who enter to step outside their chocolate chip box and enter a new world of Chinatown flavor.",
    additional_info: "Accessible from 4, 6, B, D, J, N, R, Q, Z Trains at Canal Street",
    initial_author_id: 2,
    lat: 40.7154,
    lng: -73.9982
)

stonehenge = Location.create(
    title: "Stonehenge II",
    summary: "A recreated Stonehenge stands in a country field, complete with Easter Island moai heads standing as sentries.",
    address: "120 Point Theatre Rd S, Ingram, Texas, 78025, United States",
    description: "IN A FIELD ALONGSIDE THIS small country road stands a replica of Stonehenge.\n\nThis 60% scale replica is built by, and on the farmland of, the late Alfred Shepperd, along with the help of his friend and neighbor Doug Hill. It represents what Stonehenge might have looked like before weather and erosion toppled some of the original in Salisbury, England. Two years after Stonehenge II was built, a pair of Easter Island moai figures were added to the site.\n\nOne major difference between Stonehenge and Stonehenge II is weight. While the stones at Stonehenge weigh over 4 tons, the ones that compose Stonehenge II (with the exception of two stones in the center) are made of plaster applied to a wire mesh frame and are considerably lighter.\n\nUpdate: The Stonehenge II structure along with the moai heads has since been moved from the field on Texas Highway 1340 near Hunt, Texas to its current location in front of the Point Theater and Hill Country Arts Foundation on Highway 39 in Ingram, Texas.",
    additional_info: "64 miles west of San Antonio, South off I-10, Exit 505 to FM 783, Harper Rd., Right on TX-27, to Hwy 39 to Left on Point Theatre Rd. in Lions Park.",
    initial_author_id: 2,
    lat: 30.0717,
    lng: -99.2474
)

pecan = Location.create(
    title: "World's Largest Pecan",
    summary: "The saga of the massive nut begins and ends in Texas.",
    address: "390 Cordova Rd, Seguin, Texas, United States",
    description: "THE SAGA OF THE WORLD’S largest pecan began in 1962, when a dentist built a 1,000-pound, five-foot-long pecan in honor of Álvar Núñez Cabeza de Vaca, a Spanish explorer who subsisted on pecans while imprisoned on Texas’ Guadalupe River, which he referred to as the “the river of nuts.”\n\nThe massive pecan in front of City Hall in Seguin, known as the “pecan capital of Texas,” held on to the title for two decades. But in 1982, some pecan farmers in Brunswick, Missouri, built a 12,000-pound, 12-foot long replica of their patented Starking Hardy Giant pecan.\n\nDespite Brunswick’s gentle reminders, which came in the form of countless postcards with pictures of their beloved nut sent to Seguin’s Chamber of Commerce, the Texas town continued to tout its false claim of housing the world’s largest pecan.\n\nIn 2011, Seguin decided to make good on the claim and unveiled its new 16-foot long pecan. The giant nut sits in all its glory by the Texas Agricultural and Heritage Center, proving to visitors that everything is bigger in Texas.",
    initial_author_id: 3,
    lat: 29.6281,
    lng: -97.9701
)

horseman = Location.create(
    title: "Headless Horseman Bridge",
    summary: "The real-life site of Ichabod Crane's infamous gourd attack.",
    address: "415 Broadway, Sleepy Hollow, New York, United States",
    description: "WASHINGTON IRVING CERTAINLY PUT SLEEPY Hollow on the map with his 1820 Gothic horror story, The Legend of Sleepy Hollow. In it, the gloomy town is said to be haunted by the ghost of a Hessian soldier in search of his head, which he’s said to have lost to a cannonball while fighting in the American Revolution. While the story may evoke more fear than intrigue in the small town, it is of course completely fictional (and in fact a rather charming town). The bridge that sets the stories climax, however, is very much real.\n\nAfter the protagonist Ichabod Crane leads the Headless Horseman on a horseback chase through the woods in the dark of night, he’s finally caught at the foot of a wooden bridge that stretches over the Pocantico River (in many folktales, bridges symbolize a liminal space between the realms of the living and the dead). The Headless Horseman hurls a pumpkin at Crane, striking him in the head and leaving him to an unclear fate. Come morning, all that’s found are Crane’s trampled saddle and broken chunks of pumpkin.\n\nAt the time of its writing, there was an actual wooden bridge at the site of Crane’s fictional gourd attack. While it was replaced by a more modern, concrete iteration in 1912 by William Rockerfeller, the structure is still known as “The Headless Horseman Bridge.” You can walk across it or have someone chase you for the real Crane experience—just look out for pumpkins.",
    initial_author_id: 4,
    lat: 41.0897,
    lng: -73.8619
)

unicorns = Location.create(
    title: "Unicorn Tapestries at the Cloisters",
    summary: "Mysterious 500-year-old tapestries depict a unicorn hunt.",
    address: "99 Margaret Corbin Drive, New York, New York, 10040, United States",
    description: "COMPRISED OF SEVEN WALL HANGINGS, each at least 12 feet high by eight feet wide, the Unicorn Tapestries at the Cloisters were created 500 years ago by an unknown artist for unknown royalty in Western Europe.\n\nIn violent and disturbing detail, the series tells the story of hunters stalking through the woods with their canines, hunting the mythical beast. As the story progresses, the unicorn is found and surrounded, ambushed and eventually attacked from all sides. Despite getting away from the hunters, the unicorn is eventually calmed by a virgin maiden and killed while under her charm.\n\nScholars who have studied the tapestries date them from 1495-1505. The design resembles Parisian aesthetic at the time, but it was likely the tapestries were actually produced in Brussels (although even these details disputed). Despite a general geographic location, the identity of the author is completely unknown. The tapestries’ only connection to the past is a small cipher, showing the letters A and E intertwined by some rope, which may signify the artist or the owner of the work.\n\nFrom this slight hint, some have devised that Anne of Brittany commissioned the works to celebrate her marriage to Louis XII, but there is no conclusive proof. Despite the mystery, art historians have reveled in the chance to decipher the tapestries, often comparing the hunt of the unicorn to Christ’s persecution. The unicorn itself, once a pagan symbol, became a symbol for Christ.\n\nAll of the vibrant tapestries are available for personal interpretation and are held in the Met’s Cloisters in upper Manhattan. In the same room, a narwhal tusk is displayed. Medieval Europeans often mistook their tusks as evidence of the mythical beast. ",
    initial_author_id: 2,
    lat: 40.8648,
    lng: -73.9318
)

santa = Location.create(
    title: "Santa Claus, Indiana",
    summary: "You thought Santa Claus didn't exist, but it turns out you were wrong.",
    address: "Santa Claus, Indiana, 47579, United States",
    description: "NOT ONLY THAT, BUT YOU can can totally send a letter to Santa Claus, provided you are sending mail to Indiana…Santa Claus, Indiana, that is.\n\nLabeled “America’s Christmas Hometown,” Santa Claus, Indiana was initially established as Santa Fe, Indiana. However, perhaps after being informed by the US Postal Service that there was another Santa Fe and showing up to the post office wearing the same dress was totally gauche, the town changed its name to…Santa Claus.\n\nThat means that the post office is the Santa Claus post office. And the police department is the Santa Claus PD. And the DMV is the Santa Claus DMV, but…maybe not so jolly.\n\nIf there are Grinches in Santa Claus, they don’t make themselves known around Christmas, when volunteers respond to each and every letter to Santa that comes through the post office. That’s right. Every kid who is smart enough to figure out that Santa has an entire town named after him and write to him there gets a personal letter in return from the Santa Claus Elves. Volunteer elves have been doing this since 1914 (it is doubtful that this is what caused WWI).\n\nThere is plenty to do in Santa Claus. There is Santa’s Candy Castle, where Santa’s woodworking shop can be found and actual toys are made (sorry kids, no Transformers–just stuff made of wood). Kids can also play with toys in various buildings representing various toymakers. There is the Santa Claus Museum, housing a number of Santa Claus mummies. Just kidding. It’s actually all about the history of the town and its transition from Santa Fe to Santa Claus.\n\nThe Holiday World & Splashin’ Safari is a Holiday-themed amusement and waterpark (originally named Santa Claus Land) once visited by Ronald Reagan. It offers non-frostbitey wintery watery fun for the whole family. You can also visit Frosty’s Fun Center (mini-golf, snacks, etc.), which doesn’t sound at all like the setting for an 80s slasher flick. Dad can play the links at the Christmas Lake Golf Course, and the kids can feed apples and carrots to the depressed horses in Santa’s Stables.\n\nIf you are feeling like your Christmas isn’t Christmasy enough, you know where to go.",
    initial_author_id: 5,
    additional_info: "April-May is a great time to visit, as the weather is tolerable, and the numbers of visitors is low. Go for the AO twofer with a visit to the Abraham Lincoln boyhood home, just a couple of miles to the west.",
    lat: 38.1127,
    lng: -86.9173
)

bunyon = Location.create(
    title: "Paul Bunyon of Atlanta, Illinois",
    summary: "While he no longer has an eatery to give him context, this off-brand Paul Bunyan still holds his giant hot dog with pride.",
    address: "Arch Street, Atlanta, Illinois, 61723, United States",
    description: "CREATED IN 1966 AS AN eye-grabbing restaurant advertisement along Route 66, the displaced muffler man known as Paul Bunyon (sic) still holds his precious hot dog for all to see even after being moved from his original spot.\n\nThe oversized fiberglass novelty was first installed on the roof of Bunyon’s hotdog stand in Cicero, Illinois in 1966. Unlike the Paul Bunyan figure from which the figure was molded, Bunyon is holding a massive hotdog instead of an ax. Owned by World War II veteran Hamlet Stephens, the hot dog stand’s name was purposefully misspelled to avoid any copyright issues. Eventually Stephens had the 19-foot woodsman transferred from the roof to the doorstep of his restaurant so that the children and visitors who loved the figure could actually clamber on and over his feet.\n\nPaul Bunyon became a beloved fixture along Route 66 over the decades, but the heady hot dog days could not last forever. Unfortunately Bunyon’s hot dog stand closed in 2002. However Bunyon’s story was not yet over. In 2003 Bunyon was moved to a spot in Atlanta, Illinois after they won a bid for the much lauded Americana statue.\n\nUnfortunately Stephens passed away in 2012, but his fiberglass legacy lives on. Unfortunately (or possibly fortunately) without the hot dog stand for context, Bunyon takes on a much more odd and wondrous presence.",
    additional_info: "After checking out Paul Bunyon, walk across the street to the charming Palms Grill Cafe for a good meal or an excellent piece of pie.",
    initial_author_id: 3,
    lat: 40.2452,
    lng: -89.2657
)

hotdog = Location.create(
    title: "Jimmy Carter's Hot Dog Bun",
    summary: "This restaurant proudly displays bread signed by the 39th president.",
    address: "1902 Front St., Toledo, Ohio, United States",
    description: "TONY PACKO’S HAS SOLD SAUSAGES with spicy chili sauce since 1932. Today, the restaurant has five locations, but you’ll have to visit the original to see Jimmy Carter’s actual signature scribbled across a piece of stale bread.\n\nHot dog buns signed by celebrities line the walls at Tony Packo’s in Toledo, Ohio. Most of these are custom-made, artificial recreations. But the original tradition involved signing an actual bun. The actor Burt Reynolds unintentionally got things started in the 1970s by putting his autograph on bread instead of a piece of paper. Since then, countless politicians, actors, and musicians put their John Hancock on the simple, perishable carbohydrate.\n\nWhile almost every piece of processed bread manufactured in the 1970s has since disintegrated, two signatures from Tony’s original collection of branded buns remain framed. The first belongs to Jimmy Carter, the 39th president of the United States. The second is emblazoned with the handwriting of Walter Mondale, the 42nd vice president of the United States. This particular intersection of Americana-meets-White House paraphernalia has, by no means, aged well. But, they’re both real, and still proudly mounted on the wall at Tony Packo’s.",
    additional_info: "There are three Tony Packo's locations in Toledo. To see the presidential bun, be sure to visit the original location on Front Street.",
    initial_author_id: 6,
    lat: 41.6600,
    lng: -83.5021
)

hobbit = Location.create(
    title: "The Hobbit Café",
    summary: "A taste of Middle Earth, in the middle of the Bayou City.",
    address: "2243 Richmond Avenue, Houston, Texas, 77098, United States",
    description: "AT THE END OF A peculiar L-shaped turn off Houston’s bustling Richmond Avenue sits the nerdiest neighborhood gem in town. The Hobbit Café—so-named for its impressive array of Lord of the Rings memorabilia—is a piquant pitstop for anyone interested in a sandwich based on one of the most successful fantasy series in history.\n\nFor nearly 50 years, the Hobbit Café has served its hefty gastropub fare and diverse beer selection smack in the middle of Texas’s largest city. Vegetarian for the first four years of its existence—a notable feat in longhorn-and-barbecue country—the menu, which opens with Tolkien’s iconic description of the Hobbit species, now also serves carnivores. Unceasingly, the cuisine is served in the same hobbit-sized (that is to say, huge) portions as before.\n\nThe restaurant plays host to classically Tex-Mex cuisine, with a Tolkienian twist. From nachos to fish tacos to their Balrog burger, the Hobbit now serves something for everyone. A favorite of some celebrities and beloved by Houston, the café offers a haven from the hubbub of the city, with outdoor seating bedecked by holiday lights year-round. Of course, that’s if you don’t want to sit on the sheepskin throne just inside the door.",
    additional_info: "If you're driving to the café (it's Houston, so let's be honest—you're driving to it), the turn in can sneak up on you if you're approaching on Richmond Avenue. To spare your driver's nerves, it may be best to approach from the quieter Portsmouth Street side.",
    initial_author_id: 7,
    lat: 29.7339,
    lng: -95.4148
)

serpent = Location.create(
    title: "The Great Serpent Mound",
    summary: "The largest earthwork effigy in the world.",
    address: "3850 OH-73, Peebles, Ohio, 45660, United States",
    description: "THE “MOUND BUILDERS” OF EARLY North America lived throughout what are now the Ohio Valley and Mississippi regions. The earliest group was probably the Adena people, who flourished from 1000 BCE to 200 BCE. They built mounds throughout North America, from Wisconsin to Mississippi.\n\nThe Great Serpent Mound—a 1,330-foot-long, three-foot-high prehistoric effigy mound in southern Ohio—is one of the few surviving relics from the mound builders. The earliest records say it depicts a serpent swallowing an egg, though another interesting theory suggests that the snake is swallowing the moon. In 1909, local German Baptist minister Landon West proposed another possibility: The serpent, he said, is writhing in its death throes as punishment for tempting Adam and Eve, in what West believed was the original Garden of Eden.\n\nIt is unclear who built the Great Serpent Mound. Though the Adena people built structures like it, as well as burial grounds near the mound, charcoal from the mound has been dated to later in history, to around 1000 CE. So the mound may have been built by the Fort Ancient peoples, who lived in the Ohio Valley from 1000 CE to 1550 CE.\n\nThe effigy is located within the Serpent Mound State Memorial and has been designated a National Historic Landmark. A nonprofit organization called Arc of Appalachia maintains a museum near the mound.",
    initial_author_id: 8,
    lat: 39.0252,
    lng: -83.4302
)

sample_photo = File.open('app/assets/images/location_photos/pecan1.jpeg')
pecan.photos.attach(io: sample_photo, filename: 'pecan1.jpeg')
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