const cryptoDesc = `The Project is a platform to provide all info about Cryptocurrencies 
         to the crypto enthusiasts. It provides user all necessary details like Market Cap, 
         Current Price,total exchange and daily exchange of cryptocurrencies. Project also
         have a news tab where user can get aware with all the latest news of crypto around
         the world.In addition, It also provides the user with future predictions of various
         Cryptocurrencies, so they could get a fare idea of which crypto to invest in.`;
const wellhearDesc = `This project aims to help people or more specifically doctors by providing a
         suitable platform where they can easily predict the risk of a heart failure. This is
         done through a model trained at the backend for this specific purpose. The user of
         the website will have to register first for accessing the dashboard.
`;

const data = `
{
   name:"Ajay Mittal",

   social:[
      gmail:"ajaymittal7231@gmail.com",

      linkedin:{
         name:"Ajay Mittal"
         href:"https://www.linkedin.com/in/ajay-mittal-a86a1a196/"
      }

      github:{
         name:"Ajay7231",
         href:"https://github.com/ajay7231"
      }
   ],

   skills:{

      languages:["Javascript","Typescript","C++","C","Python",],

      frameworks:{

         frontend:["Reactjs","Angular"],

         backend:["Nodejs","flask"],

         database:["mongoDB","SQL"],

         toolsORPlatformms:["git","github","firebase"]

      }
   },

   workExperience:[
      {
         name:"Parentune",
         location:"Gurgaon",
         from:"4 june 2022",
         to:"4 september 2022"
         responsiblities:['Improving frontend system','API implementation',"Coordination with team to develop scalable applications"]
      }
   ],

   education:{

      Btech:{
         College:"JC Bose University of Science and Technology, Faridabad",
         Branch:"Information Technology"
         GPA:"8.49"
         From:"August 2019",
         to:"May 2023"
      },

      classXII:{
         SchoolName:"Yogi Arvind Sarvodya School, Delhi",
         Percentage:"83.2",
         Completion_Year:"2018"
      }
   },

   projects:[
      {
         name:"Cryptonian",

         description:${cryptoDesc},

         technologies:['Reactjs','Recurrent Neural networks','python','RapidApi']
         github_repo:"https://github.com/lulz-sec-18/Cryptonian"
      },

      {
         name:"Well Heart",

         description:${wellhearDesc},

         technologies:['Angular','Deep Learning','python','firebase']
         github_repo:"https://github.com/lulz-sec-18/project-heart/"
      },

      {
         name:"Nodeshare",

         description:"A Web app for users to share files using cloud in one go",

         technologies:['Nodejs','Html',''CSS,'heroku']
         github_repo:"https://github.com/lulz-sec-18/project-heart/"
      }
   ],

   extraCirricular:[
      "Competitive Programming",
      "Roaming around node modules",
      "leetcode for Dsa 🌝"
   ],

   hobbies:[
      "Doodling",
      "singing (not a shower singer ,I sing really good 😄)",
      "Still finding this one"
   ]
}    

`;
export default data;
