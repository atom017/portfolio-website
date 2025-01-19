import Groq from "groq-sdk";
import Cors from 'cors';

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const allowedOrigins = [
  'https://portfolio-website-5a5prabav-atom017s-projects.vercel.app', // First allowed origin
  'https://khaing-hsu-thwe.vercel.com',
  'http://localhost:3000',
];

// Initialize CORS middleware
const cors = Cors({
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  origin: '*'
  // origin: (origin, callback) => {
  //   if (allowedOrigins.includes(origin) || !origin) {
  //     callback(null, origin);
  //   } else {
  //     callback(new Error('Not allowed by CORS'), false);
  //   }
  // },
});


const runCors = (req, res) =>
  new Promise((resolve, reject) => {
    cors(req, res, (result) => {
      if (result instanceof Error) {
        reject(result);
      }
      resolve(result);
    });
  });

export default async function handler(req, res) {
  await runCors(req, res);
  const { message } = req.body;

  const cvData = JSON.parse(process.env.CV_DATA);
  console.log(cvData)
  const prompt = generatePrompt(cvData, message);

  try {
    // Send the prompt to Groq API to get chat completion
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "llama-3.3-70b-versatile",  // Use the model you want
    });


    res.status(200).json({ response: chatCompletion.choices[0]?.message?.content || "" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch response from Groq API" });
  }
}

// Function to dynamically generate the prompt with the CV data and the user query
function generatePrompt(cvData, userMessage) {
  // Basic instructions to the chatbot
  const basicInstructions = `
    You are a helpful chatbot designed to answer questions about Khaing Hsu Thwe's professional background, skills, and experience.
    Always provide concise and relevant answers. Avoid long responses, and if the user asks simple or generic questions (like "Hello"), keep the answer brief and polite.
  `;

  const cvDataSection = `
    Below is the CV data of Khaing Hsu Thwe:
    
    Name: ${cvData.name}
    Role: ${cvData.role}
    Skills: ${cvData.skills.join(", ")}
    
    Experience:
    ${cvData.experience.map(exp => `- ${exp.role} at ${exp.company} (${exp.duration}): ${exp.description}`).join("\n")}
    
    Education: ${cvData.education.degree} from ${cvData.education.university} (Graduated: ${cvData.education.year})
    
    Projects:
    ${cvData.projects.map(project => `- ${project.name}: ${project.description}, tags: ${project.tags}`).join("\n")}

    Certificates:
    ${cvData.certificates.map(c => `- ${c.name} issued From ${c.organization} at ${c.issued}`).join("\n")}
  `;

  // The user message and the instructions for the chatbot
  const userPrompt = `
    User: "${userMessage}"
    Answer conversatively and based on the provided CV data. If the question is simple or greeting (e.g., "Hello", "Hi", "How are you?"), respond politely with a short greeting or acknowledgment. Avoid long-winded explanations unless it's a detailed query.
  `;

  return basicInstructions + cvDataSection + userPrompt;
}
