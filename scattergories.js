var idx = -1;
var scattergoriesData = [
    "3-Letter Words",
    "5-Letter Words",
    "A Baseball Player's Name",
    "A Bird",
    "A Boy’s Name",
    "A Drink",
    "A Fish",
    "A Football Player's Name",
    "A Girl’s Name",
    "A Relative",
    "A River",
    "Abbreviations",
    "Acronyms",
    "Action Words",
    "Adjectives",
    "After-School Activities",
    "An Animal",
    "Animal Noises",
    "Animals Found in Foreign Lands",
    "Animals in Books or Movies",
    "Animals That Advertise Products",
    "Animals That Fly",
    "Animals That Swim",
    "Any Green Food or Drink",
    "Appliances",
    "Artists",
    "Athletes Who Do Commercials",
    "Authors",
    "Awards/Ceremonies",
    "Baby Foods",
    "Bad Habits",
    "Beers",
    "Birds",
    "Board Games",
    "Bodies of Water",
    "Breakfast Cereals",
    "Breakfast Foods",
    "Cancelled TV Shows",
    "Canned Food",
    "Capitals",
    "Card Games",
    "Cars",
    "Cartoon Characters",
    "Celebrities You'd Like to Meet",
    "Celebrities",
    "Children's TV Shows",
    "Children’s Books",
    "Chinese Food",
    "Christmas Songs",
    "Cities",
    "Clothing",
    "Cocktails",
    "Cold Climates",
    "Colleges/Universities",
    "Colors",
    "Comedy Shows",
    "Computer Parts",
    "Computer Programs",
    "Cooking Utensils",
    "Cosmetics/Toiletries",
    "Countries",
    "Couples",
    "Crimes",
    "Dangerous Animals",
    "Daytime TV Shows",
    "Diet Foods",
    "Diseases",
    "Drugs that are Abused",
    "Electronic Gadgets",
    "Ethnic Foods",
    "Excuses for Being Late",
    "Famous Children",
    "Famous Duos and Trios",
    "Fast-Food",
    "Fears",
    "Female Athletes",
    "Female Stars",
    "Fictional Characters",
    "Fictitious Places",
    "Fish",
    "Flowers",
    "Food at a Carnival or Fair",
    "Food Found in a Casserole",
    "Food Found in a Deli ",
    "Food You Eat Raw",
    "Footware",
    "Foreign Words",
    "Foreign Cities",
    "Found in a Salad Bar",
    "Four-Legged Animals",
    "Fried Foods",
    "From TV, Movies, or Books",
    "Fruits",
    "Games",
    "Gifts for the Bride & Groom",
    "Gifts",
    "Halloween Costumes",
    "Health Food",
    "Heroes",
    "Historic Events",
    "Historical Figures",
    "Hobbies",
    "Holiday Activities",
    "Holidays",
    "Honeymoon Spots",
    "Hors D'oeuvres",
    "Household Chores",
    "Ice Cream Flavors",
    "In Europe",
    "In National Geographic Magazine",
    "In North America",
    "In Your Hometown",
    "Insects",
    "Internet Lingo",
    "Islands",
    "Italian Food",
    "Items in a Catalog",
    "Items in a Kitchen",
    "Items in a Suitcase",
    "Items in a Vending Machine",
    "Items You Save Up to Buy",
    "Items You Take on a Road Trip",
    "Kinds of Candy",
    "Kinds of Soup",
    "Last Names",
    "Leisure Activities",
    "Long-Running TV Series",
    "Magazines",
    "Male Stars",
    "Mascots",
    "Math Terms",
    "Menu Items",
    "Mexican Food",
    "Military Leaders",
    "Movie Stars (Dead)",
    "Movie Stars (Living)",
    "Movie Titles",
    "Movies on TV",
    "Musical Groups",
    "Musical Instruments",
    "Names Used in Songs",
    "Nationalities",
    "Newscasters/Journalists",
    "Nicknames",
    "Not On Planet Earth",
    "Notorious people",
    "Nouns",
    "Occupations",
    "Ocean Things",
    "Offensive Words",
    "Olympic Events",
    "On a Wine List",
    "Parks",
    "Parts of the body",
    "People Who Do Dangerous Jobs",
    "People Who Do Door To Door",
    "People Who Work Alone",
    "People Who Work at Night",
    "People You Admire",
    "People You Avoid",
    "People's Names Used in Songs",
    "Personality traits",
    "Pets",
    "Pizza Toppings",
    "Places in Europe",
    "Places to Hangout",
    "Played Inside",
    "Played Outside",
    "Political Figures",
    "Produce",
    "Provinces or States",
    "Reasons to be Absent",
    "Reasons to Call 911",
    "Reasons to Make a Phone Call",
    "Reasons to Quit Your Job",
    "Reasons to Take Out a Loan",
    "Reptiles/Amphibians",
    "Restaurants",
    "Sandwiches",
    "School Subjects",
    "School Supplies",
    "Science Terms",
    "Seafood",
    "Sex Symbols",
    "Shows You Don't Like",
    "Singers",
    "Snacks",
    "Soft Drinks",
    "Software",
    "Something You Keep Hidden",
    "Something You’re Afraid of",
    "Song Titles",
    "Spices/Herbs",
    "Spicy Foods",
    "Sporting Events",
    "Sports Equipment",
    "Sports Personalities",
    "Sports Played Outdoors",
    "Sports Stars",
    "Sports Terms",
    "Sports",
    "States",
    "Stones/Gems",
    "Store Names",
    "Team Names",
    "Television Stars",
    "Terms of Endearment",
    "Things Animals Eat",
    "Things at a Carnival",
    "Things at a Circus",
    "Things at a Football Game",
    "Things Found at a Bar",
    "Things Found in a Desk",
    "Things Found in a Hospital",
    "Things Found in a Locker",
    "Things Found in New York",
    "Things Found in the Cafeteria",
    "Things Found in the Water",
    "Things From a Stationary Store",
    "Things in a Classroom",
    "Things in a Grocery Store",
    "Things in a Medicine Cabinet",
    "Things in a Park",
    "Things in the Kitchen",
    "Things in the Sky",
    "Things Sold in Commercials",
    "Things That Are Black",
    "Things That Are Cold",
    "Things That Are Hot",
    "Things That Are Loud",
    "Things That Are Red",
    "Things That Are Round",
    "Things That Are Square",
    "Things That Are Sticky",
    "Things That Are White",
    "Things That Can Get You Fired",
    "Things That Can Kill You",
    "Things That Feel Hot",
    "Things That Feel Soft",
    "Things That Grow",
    "Things That Have Buttons",
    "Things That Have Spots",
    "Things That Have Stripes",
    "Things That Have Wheels",
    "Things That Jump/Bounce",
    "Things That Make You Smile",
    "Things That Smell Bad",
    "Things That Smell Good",
    "Things That Taste Spicy",
    "Things That Use a Remote",
    "Things to Do at a Party",
    "Things to Do on a Date",
    "Things with Stripes",
    "Things with Tails",
    "Things Worn From the Waist Up",
    "Things You Buy for Kids",
    "Things You Can See",
    "Things You Carry",
    "Things You Do at Work",
    "Things You Do Everyday",
    "Things You Do in Gym Class",
    "Things You Do in Study Hall",
    "Things You Do While Watching TV",
    "Things You Don't Want to Hear",
    "Things You Get in the Mail",
    "Things You Get Tickets for",
    "Things You Make",
    "Things You Need Tickets To See",
    "Things You Never Tasted",
    "Things You Replace",
    "Things You Save Up to Buy",
    "Things You Scream at Officials",
    "Things You See at the Zoo",
    "Things You See in a City",
    "Things You Shouldn't Touch",
    "Things You Shout",
    "Things You Sit on",
    "Things You Store Items in",
    "Things You Study in Geography",
    "Things You Study in History",
    "Things You Throw Away",
    "Things You Wear",
    "Things You’re Allergic to",
    "Titles People Can Have",
    "Titles People Have",
    "Tools",
    "Tourist Attractions",
    "Toys",
    "Trees",
    "TV Character Names",
    "TV Shows",
    "TV Stars",
    "Types of Drinks",
    "Types of Weather",
    "Vacation Spots",
    "Vegetables",
    "Video Games",
    "Villains",
    "Warm Climates",
    "Ways to Get from Here to There",
    "Ways to Kill Time",
    "Weapons",
    "Websites",
    "Weekend Activities",
    "Wireless Things",
    "With a High Altitude",
    "Words Associated with Exercise",
    "Words Associated with Money",
    "Words Associated with Winter",
    "Words Ending in \"ED\"",
    "Words Ending in \"LY\"",
    "Words Ending in \"N\"",
    "Words Said in Anger",
    "Words that End in \"ING\"",
    "Words with a Double Letter",
    "World Leaders/Politicians"
  ];
