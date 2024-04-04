const mongoose = require('mongoose');
// const User = require('../models/userModel');
const Furniture = require('../models/petModel');
const BlogModel = require('../models/BlogModel');
const dotenv = require('dotenv').config();

mongoose.connect('mongodb+srv://wesleywaka2:wesleywaka2@clusterztm.kle9fqo.mongodb.net/Pets-Elite?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const blogData = [
    {
        id: 1,
        title: "Understanding the Importance of FDA-Approved Bully Sticks for Your Dog",
        image: "https://res.cloudinary.com/drezwvhiy/image/upload/v1710756451/PElite/bz6x39aqmoodwdfdykif.jpg",
        introduction: "As a conscientious pet owner, the health and happiness of your furry companion is a top priority. In your search for the perfect treat, you've likely encountered bully sticks—a popular choice for dogs due to their durability and dental health benefits. But did you know that not all bully sticks are created equal? This is where FDA approval comes into play. Here's what you need to know about FDA-approved bully sticks and why they matter for your pup's wellbeing.",
        subtitles: [
            "The Role of the FDA",
            "Benefits of FDA-Approved Bully Sticks",
            "Choosing the Right Bully Stick",
            "Conclusion",
        ],
        content: [
            "As a conscientious pet owner, the health and happiness of your furry companion is a top priority. In your search for the perfect treat, you've likely encountered bully sticks—a popular choice for dogs due to their durability and dental health benefits. But did you know that not all bully sticks are created equal? This is where FDA approval comes into play. Here's what you need to know about FDA-approved bully sticks and why they matter for your pup's wellbeing.",
            "The Food and Drug Administration (FDA) is responsible for protecting public health in the United States by ensuring the safety and efficacy of human and animal products, including food and treats for pets. When a bully stick is FDA-approved, it indicates that the product has been manufactured under stringent regulations and has passed quality assurance tests.",
            "FDA approval means the bully sticks have been produced in facilities that follow safe manufacturing practices, minimizing the risk of contamination.These sticks are made from high-quality beef and do not contain any harmful additives or chemicals.The FDA checks for accurate labeling and verifies that the product is indeed a healthy addition to your pet’s diet.",
            "When selecting a bully stick for your dog, look for clear labeling that indicates FDA approval. You should also consider factors such as the size of the chew relative to your dog’s size and chewing habits to avoid potential choking hazards or digestive issues.",
            "An FDA-approved bully stick is more than just a chew—it's a commitment to your dog's health and safety. By choosing these carefully regulated treats, you can provide your pet hours of chewing enjoyment without compromising on quality or your peace of mind.Remember, always supervise your dog while they're enjoying a bully stick to ensure they're chewing safely, and keep an eye on the condition of the chew, replacing it before it becomes small enough to swallow.Happy chewing to your four-legged friends!",            
        ]
      }, 
      {
        id: 2,
        title: "The Benefits of Bully Sticks: A Comprehensive Guide",
        image: "https://res.cloudinary.com/drezwvhiy/image/upload/v1708496452/PElite/vzix28psixueviqiuwvz.jpg",
        introduction: "Bully sticks, also known as pizzle sticks, have gained popularity as a natural chew treat for dogs...",
        subtitles: [
          "Natural Ingredients",
          "Dental Health",
          "Mental Stimulation",
          "Nutritional Value",
          "Long-Lasting",
          "Odorless Options",
          "Suitable for All Dogs"
        ],
        content: [
          "Bully sticks are made from 100% beef, making them a natural and easily digestible treat for dogs.",
          "Chewing on bully sticks can help promote good dental hygiene in dogs.The act of gnawing on the stick helps remove plaque and tartar buildup, reducing the risk of dental issues such as gum disease and tooth decay.",
          "Dogs have a natural instinct to chew, and bully sticks provide a satisfying outlet for this behavior.",
          "Bully sticks are rich in protein, making them a nutritious snack for dogs.They also contain essential nutrients such as amino acids, which are important for muscle growth and overall health.",
          "Bully sticks are known for their durability and long-lasting chew time.Unlike some other treats that may be devoured in seconds, bully sticks provide hours of chewing enjoyment for dogs, making them a cost-effective option for pet owners.",
          "While some dog treats can have a strong odor that may be off-putting to pet owners, bully sticks are available in odor-free varieties.",
          "Bully sticks come in various shapes, sizes, and textures, making them suitable for dogs of all ages, breeds, and sizes."
        ]
      },
      {
        id: 3,
        title: "Why Quality Matters: The Importance of Premium Ingredients in Bully Sticks",
        image: "https://res.cloudinary.com/drezwvhiy/image/upload/v1708496188/PElite/gp3mltq9rpdr1bxyyi35.jpg",
        introduction: "Bully sticks have emerged as a popular choice among dog owners seeking a natural, long-lasting chew for their pets. However, the quality of ingredients used in these treats significantly impacts their safety and efficacy. This article explores the importance of opting for bully sticks made from premium ingredients.",
        subtitles: [
            "Safety",
            "Nutritional Value",
            "Digestibility",
            "Longevity",
            "Taste and Satisfaction",

        ],
        content: [
          "High-quality ingredients ensure the safety of bully sticks for your dog by reducing the risk of harmful contaminants or toxins. Premium ingredients sourced from reputable suppliers undergo rigorous quality control measures.",
          "Bully sticks made from premium ingredients offer better nutritional value for your dog, providing essential nutrients such as protein, vitamins, and minerals. In contrast, inferior ingredients may lack nutritional benefits and contain artificial additives or fillers.",
          "Quality ingredients contribute to better digestibility, reducing the risk of digestive issues such as upset stomach or diarrhea. Bully sticks made from inferior ingredients may be harder for your dog to digest, leading to gastrointestinal discomfort.",
          "Premium ingredients result in a denser, longer-lasting chew, providing hours of entertainment for your dog. In contrast, bully sticks made from low-quality ingredients may break apart quickly, posing a choking hazard.",
          "Quality ingredients enhance the taste and overall satisfaction of bully sticks for your dog. Premium options offer a natural, delicious flavor that dogs love, while low-quality ingredients may have an unpleasant taste or odor.",
        ]
      },
      {
        id: 4,
        title: "Bully Stick Buyer's Guide: What to Look for When Purchasing Bully Sticks",
        image: "https://res.cloudinary.com/drezwvhiy/image/upload/v1709210927/PElite/ja54lpq7hfki5xryzwr7.jpg",
        introduction: "Choosing the right bully sticks for your dog can be overwhelming given the variety of options available on the market. However, understanding what to look for when purchasing bully sticks can help ensure that you select a safe, high-quality product that meets your pet's needs. In this buyer's guide, we'll outline essential factors to consider to make an informed decision when buying bully sticks for your furry friend.",
        subtitles: [
            "Ingredients",
            "Manufacturing Process",
            "Size and Thickness",
            "Odor and Taste",
            "Safety",
        ],
        content: [
          "Opt for bully sticks made from a single, natural ingredient, preferably high-quality beef. Avoid products with additives, preservatives, or artificial flavors.",
          "Choose bully sticks that undergo minimal processing and are free from harmful chemicals or contaminants. Seek products manufactured in facilities that adhere to strict quality control standards and regulations",
          "Select bully sticks that are appropriate for your dog's size, breed, and chewing habits. Bully sticks come in various lengths and thicknesses, so choose one that matches your pet's chewing preferences",
          "Choose bully sticks with minimal odor and a natural, appealing taste. Avoid products with strong, unpleasant smells, as these may indicate low-quality ingredients or improper processing.",
          "Prioritize bully sticks that are free from potential choking hazards, such as small pieces or sharp edges. Inspect the product for any signs of splintering or breakage before giving it to your dog.",
        ]
      },
]

