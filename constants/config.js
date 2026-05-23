 const corsOptions = {
  origin: "https://chatapp-frontend-six-omega.vercel.app",
  // origin: "http://localhost:5173",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
};


const CHATTU_TOKEN = "chattu-token";

export { corsOptions, CHATTU_TOKEN };
