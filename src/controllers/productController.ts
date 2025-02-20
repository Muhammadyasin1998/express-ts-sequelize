// import { Request, Response } from "express";
// import { createProduct, getUserWithProduct } from "../services/productService";

// export const addProduct = async (req: Request, res: Response) => {
//   try {
//     const product = await createProduct(req.body.user.id, req.body.name, req.body.price, req.body.description);
//     res.status(201).json(product);
//   } catch (error) {
//      if (error instanceof Error) {
//       res.status(400).json({ message: error.message });
//     } else {
//       res.status(400).json({ message: "An unexpected error occurred." });
//     }
//   }
// };

// export const getUserProduct = async (req: Request, res: Response) => {
//   try {
//     const product = await getUserWithProduct(parseInt(req.params.userId));
//     res.json(product);
//   } catch (error) {
//   if (error instanceof Error) {
//       res.status(400).json({ message: error.message });
//     } else {
//       res.status(400).json({ message: "An unexpected error occurred." });
//     }
//   }
// };
