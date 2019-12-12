const inventory = [
  {
    id: 1,
    links: ['https://images-na.ssl-images-amazon.com/images/I/61cPluo9VbL._UX679_.jpg'],
    sku: '06-001'
  },
  {
    id: 2,
    links: ['https://www.southtexastack.com/prodimages/9645-DEFAULT-l.jpg'],
    sku: '06-002'
  },
  {
    id: 3,
    links: [
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS5bzUA_RMKl4lIHJh2-2UwUWQ2NJGSobwHWNzRqltwC1vYWieVRXygF8mS3VQzdb7HjyWWTWqDrmdTJn_ZunlcAfb11eFRqAWOgtW-i0Ak9GGm8wEaypHA8w&usqp=CAc'
    ],
    sku: '06-003'
  },
  {
    id: 4,
    links: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQFxoa4W1RAPsUf1CcA27vYegPJxWYgC5tu559LZoAA6TwjsMx&s'],
    sku: '06-004'
  },
  {
    id: 5,
    links: ['https://images-na.ssl-images-amazon.com/images/I/61LL6TdlRmL._UY445_.jpg'],
    sku: '06-005'
  },
  {
    id: 6,
    links: ['http://www.spurwesternwear.com/images/Product/large/1354.jpg'],
    sku: '06-006'
  },
  {
    id: 7,
    links: [
      'https://cdn11.bigcommerce.com/s-suohc1v4iw/images/stencil/1280x1280/products/17646/22872/pl-637-tur-preview__16739.1541686173.jpg?c=2&imbypass=on'
    ],
    sku: '06-007'
  },
  {
    id: 8,
    links: ['https://www.dhresource.com/0x0/f2/albu/g9/M00/E6/53/rBVaVVzecNGAO583AARrHsCp8XY835.jpg'],
    sku: '06-008'
  },
  {
    id: 9,
    links: ['https://ae01.alicdn.com/kf/HTB1q2YOovuSBuNkHFqDq6xfhVXaR.jpg'],
    sku: '06-009'
  },
  {
    id: 10,
    links: ['https://images.halloweencostumes.com/products/15649/1-1/toddler-cowboy-costume-update1.jpg'],
    sku: '06-010'
  },
  {
    id: 11,
    links: ['https://images.halloweencostumes.com/products/60476/1-2/toy-story-womens-jessie-classic-costume.jpg'],
    sku: '06-011'
  },
  {
    id: 12,
    links: ['https://images-na.ssl-images-amazon.com/images/I/51UW1849rJL._SY355_.jpg'],
    sku: '06-012'
  },
  {
    id: 13,
    links: ['https://images.halloweencostumes.com/media/13/cowboys/western-gunman-costume.jpg'],
    sku: '06-013'
  },
  {
    id: 14,
    links: ['https://medias.spotern.com/spots/w640/8/8642-1532336916.jpg'],
    sku: '06-014'
  },
  {
    id: 15,
    links: [
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/american-hip-hop-artist-will-smith-performs-the-song-wild-news-photo-2031246-1554660737.jpg?crop=0.852xw:0.569xh;0.0731xw,0.0647xh&resize=480:*'
    ],
    sku: '06-015'
  },
  {
    id: 16,
    links: ['http://i800.photobucket.com/albums/yy289/ebmonson86/Clothes/AurelieBiderman.jpg'],
    sku: '06-016'
  },
  {
    id: 17,
    links: ['https://i.etsystatic.com/19781246/r/il/92a48b/1984486609/il_1588xN.1984486609_eydl.jpg'],
    sku: '06-017'
  },
  {
    id: 18,
    links: ['https://i.etsystatic.com/14886394/r/il/418ea3/1534959777/il_1588xN.1534959777_kskm.jpg'],
    sku: '06-018'
  },
  {
    id: 19,
    links: ['https://i.etsystatic.com/10157633/r/il/de11d8/1402502495/il_1588xN.1402502495_3mo3.jpg'],
    sku: '06-019'
  },
  {
    id: 20,
    links: ['https://i.etsystatic.com/13535695/r/il/1e5a7e/1785749318/il_1588xN.1785749318_cy9j.jpg'],
    sku: '06-020'
  },
  {
    id: 21,
    links: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHT4BZXwqC498hcEQ0XJf2MW2Q1b9pZdWY5dCc9_5JGDk8yObX&s'],
    sku: '07-001'
  },
  {
    id: 22,
    links: ['https://images-na.ssl-images-amazon.com/images/I/716g6nwz79L._SX466_.jpg'],
    sku: '07-002'
  },
  {
    id: 23,
    links: ['https://qph.fs.quoracdn.net/main-qimg-0fbf1c07e7746a7ac71d5d4326eae5e5'],
    sku: '07-003'
  },
  {
    id: 24,
    links: ['https://i5.walmartimages.com/asr/04f525bf-dc66-40fc-b969-6bb18d72f0ee_1.23d30755bba9df28e4d3ac3f63618a02.jpeg'],
    sku: '07-004'
  },
  {
    id: 25,
    links: ['https://i.pinimg.com/originals/c0/b1/3a/c0b13a1708806561a231aaa4dadf48a1.jpg'],
    sku: '07-005'
  },
  {
    id: 26,
    links: ['https://tribkcpq.files.wordpress.com/2013/07/fire14.png'],
    sku: '07-006'
  },
  {
    id: 27,
    links: ['https://q7i2y6d5.stackpathcdn.com/wp-content/uploads/2019/04/lawn-pH.jpg'],
    sku: '07-007'
  },
  {
    id: 28,
    links: ['https://xliulucas.files.wordpress.com/2012/12/1-2.jpg'],
    sku: '07-008'
  },
  {
    id: 29,
    links: ['https://i.pinimg.com/originals/ce/be/f9/cebef99c236b31d3ef2eb6460ccc61b2.jpg'],
    sku: '07-009'
  },
  {
    id: 30,
    links: ['https://www.designboom.com/wp-content/uploads/2018/10/jacob-witzling-truck-cabin-designboom-600.jpg'],
    sku: '07-010'
  },
  {
    id: 31,
    links: [
      'https://images.ladbible.com/thumbnail?type=jpeg&url=http://beta.ems.ladbiblegroup.com/s3/content/2b9b9d395d3d0b254d1f211c805e8ab7.png&quality=70&width=720'
    ],
    sku: '07-011'
  },
  {
    id: 32,
    links: ['https://image.cnbcfm.com/api/v1/image/105841065-1554818009865gettyimages-626759612.jpg?v=1561392118&w=1400&h=950'],
    sku: '07-012'
  },
  {
    id: 33,
    links: ['https://static0.srcdn.com/wordpress/wp-content/uploads/2018/10/Cabin-in-the-Woods-Movie-Poster.jpg'],
    sku: '07-013'
  },
  {
    id: 34,
    links: ['https://vignette.wikia.nocookie.net/starwars/images/d/dd/ST-ewokvillage.jpg/revision/latest?cb=20070811234556'],
    sku: '07-014'
  },
  {
    id: 35,
    links: ['https://cdn0.rubylane.com/_pod/item/1356998/833/Log-Cabin-Ranch-House-Original-Acrylic-full-1A-700%3A10.10-55-r-ffffff-99abbc.png'],
    sku: '07-015'
  },
  {
    id: 36,
    links: ['https://st.hzcdn.com/fimgs/ece24ad20f97a0f0_7200-w500-h400-b0-p0--.jpg'],
    sku: '07-016'
  },
  {
    id: 37,
    links: ['https://freerangestock.com/sample/17815/old-western-house.jpg'],
    sku: '07-017'
  },
  {
    id: 38,
    links: [
      'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2019/4/17/0/HUHH2019-Escape_Fall-City-WA_19.jpg.rend.hgtvcom.966.725.suffix/1555507098172.jpeg'
    ],
    sku: '07-018'
  },
  {
    id: 39,
    links: ['http://images.ourontario.ca/Partners/WHMPL/WHMPL078144.jpg'],
    sku: '07-019'
  },
  {
    id: 40,
    links: ['https://live.staticflickr.com/4480/37457964781_01962f8bc8_b.jpg'],
    sku: '07-020'
  },
  {
    id: 41,
    links: ['https://img.smartpak.com/images/product/highres/24975_trail-a.jpg'],
    sku: '08-001'
  },
  {
    id: 42,
    links: ['https://i.pinimg.com/originals/23/c1/07/23c1078ac9a4863c1b624f95281e974b.jpg'],
    sku: '08-002'
  },
  {
    id: 43,
    links: ['https://images-na.ssl-images-amazon.com/images/I/81PkJiEPmvL._SL1500_.jpg'],
    sku: '08-003'
  },
  {
    id: 44,
    links: ['http://3.bp.blogspot.com/_2kjisMm3M9Y/TKjBP3xxaGI/AAAAAAAANlQ/s4XK3XCNVS4/s1600/batman-horse-saddle-3.jpg'],
    sku: '08-004'
  },
  {
    id: 45,
    links: [
      'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1439,w_2560,x_0,y_0/dpr_1.5/c_limit,w_608/fl_lossy,q_auto/v1492112924/cheats/2016/06/11/cowboy-lassos-thief-in-wal-mart-parking-lot/160611-walmart-cowboy-thief-cheat_hraogc'
    ],
    sku: '08-005'
  },
  {
    id: 46,
    links: ['https://pbs.twimg.com/media/BLLYXE_CYAA3SXr.jpg'],
    sku: '08-006'
  },
  {
    id: 47,
    links: ['https://i.pinimg.com/originals/f4/79/a1/f479a18e10541f13220e4a1371a46783.jpg'],
    sku: '08-007'
  },
  {
    id: 48,
    links: ['http://www.freakingnews.com/pictures/22000/Man-in-a-Rodeo-Riding-an-Invisible-Horse--22229.jpg'],
    sku: '08-008'
  },
  {
    id: 49,
    links: ['https://americanequus.com/wp-content/uploads/2017/08/AE_08-18-17_IQ150_0050-Edit-Edit.jpg'],
    sku: '08-009'
  },
  {
    id: 50,
    links: ['https://americanequus.com/wp-content/uploads/2017/08/AE_SHOES_7-13-17_8424-Edit.jpg'],
    sku: '08-010'
  },
  {
    id: 51,
    links: ['https://americanequus.com/wp-content/uploads/2017/07/AE_6-29-17_8418-Edit.jpg'],
    sku: '08-011'
  },
  {
    id: 52,
    links: ['https://s1.1zoom.me/b5050/870/Horses_White_Three_3_Run_527672_3840x2400.jpg'],
    sku: '08-012'
  },
  {
    id: 53,
    links: ['https://www.chicksaddlery.com/Merchant2/graphics/00000001/SM2004.jpg'],
    sku: '08-013'
  },
  {
    id: 54,
    links: [
      'https://www.horsebreedspictures.com/wp-content/uploads/2016/11/Baguio-Ponies.jpg',
      'https://live.staticflickr.com/7406/13903549154_933b34604c_b.jpg',
      'https://images.pexels.com/photos/828654/pexels-photo-828654.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      'http://lh3.ggpht.com/-vEQtbIBYwZw/UTBZ6z3nKnI/AAAAAAAALDc/qmSgE_bgH3A/20120225-BAGUIO-NEX5N-0220%25255B3%25255D.jpg?imgmax=800'
    ],
    sku: '08-014'
  },
  {
    id: 55,
    links: ['https://i.etsystatic.com/7232254/r/il/5fd452/1847629269/il_1588xN.1847629269_cvqm.jpg'],
    sku: '08-015'
  },
  {
    id: 56,
    links: ['https://www.shitpostbot.com/resize/585/400?img=%2Fimg%2Fsourceimages%2Fderp-horse-595badb887dea.jpeg'],
    sku: '08-016'
  },
  {
    id: 57,
    links: ['https://i.pinimg.com/originals/ec/fa/97/ecfa979190fec01faf5d96d30865ddd1.jpg'],
    sku: '08-017'
  },
  {
    id: 58,
    links: ['https://pbs.twimg.com/media/DeHwi3KWkAEl0eF.jpg'],
    sku: '08-018'
  },
  {
    id: 59,
    links: ['https://i.ytimg.com/vi/y1U1Eqfdg7w/maxresdefault.jpg'],
    sku: '08-019'
  },
  {
    id: 60,
    links: ['https://i.ytimg.com/vi/uFOq8-gNoQo/hqdefault.jpg'],
    sku: '08-020'
  },
  {
    id: 61,
    links: ['https://images-na.ssl-images-amazon.com/images/I/81WtG6m6p%2BL._SL1500_.jpg'],
    sku: '09-001'
  },
  {
    id: 62,
    links: ['https://images-na.ssl-images-amazon.com/images/I/81w9Jk9rSIL._SL1500_.jpg'],
    sku: '09-002'
  },
  {
    id: 63,
    links: ['https://images-na.ssl-images-amazon.com/images/I/81TL6qK7duL._SL1500_.jpg'],
    sku: '09-003'
  },
  {
    id: 64,
    links: ['https://images-na.ssl-images-amazon.com/images/I/61-jbDlG4PL._SL1500_.jpg'],
    sku: '09-004'
  },
  {
    id: 65,
    links: ['https://i.etsystatic.com/8081128/r/il/3ab614/1893446075/il_fullxfull.1893446075_i1h7.jpg'],
    sku: '09-005'
  },
  {
    id: 66,
    links: ['https://www.straight.com/files/v3/styles/gs_standard/public/images/19/04/gettyimages-545639598.jpg?itok=IOoitVm2'],
    sku: '09-006'
  },
  {
    id: 67,
    links: [
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT_Je7LqD2zZUrfXzyKFoOR-WiJpVebP38EXNQYQqUL_C0Op3vUteMAHfuuY_lptXy_ZHgEeN8uiv_F8EKRRR0unT7OZxfiJMInPZTmklMaewrGHlOGY_82&usqp=CAc'
    ],
    sku: '09-007'
  },
  {
    id: 68,
    links: [
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTuqFmSwOOzXtGL7iRNLivFhjbbOUPRecCTIdj-jUqwuwVJL7r4cqyYtrLGwZJl_4YyPg125eK2A8ixg4tvXiv8VNqWCStFhbPKZZLjPSyoOFNOmZCjkhG5&usqp=CAc'
    ],
    sku: '09-008'
  },
  {
    id: 69,
    links: ['https://images-na.ssl-images-amazon.com/images/I/710%2BpBbAWIL._SL1500_.jpg'],
    sku: '09-009'
  },
  {
    id: 70,
    links: ['https://images-na.ssl-images-amazon.com/images/I/714S0qA81yL._SL1500_.jpg'],
    sku: '09-010'
  },
  {
    id: 71,
    links: ['https://images-na.ssl-images-amazon.com/images/I/81I-YEX6qYL._SL1500_.jpg'],
    sku: '09-011'
  },
  {
    id: 72,
    links: ['https://images-na.ssl-images-amazon.com/images/I/61-XsUt7FJL._SL1000_.jpg'],
    sku: '09-012'
  },
  {
    id: 73,
    links: [
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQjTNHJpiMmJjZBxiGoTSzGHyZmWkBizkVQIwnIYbPF1LzoXi3PmJALPklVGWowIGClN_gdLmKL9Y_gr-88UCOg-Jm2Z93i0eL3HN5rmzvc690jf1JUUjBo&usqp=CAc'
    ],
    sku: '09-013'
  },
  {
    id: 74,
    links: ['https://images-na.ssl-images-amazon.com/images/I/61HAD%2Bf6z1L._SL1100_.jpg'],
    sku: '09-014'
  },
  {
    id: 75,
    links: ['https://images-na.ssl-images-amazon.com/images/I/71sw16YY-qL._SL1185_.jpg'],
    sku: '09-015'
  },
  {
    id: 76,
    links: ['https://images-na.ssl-images-amazon.com/images/I/818nCivnEXL._SL1500_.jpg'],
    sku: '09-016'
  },
  {
    id: 77,
    links: ['https://images-na.ssl-images-amazon.com/images/I/711V5a1GpvL._SL1244_.jpg'],
    sku: '09-017'
  },
  {
    id: 78,
    links: ['https://images-na.ssl-images-amazon.com/images/I/91KyDFHbzRL._SL1500_.jpg'],
    sku: '09-018'
  },
  {
    id: 79,
    links: ['https://images-na.ssl-images-amazon.com/images/I/61kiyq6k16L._SL1000_.jpg'],
    sku: '09-019'
  },
  {
    id: 80,
    links: [
      'https://images-na.ssl-images-amazon.com/images/I/81RUd%2BRM1WL._SL1500_.jpg',
      'https://images-na.ssl-images-amazon.com/images/I/81h%2BjiLyEcL._SL1500_.jpg',
      'https://images-na.ssl-images-amazon.com/images/I/81DXqZbgbDL._SL1500_.jpg',
      'https://images-na.ssl-images-amazon.com/images/I/81JPGsySWRL._SL1500_.jpg'
    ],
    sku: '09-020'
  },
  {
    id: 81,
    links: ['https://west-buy-ish.s3.us-east-2.amazonaws.com/images/remingtonRollingBlock.jpg'],
    sku: '12-001'
  },
  {
    id: 82,
    links: ['https://west-buy-ish.s3.us-east-2.amazonaws.com/images/winchester1873.jpeg'],
    sku: '12-002'
  },
  {
    id: 83,
    links: ['https://west-buy-ish.s3.us-east-2.amazonaws.com/images/remingtonRevolver.jpg'],
    sku: '12-003'
  },
  {
    id: 84,
    links: ['https://west-buy-ish.s3.us-east-2.amazonaws.com/images/navyRevolver.jpeg'],
    sku: '12-004'
  },
  {
    id: 85,
    links: [
      'https://west-buy-ish.s3.us-east-2.amazonaws.com/images/winchester1895.jpg',
      'https://ancestryguns.s3.amazonaws.com/2019/08/Winchester-Model-1895-Rifle-CR-Antique002.jpg',
      'https://i.pinimg.com/originals/91/c4/6d/91c46dab0c59b3b1482130c9ddab4dc5.jpg',
      'https://news.guns.com/wp-content/uploads/2013/07/1895_Cut-Away_View.jpg'
    ],
    sku: '12-005'
  },
  {
    id: 86,
    links: ['https://west-buy-ish.s3.us-east-2.amazonaws.com/images/hawkinRifle.jpg'],
    sku: '12-006'
  },
  {
    id: 87,
    links: ['https://west-buy-ish.s3.us-east-2.amazonaws.com/images/sharpsModel.jpg'],
    sku: '12-007'
  },
  {
    id: 88,
    links: ['https://www.riverjunction.com/assets/images/4469/watchchain2-1.jpg'],
    sku: '12-008'
  },
  {
    id: 89,
    links: ['https://images-na.ssl-images-amazon.com/images/I/61XZS0IikiL._SL1000_.jpg'],
    sku: '12-009'
  },
  {
    id: 90,
    links: ['https://www.riverjunction.com/assets/images/5188/snuffbox-1.jpg'],
    sku: '12-010'
  },
  {
    id: 91,
    links: ['https://www.riverjunction.com/assets/images/5300/billyclub-2.jpg'],
    sku: '12-011'
  },
  {
    id: 92,
    links: ['https://www.riverjunction.com/assets/images/5227/powderflask-1.jpg'],
    sku: '12-012'
  },
  {
    id: 93,
    links: ['https://www.riverjunction.com/assets/images/5129/headstall-1.jpg'],
    sku: '12-013'
  },
  {
    id: 94,
    links: ['https://cdn.shopify.com/s/files/1/0010/5578/4988/products/header_87a470f0-0bc0-4e36-8e7a-91b078938b1a.png'],
    sku: '12-014'
  },
  {
    id: 95,
    links: ['https://images.fineartamerica.com/images-medium-large-5/american-western-buffalo-randall-nyhof.jpg'],
    sku: '12-015'
  },
  {
    id: 96,
    links: ['https://west-buy-ish.s3.us-east-2.amazonaws.com/images/horandy405.jpg'],
    sku: '12-016'
  },
  {
    id: 97,
    links: ['https://west-buy-ish.s3.us-east-2.amazonaws.com/images/horandyAmmo.jpg'],
    sku: '12-017'
  },
  {
    id: 98,
    links: ['https://www.midsouthshooterssupply.com/images/product_images/002-ac1597at/002-ac1597at.jpg'],
    sku: '12-018'
  },
  {
    id: 99,
    links: ['https://www.hearthsong.com/medias/sys_master/images/images/h2f/h9d/11263043371038/730001-HSHO14-CV-01-191-merged.jpg'],
    sku: '12-019'
  },
  {
    id: 100,
    links: ['https://west-buy-ish.s3.us-east-2.amazonaws.com/images/finger-gun.png'],
    sku: '12-020'
  }
];

module.exports = inventory;
