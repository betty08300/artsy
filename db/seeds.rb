# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Product.destroy_all

p1 = Product.create(title: 'A Baby is Brewing', description: 'Collapsible Foam, 12oz Cans. A Baby is Brewing, Baby Shower Decorations, Baby Announcement, Baby Girl Baby Shower, Baby Shower Can Cooler,Baby Shower Giveaways by My Wedding Store!', price: 24.99, user_id: 24, who: 'A member of my shop', what: 'A finished product', when: 'Made to order')
p1.images.attach(io: File.open('/Users/bettywren/Desktop/artsy/baby_shower.jpg'), filename: 'baby_shower.jpg')

p2 = Product.create(title: 'This is My Road Trip Shirt Vacation Summer Family Vacation Baby Unisex Bodysuit', description: 'This is My Road Trip Shirt! Cute baby bodysuit perfect for that vacation with the family! There is a mini bus in the center, which gives a fun retro look.', price: 15.50, user_id: 24, who: 'A member of my shop', what: 'A finished product', when: 'Made to order')
p2.images.attach(io: File.open('/Users/bettywren/Desktop/artsy/baby_shirt_1.jpg'), filename: '/baby_shirt_1.jpg')
p2.images.attach(io: File.open('/Users/bettywren/Desktop/artsy/baby_shirt_2.jpg'), filename: '/baby_shirt_2.jpg')
p2.images.attach(io: File.open('/Users/bettywren/Desktop/artsy/baby_shirt_3.jpg'), filename: '/baby_shirt_3.jpg')

p3 = Product.create(title: 'Baby Shower Gift, Hello World Personalized Bodysuit with Headband', description: 'Personalized Hello World Bodysuit and Bow Headband, the perfect baby shower gift!
A PERFECT gift for any Newborn Baby Girl!', price: 19.99, user_id: 24, who: 'I did', what: 'A finished product', when: 'Made to order')
p3.images.attach(io: File.open('/Users/bettywren/Desktop/artsy/baby_shirt.jpg'), filename: 'baby_shirt.jpg')

p4 = Product.create(title: 'Unicorn Backpack', description: 'This cute personalised Unicorn backpack would be perfect for any little girl ', price: 28.00, user_id: 24, who: 'A member of my shop', what: 'A finished product', when: 'Made to order')
p4.images.attach(io: File.open('/Users/bettywren/Desktop/artsy/backpack_1.jpg'), filename: 'backpack_1.jpg')
p4.images.attach(io: File.open('/Users/bettywren/Desktop/artsy/backpack_2.jpg'), filename: 'backpack_2.jpg')
p4.images.attach(io: File.open('/Users/bettywren/Desktop/artsy/backpack_3.jpg'), filename: 'backpack_3.jpg')

p5 = Product.create(title: 'Baptism Gift, Christening Gift, Elephant Keepsake, Stuffed Elephant, Godparent Gift, ', description: '♥ This adorable personalized plush elephant is the perfect Baptism/Christening keepsake.
♥ The elephant is personalized using high quality heat-transfer vinyl that is applied using a commercial grade heat press. You can be confident that the letters and numbers will not come off!', price: 16.00, user_id: 24, who: 'A member of my shop', what: 'A finished product', when: 'Made to order')
p5.images.attach(io: File.open('/Users/bettywren/Desktop/artsy/baptism_gift.jpg'), filename: 'baptism_gift.jpg')

p6 = Product.create(title: 'Personalized Mini Wireless Bluetooth Speaker', description: 'Our new wooden speakers make a HUGE impact! Small enough to be portable, yet powerful enough to get the job done perfectly, these gorgeous square wooden speakers are equipped with the finest technology to set the room alive with sound.', price: 19.99, user_id: 24, who: 'I did', what: 'A finished product', when: 'Made to order')
p6.images.attach(io: File.open('/Users/bettywren/Desktop/artsy/bluetooth_speaker.jpg'), filename: 'bluetooth_speaker.jpg')

p7 = Product.create(title: 'handmade baby boy shirt', description: 'cute little baby boy long sleeved raglan shirt with a fun woodland print. This is made of a cotton/lycra blend fabric making it soft, cozy and breathable. Available in sizes NB they 5T. 
', price: 25.99, user_id: 24, who: 'I did', what: 'A finished product', when: 'Made to order')
p7.images.attach(io: File.open('/Users/bettywren/Desktop/artsy/boy_shirt.jpg'), filename: 'boy_shirt.jpg')

p8 = Product.create(title: 'Personalized Bracelet Friendship Bracelet ', description: 'Personalized Bracelet Jewelry Friendship Bracelet for Women Wedding Party Gift Mantra Bracelet Engraved Bracelets Bangle ', price: 18.50, user_id: 24, who: 'I did', what: 'A finished product', when: 'Made to order')
p8.images.attach(io: File.open('/Users/bettywren/Desktop/artsy/bracelet.jpg'), filename: 'bracelet.jpg')

p9 = Product.create(title: 'Bride Tote Bag', description: 'Bride custom canvas Tote Bag. The perfect addition or gift for the Bride to be. Trendy and fashionable, perfect for the on the go Bride. ', price: 11.50, user_id: 24, who: 'I did', what: 'A finished product', when: 'Made to order')
p9.images.attach(io: File.open('/Users/bettywren/Desktop/artsy/bride_tote_bag.jpg'), filename: 'bride_tote_bag.jpg')

p10 = Product.create(title: 'Cat tote bag, Funny tote bag, Cat lover gift, Cotton shoulder cat bag', description: 'The design is screen printed in white on the 100% cotton black bag which allows it to really pop and be bold for everyone to see. ', price: 15.09 , user_id: 24, who: 'I did', what: 'A finished product', when: 'Made to order')
p10.images.attach(io: File.open('/Users/bettywren/Desktop/artsy/cat_tote_bag1.jpg'), filename: 'cat_tote_bag1.jpg')
p10.images.attach(io: File.open('/Users/bettywren/Desktop/artsy/cat_tote_bag2.jpg'), filename: 'cat_tote_bag2.jpg')

p11 = Product.create(title: 'Set of 2, Wedding Champagne Flutes, Mr and Mrs Personalized Champagne Glasses', description: 'The glass has a tall, slender shape which keeps the bubbles alive for longer, enhancing your experience of the champagne or sparkling wine. ', price: 27.99, user_id: 24, who: 'I did', what: 'A finished product', when: 'Made to order')
p11.images.attach(io: File.open('/Users/bettywren/Desktop/artsy/champagne_glasses.jpg'), filename: 'champagne_glasses.jpg')
p11.images.attach(io: File.open('/Users/bettywren/Desktop/artsy/champagne_glasses2.jpg'), filename: 'champagne_glasses2.jpg')

p12 = Product.create(title: 'Personalized Cutting Board', description: 'Personalized Cutting Boards, Custom Engraved Chopping Boards, Custom Engraved Cooking Boards for Weddings, Anniversaries, and Housewarming Gifts made to order.', price: 26.95 , user_id: 24, who: 'I did', what: 'A finished product', when: 'Made to order')
p12.images.attach(io: File.open('/Users/bettywren/Desktop/artsy/cutting_board.jpg'), filename: 'cutting_board.jpg')