var used_categories = [-1];
var selected_categories = [];

// Papa.parse("./scattergories.csv", { 
//     download: true,
//     complete: function(results) {
//         data = results.data;
//         console.info(data);
//     }
// });

function generateList() {
    var category = "";
    idx = Math.floor(Math.random()*scattergoriesData.length);
    category = scattergoriesData.splice(idx, 1)[0];
    document.getElementById("cat1").innerHTML = category;
    
    idx = Math.floor(Math.random()*scattergoriesData.length);
    category = scattergoriesData.splice(idx, 1)[0];
    document.getElementById("cat2").innerHTML = category;
    
    idx = Math.floor(Math.random()*scattergoriesData.length);
    category = scattergoriesData.splice(idx, 1)[0];
    document.getElementById("cat3").innerHTML = category;
    
    idx = Math.floor(Math.random()*scattergoriesData.length);
    category = scattergoriesData.splice(idx, 1)[0];
    document.getElementById("cat4").innerHTML = category;
    
    idx = Math.floor(Math.random()*scattergoriesData.length);
    category = scattergoriesData.splice(idx, 1)[0];
    document.getElementById("cat5").innerHTML = category;
    
    idx = Math.floor(Math.random()*scattergoriesData.length);
    category = scattergoriesData.splice(idx, 1)[0];
    document.getElementById("cat6").innerHTML = category;
    
    idx = Math.floor(Math.random()*scattergoriesData.length);
    category = scattergoriesData.splice(idx, 1)[0];
    document.getElementById("cat7").innerHTML = category;
    
    idx = Math.floor(Math.random()*scattergoriesData.length);
    category = scattergoriesData.splice(idx, 1)[0];
    document.getElementById("cat8").innerHTML = category;
    
    idx = Math.floor(Math.random()*scattergoriesData.length);
    category = scattergoriesData.splice(idx, 1)[0];
    document.getElementById("cat9").innerHTML = category;
}

