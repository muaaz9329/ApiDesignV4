import prisma from "../../../db";
import { IPrivateRoute } from "../../../types";
import { HandlerFunction } from "../../../types/function";

interface ICreateNewProductBody extends IPrivateRoute {
  name: string;
}

const createNewProductHandler: HandlerFunction<ICreateNewProductBody> = async (
  req,
  res
) => {
  const { name, user } = req.body;
};

const getAllProductsHandler: HandlerFunction<IPrivateRoute> = async (
  req,
  res
) => {
  try {
    const user = req.body.user;
    const allProductsOfUser = await prisma.products.findMany({
      where: {
        belongsToId: user.id,
      },
    });
    if (allProductsOfUser.length === 0) {
      res.status(200);
      res.json({
        message: `no products found of user ${user.userName}`,
      });
    } else {
      res.status(200);
      res.json({
        message: "all products of user",
        products: allProductsOfUser,
        noOfProducts: allProductsOfUser.length,
      });
    }
  } catch (e) {
    res.status(500);
    res.json({ message: "Some Error occured try later" });
    console.error({
      message: "Error In getAllProductsHandler",
      error: e,
      stack: e.stack,
    });
  }
};

export { createNewProductHandler, getAllProductsHandler };
