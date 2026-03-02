export interface ProductRequest {
    name: string;
    value: string;
    description: string;
    banner: string;
    category_id: string;
    user_id: string;
    supplier_id?: string;
    amount: number;
}