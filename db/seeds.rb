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

p15 = Product.create(title: 'Monogrammed Sandals! Monogram Medallion Sandals! Hot Hot Hot new item!', description:'Available in sizes 6-11 - please see size chart for help with finding size. If you are a 1/2 size (i.e. 8 1/2 I recommend ordering up). The sizing on these is different from last year so there is no need to ALWAYS order up. ', price: 16.80 , user_id: bob.id, who: 'Another company or person', what: 'A finished product', when: 'Made to order')
p15.images.attach(io: File.open(img_path + 'monogram_sandales.jpg'), filename: 'monogram_sandales.jpg')
p15.images.attach(io: File.open(img_path + 'sandales.jpg'), filename: 'sandales.jpg')
p15.images.attach(io: File.open(img_path + 'sandales1.jpg'), filename: 'sandales1.jpg')

p16 = Product.create(title: 'Walnut Rift - Real Wood iPhone Case - iPhone XR, Xs Max, X/Xs, 8/7, 8/7 Plus, 6s, 6s Plus, SE/5s - Made in Canada by Keyway Designs', description:'Keyway cases are made with a hand finished real wood cover, laser cut inlays and a flexible rubber shell. The Walnut Rift features both Walnut wood and leather, with an elegant division down the middle. It is slim, offers full wrap-around protection, covered buttons, and protects from bumps and tumbles. Hand-crafted in Toronto, Canada.', price: 30.64 , user_id: debbie.id, who: 'Another company or person', what: 'A finished product', when: 'Made to order')
p16.images.attach(io: File.open(img_path + 'iphone_case.jpg'), filename: 'iphone_case.jpg')
p16.images.attach(io: File.open(img_path + 'iphone_case1.jpg'), filename: 'iphone_case1.jpg')
p16.images.attach(io: File.open(img_path + 'iphone_case2.jpg'), filename: 'iphone_case2.jpg')
p16.images.attach(io: File.open(img_path + 'iphone_case3.jpg'), filename: 'iphone_case3.jpg')

p17 = Product.create(title: 'SVG Font INSTANT DOWNLOAD "Hadley Brush" Includes caps, svg, script cut file, cursive font, handlettered font, brush font, script, dxf svg', description:'This is an .SVG/.DXF font bundle, so they will only work in a vector based program. These are not installable. They do not work in Photoshop or Microsoft Word. They behave like cut files, and open with all letters in one document (per font).', price: 5.09 , user_id: betsy.id, who: 'I did', what: 'A finished product', when: 'Made to order')
p17.images.attach(io: File.open(img_path + 'SVG_font.jpg'), filename: 'SVG_font.jpg')
p17.images.attach(io: File.open(img_path + 'SVG_font1.jpg'), filename: 'SVG_font1.jpg')

p18 = Product.create(title: 'Women Print Sweater', description:'This MAMA Off Shoulder Sweater feels really soft on the skin and goes below the waist. Perfect Oversized cozy sweater for those chilly days.', price: 35.09 , user_id: betty.id, who: 'I did', what: 'A finished product', when: 'Made to order')
p18.images.attach(io: File.open(img_path + 'sweater.jpg'), filename: 'sweater.jpg')

p19 = Product.create(title: 'Family Necklace • Personalized Gift • Linked Circle Necklace • Custom Children Name Rings • Eternity Necklace • Mother Gift', description:'♥ Custom Family Eternity Necklace ♥ The most unique jewelry you can find, perfect gift for you and your loved one ♥', price: 29.50 , user_id: bob.id, who: 'A member of my shop', what: 'A finished product', when: 'Made to order')
p19.images.attach(io: File.open(img_path + 'family_necklace.jpg'), filename: 'family_necklace.jpg')
p19.images.attach(io: File.open(img_path + 'family_necklace1.jpg'), filename: 'family_necklace1.jpg')

p20 = Product.create(title: 'Men Fall Football Shirt Fall Shirt', description:'This tee is super soft and comfy! It is a tri-blend jersey t-shirt you will not want to take it off.', price: 24.50 , user_id: bob.id, who: 'I did', what: 'A finished product', when: 'Made to order')
p20.images.attach(io: File.open(img_path + 'football_shirts.jpg'), filename: 'football_shirts.jpg')
p20.images.attach(io: File.open(img_path + 'football_shirts1.jpg'), filename: 'football_shirts1.jpg')
p20.images.attach(io: File.open(img_path + 'football_shirts2.jpg'), filename: 'football_shirts2.jpg')