// function anythingGoes() {
//     while (past_questions.includes(idx)) {
//         idx = Math.floor(Math.random()*115) + 120;
//     }
//     past_questions.push(idx);
//     document.getElementById("question").innerHTML = data[idx][0];
//     document.getElementById("category").innerHTML = data[idx][1];
// }

// function hypotheticals() {
//     while (past_questions.includes(idx)) {
//         idx = Math.floor(Math.random()*120);
//     }
//     past_questions.push(idx);
//     document.getElementById("question").innerHTML = data[idx][0];
//     document.getElementById("category").innerHTML = data[idx][1];
// }

// function noBrainers() {
//     while (past_questions.includes(idx)) {
//         idx = Math.floor(Math.random()*119) + 237;
//     }
//     past_questions.push(idx);
//     document.getElementById("question").innerHTML = data[idx][0];
//     document.getElementById("category").innerHTML = data[idx][1];
// }

// function personals() {
//     while (past_questions.includes(idx)) {
//         idx = Math.floor(Math.random()*119) + 357;
//     }
//     past_questions.push(idx);
//     document.getElementById("question").innerHTML = data[idx][0];
//     document.getElementById("category").innerHTML = data[idx][1];
// }

// function randomQuestion() {
//     while (past_questions.includes(idx)) {
//         idx = Math.floor(Math.random()*477);
//     }
//     past_questions.push(idx);
//     document.getElementById("question").innerHTML = data[idx][0];
//     document.getElementById("category").innerHTML = data[idx][1];
// }