 const corsOptions = {
  origin: "https://chatapp-frontend-six-omega.vercel.app",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
};


const CHATTU_TOKEN = "chattu-token";

export { corsOptions, CHATTU_TOKEN };
