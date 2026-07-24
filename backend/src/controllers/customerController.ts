import prisma from "../prisma";

export const getCustomers = async (req: any, res: any) => {
  const customers = await prisma.customer.findMany();

  res.json({
    message: "Customers fetched successfully",
    customers
  });
};


export const createCustomer = async (req: any, res: any) => {
  const { name, email, phone, company } = req.body;

  const customer = await prisma.customer.create({
    data: {
      name,
      email,
      phone,
      company
    }
  });

  res.json({
    message: "Customer created successfully",
    customer
  });
};


export const updateCustomer = async (req: any, res: any) => {
  const customer = await prisma.customer.update({
    where: {
      id: Number(req.params.id)
    },
    data: req.body
  });

  res.json({
    message: "Customer updated successfully",
    customer
  });
};


export const deleteCustomer = async (req: any, res: any) => {
  await prisma.customer.delete({
    where: {
      id: Number(req.params.id)
    }
  });

  res.json({
    message: "Customer deleted successfully"
  });
};