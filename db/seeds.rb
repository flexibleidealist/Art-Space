# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

nicholas = Artist.create!(name: "Nicholas Rynearson", artist_statement: "I mainly work with found images. I often begin by asking, what simple intervention can I make in an image that will transform it? I like to work with formal qualities and my favorite interventions are forms of drawing or erasure. When I draw, I rarely use things like pens, pencils, or charcoal. Instead, I draw with a knife, with a thread and needle, or by creating lines and forms through juxtaposition. Erasure sometimes means cutting an element out of an image. But more often I prefer partial erasure: removing a portion of a particular element, drawing over it, or obscuring it from view. I like to use partial erasure to stimulate the viewers' imagination, inviting them to fill in gaps, to draw unexpected connections, or sometimes to see a ghost.
My formal training is in academia. In 2006 I finished my PhD in Classics, with a specialty in Greek literature. As an artist, I’m mostly self-taught but I have taken a few classes at SVA, including figure drawing and a collage workshop. I live in Brooklyn.", username: "Nicholas", password_digest: "1234567", image_url: "https://i.imgur.com/kHvKSSc.jpg")

nick = Artist.create!(name: "Nick Charles", artist_statement: "I'm a Brooklyn-based artist. I mainly draw with charcoal and ink on paper. I also take photographs.", username: "Nick Charles", password_digest: "1234567", image_url: "image.jpg")

frida = Artist.create!(name: "Frida Kahlo", artist_statement: "You can't tell me what to do. Down with the bourgeoisie!", username: "Frida", password_digest: "1234567", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg/1024px-Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg")

show1 = Show.create!(title: "Unseen", description: "Solo exhibition of collage and assemblages organized around the concept of the unseen.", artist_id: nicholas[:id], image_url: "image.png")

work1 = Work.create!(title: "untitled assemblage", year: 2019, materials: "Wood, yarn, paper, found objects.", image_url: "https://i.imgur.com/GUPnXvx.png", show_id: show1[:id])