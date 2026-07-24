import prisma from "../prisma";

export const getProducts = async (req: any, res: any) => {
  const products = await prisma.product.findMany();

  res.json({
    message: "Products fetched successfully",
    products
  });
};


export const createProduct = async (req: any, res: any) => {
  const { productName, category, brand, price, quantity, description } = req.body;

  const product = await prisma.product.create({
    data: {
      productName,
      category,
      brand,
      price,
      quantity,
      description
    }
  });

  res.json({
    message: "Product created successfully",
    product
  });
};


export const getProductById = async (req: any, res: any) => {
  const product = await prisma.product.findUnique({
    where: {
      id: Number(req.params.id)
    }
  });

  res.json(product);
};


export const updateProduct = async (req: any, res: any) => {
  const product = await prisma.product.update({
    where: {
      id: Number(req.params.id)
    },
    data: req.body
  });

  res.json({
    message: "Product updated successfully",
    product
  });
};


export const deleteProduct = async (req: any, res: any) => {
  await prisma.product.delete({
    where: {
      id: Number(req.params.id)
    }
  });

  res.json({
    message: "Product deleted successfully"
  });
};