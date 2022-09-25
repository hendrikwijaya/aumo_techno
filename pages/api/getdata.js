export default function handler(req, res) {
   if (req.method === "POST") {
      try {
         res.send({ type: "success" });
      } catch (error) {
         res.send({ err: error.message });
      }
   }
}