p21 = Product.create(title: 'Spindle box, Montessori math, Educational wooden toy', description:'It is small and perfect for home use where every inch of space counts. It measures 12 inches long and the spindles are 3 inches long.', price: 31.32 , user_id: betsy.id, who: 'I did', what: 'A finished product', when: 'Made to order')
p21.images.attach(io: File.open(img_path + 'spindle_box.jpg'), filename: 'spindle_box.jpg')

p22 = Product.create(title: 'Original teepee, kids teepee with nature canvas and leather tassel Door Ties', description:'Original canvas teepee comes with TucsonTeepee signature design, the cross leather lacing on the front and the hand stitched leather tassels door ties. It is one of the most famous design in my store, neutral and stylish.', price: 149.00 , user_id: betty.id, who: 'Another company or person', what: 'A finished product', when: 'Made to order')
p22.images.attach(io: File.open(img_path + 'original_teepee.jpg'), filename: 'original_teepee.jpg')
p22.images.attach(io: File.open(img_path + 'original_teepee1.jpg'), filename: 'original_teepee1.jpg')
p22.images.attach(io: File.open(img_path + 'original_teepee2.jpg'), filename: 'original_teepee2.jpg')

p23 = Product.create(title: 'Macbook Wood Case for Apple Mac Air Pro 11 12 13 15 inch - Walnut Wood Mac book Case - Mac Skin - Mac Sticker - Mac Cover Mac Case for gift', description:'Simple Installation – Quick and easy text/video tutorial available. The two-piece design is removable but not reusable. All ports are 100% accessible, and ventilation is uncompromised.', price: 34.35 , user_id: betsy.id, who: 'I did', what: 'A finished product', when: 'Made to order')
p23.images.attach(io: File.open(img_path + 'macbook_case.jpg'), filename: 'macbook_case.jpg')
p23.images.attach(io: File.open(img_path + 'macbook_case1.jpg'), filename: 'macbook_case1.jpg')

p24 = Product.create(title: 'Dinosaur Shirt Pocket Tee TShirt Men Ladies Girl Women Gift Dino Brontosaurus Friend Cute Funny Shirts Science Unisex V-neck Tank Top Trendy', description:'We strive to print on some of the softest shirts around, while keeping our prices low. We believe that even novelty shirts deserve to be comfortable! Our charcoal and Heather (hthr) shirts contain polyester for an even softer feel.', price: 14.99 , user_id: debbie.id, who: 'I did', what: 'A finished product', when: 'Made to order')
p24.images.attach(io: File.open(img_path + 'pocket_tee.jpg'), filename: 'pocket_tee.jpg')






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
c19 = Comment.create(user_id: debbie.id, product_id: p15.id, body:'Great experience, great quality. Shoes are adorable!', rating:5)
c20 = Comment.create(user_id: bob.id, product_id: p16.id, body:'I wasn’t thrilled. You may be. Part of the problem is it felt cheap in my hand— the “French” leather is a thin layer of stamped cheap feeling leather, and the wood has an awful plastic-like finish on it that makes it look like, well, plastic. I immediately thought it looked like a piece of veneer you’d find on a cheap piece of furniture.', rating:2)
c21 = Comment.create(user_id: betty.id, product_id: p16.id, body:'Really like the case. Clean lines. Well constructed. Very efficient service.', rating:4)
c22 = Comment.create(user_id: betty.id, product_id: p17.id, body:'This is a great font - love it! Especially love how all the letters are in one file that can be ungrouped when I bring it into my Cricut Design Space It is sooo much easier than bringing each letter in one at a time! Genius!', rating:4)
c23 = Comment.create(user_id: debbie.id, product_id: p19.id, body:'Love this necklace! Wanted something to make our blended family complete! Seller was amazing!', rating:5)
c24 = Comment.create(user_id: betty.id, product_id: p21.id, body:'Absolutely gorgeous! Quality product and nice workmanship!', rating:4)
c25 = Comment.create(user_id: bob.id, product_id: p22.id, body:'Kids love it, very sturdy and absolutely adorable!', rating:5)
c26 = Comment.create(user_id: debbie.id, product_id: p22.id, body:'Love the tent. High quality and good looking. My only wish, is that it came with a way to close the flaps/door. That was the first thing my kids wanted to do, in order to hide inside.', rating:3)
c27 = Comment.create(user_id: bob.id, product_id: p24.id, body:'This company is AMAZING!!! Their customer service and the quality of their work is truly spectacular. I have worked with them multiple times now and continue to be blown away. I highly recommend them and have been telling all my friends about them.', rating:5)











