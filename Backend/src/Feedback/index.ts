import {Router} from "express";
import { PrismaClient } from "@prisma/client";

export const feedBackHandler = Router();
const prisma = new PrismaClient();

feedBackHandler.get("/health", (req, res) => {
    return res.status(200).json({
        Message: "Feedback route up and running"
    });
});


feedBackHandler.post("/review", async (req, res) => {
  const { productId, name, review, rating } = req.body;


  if (!productId) return res.status(400).json({ message: "Product ID is required" });
  if (!name) return res.status(400).json({ message: "Name is required" });
  if (!review) return res.status(400).json({ message: "Review text is required" });
  if (!rating || rating < 1 || rating > 5)
    return res.status(400).json({ message: "Rating must be between 1 and 5" });

  try {
    
    const product = await prisma.product.findUnique({
      where: { id: productId },
    });
    if (!product) return res.status(404).json({ message: "Product not found" });

    
    const newReview = await prisma.review.create({
      data: { productId, name, review, rating },
    });

    
    const allReviews = await prisma.review.findMany({
      where: { productId },
      select: { rating: true },
    });

    
    const totalReviews = allReviews.length;
    const totalRating = allReviews.reduce((sum, r) => sum + r.rating, 0);
    const avgRating = totalRating / totalReviews;

    
    await prisma.product.update({
      where: { id: productId },
      data: {
        rating: avgRating,
        reviewsCount: totalReviews,
      },
    });

    
    return res.status(201).json({
      message: "Review added successfully",
      review: newReview,
      updatedRating: avgRating.toFixed(1),
      totalReviews,
    });
  } catch (error) {
    console.error("Error adding review:", error);
    return res.status(500).json({ message: "Something went wrong" });
  }
});

feedBackHandler.get("/review/:productId", async (req, res) => {
  const { productId } = req.params;

  if (!productId) return res.status(400).json({ message: "Product ID is required" });

  try {
    const reviews = await prisma.review.findMany({
      where: { productId },
      orderBy: { createdAt: "desc" },
    });

    if (reviews.length === 0) {
      return res.status(404).json({ message: "No reviews found for this product" });
    }

    return res.status(200).json({
      message: "Reviews fetched successfully",
      count: reviews.length,
      reviews,
    });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return res.status(500).json({ message: "Something went wrong" });
  }
});
