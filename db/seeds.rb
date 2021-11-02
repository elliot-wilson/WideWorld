# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demo_user = User.create(username: "Demo", email: "example@example.com", password: "123456")

seashells = Location.create(
    title: "Seashell Graves of Comfort Cemetery",
    summary: "No one is sure why this mysterious tradition started.",
    address: "3rd St Comfort, Texas United States",
    description: "IN THE SMALL TOWN OF Comfort, Texas, several graves in the local cemetery are decorated with seashells. Some have the simple design of a cross made out of shells, but many have an entire raised mound in front of the tombstone covered. What is most interesting is that no one knows exactly why, or where, this tradition began. 

There is much to see in Comfort, and the cemetery is top of the list. Dozens of old stones stand tilted and worn from age and elements. Many of the graves adorned with seashells are of children; perhaps a reason for using the shells. Yet, many adult graves are also covered with shells. Other shell-covered graves are unmarked.

The seashell graves are all older graves, generally between the mid-1800s and early 1900s. Some of the headstones have been restored or replaced. Modern graves do not appear to have the shells as decorations. 

Early settlers in Comfort were of German descent, and the most common explanation for shelled graves is that it was a tradition brought from “the old country.” Still, there is no plaque or sign in the cemetery declaring this specifically. The scallop shell is a  symbol within Christianity, and is still often used as a symbol of baptism. It’s also a commonly used symbol of Christian pilgrimage and transition to Heaven, which may explain why the settlers placed them atop the graves.

What is known for sure is that the graves are beautifully unique. Unfortunately, some shells have fallen off or been removed by vandals over time. Visitors must please recognize that the seashells are best left where they belong, in the comfort of Comfort Cemetery.",
    additional_info: "Please do not remove shells.",
    initial_author_id: 1
)