# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Product.destroy_all
Comment.destroy_all

img_path = './app/assets/images/seeds/'

bob = User.create(first_name: 'Bob', email: 'bob@gmail.com', password: '123456')
betty = User.create(first_name: 'Betty', email: 'betty@gmail.com', password: '123456')
betsy = User.create(first_name: 'Betsy', email: 'betsy@gmail.com', password: '123456')
debbie = User.create(first_name: 'Debbie', email: 'debbie@gmail.com', password: '123456')

p1 = Product.create(title: 'A Baby is Brewing', description: 'Collapsible Foam, 12oz Cans. A Baby is Brewing, Baby Shower Decorations, Baby Announcement, Baby Girl Baby Shower, Baby Shower Can Cooler,Baby Shower Giveaways by My Wedding Store!', price: 24.99, user_id: bob.id, who: 'A member of my shop', what: 'A finished product', when: 'Made to order')
p1.images.attach(io: File.open(img_path + "baby_shower.jpg"), filename: "baby_shower.jpg")

p2 = Product.create(title: 'This is My Road Trip Shirt Vacation Summer Family Vacation Baby Unisex Bodysuit', description: 'This is My Road Trip Shirt! Cute baby bodysuit perfect for that vacation with the family! There is a mini bus in the center, which gives a fun retro look.', price: 15.50, user_id: betty.id, who: 'A member of my shop', what: 'A finished product', when: 'Made to order')
p2.images.attach(io: File.open(img_path + 'baby_shirt_1.jpg'), filename: '/baby_shirt_1.jpg')
p2.images.attach(io: File.open(img_path + 'baby_shirt_2.jpg'), filename: '/baby_shirt_2.jpg')
p2.images.attach(io: File.open(img_path + 'baby_shirt_3.jpg'), filename: '/baby_shirt_3.jpg')

