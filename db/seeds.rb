# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Product.destroy_all

p1 = Product.create(title: 'A Baby is Brewing', description: 'Collapsible Foam, 12oz Cans. A Baby is Brewing, Baby Shower Decorations, Baby Announcement, Baby Girl Baby Shower, Baby Shower Can Cooler,Baby Shower Giveaways by My Wedding Store!', price: 100, user_id: 24, who: 'A member of my shop', what: 'A finished product', when: 'Made to order')
p1.images.attach(io: File.open('/Users/bettywren/Desktop/artsy/baby_shower.jpg'), filename: 'baby_shower.jpg')

p2 = Product.create(title: 'This is My Road Trip Shirt Vacation Summer Family Vacation Baby Unisex Bodysuit', description: 'This is My Road Trip Shirt! Cute baby bodysuit perfect for that vacation with the family! There is a mini bus in the center, which gives a fun retro look.', price: 100, user_id: 24, who: 'A member of my shop', what: 'A finished product', when: 'Made to order')
p2.images.attach(io: File.open('/Users/bettywren/Desktop/artsy/baby_shirt_1.jpg'), filename: '/baby_shirt_1.jpg')
p2.images.attach(io: File.open('/Users/bettywren/Desktop/artsy/baby_shirt_2.jpg'), filename: '/baby_shirt_2.jpg')
p2.images.attach(io: File.open('/Users/bettywren/Desktop/artsy/baby_shirt_3.jpg'), filename: '/baby_shirt_3.jpg')

p3 = Product.create(title: 'Baby Shower Gift, Hello World Personalized Bodysuit with Headband', description: 'Personalized Hello World Bodysuit and Bow Headband, the perfect baby shower gift!
A PERFECT gift for any Newborn Baby Girl!', price: 19.99, user_id: 24, who: 'I did', what: 'A finished product', when: 'Made to order')
p3.images.attach(io: File.open('/Users/bettywren/Desktop/artsy/baby_shirt.jpg'), filename: 'baby_shirt.jpg')

p4 = Product.create(title: 'Unicorn Backpack', description: 'This cute personalised Unicorn backpack would be perfect for any little girl ', price: 28, user_id: 24, who: 'A member of my shop', what: 'A finished product', when: 'Made to order')
p4.images.attach(io: File.open('/Users/bettywren/Desktop/artsy/backpack_1.jpg'), filename: 'backpack_1.jpg')
p4.images.attach(io: File.open('/Users/bettywren/Desktop/artsy/backpack_2.jpg'), filename: 'backpack_2.jpg')
p4.images.attach(io: File.open('/Users/bettywren/Desktop/artsy/backpack_3.jpg'), filename: 'backpack_3.jpg')

p5 = Product.create(title: 'Baptism Gift, Christening Gift, Elephant Keepsake, Stuffed Elephant, Godparent Gift, ', description: '♥ This adorable personalized plush elephant is the perfect Baptism/Christening keepsake.
♥ The elephant is personalized using high quality heat-transfer vinyl that is applied using a commercial grade heat press. You can be confident that the letters and numbers will not come off!', price: 16, user_id: 24, who: 'A member of my shop', what: 'A finished product', when: 'Made to order')
p5.images.attach(io: File.open('/Users/bettywren/Desktop/artsy/baptism_gift.jpg'), filename: 'baptism_gift.jpg')
