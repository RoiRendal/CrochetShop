import React, { useState } from 'react';
import { ShoppingCart, Plus, Minus, Trash2, Home, Package, Heart, Info } from 'lucide-react';

const Crochetshop = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [previewImage, setPreviewImage] = useState(null);


  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'keychain', name: 'Keychain' },
    { id: 'bag', name: 'Bag' },
    { id: 'flowers', name: 'Flowers' },
    { id: 'dolls', name: 'Dolls' },
    { id: 'home', name: 'Home Decor' }
  ];

  const products = [
    // Keychains
    {
      id: 1,
      name: 'Head Doll',
      price: 70,
      image: 'https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/565635661_790466757073039_7744092785964981668_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGAPiNzsIIq-CDxKGdEZS-CAJCtMtLuvmQAkK0y0u6-ZJKv64Yr1wafKF8fqkhV65jleoxQLmQfDoOXRe6Tqv87&_nc_ohc=G66QQFFlMfEQ7kNvwF7g-bk&_nc_oc=AdlVUjMk-1xQ_J1baMiGJ7iy5SwLl5dHXM01eK1NsbOH-H_P8bA4Zxeewt4pFCHPMvc&_nc_zt=23&_nc_ht=scontent.fmnl17-3.fna&_nc_gid=bZ1tpDOpjKtUF_SxBs7m8Q&oh=00_AflyJzHAqZ21L7n_mYEyz8u9LUy64fKl-R6--7Wv0i8uuw&oe=6948A288',
      description: 'Cute handmade doll keychain',
      category: 'keychain'
    },
    {
      id: 2,
      name: 'Couple Coffee Tumbler',
      price: 95,
      image: 'https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/491961672_650031687783214_1596306407394663306_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHbDqF6K9L_trP0J9agfBXO5xBkN1BMaZPnEGQ3UExpk8MVmwTxcGzbklo3AzBCg0TQDNqyqyrSgCktiiL-okYu&_nc_ohc=e2PhLq2YuGsQ7kNvwGL8ELU&_nc_oc=AdkOG5s85uUw9TJl2KQzjmb1tSbYYDYLRvWugUJL-m_hla83dPlwry0Ss8RDd_X2lUA&_nc_zt=23&_nc_ht=scontent.fmnl17-3.fna&_nc_gid=Ri1z8MdMsRdlYAXjknUjrg&oh=00_AfnpWnHZ0UFHRCXNHciytyLw0rW4g31GLt6HqDgOwTjKKQ&oe=69488F39',
      description: 'Adorable couple coffee tumbler keychain',
      category: 'keychain'
    },
    {
      id: 3,
      name: 'Mushroom Bunny, Cat, Bear, Duck',
      price: 50,
      image: 'https://scontent.fmnl17-8.fna.fbcdn.net/v/t39.30808-6/474464512_586276350825415_7489003336498734999_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFpWTTNwNwyywvRrB5CIzg3L63xjMzjgkUvrfGMzOOCRTncX9T6Kucn0Jv2qMwAcwW0NV6ynteIkJjXmV5y3cG5&_nc_ohc=s6BrStwRBCIQ7kNvwE4Xlww&_nc_oc=AdlHSTvWvqXmUJdf30273yo1lUAjFHu9-DNrQJTQFjmYTOwApLQCUDSCjjPOCm0s4hc&_nc_zt=23&_nc_ht=scontent.fmnl17-8.fna&_nc_gid=byn4mMMNjETRGG1mcyihvQ&oh=00_AfnxKoKnOia13aoNcz2tozw5rRtZilkYCNEpcuG-6uoEvg&oe=6948A59F',
      description: 'Cute animal keychains you’ll instantly love',
      category: 'keychain'
    },
    {
      id: 4,
      name: 'Avocado',
      price: 75,
      image: 'https://scontent.fmnl17-1.fna.fbcdn.net/v/t39.30808-6/475745554_594424923343891_641408687416875699_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHvMhNzvUXVT-nL46AedEY5APgusMAdrLQA-C6wwB2stAIR4DlaoyxM4BDuj9yL-6bS9m6EIrfVi6tRD3JBhU7D&_nc_ohc=XzjtwuNjhnoQ7kNvwEFvBG7&_nc_oc=Adl4jdXOCtPBCGCqvURoykafmjL196uwsxr3f95DY6m69Ak55hv8EJEa8pY1sPiqe3w&_nc_zt=23&_nc_ht=scontent.fmnl17-1.fna&_nc_gid=fAhRmSbBHpg_bwlwjRDvPA&oh=00_Afkm1fo7NgffraER6tkOaORfwSfvz4VasP1HicGODMoq-w&oe=6948A4B2',
      description: 'Smiley avocado crochet keychain',
      category: 'keychain'
    },
    {
      id: 5,
      name: 'Strawberry',
      price: 80,
      image: 'https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/474975860_590185707101146_8820157366693266428_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGrECJ7_VuNMRDOkWU7sR1xiNT2DQzOIrOI1PYNDM4iszuBM1W_X0Ox6A4fijezD4KzmDX0_N-aZ2XYsu1kFciE&_nc_ohc=PVjBaDz_7CgQ7kNvwGGX8Wa&_nc_oc=AdntvpUoguGMgjTUnwVyhNPYlp3PTSRRd9L7XzQs5aPa3WBWKBSy4Hv10Pcz8BvrYIQ&_nc_zt=23&_nc_ht=scontent.fmnl17-3.fna&_nc_gid=k9K5glVBaUtmOSIunyO1Xw&oh=00_AfnXghCC09IWINOsOZ1jNp6BZArL5L7rpACgxYL2lxhUTw&oe=694894EE',
      description: 'Bright and cute strawberry keychain',
      category: 'keychain'
    },
    {
      id: 6,
      name: 'Tulip',
      price: 45,
      image: 'https://scontent.fmnl17-1.fna.fbcdn.net/v/t39.30808-6/476227496_594413773345006_7296401696684605533_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHZ8mh8I1pfe1sm2WZ7TndUUUfQeHCSklJRR9B4cJKSUvsqYAeieXlLKgfa1QEyMBiOjXQva_i9g7HjGcdtbpbC&_nc_ohc=rBu41Oe-ZPMQ7kNvwF2dyUh&_nc_oc=AdkBTjUBLU2aPN4kchhDRUX2q0lxuujxtye53zqcJtTwPTNIhKTfusPu6Yf9dB0qDjE&_nc_zt=23&_nc_ht=scontent.fmnl17-1.fna&_nc_gid=7TRy86oMznMBHpT5ivvbMg&oh=00_AflfQF-GBTP7Mm7ZOCUYbZWuBXalLKOAEmmsknylJSs9dQ&oe=6948AB50',
      description: 'Minimal floral tulip keychain',
      category: 'keychain'
    },
    // Bags
    {
      id: 7,
      name: 'Sunflower Tote Bag',
      price: 260,
      image: 'https://scontent.fmnl17-4.fna.fbcdn.net/v/t39.30808-6/473284306_581625167957200_5700097676693809874_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHI2Gx76HOjrB7Fk0mlhV6tw06tP3XeA_bDTq0_dd4D9k8mnzbSPECFp92Z3weNaMuFQrAhDKKjC0qZW0eN3WIK&_nc_ohc=70XnPGNuNbEQ7kNvwF0YFJV&_nc_oc=AdlzZd3wWR5i8_73ro9t5jGO_KywA37pj1V8TVBy2KrC-Dt7pdW0yv7bm8yZugZ642g&_nc_zt=23&_nc_ht=scontent.fmnl17-4.fna&_nc_gid=Ym0LVmac-fPOyzIsM3lx5Q&oh=00_AfnXZaL26kDKQqlBGgQeoYGNPPBeHxdcAE2vZGJ4lmjXzA&oe=6948AC48',
      description: 'Handmade crochet tote with sunflower design',
      category: 'bag'
    },
    {
      id: 8,
      name: 'Two-way Net Bag',
      price: 350,
      image: 'https://scontent.fmnl17-4.fna.fbcdn.net/v/t39.30808-6/497573654_669093032543746_2592250870132636372_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEcAbXtWEKTStoPUq3JU1Rqk5vtbfN1ZlGTm-1t83VmUaLUjoI4W585K4eV4Lg5hQAxPIa1Hne4ixmhEKcns0SA&_nc_ohc=FYGaduaVK6EQ7kNvwFxCaYJ&_nc_oc=Adnh_SBGBwMq0k6CI5H2wnYX6Y9m5qfFyEzPtBZWeTo5hjQhVz-nXSWbqMjwrZ4lVNc&_nc_zt=23&_nc_ht=scontent.fmnl17-4.fna&_nc_gid=6g_0wTc726X4u4kd33bMzA&oh=00_AfmQtfhAmNBA4sJVt-Md0Uh74j5_eWxLJMGqfFcJJXScCw&oe=6948ABD4',
      description: 'Lightweight crochet bag for everyday use',
      category: 'bag'
    },
    {
      id: 9,
      name: 'Hello Kitty Bag',
      price: 245,
      image: 'https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/542067835_752443560875359_135588584051781785_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHOVgBQkn_1I_B2Xlnxh575fOR9mxINmCt85H2bEg2YK2uhpyHu4be1M613Rd2XSLNSITijTDE2ejLEoyZeeQib&_nc_ohc=y_igqvfqkI8Q7kNvwEKMUT_&_nc_oc=AdnEUz7v2V5ezuC_zz03Ctp47i6btaXBaUfZXzT7oQCoRo2Hw6kpVEi853MT7D0k2Zo&_nc_zt=23&_nc_ht=scontent.fmnl17-2.fna&_nc_gid=Ne8kgHgB9MNd9ml-AOFRGg&oh=00_Afmi3ew-laVLLpIl1v5exCe72Fnu1H7nyl-Fqb7ypEX-OQ&oe=694890BF',
      description: 'Cute handmade crochet crossbody bag',
      category: 'bag'
    },
    // Flowers
    {
      id: 10,
      name: 'Tulip Bouquet',
      price: 199,
      image: 'https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/470218564_562318413221209_7923734604631195269_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeH7L7thMcRAUuzABDHzSsNlYcohPPV7SiFhyiE89XtKIQh1T-GvvtfoGGl1IUmSBv-YFmEEaJArW-OfcNXGMKKH&_nc_ohc=jZg5AWAxC3IQ7kNvwFXPnQT&_nc_oc=AdmYo2OeiNONyUGguRoXBBVU6g5oxpZsz6wNsz-E2tPEyB0seaH4Vxu1alrGn1Cj_eA&_nc_zt=23&_nc_ht=scontent.fmnl17-3.fna&_nc_gid=5eWbhlEkEdpyK2WVeQ996Q&oh=00_AfkS_KGwcru_N05FFuVphEqEIBZeinGUj3baE1ZRkDSBuw&oe=69489CBF',
      description: 'Simple and Elegant Bouquet',
      category: 'flowers'
    },
    {
      id: 11,
      name: 'Sunflower',
      price: 150,
      image: 'https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/470248067_562318726554511_3193836811900895505_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHD4s03k2-95ayJJCddAiQpg8_QxHdPW8WDz9DEd09bxQoZG_h60fWxBl2GYmuBTHJ5Nw_41zXQc9C4_nmqJew_&_nc_ohc=N2632MQ2JAcQ7kNvwE0Kgpj&_nc_oc=AdnvW1Gy9Oo7o7WTGO0-ODyKvnM0MJDRn8KZJH3oE7XEt4yNtEGsQ_VL0buv4iYggQw&_nc_zt=23&_nc_ht=scontent.fmnl17-2.fna&_nc_gid=_CF5UU_ti8FzeWyB5YUTgA&oh=00_Afmr_eUDO4XS1Ct_RWWCQEeQrpSPCUos2QS1u980qcV-oQ&oe=69489C96',
      description: 'Single crochet sunflower flower',
      category: 'flowers'
    },
    {
      id: 12,
      name: 'Customized Bouquet',
      price: 345,
      image: 'https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/470990496_564961316290252_1091389037680661089_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGoZ9X9HK2FHs_EMqNKUFs3yBvYUwgJU-vIG9hTCAlT61m5E-IuYG8YpMlm3tVo0B8GWc3LpFg5mlUipqx5m_sg&_nc_ohc=lIF5-6sIGaIQ7kNvwEQYL1E&_nc_oc=AdldL0gRTntoJ4Tk0WrYX4sw5X03IQt2idw5vXwWlbay2YLCDLw3CbO7d7KdRcme_Ks&_nc_zt=23&_nc_ht=scontent.fmnl17-2.fna&_nc_gid=euInZ4Lf4l44IF4vqvfaJw&oh=00_AfnXLEo0OwjgwpbljXJ0viZg-Ic_GA3nGbQQeBOh9QJmqQ&oe=6948B91E',
      description: 'Colorful, personalized bouquet',
      category: 'flowers'
    },
    {
      id: 13,
      name: 'Mixed Flower',
      price: 375,
      image: 'https://scontent.fmnl17-8.fna.fbcdn.net/v/t39.30808-6/475751234_594436136676103_2360089220938487264_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFdli5PtsCZSOyd2Hf6iEKN9BGr9MbWD_T0Eav0xtYP9PW9JXTxFQo9G6tgqsXLcwVaWXlPKjGfij-pt9y9sR2o&_nc_ohc=jvodPM-NcJ8Q7kNvwF9hxK2&_nc_oc=AdmVGmQx9JQ2fZ-rwyg-6Fxa3zGr05CBNiBEi9THT1oMMFkf5ODLwVAZMcQIJNnNiz4&_nc_zt=23&_nc_ht=scontent.fmnl17-8.fna&_nc_gid=lpumKtHUCcM8MxGNy6gbnw&oh=00_Afnts4A3TZ51dafs8N2u8qVHD39mTClIt-_M-VVX-6FNqA&oe=69489B8D',
      description: 'Colorful mixed crochet flower bouquet',
      category: 'flowers'
    },
    {
      id: 14,
      name: 'Rose Bouquet',
      price: 250,
      image: 'https://scontent.fmnl17-5.fna.fbcdn.net/v/t39.30808-6/475995083_595075259945524_5078676978394178373_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHcUk4uMHlSpW-iRETmezl9XiwZGvxk6CReLBka_GToJLsvriXdq7MLt46FpxWzlQ3y0SKkdFNfNCap6LBmw5RY&_nc_ohc=V3nnbAJDS5kQ7kNvwHtpv3c&_nc_oc=Adm67yo431EAYETsE3UkHzInbmZ8ysq4M3dtK2D7lLae4xhUM2AERy0IYHsAy7dUAhI&_nc_zt=23&_nc_ht=scontent.fmnl17-5.fna&_nc_gid=RldKXRMdRwXEsZzOopTQfw&oh=00_AfmlzxYnS2ljgHpzz1ORnzT0RAslETI6ttpRbep0vVStJg&oe=6948A5FF',
      description: 'Romantic crochet rose bouquet',
      category: 'flowers'
    },
    {
      id: 15,
      name: 'Gumamela',
      price: 440,
      image: 'https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/480169643_602718939181156_1644268143302850798_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeG4X__cRM5a1d_rltaIZyuKNM-RcwZtjTM0z5FzBm2NM0Gbm6OCpe33Viho6XA9skmw7AlH6I4d8dzEQmKfEPFi&_nc_ohc=6N9AkZGmWlQQ7kNvwEFflDG&_nc_oc=AdkUgykZzhhryhTKQ7rtVbMUKhY3TmUXqSVDP8YdSWkOlGd67UtIlSPIYFNDIlyogDI&_nc_zt=23&_nc_ht=scontent.fmnl17-3.fna&_nc_gid=-ZaoWoJM19Bh-jBdQeyAUQ&oh=00_Afn4rMwauoSglBtF4tde8qkCEov8B6dG3apBAR2gDuTGuQ&oe=69488C0E',
      description: 'Unique handmade gumamela flower',
      category: 'flowers'
    },
    // Dolls
    {
      id: 16,
      name: 'Mine Me Doll',
      price: 299,
      image: 'https://scontent.fmnl17-6.fna.fbcdn.net/v/t39.30808-6/474073232_584838730969177_8281807380424125719_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEKbTCytgNpQBwTstjFadP7hc0PpJ7hK_aFzQ-knuEr9h0dFg05NhGQz29UwHPJiQ1COL4oVYqTOwf3XLYX1T2N&_nc_ohc=_YKO6FU7OowQ7kNvwECclsC&_nc_oc=AdktddKDeVFFsQ4qjFRozYiI_tSMy65NL9K4mA0yiM42m9-T9W9OuET9YXQTufvUfaE&_nc_zt=23&_nc_ht=scontent.fmnl17-6.fna&_nc_gid=eXrXZTwcqvuxlNUuGWFnaw&oh=00_Afl4_6Wm04ZzlZd4Zn_DBrOUrzBiueTWJJEUwhPvd4bPQA&oe=69488998',
      description: 'Adorable handmade crochet doll',
      category: 'dolls'
    },
    {
      id: 17,
      name: 'Cat in a red Coat',
      price: 399,
      image: 'https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/476115032_595253896594327_7706425454068201750_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGbd-0RodeY2eVO--x3dSvWEPzXi9jMgikQ_NeL2MyCKStKNEL_Y4-boR86LiH6uZifpLfXSjCB5BjDRq3Bh3_E&_nc_ohc=raTTEyzn1TYQ7kNvwH86wp3&_nc_oc=AdnfDX4agU6lgXNKIm-6DmN5EW0CtoIdfKOa5M01b-b-SXprPrC81kiwmA6-FFu1vsQ&_nc_zt=23&_nc_ht=scontent.fmnl17-2.fna&_nc_gid=lgmZo4EUI45xZTW2RE6wBA&oh=00_AflNxgoNejHfYGtEAo4pPLW_o0oHMOOUJYGsegRys6XMhg&oe=6948950E',
      description: 'Cute crochet cat with red coat.',
      category: 'dolls'
    },
     {
      id: 18,
      name: 'Couple Doll',
      price: 499,
      image: 'https://scontent.fmnl17-6.fna.fbcdn.net/v/t39.30808-6/476081092_596829949770055_5512834235438501731_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeG5dV654aHogueJ8j-quKFPvFcHEIOBdz-8VwcQg4F3Pxo0vO9FHt2fLjnSBOINJCHggsxbo2Sby_1MwboDC5Qa&_nc_ohc=EEOR4H5p2rAQ7kNvwGnnEd5&_nc_oc=AdmBEXDzJlYLVpgkxp-aTkUzd0RWqcHX-2znNFPFAJNn0ppIcIdxk27LAh497HbiecQ&_nc_zt=23&_nc_ht=scontent.fmnl17-6.fna&_nc_gid=FP2lIyrWsqJxBUEWF4ezxg&oh=00_AflpCbeIH0JFT6496Up3Tb0V1AFiF4n3SzbEyIAM7ctzdQ&oe=6948ADFF',
      description: 'Handmade crochet couple dolls.',
      category: 'dolls'
    },
    // Home Decor
    {
      id: 19,
      name: 'Mini ChristMas Tree',
      price: 299,
      image: 'https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/589816187_823487850437596_6655121790550885330_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeERklAE9CfThJsKLEIFZn7aFjtHiKimu-MWO0eIqKa7405dDsI1OtpaB1Jp04_-5Lq3JQwSKeLZiMxdM1T0jhsM&_nc_ohc=aY1fN2tn44IQ7kNvwGmXBOO&_nc_oc=AdmFeVmMIfUzqBM8gz5ZAhGXdfSuw7cmVFJ6DekPkdLrkNJGL0TsiHvAQn6Mqlb_u6k&_nc_zt=23&_nc_ht=scontent.fmnl17-2.fna&_nc_gid=HTvTrnAk88xse1av7ZqvFA&oh=00_Afnpr71xR5xTV6mFpTbmmWKz5cpUEJDDVYUPxnmSoLA5RQ&oe=6948A391',
      description: 'Mini crochet Christmas tree decor',
      category: 'home'
    },
    {
      id: 20,
      name: 'Lily of the Valley',
      price: 379,
      image: 'https://scontent.fmnl17-8.fna.fbcdn.net/v/t39.30808-6/473788128_584847180968332_6382969773454493345_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGHkONVmjHS_6MEbLMVvJ6w2GB13OEMHEjYYHXc4QwcSMXbndOnStmBq6G24UAZfDxbVyIHE3tiOK3-C1Up1ojf&_nc_ohc=raxI5QnnWFMQ7kNvwFssI-b&_nc_oc=AdmEJjyfF6WlbJ3K90hgA-mA6i96sHLOB5O-P02vZxw8LF-H0VY7OT-QU_GvxOBCWYg&_nc_zt=23&_nc_ht=scontent.fmnl17-8.fna&_nc_gid=RSGPWRMKpVtna5G4_JfnCg&oh=00_Afk8IbpURxa18pFjNoubk6Ltlr6U7AdQb23AHnMx23pYFw&oe=694894E9',
      description: 'Crochet lily of the valley plant decor',
      category: 'home'
    },
     {
      id: 21,
      name: 'Cactus Plant',
      price: 249,
      image: 'https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/473740046_584847317634985_8182452163554876780_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGLvhJMVTiCbtGzysFQB4nvZzibu32U9EBnOJu7fZT0QLV4dDI_OWXmO77BP-_Pox8tpX-nLR0GhDSm5WmQjqSw&_nc_ohc=ZcNLDnFOkVMQ7kNvwGWMQL8&_nc_oc=AdnaUT6ywokTf7FaemHqGTz3KOaUS4A2RfOimQXL07p4jVv5c00_-Vid0_CEsx03OtY&_nc_zt=23&_nc_ht=scontent.fmnl17-3.fna&_nc_gid=tZFBcX4cbmUP720vbPzK2w&oh=00_AfnZMZ5Bxpwc04R-7jOnCRSe4uBDqHUg7Lfhs3CXHLBqgw&oe=6948A777',
      description: 'Cute crochet cactus home decor',
      category: 'home'
    },
     {
      id: 22,
      name: 'Snake Plant',
      price: 279,
      image: 'https://scontent.fmnl17-6.fna.fbcdn.net/v/t39.30808-6/473785069_584847370968313_8469840169187263033_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeF66bSXMcSEEuBU_Lh9cmtlIwmpijxQXy4jCamKPFBfLgASQ4XmRHCyw9qpk4Oj6RYQqTGxULvl_tWNzUtVp-SX&_nc_ohc=otX45MNuLdMQ7kNvwELzaBl&_nc_oc=AdkuUy8lRvUJ7vTcmiEkXuVGjMRBm5d1CMOuJtaMsSpi7DymrbvBaYzntL7ZtVg4Fxw&_nc_zt=23&_nc_ht=scontent.fmnl17-6.fna&_nc_gid=Cw15_wjeBe3yl455WVzrnQ&oh=00_AfnWTLVfv90ZZIuyLhndPViW9hsAFLtsM9L_58JY-j_iOQ&oe=69488F0C',
      description: 'Handmade crochet snake plant decor',
      category: 'home'
    },
     {
      id: 23,
      name: 'Rose Plant',
      price: 299,
      image: 'https://scontent.fmnl17-5.fna.fbcdn.net/v/t39.30808-6/475465327_595075269945523_1882142910775253978_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHAyMfViP1c9Mn8fEGR1kQQjq50ckY-SUCOrnRyRj5JQFpPTsBCEK3xh5f3WDHBZXWNObvATuFjmlFn9Ab3Se6W&_nc_ohc=Z4jBPxCOQZ8Q7kNvwHD49fQ&_nc_oc=AdnF1E_BkU88ulnhg6hTvtlXFhGT_RNOseN96PdAQeDH2TMRCtprSJjlD378vGCbQRI&_nc_zt=23&_nc_ht=scontent.fmnl17-5.fna&_nc_gid=Dqdja8DaZc0B_Rs6cRM6HQ&oh=00_Afmkj93dWr8Z-Nuc4jiUablpZSAXZlY2tHypE_0HNB9Zyw&oe=6948B7ED',
      description: 'Elegant crochet rose plant decor',
      category: 'home'
    },
     {
      id: 24,
      name: 'Tulip, Rose, Sunflower, Daisy',
      price: 480,
      image: 'https://scontent.fmnl17-4.fna.fbcdn.net/v/t39.30808-6/482033494_618643594255357_2916722822126668665_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeH9vatwvN_8X5WdPvwpZWw21ov4_g3DzpvWi_j-DcPOm5uBraKCZP71zEmWNBELareBtW1rQkZW3Vx39pooI7av&_nc_ohc=6Vkssp4Atq0Q7kNvwGgyZiw&_nc_oc=AdnDNXV367EgB6-2oUBjak9Xihj59j7cPoY0iDMUUdDS9LlhekAs5m5gdIslGA1xgjU&_nc_zt=23&_nc_ht=scontent.fmnl17-4.fna&_nc_gid=-VSbNBsHVVrxAVUrlbsUFQ&oh=00_AflgD17IgjGjQR_wNJYrENiD6O29hpzecS-nPutSaNI5uw&oe=694896AD',
      description: 'Crochet flower light decor',
      category: 'home'
    },
  ];

  const addToCart = (product) => {
    const exists = cart.find(item => item.id === product.id);
    if (exists) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, delta) => {
    setCart(cart.map(item => {
      if (item.id === productId) {
        const newQuantity = item.quantity + delta;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const toggleFavorite = (productId) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter(id => id !== productId));
    } else {
      setFavorites([...favorites, productId]);
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

 const renderHome = () => {
  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter(p => p.category === selectedCategory);

  return (
    <div className="space-y-10">

      {/* HERO */}
      <div className="bg-gradient-to-r from-pink-200 via-pink-300 to-pink-400 rounded-2xl p-10 text-center shadow-lg">
        <h2 className="text-4xl font-bold text-pink-900 mb-3">
          Handmade Crochet Store
        </h2>
        <p className="text-pink-800 text-lg">
            Every purchased makes a big difference🌷
        </p>
      </div>

      {/* CATEGORY FILTER */}
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              selectedCategory === cat.id
                ? 'bg-pink-600 text-white shadow-lg scale-105'
                : 'bg-pink-50 text-pink-700 hover:bg-pink-200'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* PRODUCTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <div
            key={product.id}
            className="bg-gradient-to-b from-pink-50 to-white rounded-2xl shadow-md hover:shadow-xl transition-all"
          >
            <div className="relative">
             <img src={product.image} alt={product.name}
               onClick={() => setPreviewImage(product.image)}
               className="w-full h-48 object-cover cursor-pointer hover:opacity-90 transition"/>

              {/* HEART */}
              <button
                onClick={() => toggleFavorite(product.id)}
                className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-pink-100"
              >
                <Heart
                  className={`w-5 h-5 ${
                    favorites.includes(product.id)
                      ? 'fill-red-500 text-red-500'
                      : 'text-gray-400'
                  }`}
                />
              </button>
            </div>

            <div className="p-4">
              <span className="text-xs font-semibold text-pink-600 uppercase">
                {product.category}
              </span>

              <h3 className="font-bold text-lg mt-1 mb-2 text-gray-800">
                {product.name}
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                {product.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-pink-600">
                  ₱{product.price}
                </span>

                <button
                  onClick={() => addToCart(product)}
                  className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-4 py-2 rounded-lg transition-all flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

  const renderCart = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Shopping Cart</h2>
      
      {cart.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-12 text-center">
          <ShoppingCart className="w-16 h-16 mx-auto text-gray-300 mb-4" />
          <p className="text-gray-500 text-lg">Your cart is empty</p>
          <button
            onClick={() => setCurrentPage('home')}
            className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map(item => (
              <div key={item.id} className="bg-white rounded-lg shadow-md p-4 flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-800">{item.name}</h3>
                  <p className="text-gray-600">₱{item.price}</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-bold text-lg w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg text-gray-800">₱{(item.price * item.quantity).toFixed(2)}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 mt-2 flex items-center gap-1 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-gray-700">Subtotal ({getTotalItems()} items)</span>
              <span className="text-2xl font-bold text-purple-600">₱{getTotalPrice()}</span>
            </div>
            <button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-lg font-semibold transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );

  const renderFavorites = () => {
    const favoriteProducts = products.filter(p => favorites.includes(p.id));
    
    return (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">My Favorites</h2>
        
        {favoriteProducts.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <Heart className="w-16 h-16 mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500 text-lg">No favorites yet</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteProducts.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 text-gray-800">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-pink-600">${product.price}</span>
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  const renderAbout = () => {
    return (
      <div className="space-y-8">
        {/* Hero Image Section */}
        <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/409748784_327758506677202_5364427907384602801_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEBxgHPJZ7YfyOhYqB-X4G-hTcZAiM610OFNxkCIzrXQxvCZd_qj8jl5xX8KmrdZBrDVLfjuWAyJ1WeAQOGCRur&_nc_ohc=1XNBvc17QKgQ7kNvwFiDL7t&_nc_oc=AdlQuecj169LKcMvgr72JRYakJo_QVY9TmIAWdM4I4T0BMhWbFgy9b_SnYcefWQOY8s&_nc_zt=23&_nc_ht=scontent.fmnl17-2.fna&_nc_gid=8k2R_Oh3OSt-WRQ3-KmlVg&oh=00_AflmaM4s6Jn5F2fTJaJNZSOEoNn7ex_bSrqNNQjq8yfEiA&oe=694881CB" 
            alt="Crochet Workshop" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h2 className="text-5xl font-bold mb-2">About JhenTsilyo</h2>
              <p className="text-xl">Handcrafted with Love Since 2022</p>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-pink-700 mb-4">Our Story</h3>
            <p className="text-gray-600 mb-4">
              JhenTsilyo started as a passion project, creating unique crochet pieces that bring joy and warmth to people's lives. Every stitch is made with care, love, and attention to detail.
            </p>
            <p className="text-gray-600 mb-4">
              What began as a hobby has grown into a small business dedicated to creating handmade treasures. From adorable keychains to cozy blankets, each piece tells a story of craftsmanship and dedication.
            </p>
            <p className="text-gray-600">
              We believe in sustainable, eco-friendly crafting, using quality yarns and materials to ensure every product is built to last and bring happiness for years to come.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-pink-700 mb-4">Why Choose Us?</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">100% Handmade</h4>
                  <p className="text-sm text-gray-600">Every piece is carefully crafted by hand</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Quality Materials</h4>
                  <p className="text-sm text-gray-600">Premium yarn and sustainable supplies</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Unique Designs</h4>
                  <p className="text-sm text-gray-600">One-of-a-kind pieces you won't find elsewhere</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Made with Love</h4>
                  <p className="text-sm text-gray-600">Each item carries our passion and care</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-pink-700 mb-6">Our Creations</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/473955718_584847264301657_9035647587932565751_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHHjOOS3iULo-JBmDEubOAyK4jKOcPx_7griMo5w_H_uNyVoyPJWqLTew9IIrEGyvBPTDtb4GW20wVApx9TFoea&_nc_ohc=knRXelv9bBAQ7kNvwGM4szJ&_nc_oc=AdnVvsPidUFQiXaOpvw08fevCH9DqVJ8n3QIrW-yufh8TouLK3SD7W1GUIEuMHPQPjE&_nc_zt=23&_nc_ht=scontent.fmnl17-3.fna&_nc_gid=YSJGiZq4un-DSfPaBPzBsQ&oh=00_Afn5RiO0gfj0s_F6nvKh9J-L8cwtU4v2OThpYTcLJoReYg&oe=6948B714" 
                alt="Crochet work" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://scontent.fmnl17-5.fna.fbcdn.net/v/t39.30808-6/473755570_584469141006136_2534158682205364679_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGqAaFc7qjD-3j0oup-i8sXvP5bVuZYRF68_ltW5lhEXhtT6B1mEJWaOtn90a50110L3Xx8l9ADC-lRdgveCt-0&_nc_ohc=ijzwEozxceMQ7kNvwEhmonv&_nc_oc=AdnlB5DVKB_9ep-W3iDarNPXyCczv9TFRxMQAs3VQFRVUOz_TJu1F40GvfzolnvKL14&_nc_zt=23&_nc_ht=scontent.fmnl17-5.fna&_nc_gid=2iD-2BPa9k8gmyuWXFhXrw&oh=00_AfnsrXoXGC5QBEL0YlqWYT1XjGN3BxImpuP8v4Tqp8Mc4A&oe=6948843A" 
                alt="Crochet work" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/578976520_811336971652684_2989842213932590547_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEbTfsXlFFaBY9b5K4iorbH7U2A0g4hbXvtTYDSDiFtexhRbr3UH8DlPE86eqA5eJlklod5YFpE1OgnE5Fsu--N&_nc_ohc=rH9IlxxiyrgQ7kNvwEVWbPp&_nc_oc=AdmaCyJcjIQrkcDpjxVOVCTuwBe-v1dbzjZya36l7xgQhUEd_aVjuX1e01PzRyRtax8&_nc_zt=23&_nc_ht=scontent.fmnl17-3.fna&_nc_gid=7NisfcHVQEh2z8AotfF-Uw&oh=00_AflwWqF4aTC9G-7PjNW1E3IOxunBhDdyH6eare7ka5__VQ&oe=6948B2BE" 
                alt="Crochet work" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://scontent.fmnl17-1.fna.fbcdn.net/v/t39.30808-6/475807379_595076699945380_7232034767607750905_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGp2VX9mbmnoN_ufe-JbgehuzhuXoTHxnu7OG5ehMfGe4_2W7tv8GQXW1SoPyKyMMRO0p8cWl5dL9hk-iPkCeSi&_nc_ohc=xmRTmnIL1b4Q7kNvwHBVRFd&_nc_oc=AdkyxBoO9XNWA0Zs3LjQosSY30e4OoZK1rtStOxbLdtvRwxmapUKqhbwKhgjSdPdQ4c&_nc_zt=23&_nc_ht=scontent.fmnl17-1.fna&_nc_gid=z5r5KYWkrb0TrCMD0d4OJA&oh=00_Afn1K6Or_0-zMutdwfxD_5TBkRfBgBfK2or7CLpupssegA&oe=6948ABC6" 
                alt="Crochet work" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-pink-700">JhenTsilyo</h1>
            <div className="flex gap-6">
              <button
                onClick={() => {
                  setCurrentPage('home');
                  setSelectedCategory('all');
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  currentPage === 'home' ? 'bg-purple-100 text-purple-700' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Home className="w-5 h-5" />
                Home
              </button>
              <button
                onClick={() => setCurrentPage('about')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  currentPage === 'about' ? 'bg-purple-100 text-purple-700' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Info className="w-5 h-5" />
                About
              </button>
              <button
                onClick={() => setCurrentPage('favorites')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors relative ${
                  currentPage === 'favorites' ? 'bg-purple-100 text-purple-700' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Heart className="w-5 h-5" />
                Favorites
                {favorites.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {favorites.length}
                  </span>
                )}
              </button>
              <button
                onClick={() => setCurrentPage('cart')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors relative ${
                  currentPage === 'cart' ? 'bg-purple-100 text-purple-700' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <ShoppingCart className="w-5 h-5" />
                Cart
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span> 
                  
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
       
        {previewImage && (
       <div
    className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
    onClick={() => setPreviewImage(null)}
  >
    <div
      className="relative max-w-4xl w-full p-4"
      onClick={(e) => e.stopPropagation()}
    >
      <img
        src={previewImage}
        alt="Preview"
        className="w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
      />

      <button
        onClick={() => setPreviewImage(null)}
        className="absolute top-2 right-2 text-white text-4xl font-bold"
      >
        ×
      </button>
    </div>
  </div>
)}


      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {currentPage === 'home' && renderHome()}
        {currentPage === 'about' && renderAbout()}
        {currentPage === 'cart' && renderCart()}
        {currentPage === 'favorites' && renderFavorites()}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-pink-50 via-pink-100 to-pink-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-xl font-bold text-pink-700 mb-4">JhenTsilyo</h3>
              <p className="text-gray-600 text-sm">
                Handmade crochet products crafted with love and care. Each piece is unique and made to bring joy to your life.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => setCurrentPage('home')} className="text-gray-600 hover:text-pink-600 text-sm transition-colors">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => setCurrentPage('about')} className="text-gray-600 hover:text-pink-600 text-sm transition-colors">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => setCurrentPage('favorites')} className="text-gray-600 hover:text-pink-600 text-sm transition-colors">
                    Favorites
                  </button>
                </li>
                <li>
                  <button onClick={() => setCurrentPage('cart')} className="text-gray-600 hover:text-pink-600 text-sm transition-colors">
                    Shopping Cart
                  </button>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Categories</h4>
              <ul className="space-y-2">
                {categories.slice(1).map(cat => (
                  <li key={cat.id}>
                    <button 
                      onClick={() => {
                        setCurrentPage('home');
                        setSelectedCategory(cat.id);
                      }}
                      className="text-gray-600 hover:text-pink-600 text-sm transition-colors"
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Contact Us</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Page: Arts & Crafts Store</li>
                <li>Phone: +63 123 456 7890</li>
                <li>Location: Calaca, Batangas City, Philippines</li>
              </ul>
               <div className="flex gap-3 mt-4">
                {/* Facebook */}
                <a href="#" className="bg-pink-600 hover:bg-pink-700 text-white p-2 rounded-full transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                {/* Instagram */}
                <a href="#" className="bg-pink-600 hover:bg-pink-700 text-white p-2 rounded-full transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                {/* TikTok */}
                <a href="#" className="bg-pink-600 hover:bg-pink-700 text-white p-2 rounded-full transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                {/* Shopee */}
                <a href="#" className="bg-pink-600 hover:bg-pink-700 text-white p-2 rounded-full transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.5 2C5.57 2 4 3.57 4 5.5S5.57 9 7.5 9 11 7.43 11 5.5 9.43 2 7.5 2zm9 0C14.57 2 13 3.57 13 5.5S14.57 9 16.5 9 20 7.43 20 5.5 18.43 2 16.5 2zM7.5 4c.83 0 1.5.67 1.5 1.5S8.33 7 7.5 7 6 6.33 6 5.5 6.67 4 7.5 4zm9 0c.83 0 1.5.67 1.5 1.5S17.33 7 16.5 7 15 6.33 15 5.5 15.67 4 16.5 4zM3 10l-1 10h20l-1-10H3zm9 2c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zm0 2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-pink-300 mt-8 pt-6 text-center">
            <p className="text-gray-600 text-sm">
              © 2022 JhenTsilyo. All rights reserved. Made with <Heart className="inline w-4 h-4 text-red-500 fill-red-500" /> and yarn.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Crochetshop;