const products = [
    {id: '1',
    name: "The Last Of Us",
    price: 3000,
    category: "PS4",
    img:"https://m.media-amazon.com/images/I/51fR72yjSFL.jpg",
    background:"https://i.blogs.es/28d521/the-last-of-us-remastered-review_8pkg.1280/1366_521.jpeg", 
    stock: 8,
    description: "The Last of Us es un videojuego de terror y de acción y aventura desarrollado por la compañía estadounidense Naughty Dog y distribuido por Sony Computer Entertainment. La trama describe las vivencias de Joel y Ellie, un par de supervivientes de una pandemia en Estados Unidos que provoca la mutación de los seres humanos en criaturas caníbales."},
    {id: '2',
    name: "Halo Infinite",
    price: 2500,
    category: "XBOX",
    img:"https://alldigitales.com/wp-content/uploads/2021/11/halo-infinite.jpeg",
    background:"https://fotografias-neox.atresmedia.com/clipping/cmsimages01/2018/12/16/18892029-9CE8-4F2C-962D-62426A7D0968/98.jpg?crop=1349,759,x1,y0&width=1900&height=1069&optimize=high&format=webply", 
    stock: 10,
    description: "Halo Infinite es un videojuego de disparos en primera persona de la franquicia de videojuegos creada por Bungie Studios. Es exclusivo para las plataformas Xbox One, Microsoft Windows y Xbox Series X|S. El juego es secuela de la historia de Halo 5: Guardians y Halo Wars 2 pero catalogado como un reinicio espiritual para la saga Halo."},
    {id: '3',
    name: "CS: Global Offensive",
    price: 2000,
    category: "STEAM",
    img:"https://http2.mlstatic.com/D_NQ_NP_639032-MLA26479587750_122017-O.jpg",
    background:"https://elchapuzasinformatico.com/wp-content/uploads/2019/06/De_Dust-2-Unreal-Engine-4.jpg", 
    stock: 7,
    description: "El juego consiste en dos equipos, los Terroristas y los Antiterroristas (T y CT, respectivamente), los cuales se enfrentan entre ellos en diferentes modos de juego. El modo más común es en el cual el bando Terrorista tienen que plantar y defender una bomba mientras los Antiterroristas defender las zonas de plante de la bomba y su posterior desactivación."},
    {id: '4',
    name: "Uncharted 4",
    price: 3000,
    category: "PS4",
    img:"https://http2.mlstatic.com/D_NQ_NP_982499-MLA46104402669_052021-O.jpg",
    background:"https://www.gamersglobal.de/sites/gamersglobal.de/files/test/teaser/2448/Uncharted4_grafik_2.jpg", 
    stock: 12,
    description: "Uncharted 4 es un videojuego de acción-aventura en tercera persona, distribuido por Sony Computer Entertainment y desarrollado por Naughty Dog exclusivamente para PlayStation 4.​ Es la cuarta entrega de la serie Uncharted. Cronológicamente el juego toma lugar alrededor del año 2014, entre tres y cinco años después de Uncharted 3."},
    {id: '5',
    name: "Gears 5",
    price: 3100,
    category: "XBOX",
    img:"https://store-images.s-microsoft.com/image/apps.10933.65494054591008504.4eae27ba-1cfe-4af2-950a-4af81f8cd22a.b5b2909d-8884-48d0-b25a-68d6518c9b73?w=498&h=408&q=90&mode=scale&format=jpg&background=%23FFF0F0F0&padding=0.0.0.0",
    background:"https://allgamersin.com/wp-content/uploads/2020/11/Gears5_Operacion5.jpg", 
    stock: 3,
    description: "Gears 5 se centra en Kait Díaz (Laura Bailey), una forastera de ascendencia Locust. Como Kait, el jugador debe descubrir los orígenes del Enjambre (Swarm) y la familia de Kait. El protagonista JD Fenix (Liam McIntyre), su amigo Delmont Walker (Eugene Byrd), y el padre de JD Marcus Fenix. (John DiMaggio) también regresan en esta quinta entrega."},
    {id: '6',
    name: "Need For Speed Heat",
    price: 2500,
    category: "STEAM",
    img:"https://rukminim1.flixcart.com/image/416/416/kc9eufk0/code-in-the-box-game/q/m/p/pc-need-for-speed-heat-deluxe-edition-offline-no-cd-no-dvd-original-imaftezgqqnjpf7b.jpeg?q=70",
    background:"https://i.ytimg.com/vi/8jiTNodDe-Y/maxresdefault.jpg", 
    stock: 3,
    description: "Need for Speed Heat es un videojuego de carreras desarrollado por Ghost Games y publicado por Electronic Arts. Es un juego de carreras ambientado en un entorno mundo abierto llamado Palm City, una versión ficticia de la ciudad de Miami. Heat no incluye un ciclo de 24 horas, sino que los jugadores pueden cambiar entre el día y la noche."},
    {id: '7',
    name: "God Of War 4",
    price: 3500,
    category: "PS4",
    img:"https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7",
    background:"https://th.bing.com/th/id/R.9b932187cf0ebf8a4c1761d67a109ac5?rik=sFkbUpxqWpfL0Q&pid=ImgRaw&r=0", 
    stock: 8,
    description: "Han pasado años desde que Kratos tomó su venganza contra los Dioses Olímpicos. Habiendo sobrevivido la pelea final contra su padre Zeus, Kratos vive ahora con su joven hijo Atreus en el mundo de los Dioses Nórdicos, una tierra hostil habitada por feroces monstruos y guerreros. Kratos deberá actuar como mentor y protector de su hijo."},
    {id: '8',
    name: "Rise Of The Tomb Raider",
    price: 2200,
    category: "XBOX",
    img:"https://upload.wikimedia.org/wikipedia/en/2/29/Rise_of_the_Tomb_Raider.jpg",
    background:"https://www.muycomputer.com/wp-content/uploads/2016/01/rise-of-the-tomb-raider-4-1024x576.jpg", 
    stock: 5,
    description: "Rise of The Tomb Raider es un videojuego de acción-aventura desarrollado por Crystal Dynamics. Es la secuela directa de Tomb Raider (2013), triplicando el tamaño total de sus escenarios​ y narra la historia de cómo Lara Croft sigue forjándose y madurando hasta convertirse en la cazatesoros que todos conocemos."},
    {id: '9',
    name: "Forbidden West",
    price: 2800,
    category: "PS4",
    img:"https://image.api.playstation.com/vulcan/ap/rnd/202107/3100/HO8vkO9pfXhwbHi5WHECQJdN.png",
    background:"https://cloudfront-us-east-1.images.arcpublishing.com/infobae/76A3WWNPWRBABKGCF5LA37UKIY.jpg", 
    stock: 9,
    description: "Horizon Forbidden West es un videojuego de rol de acción, y mundo abierto desarrollado por Guerrilla Games y distribuido por Sony, exclusivamente para PlayStation 4 y PlayStation 5. El juego está protagonizado por Aloy, una joven cazadora que viaja al Oeste Prohibido para investigar una misteriosa y mortífera plaga mientras hace frente a otros peligros."},
    {id: '10',
    name: "Cyberpunk 2077",
    price: 3000,
    category: "STEAM",
    img:"https://cdn.cdkeys.com/700x700/media/catalog/product/1/1/111-1119967_cyberpunk-2077-yellow-plain-background-wallpaper-cyberpunk-2077_1.jpg",
    background:"https://compass-ssl.xbox.com/assets/76/74/7674a57a-a2cb-4687-87ab-0d41802a0cb9.jpg?n=Cyberpunk-2077_Sneaky-Slider-1084_Gameplay_1600x675.jpg", 
    stock: 8,
    description: "Cyberpunk 2077 fue desarrollado por CD Projekt, que se lanzó para Microsoft Windows, PlayStation 4 y Xbox One. Siendo una adaptación del juego de rol Cyberpunk 2020, se establece 57 años más tarde en la ciudad distópica de Night City. Los jugadores asumen el papel del personaje personalizable llamado V."},
    {id: '11',
    name: "The Last Of Us 2",
    price: 3500,
    category: "XBOX",
    img:"https://media.vandal.net/m/44223/the-last-of-us-part-ii-20199271734386_1.jpg",
    background:"https://i.blogs.es/89a028/the-last-of-us-parte-ii/1366_2000.jpeg", 
    stock: 7,
    description: "The Last of Us Part II es un videojuego de 2020 desarrollado por Naughty Dog y publicado por Sony para PS4.​ Ambientado 5 años después de The Last of Us (2013), se centra en dos personajes jugables cuyas vidas se entrelazan: Ellie, que busca venganza después de sufrir una tragedia, y Abby, una soldado envuelta en un conflicto entre su milicia y un culto religioso."},
    {id: '12',
    name: "Red Dead Redemption 2",
    price: 2500,
    category: "XBOX",
    img:"https://img.bidorbuy.co.za/image/fetch/c_limit,h_448,q_auto:eco,w_448/https://www.btgames.co.za/pub/media/catalog/product/r/d/rdr2_fob_ps4_sa_fpb_2.jpg",
    background:"https://i.redd.it/x4k3986i39t21.jpg", 
    stock: 8,
    description: "Red Dead Redemption 2, estilizado Red Dead Redemption II, es un videojuego de acción-aventura western basado en el drama, en un mundo abierto y en perspectiva de primera y tercera persona, con componentes para un jugador y multijugador.​ Fue desarrollado por Rockstar Games. Es la precuela de Red Dead Redemption y el tercer juego de la saga Red Dead.​"},
    
]

export const getProducts = () => {
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(products);
        },1000)

    })
}
export const getProductById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => {
                return prod.id === id
            }))
        }, 2000)
    })
}
export const getProductsByCategory = (categoryId) =>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(products.filter(prod => prod.category === categoryId)) 
                
    },1000)

    })
}