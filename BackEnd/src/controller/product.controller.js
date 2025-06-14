import { listProducts } from "../services/product.service.js"


export const ProductController = {
    list: async (_req,res) => {
        try {
            const all = await listProducts()
            res.json(all)
        } catch (error) {
            console.error(`Erro ao Listar Produtos: ${error}`);
            res.status(500).json({error: error.message || "Internal Server Error"})
        }
    }
}
