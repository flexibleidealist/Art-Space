# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

nicholas = Artist.create!(name: "Nicholas Charles", artist_statement: "I mainly work with found images. I often begin by asking, what simple intervention can I make in an image that will transform it? I like to work with formal qualities and my favorite interventions are forms of drawing or erasure. When I draw, I rarely use pens, pencils, or charcoal. Instead, I draw with a knife, with a thread and needle, or by creating lines and forms through juxtaposition. Erasure sometimes means cutting an element out of an image. But more often I prefer partial erasure: removing a portion of a particular element, drawing over it, or obscuring it from view. I like to use partial erasure to stimulate the viewers' imagination, inviting them to fill in gaps, to draw unexpected connections, or sometimes to see a ghost.
My formal training is in academia. In 2006 I finished my PhD in Classics, with a specialty in Greek literature. As an artist, I’m mostly self-taught but I have taken a few classes at SVA, including figure drawing and a collage workshop. I live in Brooklyn.", username: "Nicholas", password: "12345678", email: "nrynearson@mac.com", image_url: "https://i.imgur.com/kHvKSSc.jpg")

frida = Artist.create!(name: "Frida Kahlo", artist_statement: "Nothing is absolute. Everything changes, everything moves, everything revolves, everything flies and goes away.", username: "Frida", password: "12345678", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg/1024px-Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg")

  pp "#{Artist.count} artists created!"

show1 = Show.create!(title: "Nicholas Charles: Unseen", description: "Solo exhibition of collage and assemblages organized around the concept of the seen and the unseen.", artist_id: nicholas[:id], image_url: "https://i.imgur.com/JjLJ4Y6.png")

show2 = Show.create!(title: "Frida Kahlo: Self-Portraits from the 40s", description: "They thought I was a Surrealist, but I wasn’t. I never painted dreams. I painted my own reality. I am my own muse. I am the subject I know best. The subject I want to better.", artist_id: frida[:id], image_url: "https://upload.wikimedia.org/wikipedia/en/1/1e/Frida_Kahlo_%28self_portrait%29.jpg")

pp "#{Show.count} shows created!"


work1 = Work.create!(title: "untitled assemblage", year: 2019, materials: "wood, yarn, paper, found objects", image_url: "https://i.imgur.com/L62gglx.jpg", show_id: show1[:id])

work2 = Work.create!(title: "Self-portrait with monkeys", year: 1943, materials: "oil on canvas", image_url: "https://images.theconversation.com/files/127648/original/image-20160621-19789-cw7ze9.JPG?ixlib=rb-1.1.0&q=30&auto=format&w=600&h=796&fit=crop&dpr=2", show_id: show2[:id])

work3 = Work.create!(title: "Self-portrait with thorn necklace and hummingbird", year: 1940, materials: "oil on canvas", image_url: "https://www.artyfactory.com/art_appreciation/portraits/frida_kahlo/self_portrait_2.jpg", show_id: show2[:id])

work4 = Work.create!(title: "Self-portrait as Tehuana", year: 1943, materials: "oil on canvas", image_url: "https://i.guim.co.uk/img/media/6bd8f7155d46f8014e4857b29d0118dc34140705/52_65_2541_3222/master/2541.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=d9d634b663a5e67736f82059a0b4c5d8", show_id: show2[:id])

work5 = Work.create!(title: "untitled assemblage", year: 2019, materials: "AirPods box, thread, wood, paper, found objects", image_url: "https://i.imgur.com/YHKnKl8.jpg", show_id: show1[:id])

work6 = Work.create!(title: "#me2479 (1)", year: 2019, materials: "iPhone box, thread, wood, paper", image_url: "https://i.imgur.com/Gw1KhGd.jpg", show_id: show1[:id])

work7 = Work.create!(title: "#me2479 (2)", year: 2019, materials: "iPhone box, thread, wood, paper", image_url: "https://i.imgur.com/s3nOLZK.jpg", show_id: show1[:id])


work8 = Work.create!(title: "Hillary/Iraqi oil field", year: 2019, materials: "paper, thread", image_url: "https://i.imgur.com/bEyYCpx.jpg", show_id: show1[:id])

work9 = Work.create!(title: "Cop/forest", year: 2019, materials: "paper, thread", image_url: "https://i.imgur.com/WfBm7mI.jpg", show_id: show1[:id])

work10 = Work.create!(title: "Self-portrait with small monkey", year: 1940, materials: "oil on canvas", image_url: "https://i.ebayimg.com/images/g/XuoAAOSw6JpfUWOW/s-l1600.jpg
", show_id: show2[:id])

pp "#{Work.count} works created!"
