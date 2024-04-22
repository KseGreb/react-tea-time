import tea1 from "../Assets/tea1.jpg";
import tea2 from "../Assets/tea2.jpg"
import tea3 from "../Assets/tea3.jpg"
import tea4 from "../Assets/tea4.jpg"


const TypesOfTea = [
    {
        id: 1,
        type: "What is white tea?",
        image: tea1,
        description: "White tea is the least processed as it’s just dried. It is the lightest, most delicate tea, retaining the highest levels of antioxidants. The best are sweet and grassy with no bitterness at all. A cup of this is best drunk on its own to savour the subtle taste.",
        search: "white"
    },
    {
        id: 2,
        type: "What is green tea?",
        image: tea3,
        description: "Green tea is fired or steamed at high temperatures shortly after picking. The flavour varies as widely as types of white wine. The very best cost £1,000 a kilo and are wonderfully smooth and rich. The cheapest leaves tend to be bitter and seaweedy. Green teas go well with savoury dishes.",
        search: "green"
    },
    {
        id: 3,
        type: "What is oolong?",
        image: tea2,
        description: "Oolong lies artfully between green and black tea, being partially oxidized. The lighter are green and fruity whereas the darker are roasted and nutty. Oolongs are the most versatile to enjoy with food – anything from cheesecake to steak.",
        search: "oolong"
    },
    {
        id: 4,
        type: "What is black tea?",
        image: tea3,
        description: "Black tea is fully oxidized to bring out the deepest flavours. The best hand-crafted leaf is highly prized and can taste of chocolate and caramel or highly floral, while cheaper versions tend to be more bitter and one dimensional. Black tea is best enjoyed with sweet dishes.",
        search: "black"
    },
    {
        id: 5,
        type: "What is pu’er tea?",
        image: tea1,
        description: "Pu’er is fermented tea, traditionally made in large discs known as cakes and crumbled into the teapot. The flavour is earthy and highly umami. It goes well with fatty foods.",
        search: "pu’er"
    },
    {
        id: 6,
        type: "What are scented or flavoured teas?",
        image: tea4,
        description: "Teas can be scented with fresh flowers like jasmine or rose, or flavoured with citrus like bergamot oil in Earl Grey. Most commercial tea, however, uses flavours and scents, just as many fruit teas rely on flavourings rather than real fruit. Do look at the labels — it might not be as healthy as it sounds. You could be better off with a good quality, pure tea.",
        search: "flavoured"
    },
    {
        id: 7,
        type: "What are herbal ‘teas’ ?",
        image: tea4,
        description: "These aren’t really teas at all but infusions of dried herbs, like chamomile, hibiscus, rooibos, lemon verbena, and mint. While all true teas contain caffeine, herbs do not, so they can be relaxing last thing at night. However, they lack some of the beneficial antioxidants too.",
        search: "herbal"
    }
]
export default TypesOfTea;