const furnitureData = [
    {
        id: 1,
        name: "6 Inch Bully Sticks - thick",
        length: "6 inch all",
        style: "straight",
        thickness: "Thick",
        details: "If you’ve got a pooch that loves to chew, check out our healthy and nutritious 6\" odor-free bully sticks. Perfect for pups who love to work out those teeth, our 100% pizzle sticks provide a welcome distraction and save the couch, shoes, and table legs from dog drool and chew marks. Made with all-natural beef from free-range South American cows, these additive and preservative-free sticks are designed for small to medium-sized dogs who enjoy something slightly tougher to chew through. Our 6\" thick, odor-free bully sticks also tackle bad breath and tartar buildup, so your four-legged friend stays healthy and smells fresher.",
        feeding_guidelines: "Please supervise your dog when feeding any chew or treat. Bully sticks can present a chocking hazard if your dog is not used to chewing one. Remove the final inch or so and throw it away in the trash. Make sure your dog has plenty of water during consumption.A Bully stick is a high protein treat, and if your dog is not used to digesting such high amounts, they may end up with an upset stomach, diarrhea, or vomiting.",
        general_feeding_guidelines:[
            "Consult with your veterinarian or a professional nutritionist to determine the appropriate amount of chews to feed your dog based on their size, age, and activity level."
            ,"Always supervise your dog while they are chewing on a treat or chew."
            ,"Choose chews that are appropriate for your dog's size and chewing ability. Avoid giving large dogs small chews, as they can be a choking hazard."
            ,"Monitor your dog's chewing behavior, and take the chew away if they start to break it into small pieces or swallow large pieces."
            ,"Keep an eye on the condition of the chew. If it becomes small enough to swallow whole or begins to break into small pieces, it is time to throw it away."
            ,"Keep in mind that chews should not be a replacement for a balanced diet. They should be given as a treat and not as a primary source of nutrition."
            ,"If you have any concerns about your dog's chew habits or if they have a history of gastrointestinal issues, it is always best to consult with a veterinarian before introducing new chews."
        ],
        nutrition_facts:[
            "Single ingredient(Bull Pizzle)","Organic (Natural Odor)","Highly Digestible","All-Natural (Air Dried)",'Whole Protein: 84%','Whole Fat: 14%','Crude Fibre: 0.6%','Moisture: 0.5% Max'
        ],
        image:{
            fileName: "product1",
            filePath: "https://res.cloudinary.com/drezwvhiy/image/upload/v1709727616/PElite/rcectgiphqnfkwkayfea.jpg"
        },
        extra_images:[
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            },
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            },
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            }
        ],
        age_consumption:["Puppy","Adult","Senior"],
        size_consumption:["Small","Medium"]
    },
    {
        id: 2,
        name: "6 Inch Bully Sticks - thin",
        length: "6 inch",
        style: "straight",
        thickness: "Thin",
        details: "Check out our 6\" thin odor-free bully sticks and give your dog a healthy, nutritious, and full-flavored treat that will work out their jaw, look after those teeth, and encourage good chewing habits. Made from 100% all-natural beef that’s sourced from the finest free-range cattle in South America, the chews contain no additives or preservatives and are a great alternative to rawhide. Perfect for small to medium-sized dogs who enjoy a relaxed, lighter chew, our 6\" thin, odor-free bully sticks tackle bad breath and tartar buildup. They also help to minimize destructive chewing by offering a tasty alternative to table legs, shoes, and anything else your pup regularly bites down on.",
        feeding_guidelines: "Please supervise your dog when feeding any chew or treat. Bully sticks can present a chocking hazard if your dog is not used to chewing one. Remove the final inch or so and throw it away in the trash. Make sure your dog has plenty of water during consumption.A Bully stick is a high protein treat, and if your dog is not used to digesting such high amounts, they may end up with an upset stomach, diarrhea, or vomiting.",
        general_feeding_guidelines:[
            "Consult with your veterinarian or a professional nutritionist to determine the appropriate amount of chews to feed your dog based on their size, age, and activity level."
            ,"Always supervise your dog while they are chewing on a treat or chew."
            ,"Choose chews that are appropriate for your dog's size and chewing ability. Avoid giving large dogs small chews, as they can be a choking hazard."
            ,"Monitor your dog's chewing behavior, and take the chew away if they start to break it into small pieces or swallow large pieces."
            ,"Keep an eye on the condition of the chew. If it becomes small enough to swallow whole or begins to break into small pieces, it is time to throw it away."
            ,"Keep in mind that chews should not be a replacement for a balanced diet. They should be given as a treat and not as a primary source of nutrition."
            ,"If you have any concerns about your dog's chew habits or if they have a history of gastrointestinal issues, it is always best to consult with a veterinarian before introducing new chews."
        ],
        nutrition_facts:[
            "Single ingredient(Bull Pizzle)","Organic (Natural Odor)","Highly Digestible","All-Natural (Air Dried)",'Whole Protein: 84%','Whole Fat: 14%','Crude Fibre: 0.6%','Moisture: 0.5% Max'
        ],
        image:{
            fileName: "product1",
            filePath: "https://res.cloudinary.com/drezwvhiy/image/upload/v1708496452/PElite/vzix28psixueviqiuwvz.jpg"
        },
        extra_images:[
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            },
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            },
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            }
        ],
        age_consumption:["Extra Small", "Small Dogs"],
        size_consumption:["Small","Medium"]
    },
    {
        id: 3,
        name: "6 Inch Bully Sticks - standard",
        length: "6 inch",
        style: "straight",
        thickness: "Standard",
        details: "Give your pup something healthy, delicious, and distracting to sink their teeth into with our 6\" odor-free bully sticks. Made from all-natural beef sourced from free-roaming cattle in South America, our bully sticks are ideal for small to medium-sized dogs who love to get their chew on. While the sticks will keep your pup occupied and ensure they forget just how tasty your couch can be, they also help prevent bad breath, tartar buildup, and bad chewing habits. Great for both puppies and older dogs who prefer something substantial to snack on, our 6\" odor-free bully sticks contain no additives and preservatives, making them a tasty, nutritious treat.",
        feeding_guidelines: "Please supervise your dog when feeding any chew or treat. Bully sticks can present a chocking hazard if your dog is not used to chewing one. Remove the final inch or so and throw it away in the trash. Make sure your dog has plenty of water during consumption.A Bully stick is a high protein treat, and if your dog is not used to digesting such high amounts, they may end up with an upset stomach, diarrhea, or vomiting.",
        general_feeding_guidelines:[
            "Consult with your veterinarian or a professional nutritionist to determine the appropriate amount of chews to feed your dog based on their size, age, and activity level."
            ,"Always supervise your dog while they are chewing on a treat or chew."
            ,"Choose chews that are appropriate for your dog's size and chewing ability. Avoid giving large dogs small chews, as they can be a choking hazard."
            ,"Monitor your dog's chewing behavior, and take the chew away if they start to break it into small pieces or swallow large pieces."
            ,"Keep an eye on the condition of the chew. If it becomes small enough to swallow whole or begins to break into small pieces, it is time to throw it away."
            ,"Keep in mind that chews should not be a replacement for a balanced diet. They should be given as a treat and not as a primary source of nutrition."
            ,"If you have any concerns about your dog's chew habits or if they have a history of gastrointestinal issues, it is always best to consult with a veterinarian before introducing new chews."
        ],
        nutrition_facts:[
            "Single ingredient(Bull Pizzle)","Organic (Natural Odor)","Highly Digestible","All-Natural (Air Dried)",'Whole Protein: 84%','Whole Fat: 14%','Crude Fibre: 0.6%','Moisture: 0.5% Max'
        ],
        image:{
            fileName: "product1",
            filePath: "https://res.cloudinary.com/drezwvhiy/image/upload/v1708496421/PElite/i69302ewzepcrh28iuxy.jpg"
        },
        extra_images:[
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            },
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            },
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            }
        ],
        age_consumption:["Puppy","Adult","Senior"],
        size_consumption:["Small","Medium"]
    },
    {
        id: 4,
        name: "6 Inch Bully Sticks - jumbo",
        length: "6 inch",
        style: "straight",
        thickness: "Jumbo",
        details: "If you have a canine who simply won’t stop working those… well… canines, try out our 6\" jumbo odor-free bully sticks. Designed for small to medium-sized dogs with a strong to powerful chew, our tasty treats contain no additives and preservatives and give your pup something to sink their teeth into. A great way to stop bad chewing habits and keep your couch, table legs, and shoes drool-free, these bully sticks also combat bad breath and tartar buildup, so your four-legged friend benefits from a healthy dental hit, too. Made with 100% all-natural beef from free-grazing South American cattle, our 6\" jumbo odor-free bully sticks are healthy and nutritious snacks for dogs who love to chew.",
        feeding_guidelines: "Please supervise your dog when feeding any chew or treat. Bully sticks can present a chocking hazard if your dog is not used to chewing one. Remove the final inch or so and throw it away in the trash. Make sure your dog has plenty of water during consumption.A Bully stick is a high protein treat, and if your dog is not used to digesting such high amounts, they may end up with an upset stomach, diarrhea, or vomiting.",
        general_feeding_guidelines:[
            "Consult with your veterinarian or a professional nutritionist to determine the appropriate amount of chews to feed your dog based on their size, age, and activity level."
            ,"Always supervise your dog while they are chewing on a treat or chew."
            ,"Choose chews that are appropriate for your dog's size and chewing ability. Avoid giving large dogs small chews, as they can be a choking hazard."
            ,"Monitor your dog's chewing behavior, and take the chew away if they start to break it into small pieces or swallow large pieces."
            ,"Keep an eye on the condition of the chew. If it becomes small enough to swallow whole or begins to break into small pieces, it is time to throw it away."
            ,"Keep in mind that chews should not be a replacement for a balanced diet. They should be given as a treat and not as a primary source of nutrition."
            ,"If you have any concerns about your dog's chew habits or if they have a history of gastrointestinal issues, it is always best to consult with a veterinarian before introducing new chews."
        ],
        nutrition_facts:[
            "Single ingredient(Bull Pizzle)","Organic (Natural Odor)","Highly Digestible","All-Natural (Air Dried)",'Whole Protein: 84%','Whole Fat: 14%','Crude Fibre: 0.6%','Moisture: 0.5% Max'
        ],
        image:{
            fileName: "product1",
            filePath: "https://res.cloudinary.com/drezwvhiy/image/upload/v1708496389/PElite/ue3qtz8ueikc6dfojdu8.jpg"
        },
        extra_images:[
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            },
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            },
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            }
        ],
        age_consumption:["Puppy","Adult","Senior"],
        size_consumption:["Small","Medium"]
    },
       {
        id: 5,
        name: "12 Inch Bully Sticks - jumbo",
        length: "12 inch",
        style: "straight",
        thickness: "Jumbo",
        details: "When your pup gets that insatiable urge to chew, protect your home from drool and teeth marks by letting them sink their teeth into our 12\" jumbo odor-free bully sticks. Made from 100% all-natural beef from South America, these jumbo treats are designed for medium to extra-large dogs who have a strong, powerful chew and enjoy really getting to grips with their bully sticks. Additive and preservative-free, the chews help keep your dog’s teeth in perfect condition by preventing tartar buildup, while also tackling bad breath. So tasty you may be tempted to give them a try yourself, our 12\" jumbo odor-free bully sticks are the perfect way to wean your dog off destructive chewing habits or reward them with a well-earned treat.",
        feeding_guidelines: "Please supervise your dog when feeding any chew or treat. Bully sticks can present a chocking hazard if your dog is not used to chewing one. Remove the final inch or so and throw it away in the trash. Make sure your dog has plenty of water during consumption.A Bully stick is a high protein treat, and if your dog is not used to digesting such high amounts, they may end up with an upset stomach, diarrhea, or vomiting.",
        general_feeding_guidelines:[
            "Consult with your veterinarian or a professional nutritionist to determine the appropriate amount of chews to feed your dog based on their size, age, and activity level."
            ,"Always supervise your dog while they are chewing on a treat or chew."
            ,"Choose chews that are appropriate for your dog's size and chewing ability. Avoid giving large dogs small chews, as they can be a choking hazard."
            ,"Monitor your dog's chewing behavior, and take the chew away if they start to break it into small pieces or swallow large pieces."
            ,"Keep an eye on the condition of the chew. If it becomes small enough to swallow whole or begins to break into small pieces, it is time to throw it away."
            ,"Keep in mind that chews should not be a replacement for a balanced diet. They should be given as a treat and not as a primary source of nutrition."
            ,"If you have any concerns about your dog's chew habits or if they have a history of gastrointestinal issues, it is always best to consult with a veterinarian before introducing new chews."
        ],
        nutrition_facts:[
            "Single ingredient(Bull Pizzle)","Organic (Natural Odor)","Highly Digestible","All-Natural (Air Dried)",'Whole Protein: 84%','Whole Fat: 14%','Crude Fibre: 0.6%','Moisture: 0.5% Max'
        ],
        image:{
            fileName: "product1",
            filePath: "https://res.cloudinary.com/drezwvhiy/image/upload/v1708496075/PElite/ciciz1um501jaylhlltz.jpg"
        },
        extra_images:[
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            },
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            },
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            }
        ],
        age_consumption:["Puppy","Adult","Senior"],
        size_consumption:["Small","Medium"]
    },
    {
        id: 6,
        name: "8 Inch Bully Sticks - standard",
        length: "8 inch",
        style: "straight",
        thickness: "Standard",
        details: "Introducing our all-natural 8-inch straight standard bully sticks, the perfect chew for dogs who crave a satisfying and long-lasting treat. Crafted from high-quality beef pizzle, these standard bully sticks provide a wholesome chewing experience that promotes dental health and mental stimulation. Each stick is meticulously sourced and prepared to ensure premium quality and flavor, making it an ideal choice for dogs of all breeds and sizes.",
        feeding_guidelines: "Please supervise your dog when feeding any chew or treat. Bully sticks can present a chocking hazard if your dog is not used to chewing one. Remove the final inch or so and throw it away in the trash. Make sure your dog has plenty of water during consumption.A Bully stick is a high protein treat, and if your dog is not used to digesting such high amounts, they may end up with an upset stomach, diarrhea, or vomiting.",
        general_feeding_guidelines:[
            "Consult with your veterinarian or a professional nutritionist to determine the appropriate amount of chews to feed your dog based on their size, age, and activity level."
            ,"Always supervise your dog while they are chewing on a treat or chew."
            ,"Choose chews that are appropriate for your dog's size and chewing ability. Avoid giving large dogs small chews, as they can be a choking hazard."
            ,"Monitor your dog's chewing behavior, and take the chew away if they start to break it into small pieces or swallow large pieces."
            ,"Keep an eye on the condition of the chew. If it becomes small enough to swallow whole or begins to break into small pieces, it is time to throw it away."
            ,"Keep in mind that chews should not be a replacement for a balanced diet. They should be given as a treat and not as a primary source of nutrition."
            ,"If you have any concerns about your dog's chew habits or if they have a history of gastrointestinal issues, it is always best to consult with a veterinarian before introducing new chews."
        ],
        nutrition_facts:[
            "Single ingredient(Bull Pizzle)","Organic (Natural Odor)","Highly Digestible","All-Natural (Air Dried)",'Whole Protein: 84%','Whole Fat: 14%','Crude Fibre: 0.6%','Moisture: 0.5% Max'
        ],
        image:{
            fileName: "product1",
            filePath: "https://res.cloudinary.com/drezwvhiy/image/upload/v1708496260/PElite/zf7aoixnmxr5b3vsb1ns.jpg"
        },
        extra_images:[
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            },
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            },
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            }
        ],
        age_consumption:["Puppy","Adult","Senior"],
        size_consumption:["Small","Medium"]
    },
    {
        id: 7,
        name: "8 Inch Bully Sticks - jumbo",
        length: "8 inch",
        style: "straight",
        thickness: "Jumbo",
        details: "Indulge your pup in a premium chewing experience with our Jumbo 8-Inch Straight Bully Stick. Crafted from the finest quality beef pizzle, these jumbo bully sticks offer an irresistible texture and robust flavor that dogs love. Satisfyingly thick and durable, they're perfect for larger breeds and aggressive chewers, providing hours of entertainment and promoting dental health. Treat your canine companion to the ultimate chew with our jumbo bully sticks.",
        feeding_guidelines: "Please supervise your dog when feeding any chew or treat. Bully sticks can present a chocking hazard if your dog is not used to chewing one. Remove the final inch or so and throw it away in the trash. Make sure your dog has plenty of water during consumption.A Bully stick is a high protein treat, and if your dog is not used to digesting such high amounts, they may end up with an upset stomach, diarrhea, or vomiting.",
        general_feeding_guidelines:[
            "Consult with your veterinarian or a professional nutritionist to determine the appropriate amount of chews to feed your dog based on their size, age, and activity level."
            ,"Always supervise your dog while they are chewing on a treat or chew."
            ,"Choose chews that are appropriate for your dog's size and chewing ability. Avoid giving large dogs small chews, as they can be a choking hazard."
            ,"Monitor your dog's chewing behavior, and take the chew away if they start to break it into small pieces or swallow large pieces."
            ,"Keep an eye on the condition of the chew. If it becomes small enough to swallow whole or begins to break into small pieces, it is time to throw it away."
            ,"Keep in mind that chews should not be a replacement for a balanced diet. They should be given as a treat and not as a primary source of nutrition."
            ,"If you have any concerns about your dog's chew habits or if they have a history of gastrointestinal issues, it is always best to consult with a veterinarian before introducing new chews."
        ],
        nutrition_facts:[
            "Single ingredient(Bull Pizzle)","Organic (Natural Odor)","Highly Digestible","All-Natural (Air Dried)",'Whole Protein: 84%','Whole Fat: 14%','Crude Fibre: 0.6%','Moisture: 0.5% Max'
        ],
        image:{
            fileName: "product1",
            filePath: "https://res.cloudinary.com/drezwvhiy/image/upload/v1708496079/PElite/t3c4v9vmiqorqwxadtzj.jpg"
        },
        extra_images:[
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            },
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            },
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            }
        ],
        age_consumption:["Puppy","Adult","Senior"],
        size_consumption:["Small","Medium"]
    },
    {
        id: 8,
        name: "12 Inch Bully Sticks - thin",
        length: "12 inch",
        style: "straight",
        thickness: "Thin",
        details: "Keep your dog off your shoes by distracting them with these tasty, all-natural bully sticks! Made from 100% beef pizzle from free-range Brazilian cattle, these odor-free bully sticks feature 12 inches of delicious delight for your pet to last through many chewing sessions. Since these bully sticks are made from 100% beef with an all-natural drying process, they're safe to digest and snack on.The tough hide melts away as your dog continues gnawing on the stick and reveals a soft and chewy texture that makes these beef sticks fun to snack on. Not only do these chew sticks make the chewing solution for your dog, but they also help keep your furry friend's teeth clean and reduces plaque and tartar buildup. Add these effective bully sticks to your dog owner's toolbox! Great for large dogs to chew on (Small dogs: Consider our 6 inch thin bully sticks)",
        feeding_guidelines: "Please supervise your dog when feeding any chew or treat. Bully sticks can present a chocking hazard if your dog is not used to chewing one. Remove the final inch or so and throw it away in the trash. Make sure your dog has plenty of water during consumption.A Bully stick is a high protein treat, and if your dog is not used to digesting such high amounts, they may end up with an upset stomach, diarrhea, or vomiting.",
        general_feeding_guidelines:[
            "Consult with your veterinarian or a professional nutritionist to determine the appropriate amount of chews to feed your dog based on their size, age, and activity level."
            ,"Always supervise your dog while they are chewing on a treat or chew."
            ,"Choose chews that are appropriate for your dog's size and chewing ability. Avoid giving large dogs small chews, as they can be a choking hazard."
            ,"Monitor your dog's chewing behavior, and take the chew away if they start to break it into small pieces or swallow large pieces."
            ,"Keep an eye on the condition of the chew. If it becomes small enough to swallow whole or begins to break into small pieces, it is time to throw it away."
            ,"Keep in mind that chews should not be a replacement for a balanced diet. They should be given as a treat and not as a primary source of nutrition."
            ,"If you have any concerns about your dog's chew habits or if they have a history of gastrointestinal issues, it is always best to consult with a veterinarian before introducing new chews."
        ],
        nutrition_facts:[
            "Single ingredient(Bull Pizzle)","Organic (Natural Odor)","Highly Digestible","All-Natural (Air Dried)",'Whole Protein: 84%','Whole Fat: 14%','Crude Fibre: 0.6%','Moisture: 0.5% Max'
        ],
        image:{
            fileName: "product1",
            filePath: "https://res.cloudinary.com/drezwvhiy/image/upload/v1708603504/PElite/riewktfhhllgchv2mepm.jpg"
        },
        extra_images:[
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            },
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            },
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            }
        ],
        age_consumption:["Puppy","Adult","Senior"],
        size_consumption:["Small","Medium"]
    },
    {
        id: 9,
        name: "12 Inch Bully Sticks - standard",
        length: "12 inch",
        style: "straight",
        thickness: "Standard",
        details: "If you share your home with a big dog who never seems to stop chewing, why not try our 12\" odor-free bully sticks and let them enjoy a healthy and nutritious treat made from 100%, all-natural beef? Sourced from free-range South American cows, our pure beef pizzle sticks contain no additives or preservatives and make for a perfect alternative to rawhide. A true taste sensation, the chews help keep your home free of teeth marks and dog drool by encouraging good chewing habits and letting your pup work out all that energy on a full-flavored snack. Our 12\" odor-free bully sticks are designed for medium to extra-large dogs and also make for an ideal treat for larger puppies",
        feeding_guidelines: "Please supervise your dog when feeding any chew or treat. Bully sticks can present a chocking hazard if your dog is not used to chewing one. Remove the final inch or so and throw it away in the trash. Make sure your dog has plenty of water during consumption.A Bully stick is a high protein treat, and if your dog is not used to digesting such high amounts, they may end up with an upset stomach, diarrhea, or vomiting.",
        general_feeding_guidelines:[
            "Consult with your veterinarian or a professional nutritionist to determine the appropriate amount of chews to feed your dog based on their size, age, and activity level."
            ,"Always supervise your dog while they are chewing on a treat or chew."
            ,"Choose chews that are appropriate for your dog's size and chewing ability. Avoid giving large dogs small chews, as they can be a choking hazard."
            ,"Monitor your dog's chewing behavior, and take the chew away if they start to break it into small pieces or swallow large pieces."
            ,"Keep an eye on the condition of the chew. If it becomes small enough to swallow whole or begins to break into small pieces, it is time to throw it away."
            ,"Keep in mind that chews should not be a replacement for a balanced diet. They should be given as a treat and not as a primary source of nutrition."
            ,"If you have any concerns about your dog's chew habits or if they have a history of gastrointestinal issues, it is always best to consult with a veterinarian before introducing new chews."
        ],
        nutrition_facts:[
            "Single ingredient(Bull Pizzle)","Organic (Natural Odor)","Highly Digestible","All-Natural (Air Dried)",'Whole Protein: 84%','Whole Fat: 14%','Crude Fibre: 0.6%','Moisture: 0.5% Max'
        ],
        image:{
            fileName: "product1",
            filePath: "https://res.cloudinary.com/drezwvhiy/image/upload/v1708496426/PElite/knbyzhkw3cpdvjhr0woo.jpg"
        },
        extra_images:[
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            },
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            },
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            }
        ],
        age_consumption:["Puppy","Adult","Senior"],
        size_consumption:["Small","Medium"]
    },
    {
        id: 10,
        name: "4 & 5 Inch Bully Sticks - straight",
        length: "5 inch",
        style: "straight",
        thickness: "Standard",
        details: "If you have a canine who simply won’t stop working those… well… canines, try out our 6\" jumbo odor-free bully sticks. Designed for small to medium-sized dogs with a strong to powerful chew, our tasty treats contain no additives and preservatives and give your pup something to sink their teeth into. A great way to stop bad chewing habits and keep your couch, table legs, and shoes drool-free, these bully sticks also combat bad breath and tartar buildup, so your four-legged friend benefits from a healthy dental hit, too. Made with 100% all-natural beef from free-grazing South American cattle, our 6\" jumbo odor-free bully sticks are healthy and nutritious snacks for dogs who love to chew.",
        feeding_guidelines: "Please supervise your dog when feeding any chew or treat. Bully sticks can present a chocking hazard if your dog is not used to chewing one. Remove the final inch or so and throw it away in the trash. Make sure your dog has plenty of water during consumption.A Bully stick is a high protein treat, and if your dog is not used to digesting such high amounts, they may end up with an upset stomach, diarrhea, or vomiting.",
        general_feeding_guidelines:[
            "Consult with your veterinarian or a professional nutritionist to determine the appropriate amount of chews to feed your dog based on their size, age, and activity level."
            ,"Always supervise your dog while they are chewing on a treat or chew."
            ,"Choose chews that are appropriate for your dog's size and chewing ability. Avoid giving large dogs small chews, as they can be a choking hazard."
            ,"Monitor your dog's chewing behavior, and take the chew away if they start to break it into small pieces or swallow large pieces."
            ,"Keep an eye on the condition of the chew. If it becomes small enough to swallow whole or begins to break into small pieces, it is time to throw it away."
            ,"Keep in mind that chews should not be a replacement for a balanced diet. They should be given as a treat and not as a primary source of nutrition."
            ,"If you have any concerns about your dog's chew habits or if they have a history of gastrointestinal issues, it is always best to consult with a veterinarian before introducing new chews."
        ],
        nutrition_facts:[
            "Single ingredient(Bull Pizzle)","Organic (Natural Odor)","Highly Digestible","All-Natural (Air Dried)",'Whole Protein: 84%','Whole Fat: 14%','Crude Fibre: 0.6%','Moisture: 0.5% Max'
        ],
        image:{
            fileName: "product1",
            filePath:"https://res.cloudinary.com/drezwvhiy/image/upload/v1708496217/PElite/akkcqavb2oxtbwokbsjo.jpg"
        },
        extra_images:[
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            },
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            },
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            }
        ],
        age_consumption:["Puppy","Adult","Senior"],
        size_consumption:["Small","Medium"]
    },
    {
        id: 11,
        name: "Bully Bites",
        length: "Bully Bites",
        style: "straight",
        thickness: "Bully Bites",
        details: "Introducing our delectable Bully Bites, the perfect snack for your beloved pup! Made from premium beef pizzle, these bite-sized treats pack a punch of flavor and nutrition in every bite. Whether used as a reward during training sessions or simply as a tasty snack between meals, our Bully Bites are sure to keep your dog's tail wagging with joy. With their natural texture and rich protein content, they're not only delicious but also beneficial for your dog's dental health and overall well-being. Treat your furry friend to the goodness of Bully Bites today!",
        feeding_guidelines: "Please supervise your dog when feeding any chew or treat. Bully sticks can present a chocking hazard if your dog is not used to chewing one. Remove the final inch or so and throw it away in the trash. Make sure your dog has plenty of water during consumption.A Bully stick is a high protein treat, and if your dog is not used to digesting such high amounts, they may end up with an upset stomach, diarrhea, or vomiting.",
        general_feeding_guidelines:[
            "Consult with your veterinarian or a professional nutritionist to determine the appropriate amount of chews to feed your dog based on their size, age, and activity level."
            ,"Always supervise your dog while they are chewing on a treat or chew."
            ,"Choose chews that are appropriate for your dog's size and chewing ability. Avoid giving large dogs small chews, as they can be a choking hazard."
            ,"Monitor your dog's chewing behavior, and take the chew away if they start to break it into small pieces or swallow large pieces."
            ,"Keep an eye on the condition of the chew. If it becomes small enough to swallow whole or begins to break into small pieces, it is time to throw it away."
            ,"Keep in mind that chews should not be a replacement for a balanced diet. They should be given as a treat and not as a primary source of nutrition."
            ,"If you have any concerns about your dog's chew habits or if they have a history of gastrointestinal issues, it is always best to consult with a veterinarian before introducing new chews."
        ],
        nutrition_facts:[
            "Single ingredient(Bull Pizzle)","Organic (Natural Odor)","Highly Digestible","All-Natural (Air Dried)",'Whole Protein: 84%','Whole Fat: 14%','Crude Fibre: 0.6%','Moisture: 0.5% Max'
        ],
        image:{
            fileName: "product1",
            filePath: "https://res.cloudinary.com/drezwvhiy/image/upload/v1709729135/PElite/tfu1imabu3og65zwyvi1.jpg"
        },
        extra_images:[
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            },
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            },
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            }
        ],
        age_consumption:["Puppy","Adult","Senior"],
        size_consumption:["Small","Medium"]
    },
    {
        id: 12,
        name: "6 Inch Bully Sticks - braided",
        length: "6 inch",
        style: "braided",
        thickness: "Braided",
        details: "If you have a canine who simply won’t stop working those… well… canines, try out our 6\" jumbo odor-free bully sticks. Designed for small to medium-sized dogs with a strong to powerful chew, our tasty treats contain no additives and preservatives and give your pup something to sink their teeth into. A great way to stop bad chewing habits and keep your couch, table legs, and shoes drool-free, these bully sticks also combat bad breath and tartar buildup, so your four-legged friend benefits from a healthy dental hit, too. Made with 100% all-natural beef from free-grazing South American cattle, our 6\" jumbo odor-free bully sticks are healthy and nutritious snacks for dogs who love to chew.",
        feeding_guidelines: "Please supervise your dog when feeding any chew or treat. Bully sticks can present a chocking hazard if your dog is not used to chewing one. Remove the final inch or so and throw it away in the trash. Make sure your dog has plenty of water during consumption.A Bully stick is a high protein treat, and if your dog is not used to digesting such high amounts, they may end up with an upset stomach, diarrhea, or vomiting.",
        general_feeding_guidelines:[
            "Consult with your veterinarian or a professional nutritionist to determine the appropriate amount of chews to feed your dog based on their size, age, and activity level."
            ,"Always supervise your dog while they are chewing on a treat or chew."
            ,"Choose chews that are appropriate for your dog's size and chewing ability. Avoid giving large dogs small chews, as they can be a choking hazard."
            ,"Monitor your dog's chewing behavior, and take the chew away if they start to break it into small pieces or swallow large pieces."
            ,"Keep an eye on the condition of the chew. If it becomes small enough to swallow whole or begins to break into small pieces, it is time to throw it away."
            ,"Keep in mind that chews should not be a replacement for a balanced diet. They should be given as a treat and not as a primary source of nutrition."
            ,"If you have any concerns about your dog's chew habits or if they have a history of gastrointestinal issues, it is always best to consult with a veterinarian before introducing new chews."
        ],
        nutrition_facts:[
            "Single ingredient(Bull Pizzle)","Organic (Natural Odor)","Highly Digestible","All-Natural (Air Dried)",'Whole Protein: 84%','Whole Fat: 14%','Crude Fibre: 0.6%','Moisture: 0.5% Max'
        ],
        image:{
            fileName: "product1",
            filePath: "https://res.cloudinary.com/drezwvhiy/image/upload/v1709727612/PElite/m036cj1ft17fcnprn58y.jpg"
        },
        extra_images:[
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            },
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            },
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            }
        ],
        age_consumption:["Puppy","Adult","Senior"],
        size_consumption:["Small","Medium"]
    },
     {
        id: 13,
        name: "8 Inch Bully Sticks - thin",
        length: "8 inch",
        style: "straight",
        thickness: "Thin",
        details: "Introducing our natural 8-inch straight thin bully sticks, specially crafted for dogs who prefer a lighter chewing experience. Made from high-quality beef pizzle, these slender bully sticks offer a satisfying chew without overwhelming smaller mouths. Perfect for puppies, small breeds, or dogs who prefer a softer texture, our thin bully sticks are a wholesome treat that promotes dental health and keeps your canine companion happily occupied.",
        feeding_guidelines: "Please supervise your dog when feeding any chew or treat. Bully sticks can present a chocking hazard if your dog is not used to chewing one. Remove the final inch or so and throw it away in the trash. Make sure your dog has plenty of water during consumption.A Bully stick is a high protein treat, and if your dog is not used to digesting such high amounts, they may end up with an upset stomach, diarrhea, or vomiting.",
        general_feeding_guidelines:[
            "Consult with your veterinarian or a professional nutritionist to determine the appropriate amount of chews to feed your dog based on their size, age, and activity level."
            ,"Always supervise your dog while they are chewing on a treat or chew."
            ,"Choose chews that are appropriate for your dog's size and chewing ability. Avoid giving large dogs small chews, as they can be a choking hazard."
            ,"Monitor your dog's chewing behavior, and take the chew away if they start to break it into small pieces or swallow large pieces."
            ,"Keep an eye on the condition of the chew. If it becomes small enough to swallow whole or begins to break into small pieces, it is time to throw it away."
            ,"Keep in mind that chews should not be a replacement for a balanced diet. They should be given as a treat and not as a primary source of nutrition."
            ,"If you have any concerns about your dog's chew habits or if they have a history of gastrointestinal issues, it is always best to consult with a veterinarian before introducing new chews."
        ],
        nutrition_facts:[
            "Single ingredient(Bull Pizzle)","Organic (Natural Odor)","Highly Digestible","All-Natural (Air Dried)",'Whole Protein: 84%','Whole Fat: 14%','Crude Fibre: 0.6%','Moisture: 0.5% Max'
        ],
        image:{
            fileName: "product1",
            filePath: "https://res.cloudinary.com/drezwvhiy/image/upload/v1709210927/PElite/ja54lpq7hfki5xryzwr7.jpg"
        },
        extra_images:[
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            },
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            },
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            }
        ],
        age_consumption:["Puppy","Adult","Senior"],
        size_consumption:["Small","Medium"]
    },
];

async function seedDatabase() {
    try {
        await BlogModel.deleteMany();
        await Furniture.deleteMany();
        // const seededData = await User.insertMany(adminData);
        const seededFurniture = await Furniture.insertMany(furnitureData);
        const seededBlog = await BlogModel.insertMany(blogData);
        console.log('Database seeded successfully:', seededFurniture);
        console.log('Database seeded successfully:', seededBlog);
        // console.log('Database seeded successfully:', seededData);
        mongoose.disconnect(); // Move disconnect here in the success case
    } catch (error) {
        console.error('Error seeding DB:', error);
        mongoose.disconnect(); // Move disconnect here in the error case
    }
}

seedDatabase();