p3 = Product.create(title: 'Baby Shower Gift, Hello World Personalized Bodysuit with Headband', description: 'Personalized Hello World Bodysuit and Bow Headband, the perfect baby shower gift!
A PERFECT gift for any Newborn Baby Girl!', price: 19.99, user_id: betty.id, who: 'I did', what: 'A finished product', when: 'Made to order')
p3.images.attach(io: File.open(img_path + 'baby_shirt.jpg'), filename: 'baby_shirt.jpg')

p4 = Product.create(title: 'Unicorn Backpack', description: 'This cute personalised Unicorn backpack would be perfect for any little girl ', price: 28.00, user_id: betty.id, who: 'A member of my shop', what: 'A finished product', when: 'Made to order')
p4.images.attach(io: File.open(img_path + 'backpack_1.jpg'), filename: 'backpack_1.jpg')
p4.images.attach(io: File.open(img_path + 'backpack_2.jpg'), filename: 'backpack_2.jpg')
p4.images.attach(io: File.open(img_path + 'backpack_3.jpg'), filename: 'backpack_3.jpg')

p5 = Product.create(title: 'Baptism Gift, Christening Gift, Elephant Keepsake, Stuffed Elephant, Godparent Gift ', description: '♥ This adorable personalized plush elephant is the perfect Baptism/Christening keepsake.
♥ The elephant is personalized using high quality heat-transfer vinyl that is applied using a commercial grade heat press. You can be confident that the letters and numbers will not come off!', price: 16.00, user_id: betsy.id, who: 'A member of my shop', what: 'A finished product', when: 'Made to order')
p5.images.attach(io: File.open(img_path + 'baptism_gift.jpg'), filename: 'baptism_gift.jpg')

p6 = Product.create(title: 'Personalized Mini Wireless Bluetooth Speaker', description: 'Our new wooden speakers make a HUGE impact! Small enough to be portable, yet powerful enough to get the job done perfectly, these gorgeous square wooden speakers are equipped with the finest technology to set the room alive with sound.', price: 19.99, user_id: betsy.id, who: 'I did', what: 'A finished product', when: 'Made to order')
p6.images.attach(io: File.open(img_path + 'bluetooth_speaker.jpg'), filename: 'bluetooth_speaker.jpg')

p7 = Product.create(title: 'handmade baby boy shirt', description: 'cute little baby boy long sleeved raglan shirt with a fun woodland print. This is made of a cotton/lycra blend fabric making it soft, cozy and breathable. Available in sizes NB they 5T. 
', price: 25.99, user_id: bob.id, who: 'I did', what: 'A finished product', when: 'Made to order')
p7.images.attach(io: File.open(img_path + 'boy_shirt.jpg'), filename: 'boy_shirt.jpg')

p8 = Product.create(title: 'Personalized Bracelet Friendship Bracelet ', description: 'Personalized Bracelet Jewelry Friendship Bracelet for Women Wedding Party Gift Mantra Bracelet Engraved Bracelets Bangle ', price: 18.50, user_id: betty.id, who: 'I did', what: 'A finished product', when: 'Made to order')
p8.images.attach(io: File.open(img_path + 'bracelet.jpg'), filename: 'bracelet.jpg')

p9 = Product.create(title: 'Bride Tote Bag', description: 'Bride custom canvas Tote Bag. The perfect addition or gift for the Bride to be. Trendy and fashionable, perfect for the on the go Bride. ', price: 11.50, user_id: betty.id, who: 'I did', what: 'A finished product', when: 'Made to order')
p9.images.attach(io: File.open(img_path + 'bride_tote_bag.jpg'), filename: 'bride_tote_bag.jpg')

p10 = Product.create(title: 'Cat tote bag, Funny tote bag, Cat lover gift, Cotton shoulder cat bag', description: 'The design is screen printed in white on the 100% cotton black bag which allows it to really pop and be bold for everyone to see. ', price: 15.09 , user_id: betsy.id, who: 'I did', what: 'A finished product', when: 'Made to order')
p10.images.attach(io: File.open(img_path + 'cat_tote_bag1.jpg'), filename: 'cat_tote_bag1.jpg')
p10.images.attach(io: File.open(img_path + 'cat_tote_bag2.jpg'), filename: 'cat_tote_bag2.jpg')

p11 = Product.create(title: 'Set of 2, Wedding Champagne Flutes, Mr and Mrs Personalized Champagne Glasses', description: 'The glass has a tall, slender shape which keeps the bubbles alive for longer, enhancing your experience of the champagne or sparkling wine. ', price: 27.99, user_id: bob.id, who: 'I did', what: 'A finished product', when: 'Made to order')
p11.images.attach(io: File.open(img_path + 'champagne_glasses.jpg'), filename: 'champagne_glasses.jpg')
p11.images.attach(io: File.open(img_path + 'champagne_glasses2.jpg'), filename: 'champagne_glasses2.jpg')

p12 = Product.create(title: 'Personalized Cutting Board', description: 'Personalized Cutting Boards, Custom Engraved Chopping Boards, Custom Engraved Cooking Boards for Weddings, Anniversaries, and Housewarming Gifts made to order.', price: 26.95 , user_id: betsy.id, who: 'I did', what: 'A finished product', when: 'Made to order')
p12.images.attach(io: File.open(img_path + 'cutting_board.jpg'), filename: 'cutting_board.jpg')

p13 = Product.create(title: 'Summer Whites (Fashion Illustration Print)', description: 'Your BFFs in their summer whites! These girls are also available as individual prints (check them out in the "people" or "new arrivals" section)', price: 14.50 , user_id: debbie.id, who: 'A member of my shop', what: 'A finished product', when: 'Made to order')
p13.images.attach(io: File.open(img_path + 'fashion_illustration.jpg'), filename: 'fashion_illustration.jpg')
p13.images.attach(io: File.open(img_path + 'fashion_illustration1.jpg'), filename: 'fashion_illustration1.jpg')
p13.images.attach(io: File.open(img_path + 'fashion_illustration2.jpg'), filename: 'fashion_illustration2.jpg')

p14 = Product.create(title: 'Custom keychain, leather keychain, custom keychain', description:'This is a great gift! Perfect for teacher gifts, bridesmaids, big and little sorority gifts, gift for teams, and stocking stuffers during holiday time! The best part is they will actually use it daily! Made of leather and customized to your liking! Choose your color! These look great inside our bridesmaid boxes! Keychain measures 5” including ring leather strap is about 3.5” maximum of 15 characters per keychain', price: 6.99 , user_id: betty.id, who: 'A member of my shop', what: 'A finished product', when: 'Made to order')
p14.images.attach(io: File.open(img_path + 'keychain.jpg'), filename: 'keychain.jpg')
p14.images.attach(io: File.open(img_path + 'keychain2019.jpg'), filename: 'keychain2019.jpg')



c1 = Comment.create(user_id: betty.id, product_id: p1.id, body:'items arrived very quickly after purchasing and they are going to be a hit! LOVE THEM', rating:5)
c2 = Comment.create(user_id: bob.id, product_id: p1.id, body:'Very cute coozies for baby shower! Color was actually lighter than the photo but still worked out great.', rating:4)
c3 = Comment.create(user_id: betty.id, product_id: p2.id, body:'Shipping was super fast, and it came packaged nicely. The onesie looks just like it does in the photos', rating:5)
c4 = Comment.create(user_id: bob.id, product_id: p3.id, body: 'adorable , well made, and so soft! Will definitely buy from here again!', rating:4)
c5 = Comment.create(user_id: betsy.id, product_id: p3.id, body:'Fast delivery! Love the colors and sparkle of letters.', rating:5)
c6 = Comment.create(user_id: betty.id, product_id: p4.id, body:'The bagpack is smaller than what I expected.', rating:3)
c7 = Comment.create(user_id: betsy.id, product_id: p5.id, body:'Amazing! The precious box and the customer service!!!', rating:4)
c8 = Comment.create(user_id: bob.id, product_id: p6.id, body:'The sound quality is not that good, but the design is cute.', rating:3)
c9 = Comment.create(user_id: betty.id, product_id: p6.id, body:'Shipping was fast. Love the product.', rating:4)
c10 = Comment.create(user_id: betty.id, product_id: p7.id, body:'Working with the seller was so great. She was pleasant and made sure I got these in time for my wedding day. The jars are beautiful!', rating:4)
c11 = Comment.create(user_id: betty.id, product_id: p8.id, body:'Wonderful bracelet and great service!', rating:4)
c12 = Comment.create(user_id: betsy.id, product_id: p8.id, body:'Delicate but durable, but shipping is too slow!', rating:2)
c13 = Comment.create(user_id: betty.id, product_id: p9.id, body:'These are adorable I got the bags for mother/mother in love, bridesmaids and flower girls to put their gifts in and they are awesome bags. Great quality and so cute! They shipped quickly and were no hassle.', rating:3)
c14 = Comment.create(user_id: bob.id, product_id: p10.id, body:'Love them!!!! Can not wait to give them to my girls! They were so cute I had to get myself one', rating:5)
c15 = Comment.create(user_id: betty.id, product_id: p11.id, body:'Absolutely gorgeous! Ordered as a gift but might have to reorder for myself!', rating:3)
c16 = Comment.create(user_id: betsy.id, product_id: p13.id, body:'These brushes are amazing! I could never figure out how to get them just right and now I do not have to. Thanks for taking out all of the guess work! You rock!', rating:5)
c17 = Comment.create(user_id: bob.id, product_id: p13.id, body:'Until now I have never found brushes to suit my needs! Thank you for making drawing hair fun!', rating:4)
c18 = Comment.create(user_id: debbie.id, product_id: p14.id, body:'These looked so beautiful in person! The color was closer to sage than mint, which is different from what I expected!', rating:3)







